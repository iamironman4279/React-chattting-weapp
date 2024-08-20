import React from "react";
import { auth } from "../firebase"; // Ensure you import the auth from your firebase configuration

function ChatMessage({ message }) {
  const { text, uid, photoURL } = message;

  return (
    <div className={`message ${uid === auth.currentUser.uid ? 'sent' : 'received'}`}>
      <img src={photoURL || 'https://i.pravatar.cc/300'} alt="User Avatar" />
      <p>{text}</p>
    </div>
  );
}

export default ChatMessage;
