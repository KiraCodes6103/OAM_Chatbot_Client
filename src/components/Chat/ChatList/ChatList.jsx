import React from "react";
import ChatListItems from "./ChatListItems";
import AddIcon from "@mui/icons-material/Add";

function ChatList({
  buttonOnClick,
  conversations,
  onSelectConversation,
  selectedConversation,
}) {
  console.log(conversations);
  return (
    <div className="main__chatlist h-full overflow-hidden bg-white shadow-lg p-4 rounded-md">
      <button
        className="btn flex items-center justify-center bg-gradient-to-r from-blue-600 to-blue-500 font-bold text-white py-2 px-4 rounded-md hover:bg-purple-600 transition-colors w-full mb-4"
        onClick={buttonOnClick}
      >
        <AddIcon />
        <span className="ml-2">New Chat</span>
      </button>

      <div className="chatlist__items overflow-auto">
        {[...conversations].reverse().map((conversation, index) => (
          <ChatListItems
            key={conversation._id}
            onSelectConversation={onSelectConversation}
            conversation={conversation}
            animationDelay={index + 1}
            active={
              selectedConversation &&
              conversation._id === selectedConversation._id
                ? "active"
                : ""
            }
          />
        ))}
      </div>
    </div>
  );
}

export default ChatList;
