"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { toast } from "sonner"; // Assuming you have sonner installed

export default function Login() {
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (password === "admin2026") {
      // Set expiration for 2 hours from now
      const duration = 2 * 60 * 60 * 1000;
      const expiresAt = new Date().getTime() + duration;
      
      const authData = {
        signedIn: true,
        expiresAt: expiresAt
      };
      
      localStorage.setItem("auth", JSON.stringify(authData));
      
      toast.success("Login successful!");
      router.push("/admin");
    } else {
      toast.error("Incorrect password!");
    }
  };

  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center bg-[#0a0a0a] p-4">
      <h1 className="text-white text-4xl md:text-5xl font-bold mb-10 tracking-tight">
        Welcome Back
      </h1>

      <div className="w-full max-w-sm p-6 bg-[#121212] border border-gray-800 rounded-xl shadow-lg">
        <form onSubmit={handleLogin} className="flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <label className="text-xs font-semibold uppercase tracking-wider text-gray-500">
              Password
            </label>
            <input 
              type="password" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-3 bg-[#1a1a1a] border border-gray-700 rounded-lg text-white focus:outline-none focus:ring-1 focus:ring-[#e21c61] transition-all"
              placeholder="••••••••"
            />
          </div>
          
          <button 
            type="submit" 
            className="w-full bg-[#e21c61] hover:bg-[#d61a5a] text-white font-medium py-3 rounded-lg transition-all active:scale-[0.98]"
          >
            Enter Dashboard
          </button>
        </form>
      </div>
    </div>
  );
}