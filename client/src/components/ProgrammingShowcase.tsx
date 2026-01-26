import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ZoomIn, X, Code, Clock, Users, Terminal } from "lucide-react";
import { Dialog, DialogContent, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";

const programmingProjects = [
  {
    id: "2048-game",
    title: "2048 Game",
    image: "https://images.unsplash.com/photo-1611996575749-79a3a250f948?auto=format&fit=crop&q=80&w=800",
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
    image: "https://images.unsplash.com/photo-1593941707882-a5bba14938c7?auto=format&fit=crop&q=80&w=800",
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

export function ProgrammingShowcase() {
  const [activeTab, setActiveTab] = useState(programmingProjects[0].id);
  const [zoomOpen, setZoomOpen] = useState(false);

  const activeProject = programmingProjects.find(p => p.id === activeTab) || programmingProjects[0];

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
            Software development projects showcasing game development, machine learning, and algorithmic problem-solving.
          </p>
        </motion.div>

        {/* Tabbed Navigation with Thumbnails */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex justify-center gap-4 mb-12"
        >
          {programmingProjects.map((project) => (
            <button
              key={project.id}
              onClick={() => setActiveTab(project.id)}
              data-testid={`prog-tab-${project.id}`}
              className={`group relative rounded-xl overflow-hidden transition-all w-40 ${
                activeTab === project.id
                  ? "ring-2 ring-[#BB86FC] shadow-[0_0_20px_rgba(187,134,252,0.4)]"
                  : "ring-1 ring-white/10 hover:ring-[#BB86FC]/50"
              }`}
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className={`w-full h-full object-cover transition-all duration-300 ${
                    activeTab === project.id
                      ? "scale-105"
                      : "group-hover:scale-105 opacity-70 group-hover:opacity-100"
                  }`}
                />
              </div>
              <div className={`absolute inset-0 flex items-end ${
                activeTab === project.id
                  ? "bg-gradient-to-t from-[#BB86FC]/90 to-transparent"
                  : "bg-gradient-to-t from-black/80 to-transparent"
              }`}>
                <span className={`w-full px-3 py-2 text-xs font-mono font-medium text-center truncate ${
                  activeTab === project.id ? "text-black" : "text-white"
                }`}>
                  {project.title}
                </span>
              </div>
            </button>
          ))}
        </motion.div>

        {/* Split-Screen Layout */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeProject.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="grid lg:grid-cols-2 gap-8 items-start"
          >
            {/* Left Side - Image & Meta */}
            <div className="space-y-6">
              <div className="relative group">
                <div className="aspect-[4/3] rounded-2xl overflow-hidden bg-secondary/20 border border-white/10">
                  <img
                    src={activeProject.image}
                    alt={activeProject.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    data-testid={`prog-image-${activeProject.id}`}
                  />
                </div>
                <button
                  onClick={() => setZoomOpen(true)}
                  data-testid={`prog-zoom-${activeProject.id}`}
                  className="absolute bottom-4 right-4 p-3 bg-black/60 backdrop-blur-sm rounded-full border border-white/20 opacity-0 group-hover:opacity-100 transition-opacity"
                >
                  <ZoomIn className="w-5 h-5 text-white" />
                </button>
              </div>

              {/* Project Meta */}
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-secondary/30 rounded-xl p-4 border border-white/5">
                  <Clock className="w-5 h-5 text-[#BB86FC] mb-2" />
                  <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">Duration</p>
                  <p className="font-mono text-sm" data-testid={`prog-duration-${activeProject.id}`}>{activeProject.duration}</p>
                </div>
                <div className="bg-secondary/30 rounded-xl p-4 border border-white/5">
                  <Users className="w-5 h-5 text-[#BB86FC] mb-2" />
                  <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">Team</p>
                  <p className="font-mono text-sm" data-testid={`prog-team-${activeProject.id}`}>{activeProject.team}</p>
                </div>
              </div>

              {/* Technologies */}
              <div className="bg-secondary/30 rounded-xl p-4 border border-white/5">
                <Terminal className="w-5 h-5 text-[#BB86FC] mb-3" />
                <p className="text-xs text-muted-foreground uppercase tracking-wider mb-3">Technologies</p>
                <div className="flex flex-wrap gap-2">
                  {activeProject.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-xs font-mono bg-[#BB86FC]/10 text-[#BB86FC] rounded-full border border-[#BB86FC]/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Side - Content */}
            <div className="space-y-6">
              <div>
                <h3 className="font-display font-bold text-2xl mb-3" data-testid={`prog-title-${activeProject.id}`}>
                  {activeProject.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed" data-testid={`prog-overview-${activeProject.id}`}>
                  {activeProject.overview}
                </p>
              </div>

              {/* Build Process - Visual Timeline */}
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <Code className="w-5 h-5 text-[#BB86FC]" />
                  <h4 className="font-display font-semibold text-lg">Development Process</h4>
                </div>
                <ScrollArea className="h-[350px] pr-4" data-testid={`prog-process-${activeProject.id}`}>
                  <div className="space-y-4">
                    {activeProject.buildProcess.map((phase, phaseIndex) => (
                      <motion.div
                        key={phase.phase}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: phaseIndex * 0.1 }}
                        className="relative"
                      >
                        {/* Phase Header */}
                        <div className="flex items-center gap-3 mb-3">
                          <div className="w-8 h-8 rounded-lg bg-[#BB86FC] flex items-center justify-center text-black font-bold text-sm">
                            {phaseIndex + 1}
                          </div>
                          <h5 className="font-mono font-semibold text-[#BB86FC]">{phase.phase}</h5>
                        </div>
                        {/* Phase Steps */}
                        <div className="ml-4 pl-7 border-l-2 border-[#BB86FC]/30 space-y-2 pb-4">
                          {phase.steps.map((step, stepIndex) => (
                            <motion.div
                              key={stepIndex}
                              initial={{ opacity: 0 }}
                              animate={{ opacity: 1 }}
                              transition={{ delay: phaseIndex * 0.1 + stepIndex * 0.05 }}
                              className="flex items-start gap-2"
                            >
                              <div className="w-1.5 h-1.5 rounded-full bg-[#BB86FC]/60 mt-2 flex-shrink-0" />
                              <span className="text-sm text-muted-foreground">{step}</span>
                            </motion.div>
                          ))}
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </ScrollArea>
              </div>

              {/* Skills */}
              <div>
                <p className="text-xs text-muted-foreground uppercase tracking-wider mb-3">Skills Applied</p>
                <div className="flex flex-wrap gap-2">
                  {activeProject.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1.5 text-xs font-mono bg-white/5 text-white/80 rounded-lg border border-white/10"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Zoom Dialog */}
        <Dialog open={zoomOpen} onOpenChange={setZoomOpen}>
          <DialogContent className="max-w-4xl bg-[#1a1a1a] border-white/10 p-2">
            <DialogTitle className="sr-only">{activeProject.title} - Full View</DialogTitle>
            <DialogDescription className="sr-only">Full size view of the project image</DialogDescription>
            <button
              onClick={() => setZoomOpen(false)}
              className="absolute top-4 right-4 z-10 p-2 bg-black/60 backdrop-blur-sm rounded-full"
              data-testid="prog-zoom-close"
            >
              <X className="w-5 h-5 text-white" />
            </button>
            <img
              src={activeProject.image}
              alt={activeProject.title}
              className="w-full h-auto rounded-lg"
            />
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
}
