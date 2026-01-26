import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ZoomIn, X, Lightbulb, Wrench, Calendar, Users } from "lucide-react";
import { Dialog, DialogContent, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";

// ==========================================
// ENGINEERING PROJECTS DATA - Edit this array easily!
// ==========================================
const engineeringProjects = [
  {
    id: "device-stand",
    title: "Device Stand",
    image: "https://images.unsplash.com/photo-1583394838336-acd977736f90?auto=format&fit=crop&q=80&w=800",
    duration: "4 Days",
    team: "Solo Project",
    overview: "A custom headphone and phone stand designed to solve a personal organization problem. The stand features a built-in charger holder for convenient headphone charging, combining functionality with aesthetic appeal using popsicle sticks and balsa wood.",
    buildProcess: [
      {
        phase: "Day 1: Problem Definition & Sketching",
        steps: [
          "Identified need for headphone storage with integrated charging",
          "Sketched 4 different designs (2 popsicle stick, 2 cardboard)",
          "Selected popsicle stick design for durability",
          "Chose design with charger integration feature"
        ]
      },
      {
        phase: "Day 2: Base Construction",
        steps: [
          "Built the base using popsicle sticks with cut edges",
          "Added balsa wood accents for premium look",
          "Created foundation structure with cross-supports",
          "Tested stability with headphone weight"
        ]
      },
      {
        phase: "Day 3: Vertical Assembly",
        steps: [
          "Cut vertical support sticks to headphone height",
          "Constructed the headphone rest/head piece",
          "Added decorative detailing on sides",
          "Attached small balsa wood trim pieces"
        ]
      },
      {
        phase: "Day 4: Final Modifications",
        steps: [
          "Added phone stand attachment",
          "Integrated charger cable routing",
          "Final assembly and testing",
          "Achieved dual-device functionality"
        ]
      }
    ],
    materials: ["Popsicle Sticks", "Balsa Wood", "Hot Glue", "Wood Glue"],
    skills: ["Woodworking", "Design Thinking", "Prototyping"]
  },
  {
    id: "droid-catapult",
    title: "Snail-a-Pult",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&q=80&w=800",
    duration: "14 Days",
    team: "Aryan & Elijah",
    overview: "\"Turbo the Snail-a-Pult\" - A precision catapult designed to launch a tennis ball (droid) into a target ship. Achieved 20/20 perfect accuracy in final testing. Features a snail-themed decorative design with googly eyes.",
    buildProcess: [
      {
        phase: "Design Phase (Days 1-3)",
        steps: [
          "Brainstormed 4 catapult concepts",
          "Created decision matrix scoring functionality, design, durability, accuracy",
          "Selected traditional catapult with rubber band propulsion",
          "Drafted top-down and side-view technical drawings"
        ]
      },
      {
        phase: "Construction Phase (Days 4-8)",
        steps: [
          "Cut 12\"x5\" wooden base using hand saw",
          "Reduced dowels from 12\" to 8\" for optimal leverage",
          "Built support structure with hot glue + popsicle sticks",
          "Arm length: 10.5 inches for trajectory control"
        ]
      },
      {
        phase: "Mechanism Development (Days 9-11)",
        steps: [
          "Tested cardboard, tape, and string for arm pivot (all failed)",
          "Solution: Plastic straw on thin wood dowel for rotation",
          "Attached rubber bands for launch force",
          "Added nail reinforcements after initial failure"
        ]
      },
      {
        phase: "Final Assembly (Days 12-14)",
        steps: [
          "Reinforced with additional hot glue and tape",
          "Added snail decorations (cardboard shell, googly eyes)",
          "Calibrated for 10-foot launch distance",
          "Final test: 20/20 successful launches into target box"
        ]
      }
    ],
    materials: ["Wooden Dowels", "Popsicle Sticks", "Rubber Bands", "Hot Glue", "Plastic Straw", "Cardboard"],
    skills: ["Mechanical Design", "Physics", "Iteration", "Problem Solving"]
  },
  {
    id: "hot-cold",
    title: "Hot n' Cold",
    image: "https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?auto=format&fit=crop&q=80&w=800",
    duration: "3 Weeks",
    team: "Aryan & Elijah",
    overview: "A CAD design challenge creating themed beverage holders: a chicken-shaped kettle for hot drinks and an egg-shaped mug with chicken feet for cold drinks. Explores the question \"What came first - the chicken or the egg?\"",
    buildProcess: [
      {
        phase: "Research Phase",
        steps: [
          "Analyzed 30 existing beverage holder designs",
          "Documented pros/cons of dispensers, mugs, bottles, thermoses",
          "Created mind map exploring hot vs cold holder differences",
          "Selected \"Chicken & Egg\" theme for cohesive design story"
        ]
      },
      {
        phase: "Onshape CAD - Chicken Kettle",
        steps: [
          "Used Loft tool for organic body shape",
          "Revolve for main body structure",
          "Extrude for wings/handles",
          "Added Wattle and Comb details",
          "Created curved lid using projected curves",
          "Applied Fillet for smooth transitions"
        ]
      },
      {
        phase: "Onshape CAD - Egg Mug",
        steps: [
          "Ellipse sketch (4.5\" height, 1.09\" radius opening)",
          "Revolve for egg shape generation",
          "Shell tool for hollow interior",
          "Designed chicken feet with claw geometry",
          "Circle pattern for toe arrangement",
          "Combined elements using boolean operations"
        ]
      },
      {
        phase: "Final Presentation",
        steps: [
          "Exploded view assembly in Onshape",
          "Rendered both designs with realistic materials",
          "Documented CAD techniques used",
          "Created design rationale presentation"
        ]
      }
    ],
    materials: ["Onshape CAD", "Loft Tool", "Revolve", "Shell", "Fillet", "Boolean"],
    skills: ["CAD Modeling", "Surface Design", "Creative Problem Solving", "3D Visualization"]
  },
  {
    id: "ktruss-bridge",
    title: "K-Truss Bridge",
    image: "https://images.unsplash.com/photo-1513828583688-c52646db42da?auto=format&fit=crop&q=80&w=800",
    duration: "2 Weeks",
    team: "Aryan, Elijah, Nivan",
    overview: "A structural engineering project designing a K-truss bridge to support maximum load. Achieved 90N capacity (target: 80N) using optimized popsicle stick construction. Scored 87/100 on evaluation.",
    buildProcess: [
      {
        phase: "Research & Design",
        steps: [
          "Studied 6 truss types: Pratt, Howe, Warren, K-Truss, Baltimore, Quadrangular",
          "Selected K-Truss for superior load distribution",
          "Calculated optimal member angles",
          "Created scaled blueprints with measurements"
        ]
      },
      {
        phase: "Material Preparation",
        steps: [
          "Measured and marked all popsicle sticks",
          "Cut sticks to required lengths",
          "Prepared jigs for consistent angles",
          "Organized materials by component"
        ]
      },
      {
        phase: "Assembly",
        steps: [
          "Built two identical side trusses",
          "Connected sides with cross-bracing",
          "Reinforced joint connections",
          "Added diagonal K-members for stability"
        ]
      },
      {
        phase: "Testing & Results",
        steps: [
          "Conducted incremental load testing",
          "Bridge supported 90N (exceeded 80N target)",
          "Documented failure mode for analysis",
          "Final score: 87/100 on project evaluation"
        ]
      }
    ],
    materials: ["Popsicle Sticks", "Wood Glue", "Clamps", "Measuring Tools"],
    skills: ["Structural Engineering", "Load Analysis", "Teamwork", "Precision Construction"]
  },
  {
    id: "ironman-helmet",
    title: "Iron Man Helmet",
    image: "https://images.unsplash.com/photo-1635863138275-d9b33299680b?auto=format&fit=crop&q=80&w=800",
    duration: "4 Weeks",
    team: "Solo Project",
    overview: "A CAD project designing a wearable Iron Man helmet in Onshape. Features ergonomic fit based on head measurements, with detailed surface modeling for the iconic look.",
    buildProcess: [
      {
        phase: "Reference & Planning",
        steps: [
          "Gathered reference images from multiple angles",
          "Took head measurements for proper fit",
          "Planned component breakdown",
          "Selected Onshape for parametric modeling"
        ]
      },
      {
        phase: "Base Geometry",
        steps: [
          "Created main helmet shell using loft",
          "Shaped faceplate contours",
          "Designed eye apertures with precise curves",
          "Built jaw section separately for articulation"
        ]
      },
      {
        phase: "Detail Modeling",
        steps: [
          "Added panel lines and surface details",
          "Created ear sections with vents",
          "Modeled forehead crest geometry",
          "Applied fillets for smooth transitions"
        ]
      },
      {
        phase: "Assembly & Refinement",
        steps: [
          "Assembled all components in Onshape",
          "Verified measurements for wearability",
          "Created exploded view for documentation",
          "Rendered final design with metallic materials"
        ]
      }
    ],
    materials: ["Onshape CAD", "Loft", "Extrude", "Fillet", "Surface Modeling"],
    skills: ["Advanced CAD", "Organic Modeling", "Ergonomic Design", "Attention to Detail"]
  },
  {
    id: "security-robot",
    title: "Security Robot",
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80&w=800",
    duration: "6 Weeks",
    team: "Aryan & Nivan",
    overview: "A functional security robot built using Vex IQ components. Features autonomous patrol mode, intruder detection sensors, and remote control capability. Designed to demonstrate robotics principles.",
    buildProcess: [
      {
        phase: "Concept Development",
        steps: [
          "Defined security robot requirements",
          "Sketched chassis and sensor layouts",
          "Selected Vex IQ for modular building",
          "Planned patrol route algorithms"
        ]
      },
      {
        phase: "Chassis Construction",
        steps: [
          "Built rectangular base frame",
          "Installed four-wheel drive system",
          "Added motor mounts and brackets",
          "Ensured stable center of gravity"
        ]
      },
      {
        phase: "Sensor Integration",
        steps: [
          "Mounted ultrasonic distance sensors",
          "Added bump sensors for collision",
          "Installed touch sensors for manual control",
          "Connected all sensors to brain unit"
        ]
      },
      {
        phase: "Programming & Testing",
        steps: [
          "Programmed autonomous patrol behavior",
          "Added intruder detection responses",
          "Implemented remote override controls",
          "Tested in simulated environment"
        ]
      }
    ],
    materials: ["Vex IQ Parts", "Motors", "Ultrasonic Sensors", "Touch Sensors", "Controller"],
    skills: ["Robotics", "Programming", "Sensor Integration", "System Design"]
  },
  {
    id: "home-renovation",
    title: "Home Renovation",
    image: "https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&q=80&w=800",
    duration: "5 Weeks",
    team: "Solo Project",
    overview: "A comprehensive CAD project designing a home renovation in Onshape. Includes kitchen redesign, bathroom updates, and living space optimization with full 3D walkthroughs.",
    buildProcess: [
      {
        phase: "Site Survey & Planning",
        steps: [
          "Measured existing room dimensions",
          "Documented current layout limitations",
          "Created wishlist of improvements",
          "Researched renovation best practices"
        ]
      },
      {
        phase: "Kitchen Design",
        steps: [
          "Modeled cabinet configurations",
          "Designed island with seating",
          "Planned appliance placement",
          "Created lighting layout"
        ]
      },
      {
        phase: "Bathroom & Living Areas",
        steps: [
          "Redesigned bathroom fixtures layout",
          "Optimized storage solutions",
          "Planned living room furniture arrangement",
          "Added built-in shelving units"
        ]
      },
      {
        phase: "Visualization",
        steps: [
          "Created realistic material renderings",
          "Produced 3D walkthrough animation",
          "Generated floor plan views",
          "Documented all design decisions"
        ]
      }
    ],
    materials: ["Onshape CAD", "Architectural Drawing", "3D Rendering", "Animation"],
    skills: ["Architectural Design", "Space Planning", "3D Visualization", "Interior Design"]
  },
  {
    id: "gladiator-automata",
    title: "Gladiator Automata",
    image: "https://images.unsplash.com/photo-1569235186275-626cb53b83ce?auto=format&fit=crop&q=80&w=800",
    duration: "3 Weeks",
    team: "Solo Project",
    overview: "A mechanical automata CAD project featuring a gladiator figure with moving sword arm and shield. Uses cam mechanisms to create realistic fighting motions when a crank is turned.",
    buildProcess: [
      {
        phase: "Mechanism Research",
        steps: [
          "Studied cam types: snail, offset, eccentric",
          "Analyzed connecting rod kinematics",
          "Planned motion sequence for gladiator",
          "Selected dual-cam system for two arms"
        ]
      },
      {
        phase: "CAD Modeling - Base",
        steps: [
          "Created housing box in Onshape",
          "Designed crank shaft with handle",
          "Modeled cam profiles for arm motions",
          "Added bearings and axle supports"
        ]
      },
      {
        phase: "CAD Modeling - Figure",
        steps: [
          "Designed gladiator torso and head",
          "Created articulated arm joints",
          "Modeled sword and shield props",
          "Connected arms to cam followers"
        ]
      },
      {
        phase: "Animation & Testing",
        steps: [
          "Added mates for rotational motion",
          "Applied position constraints",
          "Animated full motion sequence",
          "Documented cam profile effects"
        ]
      }
    ],
    materials: ["Onshape CAD", "Snail Cams", "Offset Cams", "Connecting Rods"],
    skills: ["CAD Animation", "Mechanism Design", "Cam Profiles", "Assembly Mates"]
  },
  {
    id: "birdhouse",
    title: "Bird House",
    image: "https://images.unsplash.com/photo-1520857014576-2c4f4c972b57?auto=format&fit=crop&q=80&w=800",
    duration: "2 Weeks",
    team: "Aryan & Adhiraj",
    overview: "A multi-compartment birdhouse designed for New Jersey bird species (Blue Jays, Sparrows, Mockingbirds). Features three nesting areas, integrated bird feeder, sloped roofs for drainage, and bevel-jointed construction. Designed to be transformed into a STEM kit for elementary/middle school education.",
    buildProcess: [
      {
        phase: "Research & Design",
        steps: [
          "Studied bird species native to New Jersey",
          "Researched entrance hole sizing (1-1.25\" diameter)",
          "Determined mounting preferred over hanging",
          "Created design concepts in Onshape",
          "Selected complex multi-house design with bird feeder"
        ]
      },
      {
        phase: "Cut List & Materials",
        steps: [
          "Base: 5\" x 5\" x 0.41\" thick",
          "Roof panels: 3.2\" x 5\" (10 pieces)",
          "Front/Back panels: Various sizes (7 pieces)",
          "Side panels: 10\" x 10\" (2 pieces)",
          "Total material: 880 sq inches"
        ]
      },
      {
        phase: "Fabrication",
        steps: [
          "Cut all pieces per cut list using scroll saw",
          "Created pilot holes (1.25\" diameter)",
          "Nailed side panels of small birdhouse together",
          "Glued side panels with wood glue",
          "Assembled large center house to base"
        ]
      },
      {
        phase: "Roof & Final Assembly",
        steps: [
          "Adjusted roof dimensions using bandsaw",
          "Created bevel joints by angling bandsaw table",
          "Glued roofs together at bevel joint",
          "Built bird feeder from scrap wood (5x5 + 5x1)",
          "Lessons: Use nail gun for stronger joints"
        ]
      }
    ],
    materials: ["Plywood (0.41\" thick)", "Wood Glue", "Nails", "Scroll Saw", "Bandsaw"],
    skills: ["Woodworking", "Joinery", "Bevel Cuts", "STEM Education Design"]
  }
];

export function EngineeringShowcase() {
  const [activeTab, setActiveTab] = useState(engineeringProjects[0].id);
  const [zoomOpen, setZoomOpen] = useState(false);

  const activeProject = engineeringProjects.find(p => p.id === activeTab) || engineeringProjects[0];

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
          <h2 className="font-display font-bold text-4xl mb-4">Engineering Notebook</h2>
          <p className="text-muted-foreground">
            Documented builds from concept to completion - featuring mechanical design, CAD, robotics, and rapid prototyping.
          </p>
        </motion.div>

        {/* Tabbed Navigation with Thumbnails */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 mb-12"
        >
          {engineeringProjects.map((project) => (
            <button
              key={project.id}
              onClick={() => setActiveTab(project.id)}
              data-testid={`eng-tab-${project.id}`}
              className={`group relative rounded-xl overflow-hidden transition-all ${
                activeTab === project.id
                  ? "ring-2 ring-[#BB86FC] shadow-[0_0_20px_rgba(187,134,252,0.4)]"
                  : "ring-1 ring-white/10 hover:ring-[#BB86FC]/50"
              }`}
            >
              {/* Thumbnail Image */}
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
              {/* Title Overlay */}
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
                    data-testid={`eng-image-${activeProject.id}`}
                  />
                </div>
                
                {/* Zoom Button */}
                <button
                  onClick={() => setZoomOpen(true)}
                  data-testid="button-eng-zoom"
                  className="absolute top-4 right-4 p-3 bg-black/60 backdrop-blur-sm rounded-full border border-white/20 text-white opacity-0 group-hover:opacity-100 transition-all hover:bg-[#BB86FC] hover:border-[#BB86FC] hover:text-black"
                >
                  <ZoomIn className="w-5 h-5" />
                </button>

                {/* Decorative glow */}
                <div className="absolute -inset-1 bg-gradient-to-r from-[#BB86FC]/20 to-purple-900/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity -z-10" />
              </div>

              {/* Project Meta */}
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-secondary/10 border border-white/5 rounded-xl p-4">
                  <div className="flex items-center gap-2 text-[#BB86FC] mb-1">
                    <Calendar className="w-4 h-4" />
                    <span className="font-mono text-xs uppercase">Duration</span>
                  </div>
                  <p className="text-white font-medium" data-testid={`eng-duration-${activeProject.id}`}>{activeProject.duration}</p>
                </div>
                <div className="bg-secondary/10 border border-white/5 rounded-xl p-4">
                  <div className="flex items-center gap-2 text-[#BB86FC] mb-1">
                    <Users className="w-4 h-4" />
                    <span className="font-mono text-xs uppercase">Team</span>
                  </div>
                  <p className="text-white font-medium" data-testid={`eng-team-${activeProject.id}`}>{activeProject.team}</p>
                </div>
              </div>

              {/* Materials & Skills */}
              <div className="bg-secondary/10 border border-white/5 rounded-xl p-4">
                <h4 className="font-mono text-xs uppercase text-[#BB86FC] mb-3">Materials & Skills</h4>
                <div className="flex flex-wrap gap-2">
                  {activeProject.materials.map((mat, i) => (
                    <span key={i} className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs text-muted-foreground">
                      {mat}
                    </span>
                  ))}
                  {activeProject.skills.map((skill, i) => (
                    <span key={i} className="px-3 py-1 bg-[#BB86FC]/10 border border-[#BB86FC]/30 rounded-full text-xs text-[#BB86FC]">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Side - Details */}
            <div className="bg-secondary/10 border border-white/5 rounded-2xl p-6 lg:p-8">
              <h3 className="font-display font-bold text-2xl mb-6 text-white flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-[#BB86FC]" />
                {activeProject.title}
              </h3>

              <ScrollArea className="h-[500px] pr-4">
                {/* Overview */}
                <div className="mb-8">
                  <div className="flex items-center gap-2 mb-3">
                    <Lightbulb className="w-4 h-4 text-[#BB86FC]" />
                    <h4 className="font-display font-semibold text-lg text-white">Overview</h4>
                  </div>
                  <p className="text-muted-foreground leading-relaxed" data-testid={`eng-overview-${activeProject.id}`}>
                    {activeProject.overview}
                  </p>
                </div>

                {/* Build Process - Visual Timeline */}
                <div>
                  <div className="flex items-center gap-2 mb-4">
                    <Wrench className="w-4 h-4 text-[#BB86FC]" />
                    <h4 className="font-display font-semibold text-lg text-white">Build Process</h4>
                  </div>
                  <div className="space-y-4" data-testid={`eng-process-${activeProject.id}`}>
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
              data-testid="button-close-eng-zoom"
              className="absolute top-4 right-4 z-50 p-2 bg-black/60 backdrop-blur-sm rounded-full border border-white/20 text-white hover:bg-[#BB86FC] hover:border-[#BB86FC] hover:text-black transition-all"
            >
              <X className="w-5 h-5" />
            </button>
            <img
              src={activeProject.image}
              alt={activeProject.title}
              className="w-full h-full object-contain max-h-[85vh]"
              data-testid="eng-zoomed-image"
            />
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
}
