import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ZoomIn, X, Palette, Wrench } from "lucide-react";
import { Dialog, DialogContent, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";

import comicArt from "@assets/Comic_-_Aryan_Bhatnagar_1769383707760.png";
import surrealistScene from "@assets/Surrealist_Scenes_-_Aryan_Bhatnagar_copy_1769383707760.jpg";
import minimalistIcons from "@assets/Minimalist_Final,_Aryan_Bhatnagar_1769383707761.png";
import songCollage from "@assets/Song_Collage_-_Aryan_Bhatnagar_copy_1769383707761.jpg";
import magazineCover from "@assets/Magazine_Cover_-_Aryan_Bhatnagar_copy_1769383707761.jpg";
import logoVariations from "@assets/Logo_Variations_-_Aryan_Bhatnagar_1769383707762.png";
import adDesign from "@assets/Ad_Design_-_Aryan_Bhatnagar_copy_1769383707762.jpg";

// ==========================================
// DESIGN PROJECTS DATA - Edit this array easily!
// ==========================================
const designProjects = [
  {
    id: "comic",
    title: "Comic Art",
    image: comicArt,
    concept: "A dynamic illustration inspired by popular anime aesthetics, capturing the essence of a determined protagonist. The piece explores bold color blocking and dramatic posing to convey strength and resolve.",
    technicalProcess: [
      {
        phase: "Line Art & Outline",
        steps: [
          "Vector-traced the character outline using Pen Tool",
          "Created clean linework in Adobe Illustrator",
          "Established proportions and pose dynamics"
        ]
      },
      {
        phase: "Color Application",
        steps: [
          "Applied flat color fills with curated palette",
          "Used clipping masks for shadow layers",
          "Added highlight layers for depth"
        ]
      },
      {
        phase: "Finishing Touches",
        steps: [
          "Exported at 300 DPI for print quality",
          "Color grading adjustments in Photoshop",
          "Final polish and contrast enhancement"
        ]
      }
    ]
  },
  {
    id: "surrealist",
    title: "Surrealist Scene",
    image: surrealistScene,
    concept: "A surrealist composition blending retro automotive aesthetics with sci-fi elements. The piece explores themes of adventure and the unknown, featuring a classic muscle car facing a portal in a desolate landscape.",
    technicalProcess: [
      {
        phase: "Image Sourcing",
        steps: [
          "Curated 8+ stock images for composition",
          "Selected car, landscape, and portal elements",
          "Ensured lighting consistency across sources"
        ]
      },
      {
        phase: "Compositing",
        steps: [
          "Used layer masks for seamless blending",
          "Applied perspective warp to align car with horizon",
          "Created portal effect with radial blur and glow"
        ]
      },
      {
        phase: "Atmospheric Effects",
        steps: [
          "Added gradient maps for cohesive color grading",
          "Applied atmospheric haze with soft brushes",
          "Enhanced lighting with glow overlays"
        ]
      }
    ]
  },
  {
    id: "minimalist",
    title: "Minimalist Icons",
    image: minimalistIcons,
    concept: "A series of minimalist superhero icons reducing complex characters to their most essential visual elements. Each icon uses geometric shapes and a muted color palette to create instantly recognizable symbols.",
    technicalProcess: [
      {
        phase: "Geometric Design",
        steps: [
          "Created all shapes using basic geometry",
          "Used circles, rectangles, and paths",
          "Maintained consistent proportions"
        ]
      },
      {
        phase: "Style Consistency",
        steps: [
          "Applied consistent stroke weights across icons",
          "Limited palette to 6 colors for cohesion",
          "Added rounded corners for friendly aesthetic"
        ]
      },
      {
        phase: "Export & Optimization",
        steps: [
          "Exported as SVG for perfect scalability",
          "Optimized vector paths for file size",
          "Tested at various display sizes"
        ]
      }
    ]
  },
  {
    id: "song-collage",
    title: "Song Collage",
    image: songCollage,
    concept: "A dramatic photo manipulation interpreting music lyrics through visual metaphor. The fiery composition uses silhouettes and typography to evoke feelings of passion, rebellion, and aspiration.",
    technicalProcess: [
      {
        phase: "Fire Effects",
        steps: [
          "Blended multiple fire and smoke stocks",
          "Used Screen and Overlay blend modes",
          "Controlled intensity with opacity adjustments"
        ]
      },
      {
        phase: "Silhouette Integration",
        steps: [
          "Created silhouettes using threshold adjustments",
          "Positioned figures for dramatic composition",
          "Added dreamcatcher with careful masking"
        ]
      },
      {
        phase: "Typography",
        steps: [
          "Set lyrics in custom script fonts",
          "Integrated text with visual elements",
          "Balanced readability with artistic style"
        ]
      }
    ]
  },
  {
    id: "magazine",
    title: "Magazine Cover",
    image: magazineCover,
    concept: "A futuristic magazine cover exploring themes of AI rights and consciousness. The dystopian aesthetic combines industrial imagery with thought-provoking headlines about artificial intelligence.",
    technicalProcess: [
      {
        phase: "Image Compositing",
        steps: [
          "Composited robot model with prison overlays",
          "Applied metallic color grading with gradients",
          "Created industrial dystopian atmosphere"
        ]
      },
      {
        phase: "Text Effects",
        steps: [
          "Applied dripping text effect with custom brushes",
          "Established typography hierarchy",
          "Used varying weights for visual interest"
        ]
      },
      {
        phase: "Editorial Finishing",
        steps: [
          "Added grain texture for print feel",
          "Applied final color corrections",
          "Balanced visual elements with text"
        ]
      }
    ]
  },
  {
    id: "logo",
    title: "Logo Variations",
    image: logoVariations,
    concept: "A comprehensive logo design exploration for 'Newton' brand, showcasing the iterative design process from initial sketches to refined variations. The designs reference Newton's cradle and geometric forms.",
    technicalProcess: [
      {
        phase: "Concept Development",
        steps: [
          "Started with hand sketches scanned at 600 DPI",
          "Explored multiple conceptual directions",
          "Selected strongest concepts for vectorization"
        ]
      },
      {
        phase: "Vectorization",
        steps: [
          "Vectorized concepts in Adobe Illustrator",
          "Created modular components for flexibility",
          "Refined curves and proportions"
        ]
      },
      {
        phase: "Variation Testing",
        steps: [
          "Developed monochrome and color variations",
          "Tested legibility at various scales",
          "Validated from favicon to billboard sizes"
        ]
      }
    ]
  },
  {
    id: "ad",
    title: "Ad Design",
    image: adDesign,
    concept: "A striking advertisement exploring transhumanism themes. The cyberpunk aesthetic combines organic and mechanical elements to create a visually arresting promotional piece for a fictional product.",
    technicalProcess: [
      {
        phase: "Photo Manipulation",
        steps: [
          "Composited anatomical and mechanical elements",
          "Used frequency separation for skin retouching",
          "Blended organic and synthetic textures"
        ]
      },
      {
        phase: "Effects & Lighting",
        steps: [
          "Applied custom lightning brush strokes",
          "Created cyberpunk glow effects",
          "Enhanced depth with shadow work"
        ]
      },
      {
        phase: "Color & Typography",
        steps: [
          "Applied split-toning (teal/magenta)",
          "Integrated typography with blend modes",
          "Final color grading for cohesive look"
        ]
      }
    ]
  }
];

export function DesignShowcase() {
  const [activeTab, setActiveTab] = useState(designProjects[0].id);
  const [zoomOpen, setZoomOpen] = useState(false);

  const activeProject = designProjects.find(p => p.id === activeTab) || designProjects[0];

  return (
    <section id="design-showcase" className="py-24 bg-[#121212]">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-12"
        >
          <span className="font-mono text-primary text-sm tracking-widest uppercase mb-2 block">
            Adobe Creative Suite
          </span>
          <h2 className="font-display font-bold text-4xl mb-4">Design Showcase</h2>
          <p className="text-muted-foreground">
            A curated selection of my Illustrator and Photoshop work, showcasing both concept and technical execution.
          </p>
        </motion.div>

        {/* Tabbed Navigation with Thumbnails */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-7 gap-3 mb-12"
        >
          {designProjects.map((project) => (
            <button
              key={project.id}
              onClick={() => setActiveTab(project.id)}
              data-testid={`tab-${project.id}`}
              className={`group relative rounded-xl overflow-hidden transition-all ${
                activeTab === project.id
                  ? "ring-2 ring-[#BB86FC] shadow-[0_0_20px_rgba(187,134,252,0.4)]"
                  : "ring-1 ring-white/10 hover:ring-[#BB86FC]/50"
              }`}
            >
              {/* Thumbnail Image */}
              <div className="aspect-square overflow-hidden">
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
              {/* Title Overlay */}
              <div className={`absolute inset-0 flex items-end ${
                activeTab === project.id
                  ? "bg-gradient-to-t from-[#BB86FC]/90 to-transparent"
                  : "bg-gradient-to-t from-black/80 to-transparent"
              }`}>
                <span className={`w-full px-2 py-1.5 text-[10px] font-mono font-medium text-center truncate ${
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
            {/* Left Side - Image */}
            <div className="relative group">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden bg-secondary/20 border border-white/10">
                <img
                  src={activeProject.image}
                  alt={activeProject.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  data-testid={`image-${activeProject.id}`}
                />
              </div>
              
              {/* Zoom Button */}
              <button
                onClick={() => setZoomOpen(true)}
                data-testid="button-zoom"
                className="absolute top-4 right-4 p-3 bg-black/60 backdrop-blur-sm rounded-full border border-white/20 text-white opacity-0 group-hover:opacity-100 transition-all hover:bg-[#BB86FC] hover:border-[#BB86FC] hover:text-black"
              >
                <ZoomIn className="w-5 h-5" />
              </button>

              {/* Decorative glow */}
              <div className="absolute -inset-1 bg-gradient-to-r from-[#BB86FC]/20 to-purple-900/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity -z-10" />
            </div>

            {/* Right Side - Details */}
            <div className="bg-secondary/10 border border-white/5 rounded-2xl p-6 lg:p-8">
              <h3 className="font-display font-bold text-2xl mb-6 text-white flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-[#BB86FC]" />
                {activeProject.title}
              </h3>

              <ScrollArea className="h-[400px] pr-4">
                {/* The Concept */}
                <div className="mb-8">
                  <div className="flex items-center gap-2 mb-3">
                    <Palette className="w-4 h-4 text-[#BB86FC]" />
                    <h4 className="font-display font-semibold text-lg text-white">The Concept</h4>
                  </div>
                  <p className="text-muted-foreground leading-relaxed" data-testid={`concept-${activeProject.id}`}>
                    {activeProject.concept}
                  </p>
                </div>

                {/* Technical Process - Visual Timeline */}
                <div>
                  <div className="flex items-center gap-2 mb-4">
                    <Wrench className="w-4 h-4 text-[#BB86FC]" />
                    <h4 className="font-display font-semibold text-lg text-white">Technical Process</h4>
                  </div>
                  <div className="space-y-4" data-testid={`process-${activeProject.id}`}>
                    {activeProject.technicalProcess.map((phase, phaseIndex) => (
                      <motion.div
                        key={phase.phase}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: phaseIndex * 0.1 }}
                        className="relative"
                      >
                        {/* Phase Header */}
                        <div className="flex items-center gap-3 mb-3">
                          <div className="w-8 h-8 rounded-lg bg-[#BB86FC] flex items-center justify-center text-black font-bold text-sm flex-shrink-0">
                            {phaseIndex + 1}
                          </div>
                          <h5 className="font-mono font-semibold text-[#BB86FC] text-sm">{phase.phase}</h5>
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
                </div>
              </ScrollArea>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Zoom Modal */}
        <Dialog open={zoomOpen} onOpenChange={setZoomOpen}>
          <DialogContent className="max-w-[90vw] max-h-[90vh] p-0 bg-black/95 border-white/10 overflow-hidden">
            <DialogTitle className="sr-only">{activeProject.title} - Full View</DialogTitle>
            <DialogDescription className="sr-only">
              Full resolution view of {activeProject.title}
            </DialogDescription>
            <button
              onClick={() => setZoomOpen(false)}
              data-testid="button-close-zoom"
              className="absolute top-4 right-4 z-50 p-2 bg-black/60 backdrop-blur-sm rounded-full border border-white/20 text-white hover:bg-[#BB86FC] hover:border-[#BB86FC] hover:text-black transition-all"
            >
              <X className="w-5 h-5" />
            </button>
            <img
              src={activeProject.image}
              alt={activeProject.title}
              className="w-full h-full object-contain max-h-[85vh]"
              data-testid="zoomed-image"
            />
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
}
