import ChatBox from "./chatbox";
import MessageForm from "./message_form";
// import Notification from "../notification";

const Chat = ({ socket, playerNames }) => {
  return (
    <div className="chat-container">
      {/* <Notification socket={socket} /> */}
      <ChatBox playerNames={playerNames} socket={socket} />
      <MessageForm socket={socket} />
    </div>
  );
};

export default Chat;
