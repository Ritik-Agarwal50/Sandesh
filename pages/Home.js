import File from "../components/file";
import Chat from "../components/chat";
import Video from "../components/video";
import Sidebar from "../components/sidebar";
import { HuddleIframe } from "@huddle01/huddle01-iframe";
import "../components/imgs/app-logo.png";

import React, { useState } from "react";

export default function Home() {
  const [selectedOption, setSelectedOption] = useState("chat");

  function MainContent() {
    switch (selectedOption) {
      case "chat":
        return <Chat />;
      case "call":
        return <Video />;
      case "file":
        return <File />;
      default:
        return null;
    }
  }

  return (
    <>
      <div class="flex">
        <aside class="w-50 fixed left-0 top-0 h-screen bg-gray-100">
          <div>
            <img
              class="h-24 pl-5 pr-2"
              src={require("../components/imgs/app-logo.png")}
              alt="app logo"
            />
          </div>
          <div>
            <button
              className="chat"
              onClick={() => setSelectedOption("chat")}
              class="bg-gray-50 text-lg text-slate-900 pl-14 pr-12 py-4 hover:bg-indigo-300 hover:text-white animation duration-500 flex gap-6 items-center"
            >
              <div>Chat</div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-6 h-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M8.625 9.75a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375m-13.5 3.01c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.184-4.183a1.14 1.14 0 01.778-.332 48.294 48.294 0 005.83-.498c1.585-.233 2.708-1.626 2.708-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z"
                />
              </svg>
            </button>
          </div>
          <div>
            <button
              className="call"
              onClick={() => setSelectedOption("call")}
              class="bg-gray-50 text-lg text-slate-900 pl-14 pr-14 py-4 hover:bg-indigo-300 hover:text-white animation duration-500 flex gap-6 items-center"
            >
              <div>Call</div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-6 h-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                />
              </svg>
            </button>
          </div>
          <div>
            <button
              className="call"
              onClick={() => setSelectedOption("file")}
              class="bg-gray-50 text-lg text-slate-900 pl-14 pr-14 py-4 hover:bg-indigo-300 hover:text-white animation duration-500 flex gap-6 items-center"
            >
              <div>File</div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-6 h-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M7.217 10.907a2.25 2.25 0 100 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186l9.566-5.314m-9.566 7.5l9.566 5.314m0 0a2.25 2.25 0 103.935 2.186 2.25 2.25 0 00-3.935-2.186zm0-12.814a2.25 2.25 0 103.933-2.185 2.25 2.25 0 00-3.933 2.185z"
                />
              </svg>
            </button>
          </div>
        </aside>
        <main class="flex-1 ml-20">
          <div class="h-screen w-screen">
            <MainContent />
          </div>
        </main>
      </div>
    </>
  );
}
