import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Lock, Unlock, Construction, Sparkles } from "lucide-react";

// Import the full portfolio component
import FullPortfolio from "./Home.backup";

const CORRECT_PASSWORD = "helloshutup";

export default function Home() {
  const [password, setPassword] = useState("");
  const [isUnlocked, setIsUnlocked] = useState(false);
  const [error, setError] = useState(false);
  const [shake, setShake] = useState(false);

  // Check if already unlocked in session
  useEffect(() => {
    const unlocked = sessionStorage.getItem("portfolio_unlocked");
    if (unlocked === "true") {
      setIsUnlocked(true);
    }
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === CORRECT_PASSWORD) {
      setIsUnlocked(true);
      sessionStorage.setItem("portfolio_unlocked", "true");
      setError(false);
    } else {
      setError(true);
      setShake(true);
      setTimeout(() => setShake(false), 500);
    }
  };

  // If unlocked, show the full portfolio
  if (isUnlocked) {
    return <FullPortfolio />;
  }

  // Show the "under construction" landing page with password
  return (
    <div className="min-h-screen bg-[#121212] text-white flex items-center justify-center relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#BB86FC]/20 rounded-full blur-[128px]" />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-[#BB86FC]/10 rounded-full blur-[96px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#BB86FC]/5 rounded-full blur-[200px]" />
      </div>

      {/* Animated grid lines */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(to right, #BB86FC 1px, transparent 1px),
            linear-gradient(to bottom, #BB86FC 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px'
        }} />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 text-center px-6 max-w-lg"
      >
        {/* Construction Icon */}
        <motion.div
          animate={{ rotate: [0, 10, -10, 0] }}
          transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
          className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-[#BB86FC]/10 border border-[#BB86FC]/30 mb-8"
        >
          <Construction className="w-12 h-12 text-[#BB86FC]" />
        </motion.div>

        {/* Main Text */}
        <h1 className="font-bold text-4xl md:text-5xl mb-4 leading-tight">
          <span className="text-[#BB86FC]">Portfolio</span> Under Construction
        </h1>
        
        <p className="text-gray-400 text-lg mb-2">
          Something amazing is being built here.
        </p>
        
        <div className="flex items-center justify-center gap-2 text-[#BB86FC]/70 text-sm font-mono mb-8">
          <Sparkles className="w-4 h-4" />
          <span>Coming Soon</span>
          <Sparkles className="w-4 h-4" />
        </div>

        {/* Password Form */}
        <motion.div
          animate={shake ? { x: [-10, 10, -10, 10, 0] } : {}}
          transition={{ duration: 0.4 }}
          className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 mb-6"
        >
          <div className="flex items-center gap-2 mb-4 text-gray-400">
            <Lock className="w-4 h-4" />
            <span className="text-sm font-mono">Private Preview Access</span>
          </div>
          
          <form onSubmit={handleSubmit} className="space-y-4">
            <Input
              type="password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
                setError(false);
              }}
              placeholder="Enter password"
              className={`bg-black/30 border-white/10 focus:border-[#BB86FC] focus:ring-1 focus:ring-[#BB86FC]/50 text-center font-mono ${
                error ? 'border-red-500' : ''
              }`}
              data-testid="input-password"
            />
            
            {error && (
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-red-400 text-sm"
              >
                Incorrect password. Try again.
              </motion.p>
            )}
            
            <Button
              type="submit"
              className="w-full bg-[#BB86FC] hover:bg-[#BB86FC]/90 text-black font-bold rounded-xl"
              data-testid="button-unlock"
            >
              <Unlock className="w-4 h-4 mr-2" />
              Unlock Preview
            </Button>
          </form>
        </motion.div>

        {/* Footer note */}
        <p className="text-gray-500 text-xs font-mono">
          Mechanical Engineer | Product Designer | Maker
        </p>
      </motion.div>

      {/* Decorative corner elements */}
      <div className="absolute top-8 left-8 w-20 h-20 border-l-2 border-t-2 border-[#BB86FC]/20 rounded-tl-3xl" />
      <div className="absolute bottom-8 right-8 w-20 h-20 border-r-2 border-b-2 border-[#BB86FC]/20 rounded-br-3xl" />
    </div>
  );
}
