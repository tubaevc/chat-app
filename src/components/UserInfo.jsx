import React from "react";

const UserInfo = () => {
  return (
    <div className="flex items-center p-5">
      <img
        src="/images/avatar.png"
        className="rounded-3xl w-[50px] height-[50px] object-cover "
      />
      <h2 className="px-2">UserName</h2>
      <div className="icons flex px-5 gap-4">
        <img
          src="/images/more.png "
          className="w-[20px] h-[20px] cursor-pointer"
        />
        <img
          src="/images/video.png"
          className="w-[20px] h-[20px] cursor-pointer"
        />
        <img
          src="/images/edit.png"
          className="w-[20px] h-[20px] cursor-pointer"
        />
      </div>
    </div>
  );
};

export default UserInfo;
