import { motion } from "framer-motion";

interface SkillBarProps {
  name: string;
  proficiency?: number | null;
  delay?: number;
}

export function SkillBar({ name, delay = 0 }: SkillBarProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -10 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.3, delay: delay * 0.05 }}
      className="group flex items-center gap-3 py-2"
    >
      <span className="w-2 h-2 rounded-full bg-primary/60 group-hover:bg-primary transition-colors" />
      <span className="font-mono text-sm font-medium text-muted-foreground group-hover:text-primary transition-colors">
        {name}
      </span>
    </motion.div>
  );
}
