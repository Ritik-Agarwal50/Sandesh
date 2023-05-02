import { HuddleIframe } from "@huddle01/huddle01-iframe";
import React from "react";

export default function Video() {
  const iframeConfig = {
    roomUrl: "https://iframe.huddle01.com/123",
    height: "100%",
    width: "100%",
    noBorder: false, // false by default
  };
  return <HuddleIframe config={iframeConfig} />;
}
