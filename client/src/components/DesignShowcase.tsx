import { useState } from "react";
import { motion } from "framer-motion";
import { ZoomIn, X, Palette, Wrench, ChevronLeft, ChevronRight } from "lucide-react";
import { Dialog, DialogContent, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";

import comicArt from "@assets/Comic_-_Aryan_Bhatnagar_1769383707760.png";
import surrealistScene from "@assets/Surrealist_Scenes_-_Aryan_Bhatnagar_copy_1769383707760.jpg";
import minimalistIcons from "@assets/Minimalist_Final,_Aryan_Bhatnagar_1769383707761.png";
import songCollage from "@assets/Song_Collage_-_Aryan_Bhatnagar_copy_1769383707761.jpg";
import magazineCover from "@assets/Magazine_Cover_-_Aryan_Bhatnagar_copy_1769383707761.jpg";
import logoVariations from "@assets/Logo_Variations_-_Aryan_Bhatnagar_1769383707762.png";
import adDesign from "@assets/Ad_Design_-_Aryan_Bhatnagar_copy_1769383707762.jpg";

const designProjects = [
  {
    id: "comic",
    title: "Comic Art",
    images: [comicArt],
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
    images: [surrealistScene],
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
    images: [minimalistIcons],
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
    images: [songCollage],
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
    images: [magazineCover],
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
    images: [logoVariations],
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
    images: [adDesign],
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
        data-testid="carousel-image"
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
            data-testid="carousel-prev"
            className="absolute left-2 top-1/2 -translate-y-1/2 p-2 bg-black/60 backdrop-blur-sm rounded-full border border-white/20 text-white hover:bg-[#BB86FC] hover:border-[#BB86FC] hover:text-black opacity-0 group-hover:opacity-100"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={goToNext}
            data-testid="carousel-next"
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
                data-testid={`carousel-dot-${idx}`}
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

export function DesignShowcase() {
  const [selectedProject, setSelectedProject] = useState<typeof designProjects[0] | null>(null);
  const [zoomImageIndex, setZoomImageIndex] = useState<number | null>(null);

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
            A curated selection of my Illustrator and Photoshop work. Click any project to view details.
          </p>
        </motion.div>

        {/* Project Grid */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4"
        >
          {designProjects.map((project, idx) => (
            <motion.button
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05 }}
              onClick={() => setSelectedProject(project)}
              data-testid={`tab-${project.id}`}
              className="group relative aspect-square rounded-xl overflow-hidden border border-white/10 hover:border-[#BB86FC]/50 transition-all hover:shadow-[0_0_30px_rgba(187,134,252,0.3)]"
            >
              <img
                src={project.images[0]}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <h3 className="font-mono text-sm font-medium text-white">{project.title}</h3>
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
                  
                  {/* Title and Actions */}
                  <div className="flex-1 p-6 flex flex-col justify-between">
                    <div className="flex items-start justify-between">
                      <div>
                        <span className="font-mono text-xs text-[#BB86FC] uppercase tracking-wider">Design Project</span>
                        <h3 className="font-display font-bold text-3xl text-white mt-1">{selectedProject.title}</h3>
                      </div>
                      <button
                        onClick={() => setSelectedProject(null)}
                        data-testid="design-modal-close"
                        className="p-2 bg-secondary/50 rounded-full border border-white/10 text-white hover:bg-[#BB86FC] hover:border-[#BB86FC] hover:text-black transition-all"
                      >
                        <X className="w-5 h-5" />
                      </button>
                    </div>
                    <p className="text-muted-foreground text-sm mt-4 line-clamp-3">
                      {selectedProject.concept}
                    </p>
                  </div>
                </div>

                {/* Content */}
                <ScrollArea className="flex-1 p-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    {/* Left Column - Concept */}
                    <div>
                      <div className="flex items-center gap-2 mb-3">
                        <Palette className="w-4 h-4 text-[#BB86FC]" />
                        <h4 className="font-display font-semibold text-white">The Concept</h4>
                      </div>
                      <p className="text-muted-foreground text-sm leading-relaxed" data-testid={`concept-${selectedProject.id}`}>
                        {selectedProject.concept}
                      </p>
                    </div>

                    {/* Right Column - Technical Process */}
                    <div>
                      <div className="flex items-center gap-2 mb-4">
                        <Wrench className="w-4 h-4 text-[#BB86FC]" />
                        <h4 className="font-display font-semibold text-white">Technical Process</h4>
                      </div>
                      <div className="space-y-4" data-testid={`process-${selectedProject.id}`}>
                        {selectedProject.technicalProcess.map((phase, phaseIndex) => (
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
              data-testid="button-close-zoom"
              className="absolute top-4 right-4 z-50 p-2 bg-black/60 backdrop-blur-sm rounded-full border border-white/20 text-white hover:bg-[#BB86FC] hover:border-[#BB86FC] hover:text-black transition-all"
            >
              <X className="w-5 h-5" />
            </button>
            {selectedProject && zoomImageIndex !== null && (
              <img
                src={selectedProject.images[zoomImageIndex]}
                alt={`${selectedProject.title} - Image ${zoomImageIndex + 1}`}
                className="w-full h-full object-contain max-h-[85vh]"
                data-testid="zoomed-image"
              />
            )}
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
}
