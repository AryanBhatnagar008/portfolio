import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface SkillBarProps {
  name: string;
  proficiency?: number | null;
  delay?: number;
}

export function SkillBar({ name, proficiency = 0, delay = 0 }: SkillBarProps) {
  return (
    <div className="group">
      <div className="flex justify-between mb-2">
        <span className="font-mono text-sm font-medium text-muted-foreground group-hover:text-primary transition-colors">
          {name}
        </span>
        <span className="font-mono text-xs text-muted-foreground/50">
          {proficiency}%
        </span>
      </div>
      <div className="h-2 w-full bg-secondary rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${proficiency}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: delay * 0.1, ease: "easeOut" }}
          className={cn(
            "h-full rounded-full relative",
            "bg-gradient-to-r from-primary/80 to-accent/80",
            "group-hover:from-primary group-hover:to-accent transition-all duration-300"
          )}
        >
          <div className="absolute inset-0 bg-white/20 animate-[shimmer_2s_infinite]" />
        </motion.div>
      </div>
    </div>
  );
}
