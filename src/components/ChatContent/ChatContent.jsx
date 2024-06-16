import React, { useEffect, useRef, useState } from "react";
import "./ChatContent.css";
import ChatItem from "./ChatItem";
import SendIcon from "@mui/icons-material/Send";
function ChatContent({ conversation, onSendMessage, newChat, loading }) {
  // const BACKEND_URL = "http://localhost:8000/";

  const [query, setquery] = useState("");
  const scrollableDivRef = useRef(null);

  const scrollToBottom = () => {
    if (scrollableDivRef.current) {
      scrollableDivRef.current.scrollTop =
        scrollableDivRef.current.scrollHeight;
    }
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (query === "") return;
    // console.log("Hi");
    if (!conversation) {
      newChat();
    } else {
      console.log(conversation._id);
      onSendMessage(conversation._id, { bool: true, msg: query });
      setquery("");
    }
  };
  const handleChangeQuery = (e) => {
    setquery(e.target.value);
  };
  useEffect(() => {
    scrollToBottom();
  }, [conversation]);

  const handleKeyDown = (event) => {
    if (event.key === "Enter" || event.keyCode === 13) {
      handleSubmit(event);
    }
  };
  console.log(conversation);
  return (
    <div className="main__chatcontent">
      <div className="content__body">
        <div className="chat__items scrollable-div" ref={scrollableDivRef}>
          {conversation &&
            conversation.messages.map((itm, index) => {
              const msg = itm.msg;
              const user = itm.bool ? "" : "other";
              return (
                <ChatItem
                  animationDelay={1}
                  key={index}
                  user={user}
                  msg={msg}
                  // image={itm.image}
                />
              );
            })}
        </div>
        {loading && (
          <div className="loading-animation">
            <div className="dot"></div>
            <div className="dot"></div>
            <div className="dot"></div>
          </div>
        )}
      </div>
      <div className="content__footer">
        <div className="sendNewMessage">
          <input
            type="text"
            placeholder="Type a message here"
            onChange={handleChangeQuery}
            onKeyDown={handleKeyDown}
            value={query}
          />
          <button className="btnSendMsg" id="sendMsgBtn" onClick={handleSubmit}>
            <SendIcon />
          </button>
        </div>
      </div>
    </div>
  );
}

export default ChatContent;
