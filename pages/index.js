import React, { useState } from "react";
import "../components/imgs/chat.png";
import Home from "../pages/Home";

export default function App() {
  const [showHomeScreen, setShowHomeScreen] = useState(false);
  const handleClick = () => {
    setShowHomeScreen(true);
  };

  return (
    <div>
      {showHomeScreen ? (
        <Home />
      ) : (
        <div>
          <div class="bg-gray-50 min-h-screen flex items-center justify-center px-16">
            <div class="relative w-full max-w-lg">
              <div class="absolute top-0 -left-4 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
              <div class="absolute top-0 -right-4 w-72 h-72 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
              <div class="absolute -bottom-8 left-20 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
              <div class="m-8 relative space-y-4">
                <div class="pb-7 grid place-items-center bg-white bg-opacity-40 backdrop-blur rounded-lg">
                  <div class="-mt-8">
                    <img
                      src={require("../components/imgs/chat.png")}
                      class="scale-50"
                      alt="chat-icon"
                    ></img>
                  </div>
                  <div class="-mt-10">
                    <h1 class="mb-4 text-3xl font-bold leading-none tracking-tight text-gray-900 lg:text-4xl">
                      Sandesh
                    </h1>
                  </div>
                  <div class="mb-4">
                    <p class="text-md text-center">
                      Share your world without sacrificing your privacy.
                    </p>
                  </div>
                  <div class="mt-2">
                    <button
                      onClick={handleClick}
                      class="bg-indigo-400 text-white rounded-lg py-2 px-4 hover:bg-indigo-700 transition duration-500"
                    >
                      Chat Now
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <button onClick={handleClick}>Enter</button>
        </div>
      )}
    </div>
  );
}
