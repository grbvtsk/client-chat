import { useNavigate } from "react-router-dom";
import { useUser } from "../context/UserContext";
import { useState } from "react";

export default function Login() {
  const { setNickname } = useUser();
  const [input, setInput] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    setNickname(input.trim() || "Anonymous");
    navigate("/chat");
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-purple-100">
      <h1 className="text-3xl font-bold mb-6 text-purple-900">
        Welcome to Chat
      </h1>
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Enter nickname"
        className="p-2 w-72 border border-purple-400 rounded mb-4"
      />
      <button
        onClick={handleLogin}
        className="bg-purple-700 text-white px-6 py-2 rounded hover:bg-purple-800"
      >
        Enter Chat
      </button>
    </div>
  );
}
