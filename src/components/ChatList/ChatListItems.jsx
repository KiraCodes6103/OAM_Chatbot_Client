import React from "react";
import "./ChatList.css";
function ChatListItems({
  onSelectConversation,
  animationDelay,
  active,
  conversation,
}) {
  // const selectChat = (e) => {
  //   // console.log(`Hellllllllo => ${e.currentTarget.classList}`);
  //   for (
  //     let index = 0;
  //     index < e.currentTarget.parentNode.children.length;
  //     index++
  //   ) {
  //     e.currentTarget.parentNode.children[index].classList.remove("active");
  //   }
  //   e.currentTarget.classList.add("active");
  //   // console.log(props.allLogs[props.index]);
  //   if(props.ind!==-1) props.setAllLogs(props.allLogs.map((item, i) => (i === props.ind ? props.chatlog : item)));
  //   props.setchatlog(props.allLogs[props.index]);
  //   props.setInd(props.index);
  //   console.log(props.ind);
  //   // props.setAllLogs((prevLogs) =>
  //   //   prevLogs.map((item, i) => (i === props.ind ? props.chatlog : item))
  //   // );

  //   // // Then set the chatlog based on the updated allLogs array
  //   // props.setchatlog((prevLogs) => props.allLogs[props.index]);

  //   // // Finally, update the index
  //   // props.setInd(props.index);

  //   // // Log the updated index
  //   // console.log(props.ind);
  // };
  const trimString = (str) => {
    if (str.length > 12) {
        return str.substring(0, 10) + '...';
    } else {
        return str;
    }
}
  return (
    <div
      style={{ animationDelay: `0.${animationDelay}s` }}
      onClick={() => onSelectConversation(conversation._id)}
      className={`chatlist__item ${active} `}
    >
      {/* <Avatar
        image={props.image ? props.image : "http://placehold.it/80x80"}
        isOnline={props.isOnline}
      /> */}

      <div className="userMeta">
        <p>{trimString(conversation.name)}</p>
      </div>
    </div>
  );
}

export default ChatListItems;
