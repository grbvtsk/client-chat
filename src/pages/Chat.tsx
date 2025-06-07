import { useEffect, useRef, useState } from "react";
import { useUser } from "../context/UserContext";
import MessageBubble from "../components/MessageBubble";

interface Message {
  id: number;
  nickname: string;
  content: string;
  createdAt: string;
}

export default function Chat() {
  const { nickname } = useUser();
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const bottomRef = useRef<HTMLDivElement>(null);

  const fetchMessages = async () => {
    const res = await fetch("http://localhost:3000/messages");
    const data = await res.json();
    setMessages(data);
  };

  const scrollToBottom = () => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const sendMessage = async () => {
    if (!input.trim()) return;

    await fetch("http://localhost:3000/messages", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ nickname, content: input }),
    });

    setInput("");
    await fetchMessages();
    setTimeout(() => {
      scrollToBottom();
    }, 0);
  };

  useEffect(() => {
    fetchMessages();
    const interval = setInterval(fetchMessages, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="h-screen flex flex-col bg-purple-50">
      <div className="bg-purple-800 text-white p-4 text-xl font-semibold">
        Chatting as <strong>{nickname}</strong>
      </div>
      <div className="flex-1 overflow-y-auto p-4">
        {messages.map((msg) => (
          <MessageBubble
            key={msg.id}
            content={msg.content}
            nickname={msg.nickname}
            isOwn={msg.nickname === nickname}
          />
        ))}
        <div ref={bottomRef} />
      </div>
      <div className="flex p-4 border-t bg-white">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type your message"
          className="flex-1 border border-purple-300 p-2 rounded-l"
        />
        <button
          onClick={sendMessage}
          className="bg-purple-700 text-white px-4 rounded-r hover:bg-purple-800"
        >
          Send
        </button>
      </div>
    </div>
  );
}
