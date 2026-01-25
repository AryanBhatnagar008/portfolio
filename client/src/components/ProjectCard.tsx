import { Project } from "@shared/schema";
import { motion } from "framer-motion";
import { ArrowUpRight, Code, Box, Cuboid, Monitor, PenTool } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";

const categoryIcons: Record<string, React.ReactNode> = {
  "3D CAD": <Box className="w-4 h-4" />,
  "Coding": <Code className="w-4 h-4" />,
  "Woodworking": <Cuboid className="w-4 h-4" />,
  "3D Printing": <Box className="w-4 h-4" />,
  "Design": <PenTool className="w-4 h-4" />,
  "Software": <Monitor className="w-4 h-4" />,
};

export function ProjectCard({ project }: { project: Project }) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <motion.div
          layout
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9 }}
          whileHover={{ y: -10 }}
          className="group cursor-pointer relative rounded-xl overflow-hidden bg-secondary/30 border border-white/5 hover:border-primary/50 transition-all duration-300 h-full flex flex-col"
        >
          {/* Image Container */}
          <div className="relative aspect-video overflow-hidden">
            <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity z-10" />
            <img
              src={project.imageUrl}
              alt={project.title}
              className="object-cover w-full h-full transform group-hover:scale-110 transition-transform duration-700"
            />
            <div className="absolute top-4 right-4 z-20 bg-background/80 backdrop-blur-sm p-2 rounded-full opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-300">
              <ArrowUpRight className="w-4 h-4 text-primary" />
            </div>
            
            {/* Category Badge */}
            <div className="absolute top-4 left-4 z-20">
              <span className="flex items-center gap-2 px-3 py-1 rounded-full bg-black/60 backdrop-blur-md text-xs font-mono font-medium text-white border border-white/10">
                {categoryIcons[project.category]} {project.category}
              </span>
            </div>
          </div>

          {/* Content */}
          <div className="p-6 flex flex-col flex-grow">
            <h3 className="font-display font-bold text-xl mb-2 text-foreground group-hover:text-primary transition-colors">
              {project.title}
            </h3>
            <p className="text-muted-foreground text-sm line-clamp-2 mb-4 flex-grow">
              {project.description}
            </p>
            <div className="flex flex-wrap gap-2 mt-auto">
              {project.technologies?.slice(0, 3).map((tech) => (
                <span key={tech} className="text-[10px] uppercase tracking-wider font-mono text-primary/80 bg-primary/10 px-2 py-1 rounded">
                  {tech}
                </span>
              ))}
              {project.technologies && project.technologies.length > 3 && (
                <span className="text-[10px] uppercase tracking-wider font-mono text-muted-foreground px-2 py-1">
                  +{project.technologies.length - 3}
                </span>
              )}
            </div>
          </div>
        </motion.div>
      </DialogTrigger>

      <DialogContent className="max-w-3xl bg-[#0F0F11] border-white/10 text-foreground">
        <DialogHeader>
          <div className="flex items-center justify-between mb-2">
            <Badge variant="outline" className="text-primary border-primary/30 bg-primary/5 font-mono">
              {project.category}
            </Badge>
            {project.link && (
               <a 
                 href={project.link} 
                 target="_blank" 
                 rel="noopener noreferrer"
                 className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
               >
                 Visit Project <ArrowUpRight className="w-4 h-4" />
               </a>
            )}
          </div>
          <DialogTitle className="text-3xl font-display font-bold text-foreground">{project.title}</DialogTitle>
          <DialogDescription className="text-lg text-muted-foreground mt-2">
            {project.description}
          </DialogDescription>
        </DialogHeader>

        <div className="mt-6 space-y-6">
          <div className="aspect-video w-full rounded-lg overflow-hidden border border-white/10">
            <img 
              src={project.imageUrl} 
              alt={project.title} 
              className="w-full h-full object-cover"
            />
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="md:col-span-2 space-y-4">
              <h4 className="font-bold text-lg text-white border-l-2 border-primary pl-3">Project Details</h4>
              <p className="text-muted-foreground leading-relaxed whitespace-pre-wrap">
                {project.details || "No detailed description available for this project."}
              </p>
            </div>
            
            <div className="space-y-4">
              <h4 className="font-bold text-lg text-white border-l-2 border-primary pl-3">Technologies</h4>
              <div className="flex flex-wrap gap-2">
                {project.technologies?.map((tech) => (
                  <Badge key={tech} variant="secondary" className="bg-secondary text-secondary-foreground hover:bg-secondary/80">
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
