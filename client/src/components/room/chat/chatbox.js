import { useEffect, useState } from "react";
import Message from "./message";

const ChatBox = ({ socket, playerNames }) => {
  const [messages, setMessages] = useState([]);

  const addMessage = (message, sender) => {
    const msg = {};
    msg.text=message;
    msg.sender= playerNames.get(sender);
    setMessages((messages) => {
      return [...messages, msg];
    });
  };

  useEffect(() => {
    socket.on("received-message", (message,sender) => {
      addMessage(message, sender);
    });
  }, []);

  return (
    <div className="chat-card">
      {messages.map((message, index) => (
        <Message key={`message-${index}`} sender={message.sender} message={message.text} />
      ))}
    </div>
  );
};

export default ChatBox;
