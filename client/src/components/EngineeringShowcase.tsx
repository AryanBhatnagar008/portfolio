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
    id: "ardc",
    title: "Home Renovation",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=800",
    duration: "6 Weeks",
    team: "Aryan & Jascha",
    overview: "Architectural Renovation Design Challenge - A complete home renovation design project creating floor plans for a two-story family home with 2-car garage, great room, family kitchen, master suite, nursery, den, and outdoor living space. Designed using Planner5D with attention to building codes and setback requirements.",
    buildProcess: `Research Phase (Week 1):
- Studied bedroom size requirements & building codes
- Researched kitchen work triangle layouts
- Explored garage standards (24x24 ft)
- Created comprehensive mind map for each room
- Evaluated software options (Floorplanner vs Planner5D)

Design Requirements:
- 2-car garage with breezeway connection
- Great room living area
- Family kitchen with inclusive dining
- Laundry/utility room & powder room
- Master bedroom with ensuite bath
- Nursery and den/study
- Upstairs separate bathroom
- Outdoor living space (patio/deck)

Floor Plan Development (Weeks 2-3):
- Drafted first floor in Planner5D
- Entry opens to living area with stairs visible
- Guest bedroom positioned top-left (9x12')
- Great room combined living/kitchen (9x12')
- Bathroom and laundry room (9x7' each)
- Living room: 15x14'

Second Floor Layout:
- Cut-in portions: 8x6' (left) and 6x6' (right)
- Master suite with private bath
- Nursery adjacent to master
- Den/study with natural lighting

Peer Review & Refinement (Weeks 4-6):
- Received feedback to swap bottom floor locations
- Combined best elements from both partners' designs
- Added furniture: beds, cribs, kitchen appliances
- Designed right-triangle kitchen countertop
- Added breezeway and garage connection
- Finalized with bookshelves, carpets, TV placement`,
    materials: ["Planner5D", "Floor Plans", "Building Codes", "Architectural Standards"],
    skills: ["Architectural Design", "Space Planning", "CAD Software", "Building Codes"]
  },
  {
    id: "automata",
    title: "Gladiator Automata",
    image: "https://images.unsplash.com/photo-1569144157591-c60f3f82f137?auto=format&fit=crop&q=80&w=800",
    duration: "2 Weeks",
    team: "Aryan & Zielig",
    overview: "A mechanical automaton featuring a gladiator figure with moving sword and shield arms, powered by a hand-crank mechanism using snail cams and offset cams. Designed entirely in Onshape with full animation capabilities.",
    buildProcess: `Research & Concept (Day 1):
- Studied motion direction mechanisms
- Researched different cam types:
  - Snail cams for sword motion
  - Offset cams for shield motion
- Analyzed material options
- Created 4 initial prototype sketches
- Selected gladiator concept for build

Onshape CAD Modeling (Days 2-3):
- Sketched gladiator outline from reference image
- Modeled base structure
- Created snail cams using parametric values
  (Followed tutorial for precise cam profiles)
- Designed offset cams for shield
- Built gladiator body as fixed part
- Modeled arms separately for articulation
- Added connecting rods for cam-to-arm linkage

Assembly Challenges (Days 4-5):
- Connected arms to body with proper mates
- Attached rods to snail cams
- Issue: Rods floating instead of following cams
- Solution: Added fillets on joining faces
- Used tangent mates for smooth motion
- Fixed base and body parts (non-moving)

Animation & Refinement (Days 6+):
- Configured rotation mates for crank
- Set up slider-crank mechanism
- Troubleshot rod sliding against arm issue
- Applied position constraints
- Final animation shows:
  - Crank rotation drives cams
  - Cams push rods up/down
  - Rods articulate sword and shield arms
- Note: Onshape performance decreased with
  complex animation (lag when moving parts)`,
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
    buildProcess: `Research & Design Phase:
- Studied bird species native to New Jersey
- Researched entrance hole sizing (1-1.25" diameter)
- Determined mounting preferred over hanging for bird security
- Created multiple design concepts in Onshape
- Selected complex multi-house design with bird feeder

Design Specifications:
- Base: 5" x 5" x 0.41" thick
- Roof panels: 3.2" x 5" (10 pieces)
- Front arrow-shaped panels: 7" x 5" (2 pieces)
- Back panels: 10" x 5" (4 pieces)
- Large front: 15" x 5"
- Side arrow panels: 10" x 10" (2 pieces)
- Top house sides: 5" x 5" (2 pieces)
- Total material: 880 sq inches

Fabrication Process:
- Cut all pieces per cut list using scroll saw
- Created pilot holes (1.25" diameter) with scroll saw
- Nailed side panels of small birdhouse together
- Glued side panels of second small birdhouse
- Assembled large center house to base with wood glue
- Attached 5x5 panels to unoccupied edges

Roof & Final Assembly:
- Adjusted roof dimensions using bandsaw
- Created bevel joints by angling bandsaw table
- Glued roofs together at bevel joint
- Attached roofs with tape to hold during cure
- Built bird feeder from scrap wood (5x5 + 5x1)
- Feeder fits precisely between miniature houses

Lessons Learned:
- Nail gun would provide stronger joints than glue alone
- Account for wood thickness in cut list measurements
- Set realistic time goals to avoid rushing
- Precision cuts require dedicated focus time`,
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
