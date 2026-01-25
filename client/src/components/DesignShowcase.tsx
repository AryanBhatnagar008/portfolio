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
    technicalProcess: `- Vector-traced the character outline using the Pen Tool in Illustrator
- Applied flat color fills with carefully selected palette
- Used clipping masks for shadow and highlight layers
- Exported at 300 DPI for print-quality resolution
- Color grading adjustments in Photoshop for final polish`
  },
  {
    id: "surrealist",
    title: "Surrealist Scene",
    image: surrealistScene,
    concept: "A surrealist composition blending retro automotive aesthetics with sci-fi elements. The piece explores themes of adventure and the unknown, featuring a classic muscle car facing a portal in a desolate landscape.",
    technicalProcess: `- Composited 8+ stock images using layer masks in Photoshop
- Used perspective warp to align the car with the horizon
- Created the portal effect with radial blur and glow overlays
- Applied color grading with gradient maps for cohesive look
- Added atmospheric haze using soft brushes at low opacity`
  },
  {
    id: "minimalist",
    title: "Minimalist Icons",
    image: minimalistIcons,
    concept: "A series of minimalist superhero icons reducing complex characters to their most essential visual elements. Each icon uses geometric shapes and a muted color palette to create instantly recognizable symbols.",
    technicalProcess: `- Created all shapes using basic geometry in Illustrator
- Maintained consistent stroke weights across all icons
- Used a limited 6-color palette for visual cohesion
- Applied rounded corners for a friendly aesthetic
- Exported as SVG for perfect scalability`
  },
  {
    id: "song-collage",
    title: "Song Collage",
    image: songCollage,
    concept: "A dramatic photo manipulation interpreting music lyrics through visual metaphor. The fiery composition uses silhouettes and typography to evoke feelings of passion, rebellion, and aspiration.",
    technicalProcess: `- Blended multiple fire and smoke stock images
- Used layer blend modes (Screen, Overlay) for fire effects
- Created silhouettes using threshold adjustments
- Typography set in custom script fonts
- Added dreamcatcher element with careful masking`
  },
  {
    id: "magazine",
    title: "Magazine Cover",
    image: magazineCover,
    concept: "A futuristic magazine cover exploring themes of AI rights and consciousness. The dystopian aesthetic combines industrial imagery with thought-provoking headlines about artificial intelligence.",
    technicalProcess: `- Composited robot model with prison bar overlays
- Applied dripping text effect using custom brushes
- Used gradient overlays for metallic color grading
- Typography hierarchy established with varying weights
- Added grain texture for editorial print feel`
  },
  {
    id: "logo",
    title: "Logo Variations",
    image: logoVariations,
    concept: "A comprehensive logo design exploration for 'Newton' brand, showcasing the iterative design process from initial sketches to refined variations. The designs reference Newton's cradle and geometric forms.",
    technicalProcess: `- Started with hand sketches scanned at 600 DPI
- Vectorized concepts in Adobe Illustrator
- Created modular components for flexible layouts
- Developed monochrome and color variations
- Tested legibility at various scales (favicon to billboard)`
  },
  {
    id: "ad",
    title: "Ad Design",
    image: adDesign,
    concept: "A striking advertisement exploring transhumanism themes. The cyberpunk aesthetic combines organic and mechanical elements to create a visually arresting promotional piece for a fictional product.",
    technicalProcess: `- Photo manipulation of anatomical and mechanical elements
- Used frequency separation for skin retouching
- Applied custom lightning brush strokes
- Color grading with split-toning (teal/magenta)
- Typography integration with blend modes`
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

        {/* Tabbed Navigation */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-2 mb-12"
        >
          {designProjects.map((project) => (
            <button
              key={project.id}
              onClick={() => setActiveTab(project.id)}
              data-testid={`tab-${project.id}`}
              className={`px-5 py-2.5 rounded-full text-sm font-mono transition-all border ${
                activeTab === project.id
                  ? "bg-[#BB86FC] text-black border-[#BB86FC] shadow-[0_0_20px_rgba(187,134,252,0.5)]"
                  : "bg-transparent text-muted-foreground border-white/10 hover:border-[#BB86FC]/50 hover:text-white"
              }`}
            >
              {project.title}
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

                {/* Technical Process */}
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <Wrench className="w-4 h-4 text-[#BB86FC]" />
                    <h4 className="font-display font-semibold text-lg text-white">Technical Process</h4>
                  </div>
                  <pre
                    className="font-mono text-sm text-muted-foreground whitespace-pre-wrap leading-relaxed bg-black/30 p-4 rounded-lg border border-white/5"
                    data-testid={`process-${activeProject.id}`}
                  >
                    {activeProject.technicalProcess}
                  </pre>
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
