import CreateRoomBtn from "./create_room_btn";
import RoomRow from "./room_row";
import { useState } from "react";

const Menu = ({ socket, rooms}) => {
  const [userName, setUsername] = useState("");
  const [submittedUserName, setSubmittedUsername] = useState("");

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const submitName = () => {
    setSubmittedUsername(userName);
    setUsername("");
  }

  return (
    <div className="menu">
      <div className="card mt15 p20">
        <h4>Welcome</h4>
      { submittedUserName ? <h3>{submittedUserName}</h3> :
      <>
      <div className="d-flex mt20">
        <div className="text-input-container">
          <input
          value={userName}
          className="text-input"
          type="text"
          placeholder="Enter your name here"
          onChange={handleUsernameChange}
          ></input>
        </div>
        <button onClick={submitName}>Submit</button>
        </div>
        <p>Or play as a Guest</p>
      </>}
      <div className="card mt20 p15">
        <div className="container">
          <h4>Available Rooms</h4>
          {rooms.map((room) => (
            <RoomRow key={room.name} socket={socket} name={room.name} createdBy={room.createdBy} userName={submittedUserName}/>
          ))}
          <CreateRoomBtn socket={socket} userName={submittedUserName} />
        </div>
      </div>
    </div>
    </div>
  );
};

export default Menu;
