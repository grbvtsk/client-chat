import { useNavigate } from "react-router-dom";
import { useUser } from "../context/UserContext";
import { useState } from "react";

export default function Login() {
  const { setNickname } = useUser();
  const [input, setInput] = useState<string>("");
  const [showInput, setShowInput] = useState<boolean>(false);
  const navigate = useNavigate();

  const generateAnonName = (): string => {
    const id = Math.random().toString(36).substring(2, 6);
    return `Anonymous#${id}`;
  };

  const handleNicknameLogin = () => {
    if (!input.trim()) return;
    setNickname(input.trim());
    navigate("/chat");
  };

  const handleAnonymousLogin = () => {
    const anon = generateAnonName();
    setNickname(anon);
    navigate("/chat");
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-purple-100 px-4">
      <h1 className="text-3xl font-bold mb-6 text-purple-900">
        Welcome to Chat
      </h1>

      {showInput ? (
        <>
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Enter your nickname"
            className="p-2 w-72 border border-purple-400 rounded mb-4"
          />
          <button
            onClick={handleNicknameLogin}
            className="bg-purple-700 text-white px-6 py-2 rounded hover:bg-purple-800 mb-2"
          >
            Continue
          </button>
          <button
            onClick={() => setShowInput(false)}
            className="text-sm text-purple-600 underline hover:text-purple-800"
          >
            ← Back
          </button>
        </>
      ) : (
        <>
          <button
            onClick={() => setShowInput(true)}
            className="bg-purple-600 text-white px-6 py-2 rounded mb-3 hover:bg-purple-700 w-72"
          >
            Log in with nickname
          </button>
          <button
            onClick={handleAnonymousLogin}
            className="bg-black text-white px-6 py-2 rounded hover:bg-gray-900 w-72"
          >
            Continue as Anonymous
          </button>
        </>
      )}
    </div>
  );
}
