import React from "react";
import "./ChatList.css";
function ChatListItems({
  onSelectConversation,
  animationDelay,
  active,
  conversation,
}) {
  const trimString = (str) => {
    if (str.length > 12) {
      return str.substring(0, 10) + "...";
    } else {
      return str;
    }
  };
  // console.log(conversation.name);
  const itemClasses = `chatlist__item flex items-center p-4 mb-2 rounded-md cursor-pointer transition-transform transform scale-0 ${
    active ? "bg-blue-500 text-white" : "bg-gray-100 hover:bg-gray-200"
  }`;
  return (
    <div
      style={{ animationDelay: `0.${animationDelay}s` }}
      onClick={() => onSelectConversation(conversation._id)}
      className={itemClasses}
    >
      <div className="userMeta">
        <p>{trimString(conversation.name)}</p>
      </div>
    </div>
  );
}

export default ChatListItems;
