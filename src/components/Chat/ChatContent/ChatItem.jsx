import React from "react";
import "./ChatContent.css";

function ChatItem({ msg, user, animationDelay }) {
  return (
    <div style={{ animationDelay: `0.${animationDelay}s` }} className={`chat__item ${user}`}>
      <div className="chat__item__content">
        <div className="chat__msg">{msg}</div>
      </div>
    </div>
  );
}

export default ChatItem;
