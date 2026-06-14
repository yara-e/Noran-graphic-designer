export default function LoadingSpinner() {
  return (
    <div className="flex justify-center items-center  gap-2 bg-black min-h-screen">
      <div className="w-3 h-3 bg-[#e21c61] rounded-full animate-bounce [animation-delay:-0.3s]"></div>
      <div className="w-3 h-3 bg-[#e21c61] rounded-full animate-bounce [animation-delay:-0.15s]"></div>
      <div className="w-3 h-3 bg-[#e21c61] rounded-full animate-bounce"></div>
    </div>
  );
}