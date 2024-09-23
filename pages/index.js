import React from "react";
import dynamic from "next/dynamic";
const MessageList = dynamic(import("./message-list"), { ssr: false });

export default function Home() {
  return <MessageList />;
}
