export default function MessageBubble({
  content,
  nickname,
  isOwn,
}: {
  content: string;
  nickname: string;
  isOwn: boolean;
}) {
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
