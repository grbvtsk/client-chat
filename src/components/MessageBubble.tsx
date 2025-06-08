interface MessageBubbleProps {
  content: string;
  nickname: string;
  isOwn: boolean;
}

export default function MessageBubble({
  content,
  nickname,
  isOwn,
}: MessageBubbleProps) {
  return (
    <div className={`flex ${isOwn ? "justify-end" : "justify-start"} mb-2`}>
      <div
        className={`max-w-xs p-3 rounded-xl shadow text-sm ${
          isOwn ? "bg-purple-700 text-white" : "bg-white text-black"
        }`}
      >
        <strong className="block text-xs mb-1">{nickname}</strong>
        <span>{content}</span>
      </div>
    </div>
  );
}
