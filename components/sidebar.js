import React from "react";
import { Link } from 'react-router-dom';
export default function Sidebar(){

  return (
    <div className="fixed top-0 left-0 h-full w-32 bg-gray-100 shadow-lg z-10">
      <ul>
        <li>
          <Link to="/share-files" className="block p-4 hover:bg-gray-200 transition duration-300">Share Files</Link>
        </li>
        <li>
          <Link to="/call" className="block p-4 hover:bg-gray-200 transition duration-300">Call</Link>
        </li>
        <li>
          <Link to="/chat" className="block p-4 hover:bg-gray-200 transition duration-300">Chat</Link>
        </li>
      </ul>
    </div>
  );
};
