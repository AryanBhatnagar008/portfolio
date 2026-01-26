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
    buildProcess: `Day 1: Problem Definition & Sketching
- Identified need for headphone storage with integrated charging
- Sketched 4 different designs (2 popsicle stick, 2 cardboard)
- Selected popsicle stick design for durability
- Chose design with charger integration feature

Day 2: Base Construction
- Built the base using popsicle sticks with cut edges
- Added balsa wood accents for premium look
- Created foundation structure with cross-supports
- Tested stability with headphone weight

Day 3: Vertical Assembly
- Cut vertical support sticks to headphone height
- Constructed the headphone rest/head piece
- Added decorative detailing on sides
- Attached small balsa wood trim pieces

Day 4: Final Modifications
- Added phone stand attachment
- Integrated charger cable routing
- Final assembly and testing
- Achieved dual-device functionality`,
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
    buildProcess: `Design Phase (Days 1-3):
- Brainstormed 4 catapult concepts
- Created decision matrix scoring functionality, design, durability, accuracy
- Selected traditional catapult with rubber band propulsion
- Drafted top-down and side-view technical drawings

Construction Phase (Days 4-8):
- Cut 12"x5" wooden base using hand saw
- Reduced dowels from 12" to 8" for optimal leverage
- Built support structure with hot glue + popsicle sticks
- Arm length: 10.5 inches for trajectory control

Mechanism Development (Days 9-11):
- Tested cardboard, tape, and string for arm pivot (all failed)
- Solution: Plastic straw on thin wood dowel for rotation
- Attached rubber bands for launch force
- Added nail reinforcements after initial failure

Final Assembly (Days 12-14):
- Reinforced with additional hot glue and tape
- Added snail decorations (cardboard shell, googly eyes)
- Calibrated for 10-foot launch distance
- Final test: 20/20 successful launches into target box`,
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
    buildProcess: `Research Phase:
- Analyzed 30 existing beverage holder designs
- Documented pros/cons of dispensers, mugs, bottles, thermoses
- Created mind map exploring hot vs cold holder differences
- Selected "Chicken & Egg" theme for cohesive design story

Onshape CAD - Chicken Kettle:
- Used Loft tool for organic body shape
- Revolve for main body structure
- Extrude for wings/handles
- Added Wattle and Comb details
- Created curved lid using projected curves
- Applied Fillet for smooth transitions

Onshape CAD - Egg Mug:
- Ellipse sketch (4.5" height, 1.09" radius opening)
- Revolve for egg shape generation
- Shell tool to hollow interior
- Extrude:remove for drinking opening
- Shifted planes for handle placement
- Created chicken feet with Loft tool

Assembly:
- Designed custom packaging/boxes
- Created claws using multiple plane shifts
- Added realistic toe details with circular extrudes
- Final renders with materials applied`,
    materials: ["Onshape CAD", "3D Modeling", "Digital Prototyping"],
    skills: ["CAD Design", "Revolve", "Loft", "Shell", "Boolean Operations"]
  },
  {
    id: "bridge",
    title: "K-Truss Bridge",
    image: "https://images.unsplash.com/photo-1545296664-39db56ad95bd?auto=format&fit=crop&q=80&w=800",
    duration: "6 Weeks",
    team: "Solo Project",
    overview: "A structural engineering project building a K-Truss bridge from balsa wood. The K-Truss design improves upon the Pratt Truss by shortening vertical compression members, increasing resistance to buckling while maintaining load capacity.",
    buildProcess: `Engineering Research:
- Studied 6 basic bridge forms (Beam, Truss, Arch, Suspension, Cantilever, Cable-Stayed)
- Analyzed forces: Tension, Compression, Torsion, Shear
- Researched Warren, Howe, K, and Pratt truss designs
- Selected K-Truss for superior buckling resistance

Design Specifications:
- Bottom chord: 12 inches
- Top chord: 9 inches (tapered design)
- Height: According to K-truss ratios
- Scale: 1:2 for prototype

Cut List Calculations:
- Top Chords: 2x 10" (1/4" balsa) = 20"
- Bottom Chords: 2x 12" (1/4" balsa) = 24"
- Vertical Members: 12x 3" (1/4" balsa) = 36"
- Diagonal Members: 16x 3" (1/8" balsa) = 48"
- Floor Beams: 8x 3" (1/4" balsa) = 24"
- Total: 134" of 1/4" + 78" of 1/8" balsa

Construction Process:
- Scored balsa with utility knife (multiple passes)
- Assembled trusses on graph paper template
- Used white glue with masking tape clamps
- Tested incrementally with increasing weight`,
    materials: ["1/4\" Balsa Wood", "1/8\" Balsa Wood", "White Glue", "Masking Tape"],
    skills: ["Structural Engineering", "Load Analysis", "Precision Cutting", "Technical Drawing"]
  },
  {
    id: "ironman",
    title: "Iron Man Helmet",
    image: "https://images.unsplash.com/photo-1635863138275-d9b33299680b?auto=format&fit=crop&q=80&w=800",
    duration: "11 Days",
    team: "Aryan & Aran",
    overview: "A wearable Iron Man helmet built using CAD design, laser cutting, 3D printing, and Arduino electronics. Features motorized face plate mechanism with custom circuitry and coding.",
    buildProcess: `CAD Design (Days 1-2):
- Designed helmet in Onshape
- Sketched face outline using Pen tool
- Applied Projectile Curve for 3D surface
- Created outer shell as separate sub-assembly
- Generated 2D patterns for laser cutting

Laser Cutting Prep (Days 3-4):
- Traced CAD patterns in Adobe Illustrator
- Scaled drawings for proper fit
- Outlined all pieces for laser recognition
- Cut initial cardboard prototype pieces

Fabrication (Days 5-7):
- Laser cut all cardboard panels
- Assembled head dome section
- Glued panels with proper alignment
- 3D printed custom connector pieces
- Created face plate hinge mechanism

Electronics Integration (Days 8-11):
- Programmed Arduino for motor control
- Wired servo motor for face plate
- Integrated push-button trigger
- Assembled wiring harness
- Final testing of motorized opening`,
    materials: ["Cardboard", "3D Printed PLA", "Arduino", "Servo Motor", "Hot Glue", "Spray Paint"],
    skills: ["CAD/CAM", "Laser Cutting", "3D Printing", "Arduino", "Electronics"]
  },
  {
    id: "security-bot",
    title: "Security Robot",
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80&w=800",
    duration: "3 Weeks",
    team: "Aryan, Arnav & Anikait",
    overview: "An autonomous security robot with a rotating vision sensor, built-in catapult defense system, and alarm. Patrols a 5x5 ft area, detects intruders, and can be controlled remotely by the owner.",
    buildProcess: `Hardware Assembly:
- Mounted rotating vision sensor on motor
- Attached front-facing distance sensor
- Built catapult arm with rubber band propulsion
- Changed gear ratio for stronger motor torque
- Tightened all loose screws on chassis
- Connected all motors to VEX brain

Catapult Mechanism:
- Positioned rubber bands for maximum force
- Extended arm length for better trajectory
- Added rewind capability via gear system
- Calibrated launch angle for accuracy

Software Development (Pseudocode):
1. Initialize robot and sensors
2. Set variables: intruderDetected, objectMissing
3. Loop: Move in circular patrol path
4. Check sensors continuously
5. If intruder detected → Activate catapult
6. If object missing → Sound alarm
7. Remote override for owner control

Vision Sensor Programming:
- Configured object detection thresholds
- Implemented continuous scanning loop
- Added alarm melody sequences
- Tested sensor reliability across trials
- Fine-tuned distance sensor integration`,
    materials: ["VEX Robotics Kit", "Vision Sensor", "Distance Sensor", "Motors", "Rubber Bands"],
    skills: ["Robotics", "C++ Programming", "Sensor Integration", "Mechanical Design"]
  },
  {
    id: "lego-robots",
    title: "LEGO Robots",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&q=80&w=800",
    duration: "1 Day",
    team: "Aryan & Anikait",
    overview: "A rapid prototyping challenge to design functional robots from LEGO kits. Created two robots: one capable of carrying a hammer 10 meters, and another designed to push objects across distances.",
    buildProcess: `Robot #1: Hammer Carrier
Challenge: Carry a hammer 36 inches (extended to 10m)
- Built stable base for hammer weight distribution
- Limited materials required creative solutions
- Added T-shaped retention pieces to prevent slipping
- Tested with actual hammer weight
- Achieved 10-meter carry distance

Robot #2: Object Pusher
Challenge: Push an object 10 meters
- Attached wheels to base for mobility
- Designed front-mounted pushing claw
- Initial design too complicated - poor results
- Simplified by removing unnecessary parts
- Extended robot length for stability
- Final design achieved consistent pushing

Design Lessons Learned:
- Simplicity often beats complexity
- Foundation stability is critical
- Test early and iterate quickly
- Material constraints drive innovation
- Focus on core functionality first`,
    materials: ["LEGO Technic", "LEGO Standard Bricks", "Wheels", "Axles"],
    skills: ["Rapid Prototyping", "Mechanical Design", "Problem Solving", "Iteration"]
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

        {/* Tabbed Navigation */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-2 mb-12"
        >
          {engineeringProjects.map((project) => (
            <button
              key={project.id}
              onClick={() => setActiveTab(project.id)}
              data-testid={`eng-tab-${project.id}`}
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

                {/* Build Process */}
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <Wrench className="w-4 h-4 text-[#BB86FC]" />
                    <h4 className="font-display font-semibold text-lg text-white">Build Process</h4>
                  </div>
                  <pre
                    className="font-mono text-sm text-muted-foreground whitespace-pre-wrap leading-relaxed bg-black/30 p-4 rounded-lg border border-white/5"
                    data-testid={`eng-process-${activeProject.id}`}
                  >
                    {activeProject.buildProcess}
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
