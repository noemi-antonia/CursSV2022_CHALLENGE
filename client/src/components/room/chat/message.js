const Message = ({ message, sender }) => {
  return <p style={{ padding: 5 }}>{sender}: {message}</p>;
};

Message.defaultProps = { 
  sender: "Guest"
};

export default Message;
