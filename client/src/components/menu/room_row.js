const RoomRow = (props) => {
  const joinRoom = () => {
    props.socket.emit("join-room", props.name, props.userName);
  };

  return (
    <>
      <div className="border mt20 d-flex p10 mill-row">
        <div className="room-info">
          <p>{props.name}</p>
          <h5>Created by {props.createdBy}</h5>
        </div>
        <button onClick={joinRoom}>Join</button>
      </div>
    </>
  );
};

RoomRow.defaultProps = {
  createdBy: 'Guest'
};

export default RoomRow;
