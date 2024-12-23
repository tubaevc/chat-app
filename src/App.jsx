import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import ChatList from "./components/ChatList";
import Chat from "./components/Chat";
import UserInfo from "./components/UserInfo";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="flex items-center justify-center h-screen bg-[#4b5945]">
        <div className="container flex flex-1 bg-[#b2c9ad] w-[90vw] h-[90vh]">
          <div className="flex-[1_1_0]">
            <ChatList />
          </div>
          <div className="flex-[2_1_0] ">
            <Chat />
          </div>
          <div className="flex-[1_1_0]">Detail</div>
        </div>
      </div>
    </>
  );
}

export default App;
