import React, { useState, useEffect, useRef } from "react";
import ChatList from "../ChatList/ChatList";
import ChatContent from "../ChatContent/ChatContent";
import axios from "axios";
import "./ChatBody.css";

function ChatBody() {
  const [conversations, setConversations] = useState([]);
  const [selectedConversation, setSelectedConversation] = useState(null);
  const [loading, setLoading] = useState(false);
  const [chatListWidth, setChatListWidth] = useState(250);
  const dividerRef = useRef(null);

  const handleMouseDown = (e) => {
    e.preventDefault();
    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", handleMouseUp);
  };

  const handleMouseMove = (e) => {
    e.preventDefault();
    setChatListWidth(e.clientX);
  };

  const handleMouseUp = (e) => {
    e.preventDefault();
    document.removeEventListener("mousemove", handleMouseMove);
    document.removeEventListener("mouseup", handleMouseUp);
  };

  useEffect(() => {
    // Fetch all conversations on mount
    axios
      .get("http://localhost:4000/conversation/Bearer")
      .then((response) => {
        setConversations(response.data);
        // console.log(conversations);
      })
      .catch((error) => console.error("Error fetching conversations:", error));
    console.log("useEffect");
  }, []);

  const handleSelectConversation = (conversationId) => {
    axios
      .get(`http://localhost:4000/conversation/Bearer/${conversationId}`)
      .then((response) => {
        setSelectedConversation(response.data);
      })
      .catch((error) => console.error("Error fetching conversation:", error));
  };

  const handleNewChat = () => {
    axios
      .post("http://localhost:4000/conversation/Bearer")
      .then((response) => {
        setConversations([...conversations, response.data]);
        setSelectedConversation(response.data);
      })
      .catch((error) =>
        console.error("Error creating new conversation:", error)
      );
  };

  const handleSendMessage = async (conversationId, message) => {
    setLoading(true);
    console.log(conversationId);
    console.log(message);
    try {
      const response = await axios.post(
        `http://localhost:4000/conversation/Bearer/${conversationId}/message`,
        message
      );
      setSelectedConversation(response.data);
      setConversations(
        conversations.map((conv) =>
          conv._id === response.data._id ? response.data : conv
        )
      );
      const ai_response = await axios.post(`http://localhost:4000/`, response);
      console.log(ai_response);
      const response2 = await axios.post(
        `http://localhost:4000/conversation/Bearer/${conversationId}/message`,
        ai_response.data
      );
      setSelectedConversation(response2.data);
      setConversations(
        conversations.map((conv) =>
          conv._id === response2.data._id ? response2.data : conv
        )
      );
    } catch (error) {
      console.error("Error sending message:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-grow bg-white h-full w-full overflow-y-hidden">
      <div className="h-full overflow-auto overflow-x-hidden scrollbar-hide" style={{ width: chatListWidth }}>
        <ChatList
          buttonOnClick={handleNewChat}
          conversations={conversations}
          onSelectConversation={handleSelectConversation}
          selectedConversation={selectedConversation}
        />
      </div>
      <div
        ref={dividerRef}
        className="w-1 cursor-col-resize bg-transparent"
        onMouseDown={handleMouseDown}
      />
      <div className="flex-1 h-full overflow-auto scrollbar-hide">
        <ChatContent
          conversation={selectedConversation}
          onSendMessage={handleSendMessage}
          newChat={handleNewChat}
          loading={loading}
        />
      </div>
    </div>
  );
}

export default ChatBody;
