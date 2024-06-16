import React from "react";
import ChatListItems from "./ChatListItems";
import "./ChatList.css";
import AddIcon from "@mui/icons-material/Add";
// import AddCircleIcon from '@mui/icons-material/AddCircle';
function ChatList({
  buttonOnClick,
  conversations,
  onSelectConversation,
  selectedConversation,
}) {
  // console.log(conversations);
  return (
    <div className="main__chatlist">
      <button className="btn" onClick={buttonOnClick}>
        <AddIcon />
        <span>New Chat</span>
      </button>

      <div className="chatlist__items scrollable-div">
        {[...conversations].reverse().map((conversation, index) => {
          console.log(conversation._id);
          return (
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
          );
        })}
      </div>
    </div>
  );
}

export default ChatList;
