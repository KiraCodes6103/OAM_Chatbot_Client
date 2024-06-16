import React from "react";
import "./ChatContent.css";

function ChatItem({ msg, user, animationDelay }) {
  return (
    <div style={{ animationDelay: `0.${animationDelay}s` }} className={`chat__item ${user}`}>
      <div className="chat__item__content">
        <div className="chat__msg">{msg}</div>
        {/* <div className="chat__meta">
          <span>16 mins ago</span>
          <span>Seen 1.03PM</span>
        </div> */}
      </div>
      {/* <Avatar isOnline="active" image={props.image} /> */}
    </div>
  );
}

export default ChatItem;
