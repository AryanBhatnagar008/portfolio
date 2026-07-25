import { Link as ScrollLink } from "react-scroll";
import { useState, useEffect } from "react";
import { Menu, X, Hexagon } from "lucide-react";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks: { name: string; to: string; tab?: string }[] = [
    { name: "About", to: "about" },
    { name: "Experience", to: "experience" },
    { name: "Skills", to: "skills" },
    { name: "Engineering", to: "projects", tab: "engineering" },
    { name: "Programming", to: "projects", tab: "programming" },
    { name: "Design", to: "projects", tab: "design" },
  ];

  const openTab = (tab?: string) => {
    if (tab) window.dispatchEvent(new CustomEvent("projects:tab", { detail: tab }));
  };

  return (
    <nav
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300 border-b border-transparent",
        scrolled ? "bg-background/85 backdrop-blur-md border-border py-4" : "bg-transparent py-6"
      )}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        <ScrollLink
          to="home"
          smooth={true}
          duration={500}
          className="cursor-pointer group flex items-center gap-2"
        >
          <div className="relative">
            <Hexagon className="w-8 h-8 text-primary fill-primary/10 transition-transform group-hover:rotate-90 duration-500" strokeWidth={1.5} />
            <span className="absolute inset-0 flex items-center justify-center font-mono font-bold text-xs text-primary">
              AB
            </span>
          </div>
          <span className="font-display font-bold text-lg tracking-wide hidden sm:block">
            ARYAN<span className="text-primary"> BHATNAGAR</span>
          </span>
        </ScrollLink>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-6">
          {navLinks.map((link) => (
            <ScrollLink
              key={link.name}
              to={link.to}
              smooth={true}
              duration={500}
              offset={-100}
              onClick={() => openTab(link.tab)}
              className="text-xs font-medium text-muted-foreground hover:text-primary cursor-pointer transition-colors font-mono tracking-[0.15em] uppercase"
            >
              {link.name}
            </ScrollLink>
          ))}
          <a
            href="mailto:aryanbhatnagar008@gmail.com"
            className="px-5 py-2 rounded-sm bg-primary/10 border border-primary/50 text-primary font-mono text-xs font-semibold tracking-[0.15em] uppercase hover:bg-primary hover:text-primary-foreground transition-colors cursor-pointer"
          >
            Contact
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          className="lg:hidden text-foreground p-2"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-background border-b border-white/10 overflow-hidden"
          >
            <div className="flex flex-col p-4 space-y-4">
              {navLinks.map((link) => (
                <ScrollLink
                  key={link.name}
                  to={link.to}
                  smooth={true}
                  duration={500}
                  onClick={() => { openTab(link.tab); setIsOpen(false); }}
                  className="text-lg font-medium text-foreground/80 hover:text-primary py-2 border-l-2 border-transparent hover:border-primary pl-4 transition-all"
                >
                  {link.name}
                </ScrollLink>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
