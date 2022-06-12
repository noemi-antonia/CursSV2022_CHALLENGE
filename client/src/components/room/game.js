import Board from "./board";
import Chat from "./chat/chat";
import Player from "./player";

const Game = (props) => {
  const opponentKey = Object.keys(props.players).find(
    (key) => key !== props.socket.id
  );

  const opponentPlayer = () => {
    return props.players[opponentKey];
  };

  const currentPlayer = () => {
    return props.players[props.socket.id];
  };

  const playerNames = new Map();
  playerNames.set(props.socket.id, currentPlayer().name);
  playerNames.set(opponentKey, opponentPlayer().name);

  return (
    <div className="grid">
      <Board
        socket={props.socket}
        action={currentPlayer().action}
        nodes={props.nodes}
      />
      <div>
        {/* I send here the other player's ID as a prop, 
        because if someone's time is up, the opponent is the winner */}
        <Player
          otherPlayerId={props.socket.id}
          socket={props.socket}
          opponent={true}
          {...opponentPlayer()}
        />
        <Chat playerNames={playerNames} socket={props.socket} />
        <Player
          otherPlayerId={opponentKey}
          socket={props.socket}
          {...currentPlayer()}
        />
      </div>
    </div>
  );
};

export default Game;
