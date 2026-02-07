import { useState } from "react";
import { motion } from "framer-motion";
import { X, Code, Clock, Users, Terminal, Lightbulb, ChevronLeft, ChevronRight, ZoomIn } from "lucide-react";
import { Dialog, DialogContent, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";
import { getAssetUrl } from "@/lib/assets";

const programmingProjects = [
  {
    id: "2048-game",
    title: "2048 Game",
    images: ["https://images.unsplash.com/photo-1611996575749-79a3a250f948?auto=format&fit=crop&q=80&w=800"],
    duration: "2 Weeks",
    team: "Solo Project",
    overview: "A fully functional recreation of the popular 2048 sliding puzzle game, built from scratch using Python and Pygame. Features smooth tile animations, score tracking, win/lose detection, and keyboard controls for an authentic gaming experience.",
    buildProcess: [
      {
        phase: "Game Architecture",
        steps: [
          "Set up Python project with Pygame library",
          "Designed 4x4 grid data structure using 2D arrays",
          "Created game state management system",
          "Implemented tile value storage and tracking"
        ]
      },
      {
        phase: "Core Mechanics",
        steps: [
          "Programmed tile sliding logic for all 4 directions",
          "Implemented tile merging algorithm (same values combine)",
          "Added random tile spawning (2 or 4) after each move",
          "Created collision detection for valid moves"
        ]
      },
      {
        phase: "Visual Design",
        steps: [
          "Designed color scheme matching original 2048 aesthetic",
          "Created smooth sliding animations using Pygame",
          "Implemented dynamic tile colors based on value",
          "Added score display and game over screen"
        ]
      },
      {
        phase: "Polish & Testing",
        steps: [
          "Added keyboard input handling (WASD/Arrow keys)",
          "Implemented win condition (reaching 2048 tile)",
          "Created game over detection (no valid moves)",
          "Tested edge cases and refined gameplay feel"
        ]
      }
    ],
    technologies: ["Python", "Pygame", "Game Logic", "2D Arrays"],
    skills: ["Game Development", "Algorithm Design", "UI/UX", "Event Handling"]
  },
  {
    id: "eco-car",
    title: "Eco-Car Finder",
    images: ["https://images.unsplash.com/photo-1593941707882-a5bba14938c7?auto=format&fit=crop&q=80&w=800"],
    duration: "Research Project",
    team: "Solo Project",
    overview: "A machine learning application that helps users find the most eco-friendly car matching their criteria. Uses Random Forest and MLP classifiers to analyze CO2 emissions data from 7,385 vehicles, achieving up to 58% prediction accuracy on a complex multi-variable dataset.",
    buildProcess: [
      {
        phase: "Data Acquisition",
        steps: [
          "Sourced comprehensive vehicle dataset from Kaggle",
          "Dataset includes 7,385 vehicles with 12 attributes",
          "Key metrics: Engine Size, Cylinders, Fuel Consumption, CO2 Emissions",
          "Analyzed data structure using df.shape command"
        ]
      },
      {
        phase: "Data Preprocessing",
        steps: [
          "Converted categorical data (Make, Model) to numerical values",
          "Used LabelEncoder for alphanumeric-to-numeric conversion",
          "Merged Make and Model columns to optimize processing",
          "Identified classification problem due to unique vehicle data"
        ]
      },
      {
        phase: "Model Development",
        steps: [
          "Split data into X-train (20%) and Y-train (80%) sets",
          "Implemented Random Forest Classifier for decision trees",
          "Implemented MLP Classifier for neural network approach",
          "Used sklearn library for model implementation"
        ]
      },
      {
        phase: "Testing & Results",
        steps: [
          "Random Forest achieved ~37% prediction accuracy",
          "MLP Classifier achieved ~58% prediction accuracy",
          "MLP outperformed due to faster multi-layer processing",
          "Identified dataset size as limiting factor for accuracy"
        ]
      }
    ],
    technologies: ["Python", "scikit-learn", "Pandas", "Machine Learning"],
    skills: ["Data Science", "ML Classifiers", "Data Preprocessing", "Statistical Analysis"]
  }
];

function ImageCarousel({ images, title, onImageClick }: { images: string[], title: string, onImageClick?: (index: number) => void }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const goToNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const handleDotClick = (e: React.MouseEvent, idx: number) => {
    e.stopPropagation();
    setCurrentIndex(idx);
  };

  return (
    <div 
      className="relative w-full h-full bg-black/40 rounded-xl overflow-hidden group cursor-pointer"
      onClick={() => onImageClick?.(currentIndex)}
    >
      <img
        src={images[currentIndex]}
        alt={`${title} - Image ${currentIndex + 1}`}
        className="w-full h-full object-cover"
        data-testid="prog-carousel-image"
      />
      
      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
        <div className="bg-black/60 backdrop-blur-sm px-3 py-1.5 rounded-full text-xs text-white/80 flex items-center gap-1.5">
          <ZoomIn className="w-3 h-3" />
          Click to enlarge
        </div>
      </div>
      
      {images.length > 1 && (
        <>
          <button
            onClick={goToPrev}
            data-testid="prog-carousel-prev"
            className="absolute left-2 top-1/2 -translate-y-1/2 p-2 bg-black/60 backdrop-blur-sm rounded-full border border-white/20 text-white hover:bg-[#BB86FC] hover:border-[#BB86FC] hover:text-black opacity-0 group-hover:opacity-100"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={goToNext}
            data-testid="prog-carousel-next"
            className="absolute right-2 top-1/2 -translate-y-1/2 p-2 bg-black/60 backdrop-blur-sm rounded-full border border-white/20 text-white hover:bg-[#BB86FC] hover:border-[#BB86FC] hover:text-black opacity-0 group-hover:opacity-100"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
          <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1.5">
            {images.map((_, idx) => (
              <button
                key={idx}
                onClick={(e) => handleDotClick(e, idx)}
                className={`w-2 h-2 rounded-full ${
                  idx === currentIndex ? "bg-[#BB86FC] w-4" : "bg-white/40 hover:bg-white/60"
                }`}
                data-testid={`prog-carousel-dot-${idx}`}
              />
            ))}
          </div>
        </>
      )}
      
      {images.length > 1 && (
        <div className="absolute top-2 right-2 px-2 py-1 bg-black/60 backdrop-blur-sm rounded-full text-xs text-white/80 font-mono">
          {currentIndex + 1} / {images.length}
        </div>
      )}
    </div>
  );
}

export function ProgrammingShowcase() {
  const [selectedProject, setSelectedProject] = useState<typeof programmingProjects[0] | null>(null);
  const [zoomImageIndex, setZoomImageIndex] = useState<number | null>(null);

  return (
    <section id="programming-showcase" className="py-24 bg-[#121212]">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-12"
        >
          <span className="font-mono text-primary text-sm tracking-widest uppercase mb-2 block">
            Code & Algorithms
          </span>
          <h2 className="font-display font-bold text-4xl mb-4">Programming Projects</h2>
          <p className="text-muted-foreground">
            Software development projects showcasing game development, machine learning, and algorithmic problem-solving. Click any project to view details.
          </p>
        </motion.div>

        {/* Project Grid */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-3xl mx-auto"
        >
          {programmingProjects.map((project, idx) => (
            <motion.button
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              onClick={() => setSelectedProject(project)}
              data-testid={`prog-tab-${project.id}`}
              className="group relative rounded-2xl overflow-hidden border border-white/10 bg-secondary/20 hover:border-[#BB86FC]/50 transition-all hover:shadow-[0_0_30px_rgba(187,134,252,0.3)] text-left"
            >
              {/* Image */}
              <div className="aspect-video overflow-hidden">
                <img
                  src={project.images[0]}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#121212] via-[#121212]/40 to-transparent" />
              </div>
              
              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-5">
                <h3 className="font-display font-bold text-xl text-white mb-1">{project.title}</h3>
                <p className="text-sm text-muted-foreground line-clamp-2">{project.overview}</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {project.technologies.slice(0, 3).map((tech) => (
                    <span key={tech} className="px-2 py-1 text-xs font-mono bg-[#BB86FC]/20 text-[#BB86FC] rounded-full">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.button>
          ))}
        </motion.div>

        {/* Project Modal */}
        <Dialog open={!!selectedProject && zoomImageIndex === null} onOpenChange={(open) => !open && setSelectedProject(null)}>
          <DialogContent hideCloseButton className="max-w-4xl max-h-[90vh] p-0 bg-[#1a1a1a] border-white/10 overflow-hidden">
            <DialogTitle className="sr-only">{selectedProject?.title}</DialogTitle>
            <DialogDescription className="sr-only">Project details for {selectedProject?.title}</DialogDescription>
            
            {selectedProject && (
              <div className="flex flex-col h-full max-h-[90vh]">
                {/* Header with Carousel and Title */}
                <div className="flex flex-shrink-0 border-b border-white/10">
                  {/* Image Carousel - Top Left Quarter */}
                  <div className="w-1/3 h-56 p-4 flex-shrink-0">
                    <ImageCarousel 
                      images={selectedProject.images} 
                      title={selectedProject.title}
                      onImageClick={(idx) => setZoomImageIndex(idx)}
                    />
                  </div>
                  
                  {/* Title and Meta */}
                  <div className="flex-1 p-6 flex flex-col justify-between">
                    <div className="flex items-start justify-between">
                      <div>
                        <span className="font-mono text-xs text-[#BB86FC] uppercase tracking-wider">Programming Project</span>
                        <h3 className="font-display font-bold text-3xl text-white mt-1">{selectedProject.title}</h3>
                      </div>
                      <button
                        onClick={() => setSelectedProject(null)}
                        data-testid="prog-modal-close"
                        className="p-2 bg-secondary/50 rounded-full border border-white/10 text-white hover:bg-[#BB86FC] hover:border-[#BB86FC] hover:text-black transition-all"
                      >
                        <X className="w-5 h-5" />
                      </button>
                    </div>
                    <div className="flex gap-4 mt-4">
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Clock className="w-4 h-4 text-[#BB86FC]" />
                        <span>{selectedProject.duration}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Users className="w-4 h-4 text-[#BB86FC]" />
                        <span>{selectedProject.team}</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <ScrollArea className="flex-1 p-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    {/* Left Column */}
                    <div className="space-y-6">
                      {/* Overview */}
                      <div>
                        <div className="flex items-center gap-2 mb-3">
                          <Lightbulb className="w-4 h-4 text-[#BB86FC]" />
                          <h4 className="font-display font-semibold text-white">Overview</h4>
                        </div>
                        <p className="text-muted-foreground text-sm leading-relaxed" data-testid={`prog-overview-${selectedProject.id}`}>
                          {selectedProject.overview}
                        </p>
                      </div>

                      {/* Technologies */}
                      <div className="bg-secondary/30 rounded-xl p-4 border border-white/5">
                        <Terminal className="w-5 h-5 text-[#BB86FC] mb-3" />
                        <p className="text-xs text-muted-foreground uppercase mb-3">Technologies</p>
                        <div className="flex flex-wrap gap-2">
                          {selectedProject.technologies.map((tech) => (
                            <span key={tech} className="px-3 py-1 text-xs font-mono bg-[#BB86FC]/10 text-[#BB86FC] rounded-full border border-[#BB86FC]/20">
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Skills */}
                      <div>
                        <p className="text-xs text-muted-foreground uppercase mb-3">Skills Applied</p>
                        <div className="flex flex-wrap gap-2">
                          {selectedProject.skills.map((skill) => (
                            <span key={skill} className="px-3 py-1.5 text-xs font-mono bg-white/5 text-white/80 rounded-lg border border-white/10">
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Right Column - Build Process */}
                    <div>
                      <div className="flex items-center gap-2 mb-4">
                        <Code className="w-5 h-5 text-[#BB86FC]" />
                        <h4 className="font-display font-semibold text-white">Development Process</h4>
                      </div>
                      <div className="space-y-4" data-testid={`prog-process-${selectedProject.id}`}>
                        {selectedProject.buildProcess.map((phase, phaseIndex) => (
                          <div key={phase.phase} className="relative">
                            <div className="flex items-center gap-3 mb-3">
                              <div className="w-8 h-8 rounded-lg bg-[#BB86FC] flex items-center justify-center text-black font-bold text-sm flex-shrink-0">
                                {phaseIndex + 1}
                              </div>
                              <h5 className="font-mono font-semibold text-[#BB86FC] text-sm">{phase.phase}</h5>
                            </div>
                            <div className="ml-4 pl-7 border-l-2 border-[#BB86FC]/30 space-y-2 pb-4">
                              {phase.steps.map((step, stepIndex) => (
                                <div key={stepIndex} className="flex items-start gap-2">
                                  <div className="w-1.5 h-1.5 rounded-full bg-[#BB86FC]/60 mt-2 flex-shrink-0" />
                                  <span className="text-sm text-muted-foreground">{step}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </ScrollArea>
              </div>
            )}
          </DialogContent>
        </Dialog>

        {/* Zoom Modal */}
        <Dialog open={zoomImageIndex !== null} onOpenChange={(open) => !open && setZoomImageIndex(null)}>
          <DialogContent hideCloseButton className="max-w-[90vw] max-h-[90vh] p-0 bg-black/95 border-white/10 overflow-hidden">
            <DialogTitle className="sr-only">{selectedProject?.title} - Full View</DialogTitle>
            <DialogDescription className="sr-only">Full resolution view</DialogDescription>
            <button
              onClick={() => setZoomImageIndex(null)}
              data-testid="button-close-prog-zoom"
              className="absolute top-4 right-4 z-50 p-2 bg-black/60 backdrop-blur-sm rounded-full border border-white/20 text-white hover:bg-[#BB86FC] hover:border-[#BB86FC] hover:text-black transition-all"
            >
              <X className="w-5 h-5" />
            </button>
            {selectedProject && zoomImageIndex !== null && (
              <img
                src={selectedProject.images[zoomImageIndex]}
                alt={`${selectedProject.title} - Image ${zoomImageIndex + 1}`}
                className="w-full h-full object-contain max-h-[85vh]"
                data-testid="prog-zoomed-image"
              />
            )}
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
}
