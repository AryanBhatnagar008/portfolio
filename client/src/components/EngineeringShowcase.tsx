import { useState } from "react";
import { motion } from "framer-motion";
import { ZoomIn, X, Lightbulb, Wrench, Calendar, Users, ChevronLeft, ChevronRight, FileText } from "lucide-react";
import { Dialog, DialogContent, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";
import { getAssetUrl } from "@/lib/assets";

const engineeringProjects = [
  {
    id: "plant-pot",
    title: "Self Watering Plant Pot",
    images: ["/assets/plant_pot_main.png", "/assets/plant_pot_final.png", "/assets/plant_pot_lid.png", "/assets/plant_pot_base.png", "/assets/plant_pot_inside.png", "/assets/plant_pot_wiring.png"],
    notebookUrl: "/assets/Plant_Pot_Report.pdf",
    posterUrl: "/assets/Plant_Pot_Poster.pdf",
    duration: "10 Weeks",
    team: "Aryan, Shreesh & Zayd",
    overview: "An autonomous smart-watering system built for ENGR 111 at Stevens Institute of Technology. Monitors soil moisture, temperature, humidity, and light using an ESP32 microcontroller. Transmits data via MQTT to the cloud and activates a water pump when moisture drops below threshold. 3D printed plant-shaped enclosure designed in SolidWorks, sized at 5x5x8 inches.",
    buildProcess: [
      { phase: "Concept Development", steps: ["Created morphological chart exploring power, placement, and casing options", "Sketched 3 concept designs evaluating ease of use, durability, and safety", "Used concept evaluation matrix to select winning design (Concept #1)", "Chose plant-inspired pot shape to blend with real plants"] },
      { phase: "CAD & 3D Printing", steps: ["Modeled base pot in SolidWorks with extruded outlines for breadboard and Arduino", "Designed lid with water bottle holder and decorative flower accent", "Created cutouts for DHT sensor, soil sensor wires, and tubing", "3D printed base (~2hr 47min) and lid (~2hr 52min) in ABS filament"] },
      { phase: "Electrical & Wiring", steps: ["Wired ESP32 to capacitive soil moisture sensor, DHT11, photocell, and motor controller", "Used ADC pins for analog sensors and GPIO for digital communication", "Organized voltage and ground wires on breadboard for compact arrangement", "Connected mini water pump through motor controller with PWM control"] },
      { phase: "Software & Testing", steps: ["Programmed ESP32 to read all sensors every 10 minutes", "Connected to Stevens-IoT WiFi and published data via MQTT to HiveMQ cloud", "Implemented automatic watering when soil moisture drops below threshold", "Deployed for 3-day continuous test with consistent sensor readings"] }
    ],
    materials: ["ESP32 Microcontroller", "DHT11 Sensor", "Capacitive Soil Moisture Sensor", "Photocell", "Mini Water Pump", "ABS Filament", "Breadboard"],
    skills: ["SolidWorks CAD", "3D Printing", "ESP32 Programming", "IoT/MQTT", "Circuit Design"]
  },
  {
    id: "security-robot",
    title: "Security Robot",
    images: ["/assets/security_robot_main.png", "/assets/security_robot_sketch.png"],
    notebookUrl: "/assets/Security_Robot_Notebook.pdf",
    duration: "6 Weeks",
    team: "Aryan, Arnav & Anikait",
    overview: "A VEX V5 security robot built as a Robotics Engineering capstone project. Features a rotating vision sensor for intruder detection, a built-in catapult defense mechanism, distance sensors, and autonomous patrol within a 5ft x 5ft zone. Programmed in VEXcode with pseudocode-driven development and alarm functionality.",
    buildProcess: [
      { phase: "Concept & Pseudocode", steps: ["Defined security robot requirements for guarding a 5ft x 5ft area", "Wrote detailed pseudocode for patrol, detection, and response logic", "Planned intruder detection using vision sensor and distance sensor", "Designed owner remote control override capability"] },
      { phase: "Chassis & Drivetrain", steps: ["Built base frame with VEX V5 metal components", "Installed mecanum wheel drivetrain for omnidirectional movement", "Tightened all loose screws across the robot", "Ensured stable center of gravity for patrol movement"] },
      { phase: "Sensor & Catapult Integration", steps: ["Added rotating vision sensor on motor-driven mount", "Adjusted vision sensor height to avoid interfering with the brain", "Built catapult arm with rubber band tensioning system", "Changed gear ratio to allow catapult to rewind automatically"] },
      { phase: "Programming & Testing", steps: ["Coded vision sensor to detect missing objects and intruders", "Programmed catapult launch sequence with motor control", "Added alarm system that plays notes when intruder detected", "Ran multiple test iterations to configure sensor reliability"] }
    ],
    materials: ["VEX V5 Brain & Motors", "Mecanum Wheels", "Vision Sensor", "Distance Sensor", "Catapult Mechanism", "Rubber Bands"],
    skills: ["Robotics", "VEXcode Programming", "Sensor Integration", "Mechanical Design", "Pseudocode Development"]
  },
  {
    id: "gladiator-automata",
    title: "Gladiator Automata",
    images: ["/assets/automata-2.png", "/assets/automata-cad.png", "/assets/automata-1.png", "/assets/automata-3.png", "/assets/automata-4.png", "/assets/automata-5.png", "/assets/automata-6.png"],
    duration: "6 Days",
    team: "Aryan & Zielig",
    overview: "A mechanical automata CAD project featuring a gladiator figure with moving sword arm and shield. Uses snail cams for sword motion and offset cams for shield movement. Built in Onshape with full animation using tangent mates, slider cranks, and position constraints.",
    buildProcess: [
      { phase: "Day 1-2: Research & Design", steps: ["Researched motion direction changes and cam types", "Studied snail cams, offset cams, and eccentric cams", "Decided on gladiator theme with dual-arm motion", "Sketched gladiator outline using reference images", "Selected snail cams for swords, offset cams for shields"] },
      { phase: "Day 3: CAD Modeling", steps: ["Built base housing box in Onshape", "Created snail cam profiles following tutorial", "Modeled gladiator body with separate arm parts", "Designed sword and shield as individual components", "Added rods connecting arms to cam followers"] },
      { phase: "Day 4-5: Assembly & Animation", steps: ["Used connection mates for proper rotation", "Fixed non-moving parts (base, gladiator body)", "Applied tangent mates and position constraints", "Troubleshot rod sliding against arm mechanism", "Added fillets to joining faces for smooth motion"] },
      { phase: "Day 6: Final Refinement", steps: ["Adjusted fasten mate positions for rod alignment", "Completed all arm animations", "Tested full motion sequence with slider crank", "Documented cam profile effects on movement"] }
    ],
    materials: ["Onshape CAD", "Snail Cams", "Offset Cams", "Connecting Rods", "Slider Crank"],
    skills: ["CAD Animation", "Mechanism Design", "Cam Profiles", "Assembly Mates", "Tangent Constraints"],
    notebookUrl: "/assets/Automata_Notebook.pdf"
  },
  {
    id: "ktruss-bridge",
    title: "K-Truss Bridge",
    images: [
      "/assets/ktruss_1.png",
      "/assets/ktruss_2.png"
    ],
    duration: "2 Weeks",
    team: "Aryan, Elijah, Nivan",
    overview: "A structural engineering project designing a K-truss bridge to support maximum load. Achieved 90N capacity (target: 80N) using optimized popsicle stick construction. Scored 87/100 on evaluation.",
    buildProcess: [
      { phase: "Research & Design", steps: ["Studied 6 truss types: Pratt, Howe, Warren, K-Truss, Baltimore, Quadrangular", "Selected K-Truss for superior load distribution", "Calculated optimal member angles", "Created scaled blueprints with measurements"] },
      { phase: "Material Preparation", steps: ["Measured and marked all popsicle sticks", "Cut sticks to required lengths", "Prepared jigs for consistent angles", "Organized materials by component"] },
      { phase: "Assembly", steps: ["Built two identical side trusses", "Connected sides with cross-bracing", "Reinforced joint connections", "Added diagonal K-members for stability"] },
      { phase: "Testing & Results", steps: ["Conducted incremental load testing", "Bridge supported 90N (exceeded 80N target)", "Documented failure mode for analysis", "Final score: 87/100 on project evaluation"] }
    ],
    materials: ["Popsicle Sticks", "Wood Glue", "Clamps", "Measuring Tools"],
    skills: ["Structural Engineering", "Load Analysis", "Teamwork", "Precision Construction"],
    notebookUrl: "/assets/KTruss_Notebook.pdf"
  },
  {
    id: "home-renovation",
    title: "Home Renovation",
    images: ["/assets/ardc-floorplan.png", "/assets/ardc-3d-1.png", "/assets/ardc-3d-2.png", "/assets/ardc-mindmap.png"],
    duration: "5 Weeks",
    team: "Aryan & Jascha",
    overview: "Architectural Renovation Design Challenge (ARDC) - A comprehensive home renovation project designing a two-story family home. Features include 2-car garage with breezeway, great room living area, kitchen with work triangle layout, master bedroom with bath, nursery, den/study, and outdoor living space. Created using Planner5D with detailed floor plans and 3D renders.",
    buildProcess: [
      { phase: "Research & Planning", steps: ["Defined requirements: 2-car garage, living area, powder room, den, kitchen triangle", "Created mind map exploring room layouts and dimensions", "Researched bedroom sizes: Master (200-400 sq ft), Nursery (70-100 sq ft)", "Selected Planner5D for digital modeling after evaluating FloorPlanner"] },
      { phase: "First Floor Design", steps: ["Guest bedroom in top left (9x12')", "Great room with combined living and kitchen (9x12')", "Bathroom and laundry room (9x7' each)", "Living room (15x14') with stairs area (6x12')"] },
      { phase: "Second Floor Design", steps: ["Master bedroom with connected closet", "Nursery positioned near master bedroom", "Secondary bedroom with bathroom access", "Cut-in portions: 8x6' left, 6x6' right"] },
      { phase: "Peer Review & Refinement", steps: ["Received feedback to swap bottom floor locations", "Combined best elements from both team members' designs", "Added furniture and appliances to all rooms", "Created 3D renders for visualization"] }
    ],
    materials: ["Planner5D", "Architectural Sketching", "Graph Paper", "3D Rendering"],
    skills: ["Architectural Design", "Space Planning", "3D Visualization", "Collaboration"],
    notebookUrl: "/assets/ARDC_Notebook.pdf"
  },
  {
    id: "birdhouse",
    title: "Bird House",
    images: ["/assets/birdhouse_main.png", "/assets/birdhouse_cad.png", "/assets/birdhouse_brainstorm.png"],
    notebookUrl: "/assets/Bird_House_Notebook.pdf",
    duration: "2 Weeks",
    team: "Aryan & Adhiraj",
    overview: "A multi-compartment birdhouse designed for New Jersey bird species (Blue Jays, Sparrows, Mockingbirds). Features three nesting areas, integrated bird feeder, sloped roofs for drainage, and bevel-jointed construction. Designed in Onshape and built with precision woodworking. Created to be transformed into a STEM kit for elementary/middle school education.",
    buildProcess: [
      { phase: "Research & Design", steps: ["Studied bird species native to New Jersey", "Researched entrance hole sizing (1-1.25\" diameter)", "Determined mounting preferred over hanging for bird safety", "Created mind map exploring materials, placement, and themes", "Modeled possible solutions in Onshape CAD with full dimensioned drawings"] },
      { phase: "Cut List & Materials", steps: ["Base: 5\" x 5\" x 0.41\" thick", "Roof panels: 3.2\" x 5\" (10 pieces)", "Front/Back panels: Various sizes (7 pieces)", "Side panels: 10\" x 10\" (2 pieces)", "Total material area: 880 sq inches of plywood"] },
      { phase: "Fabrication", steps: ["Cut all pieces per cut list using scroll saw and bandsaw", "Used scroll saw to create 1.25\" diameter pilot holes", "Nailed and glued side panels of small birdhouses together", "Assembled large center house onto the base", "Glued miniature birdhouses to main structure"] },
      { phase: "Roof & Final Assembly", steps: ["Adjusted roof dimensions using bandsaw", "Angled bandsaw table to create bevel joints for roof panels", "Glued roofs together at bevel joints with tape clamps", "Built bird feeder from scrap wood (5x5 + 5x1) to fit between houses", "Lessons learned: nail gun for stronger joints, account for wood depth in cut list"] }
    ],
    materials: ["Plywood (0.41\" thick)", "Wood Glue", "Nails", "Scroll Saw", "Bandsaw"],
    skills: ["Woodworking", "Onshape CAD", "Bevel Joints", "STEM Kit Design"]
  },
  {
    id: "hot-cold",
    title: "Hot n' Cold",
    images: [
      "/assets/hot_cold_1.png",
      "/assets/hot_cold_2.png",
      "/assets/hot_cold_3.png",
      "/assets/hot_cold_4.png",
      "/assets/hot_cold_5.png"
    ],
    duration: "3 Weeks",
    team: "Aryan & Elijah",
    overview: "A CAD design challenge creating themed beverage holders: a chicken-shaped kettle for hot drinks and an egg-shaped mug with chicken feet for cold drinks. Explores the question \"What came first - the chicken or the egg?\"",
    buildProcess: [
      { phase: "Research Phase", steps: ["Analyzed 30 existing beverage holder designs", "Documented pros/cons of dispensers, mugs, bottles, thermoses", "Created mind map exploring hot vs cold holder differences", "Selected \"Chicken & Egg\" theme for cohesive design story"] },
      { phase: "Onshape CAD - Chicken Kettle", steps: ["Used Loft tool for organic body shape", "Revolve for main body structure", "Extrude for wings/handles", "Added Wattle and Comb details", "Created curved lid using projected curves", "Applied Fillet for smooth transitions"] },
      { phase: "Onshape CAD - Egg Mug", steps: ["Ellipse sketch (4.5\" height, 1.09\" radius opening)", "Revolve for egg shape generation", "Shell tool for hollow interior", "Designed chicken feet with claw geometry", "Circle pattern for toe arrangement", "Combined elements using boolean operations"] },
      { phase: "Final Presentation", steps: ["Exploded view assembly in Onshape", "Rendered both designs with realistic materials", "Documented CAD techniques used", "Created design rationale presentation"] }
    ],
    materials: ["Onshape CAD", "Loft Tool", "Revolve", "Shell", "Fillet", "Boolean"],
    skills: ["CAD Modeling", "Surface Design", "Creative Problem Solving", "3D Visualization"],
    notebookUrl: "/assets/HotCold_Notebook.pdf"
  },
  {
    id: "ironman-helmet",
    title: "Iron Man Helmet",
    images: ["https://images.unsplash.com/photo-1635863138275-d9b33299680b?auto=format&fit=crop&q=80&w=800"],
    duration: "4 Weeks",
    team: "Solo Project",
    overview: "A CAD project designing a wearable Iron Man helmet in Onshape. Features ergonomic fit based on head measurements, with detailed surface modeling for the iconic look.",
    buildProcess: [
      { phase: "Reference & Planning", steps: ["Gathered reference images from multiple angles", "Took head measurements for proper fit", "Planned component breakdown", "Selected Onshape for parametric modeling"] },
      { phase: "Base Geometry", steps: ["Created main helmet shell using loft", "Shaped faceplate contours", "Designed eye apertures with precise curves", "Built jaw section separately for articulation"] },
      { phase: "Detail Modeling", steps: ["Added panel lines and surface details", "Created ear sections with vents", "Modeled forehead crest geometry", "Applied fillets for smooth transitions"] },
      { phase: "Assembly & Refinement", steps: ["Assembled all components in Onshape", "Verified measurements for wearability", "Created exploded view for documentation", "Rendered final design with metallic materials"] }
    ],
    materials: ["Onshape CAD", "Loft", "Extrude", "Fillet", "Surface Modeling"],
    skills: ["Advanced CAD", "Organic Modeling", "Ergonomic Design", "Attention to Detail"]
  }
];

function ImageCarousel({ images, title, onImageClick }: { images: string[], title: string, onImageClick?: (index: number) => void }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const getImageSrc = (src: string) => {
    if (src.startsWith('/assets/')) {
      return getAssetUrl(src);
    }
    return src;
  };

  const resolvedImages = images.map(getImageSrc);

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
        src={resolvedImages[currentIndex]}
        alt={`${title} - Image ${currentIndex + 1}`}
        className="w-full h-full object-cover"
        data-testid="eng-carousel-image"
      />
      
      {/* Click to zoom hint */}
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
            data-testid="eng-carousel-prev"
            className="absolute left-2 top-1/2 -translate-y-1/2 p-2 bg-black/60 backdrop-blur-sm rounded-full border border-white/20 text-white hover:bg-[#BB86FC] hover:border-[#BB86FC] hover:text-black opacity-0 group-hover:opacity-100"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={goToNext}
            data-testid="eng-carousel-next"
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
                data-testid={`eng-carousel-dot-${idx}`}
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

export function EngineeringShowcase() {
  const [selectedProject, setSelectedProject] = useState<typeof engineeringProjects[0] | null>(null);
  const [zoomImageIndex, setZoomImageIndex] = useState<number | null>(null);

  return (
    <section id="engineering-showcase" className="py-24 bg-[#121212]">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-12"
        >
          <span className="font-mono text-primary text-sm tracking-widest uppercase mb-2 block">
            Hands-On Engineering
          </span>
          <h2 className="font-display font-bold text-4xl mb-4">Engineering Projects</h2>
          <p className="text-muted-foreground">
            Documented builds from concept to completion. Click any project to view details.
          </p>
        </motion.div>

        {/* Project Grid */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4"
        >
          {engineeringProjects.map((project, idx) => (
            <motion.button
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05 }}
              onClick={() => setSelectedProject(project)}
              data-testid={`eng-tab-${project.id}`}
              className="group relative aspect-[4/3] rounded-xl overflow-hidden border border-white/10 hover:border-[#BB86FC]/50 transition-all hover:shadow-[0_0_30px_rgba(187,134,252,0.3)]"
            >
              <img
                src={project.images[0].startsWith('/assets/') ? getAssetUrl(project.images[0]) : project.images[0]}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />
              <div className="absolute bottom-0 left-0 right-0 p-3">
                <h3 className="font-mono text-xs font-medium text-white truncate">{project.title}</h3>
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
                        <span className="font-mono text-xs text-[#BB86FC] uppercase tracking-wider">Engineering Project</span>
                        <h3 className="font-display font-bold text-3xl text-white mt-1">{selectedProject.title}</h3>
                      </div>
                      <button
                        onClick={() => setSelectedProject(null)}
                        data-testid="eng-modal-close"
                        className="p-2 bg-secondary/50 rounded-full border border-white/10 text-white hover:bg-[#BB86FC] hover:border-[#BB86FC] hover:text-black transition-all"
                      >
                        <X className="w-5 h-5" />
                      </button>
                    </div>
                    <div className="flex gap-4 mt-4">
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Calendar className="w-4 h-4 text-[#BB86FC]" />
                        <span data-testid={`eng-duration-${selectedProject.id}`}>{selectedProject.duration}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Users className="w-4 h-4 text-[#BB86FC]" />
                        <span data-testid={`eng-team-${selectedProject.id}`}>{selectedProject.team}</span>
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
                        <p className="text-muted-foreground text-sm leading-relaxed" data-testid={`eng-overview-${selectedProject.id}`}>
                          {selectedProject.overview}
                        </p>
                      </div>

                      {/* Materials & Skills */}
                      <div className="bg-secondary/30 rounded-xl p-4 border border-white/5">
                        <h4 className="font-mono text-xs uppercase text-[#BB86FC] mb-3">Materials & Skills</h4>
                        <div className="flex flex-wrap gap-2">
                          {selectedProject.materials.map((mat, i) => (
                            <span key={i} className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs text-muted-foreground">
                              {mat}
                            </span>
                          ))}
                          {selectedProject.skills.map((skill, i) => (
                            <span key={i} className="px-3 py-1 bg-[#BB86FC]/10 border border-[#BB86FC]/30 rounded-full text-xs text-[#BB86FC]">
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* View Notebook Link */}
                      <div className="flex flex-wrap gap-3">
                        {'notebookUrl' in selectedProject && selectedProject.notebookUrl && (
                          <a
                            href={selectedProject.notebookUrl.startsWith('/assets/') ? getAssetUrl(selectedProject.notebookUrl) : selectedProject.notebookUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            data-testid="eng-notebook-link"
                            className="flex items-center gap-2 px-4 py-3 bg-[#BB86FC]/10 border border-[#BB86FC]/30 rounded-xl text-[#BB86FC] hover:bg-[#BB86FC] hover:text-black transition-all font-mono text-sm"
                          >
                            <FileText className="w-4 h-4" />
                            View Engineering Notebook
                          </a>
                        )}
                        {'posterUrl' in selectedProject && selectedProject.posterUrl && (
                          <a
                            href={selectedProject.posterUrl.startsWith('/assets/') ? getAssetUrl(selectedProject.posterUrl) : selectedProject.posterUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            data-testid="eng-poster-link"
                            className="flex items-center gap-2 px-4 py-3 bg-[#BB86FC]/10 border border-[#BB86FC]/30 rounded-xl text-[#BB86FC] hover:bg-[#BB86FC] hover:text-black transition-all font-mono text-sm"
                          >
                            <FileText className="w-4 h-4" />
                            View Project Poster
                          </a>
                        )}
                      </div>
                    </div>

                    {/* Right Column - Build Process */}
                    <div>
                      <div className="flex items-center gap-2 mb-4">
                        <Wrench className="w-4 h-4 text-[#BB86FC]" />
                        <h4 className="font-display font-semibold text-white">Build Process</h4>
                      </div>
                      <div className="space-y-4" data-testid={`eng-process-${selectedProject.id}`}>
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
              data-testid="button-close-eng-zoom"
              className="absolute top-4 right-4 z-50 p-2 bg-black/60 backdrop-blur-sm rounded-full border border-white/20 text-white hover:bg-[#BB86FC] hover:border-[#BB86FC] hover:text-black transition-all"
            >
              <X className="w-5 h-5" />
            </button>
            {selectedProject && zoomImageIndex !== null && (
              <img
                src={selectedProject.images[zoomImageIndex].startsWith('/assets/') ? getAssetUrl(selectedProject.images[zoomImageIndex]) : selectedProject.images[zoomImageIndex]}
                alt={`${selectedProject.title} - Image ${zoomImageIndex + 1}`}
                className="w-full h-full object-contain max-h-[85vh]"
                data-testid="eng-zoomed-image"
              />
            )}
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
}
