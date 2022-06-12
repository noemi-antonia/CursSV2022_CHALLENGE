import { useEffect, useState, useRef } from "react";

const Timer = (props) => {
    const [seconds, setSeconds] = useState(60);
    const secondsRef = useRef(seconds);
    secondsRef.current = seconds;

    useEffect(() => {
    const interval = setInterval(() => {
      if (secondsRef.current == 0) {  
        clearInterval(interval);
        props.socket.emit("time-is-up", (props.otherPlayerId));
      } else {
        setSeconds((prevSeconds) => prevSeconds - 1);
      }
      }, 1000);
  
      return () => clearInterval(interval);
    }, []);

  return (
    <div>
      <p>Time Remaining: {seconds}</p>
    </div>
  );
};

export default Timer;
