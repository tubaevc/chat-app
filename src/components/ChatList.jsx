import React from "react";
import UserInfo from "./UserInfo";

const ChatList = () => {
  return (
    <div>
      <UserInfo />
      <div className="serach-bar flex items-center gap-3 rounded-xl p-5 bg-[#66785F]">
        <img src="/images/search.png" className="w-[20px] h-[20px]" />
        <input
          type="text"
          placeholder="Search"
          className="bg-transparent rounded-lg"
        />
        <img src="/images/plus.png" className="w-[20px] h-[20px]" />
      </div>
    </div>
  );
};

export default ChatList;
