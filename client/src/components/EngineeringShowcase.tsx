import { useState } from "react";
import { motion } from "framer-motion";
import { ZoomIn, X, Lightbulb, Wrench, Calendar, Users, ChevronLeft, ChevronRight, FileText, Target, Star } from "lucide-react";
import { Dialog, DialogContent, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";
import { getAssetUrl } from "@/lib/assets";

interface EngProject {
  id: string;
  title: string;
  images: string[];
  notebookUrl?: string;
  posterUrl?: string;
  duration: string;
  team: string;
  role?: string;
  status?: string;
  featured?: boolean;
  tagline?: string;
  overview: string;
  buildProcess: { phase: string; steps: string[] }[];
  results?: string[];
  materials: string[];
  skills: string[];
}

const engineeringProjects: EngProject[] = [
  {
    id: "six-dof-arm",
    title: "6-DOF Robotic Arm",
    featured: true,
    status: "In Progress",
    tagline: "Ground-up robotic arm: SolidWorks structure, ROS2 inverse kinematics, PID trajectory control.",
    images: [
      "/assets/arm/main.jpg",
      "/assets/arm/cad-angled.jpg",
      "/assets/arm/profile.jpg",
      "/assets/arm/cad-folded.jpg",
      "/assets/arm/vertical.jpg",
      "/assets/arm/gears.jpg"
    ],
    duration: "Jun 2026 – Present",
    team: "Solo Project",
    role: "Design Engineer",
    overview: "A 6-degree-of-freedom robotic arm I'm designing from scratch in SolidWorks, with a PLA+ printed structure driven by ST3215 serial-bus servos. I size the joints, links, and load paths for stiffness and payload capacity, using truss-lightened links and a gear-driven wrist to keep the arm rigid without adding mass. On the controls side, I'm developing inverse kinematics and PID trajectory control in ROS2 and MATLAB/Simulink so the arm follows commanded paths and coordinates, with Arduino-based servo control handling end-to-end actuation. The goal is autonomous pick-and-place of blocks from commanded task-space coordinates.",
    buildProcess: [
      { phase: "Mechanical Design", steps: ["Modeled the full arm from scratch in SolidWorks: base, shoulder, elbow, and wrist joints with printable link geometry", "Sized joints, links, and load paths for stiffness and payload capacity at full reach", "Designed around ST3215 serial-bus servo envelopes and mounting patterns", "Optimized parts for FDM printing in PLA+ with print orientation in mind"] },
      { phase: "Kinematics & Controls", steps: ["Developing the inverse kinematics solution so the arm can reach commanded XYZ coordinates", "Implementing PID trajectory control in ROS2 and MATLAB/Simulink for smooth, repeatable paths", "Simulating joint trajectories before running them on hardware"] },
      { phase: "Electronics & Integration", steps: ["Daisy-chained ST3215 serial-bus servos for clean single-cable joint wiring", "Integrating Arduino-based servo control with task/coordinate command handling", "Building toward end-to-end actuation: command in, coordinated motion out"] },
      { phase: "Testing (Upcoming)", steps: ["Bench-test joint stiffness and repeatability against design targets", "Validate pick-and-place cycles on standard blocks", "Iterate link geometry based on deflection measured under load"] }
    ],
    results: [
      "Full 6-DOF structure designed from scratch in SolidWorks around ST3215 serial-bus servos",
      "IK + PID trajectory control pipeline in development in ROS2 and MATLAB/Simulink",
      "Targeting autonomous pick-and-place of blocks from task-space commands"
    ],
    materials: ["SolidWorks", "PLA+ (FDM)", "ST3215 Serial-Bus Servos", "Arduino", "ROS2", "MATLAB / Simulink"],
    skills: ["Mechanical Design", "Inverse Kinematics", "PID Control", "ROS2", "DFM for 3D Printing"]
  },
  {
    id: "autonomous-nav-robot",
    title: "Autonomous Navigation Robot",
    featured: true,
    tagline: "Camera-localized waypoint navigation that finished the course about twice as fast as the field average.",
    images: ["/assets/autonav/front.jpg", "/assets/autonav/slide8-cad.jpg", "/assets/autonav/side.jpg", "/assets/autonav/top-markers.jpg", "/assets/autonav/electronics.jpg"],
    notebookUrl: "/assets/AutonomousNav_FinalReport.pdf",
    presentationUrl: "/assets/AutonomousNav_Presentation.pdf",
    duration: "Feb 2026 – Apr 2026",
    team: "Aryan, Abilash & Jaiden",
    role: "Mechanical Design & Navigation Software",
    overview: "An autonomous mobile robot that navigates to four target locations on an obstacle course using real-time pose data from an overhead ArUco-marker camera system streamed over MQTT to an ESP8266. I designed the complete modular chassis in SolidWorks under a strict print-time budget and wrote the waypoint navigation logic with PID heading correction. It ran fully closed loop with zero collisions.",
    buildProcess: [
      { phase: "Concept Development", steps: ["Built a morphological chart covering sensor placement, board positioning, cable management, and fastening", "Sketched 3 concept designs and scored them in a weighted evaluation matrix (size, durability, ease of manufacture, safety)", "Selected the winning concept: elevated side sensors, screw-fastened casing, wires routed underneath"] },
      { phase: "Mechanical Design (DFM)", steps: ["Designed a modular 3-part chassis in SolidWorks: base plate, dual-sensor bracket, and standalone third-sensor mount", "Applied DFM under a strict print budget, cutting non-essential geometry while keeping rigidity through snap-fit datums and fastener-located joints", "Added a rod-mounted ArUco marker platform for overhead camera tracking", "Total print time: 4 hr 44 min, under the 5-hour budget"] },
      { phase: "Electrical Design", steps: ["Organized power distribution with dedicated voltage and ground buses since no breadboard was allowed", "Integrated a master power switch between battery and the WEMOS D1R2 (ESP8266)", "Color-coded wiring harness with mounting holes left throughout the base so the power bus could be relocated after wiring"] },
      { phase: "Navigation Software", steps: ["Computed heading with atan2 and distance-to-target from live MQTT pose data", "Wrote a smallest-angle-turn function keeping error within ±180° so the robot always turns the short way", "Implemented a state machine that stops 2 s at each target and advances to the next waypoint", "Fused three ultrasonic sensors for real-time obstacle avoidance during waypoint runs"] },
      { phase: "Testing & Iteration", steps: ["Mounted an OLED display to cross-check camera pose against onboard readings during calibration", "Tuned sensor thresholds and motor speeds across repeated trials to cut wasted corrections", "Reduced course time from 60 s to sub-50 s runs across test iterations"] }
    ],
    results: [
      "Completed the course in about 40 seconds against an 80 second field average, roughly twice as fast",
      "All 4 targets reached with zero collisions; flawless scored run of 214.5 points",
      "Chassis printed in 4 hr 44 min, under the strict 5-hour print budget"
    ],
    materials: ["SolidWorks", "WEMOS D1R2 (ESP8266)", "3× Ultrasonic Sensors", "Zumo Chassis", "MQTT", "ArUco Markers", "OLED Display"],
    skills: ["DFM", "PID Heading Control", "Path Planning", "C++ / Arduino", "Sensor Integration", "Concept Selection"]
  },
  {
    id: "battery-cold-plate",
    title: "Cool-Nexus: Battery Thermal Management",
    featured: true,
    status: "Summer Research 2026",
    tagline: "\"Cool-Nexus\": a PAO-cooled cold plate that holds an eVTOL battery pack at 34 °C under a 500 W load, validated against CFD.",
    images: [
      "/assets/coldplate/enclosure-render.jpg",
      "/assets/coldplate/cfd-thermal.jpg",
      "/assets/coldplate/cad-iso.jpg",
      "/assets/coldplate/cad-alt.jpg",
      "/assets/coldplate/drawing.jpg",
      "/assets/coldplate/cad-render.jpg",
      "/assets/coldplate/fluid-properties.jpg",
      "/assets/coldplate/specific-heat.jpg",
      "/assets/coldplate/results-sweep.jpg",
      "/assets/coldplate/flow-distribution.jpg"
    ],
    posterUrl: "/assets/ColdPlate_Research_Poster.pdf",
    duration: "Apr 2026 – Present",
    team: "Aryan Bhatnagar, Angelina Liclican (CFD), Javier Ramirez (model) · Advisor: Dr. Zahra Pournorouz",
    role: "Fluid Selection & Cold Plate Design",
    overview: "Cool-Nexus is a Stevens Scholars Summer Research project on thermal management for an eVTOL (electric aircraft) battery pack. The standard 60/40 ethylene-glycol/water coolant conducts electricity and freezes near −45 °C — both dangerous next to a high-voltage pack — so we moved to PAO, an electrically insulating oil that stays fluid in the cold, and asked whether nanoparticles could boost its cooling without spiking viscosity. I led the coolant selection and designed the cold plate that dissipates the pack's 500 W landing-hover peak while holding the cell interface under 40 °C with less than 5 °C of spread across the plate.",
    buildProcess: [
      { phase: "Coolant Selection", steps: ["Compared three PAO nanofluids: alumina (Al2O3), hexagonal boron nitride (hBN), and a MWCNT + MoS2 hybrid", "Al2O3 and hBN lacked data below 30 °C, so I selected the hybrid, which had measured properties across the full 20–80 °C range", "The hybrid gave 21% higher thermal conductivity at nearly unchanged viscosity and density, trading 18% lower specific heat", "Flagged a specific-heat discrepancy (2900 vs ~1950 J/kg·K from the Cragoe correlation) and carried it as a bounded uncertainty"] },
      { phase: "Cold Plate Design (SolidWorks)", steps: ["PAO is viscous, so limiting pressure drop was the primary design goal", "Compared three channel layouts — parallel, serpentine, and a U+U manifold — at identical flow, heat load, and fluid properties", "Selected Design 3: a U+U manifold with six 30 × 6 mm channels in a 500 × 250 mm aluminium 6061 plate", "Flow is deeply laminar at Re ≈ 26"] },
      { phase: "Modeling & CFD Validation", steps: ["Built the analytical sizing/thermal model in MATLAB and validated it against Ansys Discovery CFD", "Outlet temperature agreed to 0.2% (22.54 vs 22.5 °C) and max plate temperature to 0.41% (33.86 vs 34.0 °C)", "Reconciled the wall-temperature difference: the model reports an average channel-wall temp while CFD reports the peak local plate temp", "Used outlet temperature and pressure drop as the validation metrics, with max temperature evaluated as a design limit"] },
      { phase: "Results & Findings", steps: ["Met both requirements (Tmax ≤ 40 °C, ΔT ≤ 5 °C) across the 0.05–0.10 kg/s flow sweep", "CFD revealed the outer channels carry ~27% more flow than the inner channels (CV 9% at baseline, 13% at low flow)", "Traced the maldistribution to the manifold pressure gradient, not channel length — the key correction to the equal-flow hand assumption", "Showed the result is sensitive to the PAO specific heat: the low estimate would push uniformity from 4.4 °C to ~5.6 °C and fail at all but the highest flow"] }
    ],
    results: [
      "Held the cell interface at 34.0 °C (limit 40 °C) with 4.4 °C uniformity (limit 5 °C) under a 500 W load — both requirements PASS",
      "MATLAB model matched Ansys CFD within 0.2% on outlet temperature and 0.41% on peak plate temperature",
      "Selected a PAO hybrid nanofluid delivering +21% thermal conductivity at nearly unchanged viscosity",
      "Uncovered ~27% outer-vs-inner channel flow maldistribution (CV 9–13%) that the hand model had missed"
    ],
    materials: ["SolidWorks", "MATLAB", "Ansys Discovery (CFD)", "Aluminium 6061", "PAO Hybrid Nanofluid"],
    skills: ["Heat Transfer", "Thermal-Fluid Modeling", "CFD Validation", "GD&T / Drafting", "Fluid Selection", "Research Documentation"]
  },
  {
    id: "vexu-robot",
    title: "VEXU Competition Robot",
    featured: true,
    tagline: "Leading the mechanical design of Stevens' VEXU robot: pneumatics, conveyor, and precision scoring.",
    images: [
      "/assets/vexu/assembly.jpg",
      "/assets/vexu/bracket.jpg",
      "/assets/vexu/battery-mount.jpg",
      "/assets/vexu/rail.jpg"
    ],
    notebookUrl: "/assets/VEXU_Engineering_Notebook.pdf",
    duration: "Sep 2025 – Present",
    team: "Stevens Robotics Club · 20 members",
    role: "Mechanical Design Lead & Treasurer",
    overview: "As Mechanical Design Lead of the Stevens VEXU team, I own the SolidWorks design of our competition robot: custom 3D-printed sensor housings, modular battery mounts, a rigid mechanical aligner for repeatable high-speed scoring, and a high-pressure pneumatic actuation system with a custom conveyor. The robot scored reliably throughout competition.",
    buildProcess: [
      { phase: "Mechanical Design", steps: ["Led the SolidWorks design of the full competition robot", "Designed custom 3D-printed sensor housings and modular battery mounts", "Built a rigid mechanical aligner enabling repeatable high-speed scoring"] },
      { phase: "Pneumatics & Conveyor", steps: ["Designed and integrated a high-pressure pneumatic actuation system", "Optimized cylinder placement and spatial tolerances for fast, reliable field deployment", "Developed a custom conveyor for game-piece handling"] },
      { phase: "Team Operations", steps: ["Manage team finances and procurement as Treasurer", "Run university budgets and purchase orders to fund iterative rapid prototyping cycles", "Coordinate design reviews across a 20-member team"] }
    ],
    results: [
      "Robot scored reliably throughout competition with repeatable high-speed alignment",
      "Pneumatic system and conveyor deployed reliably on the field",
      "Prototyping cycles kept funded and on schedule across the season"
    ],
    materials: ["SolidWorks", "VEX Hardware", "Pneumatics", "3D-Printed Fixtures", "Sensors"],
    skills: ["Mechanical Design Leadership", "Pneumatic Systems", "Tolerance Analysis", "Rapid Prototyping", "Budget Management"]
  },
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
            className="absolute left-2 top-1/2 -translate-y-1/2 p-2 bg-black/60 backdrop-blur-sm rounded-full border border-white/20 text-white hover:bg-[#45a6dd] hover:border-[#45a6dd] hover:text-black opacity-0 group-hover:opacity-100"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={goToNext}
            data-testid="eng-carousel-next"
            className="absolute right-2 top-1/2 -translate-y-1/2 p-2 bg-black/60 backdrop-blur-sm rounded-full border border-white/20 text-white hover:bg-[#45a6dd] hover:border-[#45a6dd] hover:text-black opacity-0 group-hover:opacity-100"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
          <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1.5">
            {images.map((_, idx) => (
              <button
                key={idx}
                onClick={(e) => handleDotClick(e, idx)}
                className={`w-2 h-2 rounded-full ${
                  idx === currentIndex ? "bg-[#45a6dd] w-4" : "bg-white/40 hover:bg-white/60"
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
  const [selectedProject, setSelectedProject] = useState<EngProject | null>(null);
  const [zoomImageIndex, setZoomImageIndex] = useState<number | null>(null);

  const featuredProjects = engineeringProjects.filter((p) => p.featured);
  const otherProjects = engineeringProjects.filter((p) => !p.featured);

  return (
    <section id="engineering-showcase" className="py-24 bg-secondary/10">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.4 }}
          className="text-center max-w-2xl mx-auto mb-12"
        >
          <span className="font-mono text-primary text-sm tracking-widest uppercase mb-2 block">
            Hands-On Engineering
          </span>
          <h2 className="font-display font-bold text-4xl mb-4">Engineering Projects</h2>
          <p className="text-muted-foreground">
            Every project here went from a sketch to a working build. Click one for the full design story.
          </p>
        </motion.div>

        {/* Project Grid (featured first) */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.4 }}
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4"
        >
          {[...featuredProjects, ...otherProjects].map((project) => (
            <button
              key={project.id}
              onClick={() => setSelectedProject(project)}
              data-testid={`eng-tab-${project.id}`}
              className="group relative aspect-[4/3] rounded-xl overflow-hidden border border-white/10 hover:border-[#45a6dd]/50 transition-all hover:shadow-[0_0_30px_rgba(69,166,221,0.18)]"
            >
              <img
                src={project.images[0].startsWith('/assets/') ? getAssetUrl(project.images[0]) : project.images[0]}
                alt={project.title}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />
              {project.featured && (
                <span className="absolute top-2 left-2 inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-[#45a6dd]/20 border border-[#45a6dd]/40 backdrop-blur-sm text-[10px] font-mono text-[#45a6dd]">
                  <Star className="w-3 h-3 fill-[#45a6dd]" /> FEATURED
                </span>
              )}
              <div className="absolute bottom-0 left-0 right-0 p-3">
                <h3 className="font-mono text-xs font-medium text-white truncate">{project.title}</h3>
              </div>
            </button>
          ))}
        </motion.div>

        {/* Project Modal */}
        <Dialog open={!!selectedProject && zoomImageIndex === null} onOpenChange={(open) => !open && setSelectedProject(null)}>
          <DialogContent hideCloseButton className="w-screen h-screen max-w-none max-h-none rounded-none p-0 bg-background border-none overflow-hidden">
            <DialogTitle className="sr-only">{selectedProject?.title}</DialogTitle>
            <DialogDescription className="sr-only">Project details for {selectedProject?.title}</DialogDescription>
            
            {selectedProject && (
              <div className="flex flex-col h-screen">
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
                        <span className="font-mono text-xs text-[#45a6dd] uppercase tracking-wider">Engineering Project</span>
                        <h3 className="font-display font-bold text-3xl text-white mt-1">{selectedProject.title}</h3>
                      </div>
                      <button
                        onClick={() => setSelectedProject(null)}
                        data-testid="eng-modal-close"
                        className="p-2 bg-secondary/50 rounded-full border border-white/10 text-white hover:bg-[#45a6dd] hover:border-[#45a6dd] hover:text-black transition-all"
                      >
                        <X className="w-5 h-5" />
                      </button>
                    </div>
                    <div className="flex flex-wrap gap-4 mt-4">
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Calendar className="w-4 h-4 text-[#45a6dd]" />
                        <span data-testid={`eng-duration-${selectedProject.id}`}>{selectedProject.duration}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Users className="w-4 h-4 text-[#45a6dd]" />
                        <span data-testid={`eng-team-${selectedProject.id}`}>{selectedProject.team}</span>
                      </div>
                      {selectedProject.role && (
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <Wrench className="w-4 h-4 text-[#45a6dd]" />
                          <span data-testid={`eng-role-${selectedProject.id}`}>{selectedProject.role}</span>
                        </div>
                      )}
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
                          <Lightbulb className="w-4 h-4 text-[#45a6dd]" />
                          <h4 className="font-display font-semibold text-white">Overview</h4>
                        </div>
                        <p className="text-muted-foreground text-sm leading-relaxed" data-testid={`eng-overview-${selectedProject.id}`}>
                          {selectedProject.overview}
                        </p>
                      </div>

                      {/* Results */}
                      {selectedProject.results && (
                        <div className="bg-[#45a6dd]/5 rounded-xl p-4 border border-[#45a6dd]/20">
                          <div className="flex items-center gap-2 mb-3">
                            <Target className="w-4 h-4 text-[#45a6dd]" />
                            <h4 className="font-display font-semibold text-white">Results</h4>
                          </div>
                          <ul className="space-y-2" data-testid={`eng-results-${selectedProject.id}`}>
                            {selectedProject.results.map((result, i) => (
                              <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                                <div className="w-1.5 h-1.5 rounded-full bg-[#45a6dd] mt-2 flex-shrink-0" />
                                <span>{result}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}

                      {/* Materials & Skills */}
                      <div className="bg-secondary/30 rounded-xl p-4 border border-white/5">
                        <h4 className="font-mono text-xs uppercase text-[#45a6dd] mb-3">Materials & Skills</h4>
                        <div className="flex flex-wrap gap-2">
                          {selectedProject.materials.map((mat, i) => (
                            <span key={i} className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs text-muted-foreground">
                              {mat}
                            </span>
                          ))}
                          {selectedProject.skills.map((skill, i) => (
                            <span key={i} className="px-3 py-1 bg-[#45a6dd]/10 border border-[#45a6dd]/30 rounded-full text-xs text-[#45a6dd]">
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
                            className="flex items-center gap-2 px-4 py-3 bg-[#45a6dd]/10 border border-[#45a6dd]/30 rounded-xl text-[#45a6dd] hover:bg-[#45a6dd] hover:text-black transition-all font-mono text-sm"
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
                            className="flex items-center gap-2 px-4 py-3 bg-[#45a6dd]/10 border border-[#45a6dd]/30 rounded-xl text-[#45a6dd] hover:bg-[#45a6dd] hover:text-black transition-all font-mono text-sm"
                          >
                            <FileText className="w-4 h-4" />
                            View Project Poster
                          </a>
                        )}
                        {'presentationUrl' in selectedProject && selectedProject.presentationUrl && (
                          <a
                            href={selectedProject.presentationUrl.startsWith('/assets/') ? getAssetUrl(selectedProject.presentationUrl) : selectedProject.presentationUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            data-testid="eng-presentation-link"
                            className="flex items-center gap-2 px-4 py-3 bg-[#45a6dd]/10 border border-[#45a6dd]/30 rounded-xl text-[#45a6dd] hover:bg-[#45a6dd] hover:text-black transition-all font-mono text-sm"
                          >
                            <FileText className="w-4 h-4" />
                            View Presentation
                          </a>
                        )}
                      </div>
                    </div>

                    {/* Right Column - Build Process */}
                    <div>
                      <div className="flex items-center gap-2 mb-4">
                        <Wrench className="w-4 h-4 text-[#45a6dd]" />
                        <h4 className="font-display font-semibold text-white">Build Process</h4>
                      </div>
                      <div className="space-y-4" data-testid={`eng-process-${selectedProject.id}`}>
                        {selectedProject.buildProcess.map((phase, phaseIndex) => (
                          <div key={phase.phase} className="relative">
                            <div className="flex items-center gap-3 mb-3">
                              <div className="w-8 h-8 rounded-lg bg-[#45a6dd] flex items-center justify-center text-black font-bold text-sm flex-shrink-0">
                                {phaseIndex + 1}
                              </div>
                              <h5 className="font-mono font-semibold text-[#45a6dd] text-sm">{phase.phase}</h5>
                            </div>
                            <div className="ml-4 pl-7 border-l-2 border-[#45a6dd]/30 space-y-2 pb-4">
                              {phase.steps.map((step, stepIndex) => (
                                <div key={stepIndex} className="flex items-start gap-2">
                                  <div className="w-1.5 h-1.5 rounded-full bg-[#45a6dd]/60 mt-2 flex-shrink-0" />
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
              className="absolute top-4 right-4 z-50 p-2 bg-black/60 backdrop-blur-sm rounded-full border border-white/20 text-white hover:bg-[#45a6dd] hover:border-[#45a6dd] hover:text-black transition-all"
            >
              <X className="w-5 h-5" />
            </button>
            {selectedProject && zoomImageIndex !== null && (
              <>
                <img
                  src={selectedProject.images[zoomImageIndex].startsWith('/assets/') ? getAssetUrl(selectedProject.images[zoomImageIndex]) : selectedProject.images[zoomImageIndex]}
                  alt={`${selectedProject.title} - Image ${zoomImageIndex + 1}`}
                  className="w-full h-full object-contain max-h-[85vh]"
                  data-testid="eng-zoomed-image"
                />
                {selectedProject.images.length > 1 && (
                  <>
                    <button
                      onClick={() => setZoomImageIndex((prev) => prev !== null ? (prev === 0 ? selectedProject.images.length - 1 : prev - 1) : 0)}
                      data-testid="eng-zoom-prev"
                      className="absolute left-4 top-1/2 -translate-y-1/2 p-3 bg-black/60 backdrop-blur-sm rounded-full border border-white/20 text-white hover:bg-[#45a6dd] hover:border-[#45a6dd] hover:text-black transition-all"
                    >
                      <ChevronLeft className="w-6 h-6" />
                    </button>
                    <button
                      onClick={() => setZoomImageIndex((prev) => prev !== null ? (prev === selectedProject.images.length - 1 ? 0 : prev + 1) : 0)}
                      data-testid="eng-zoom-next"
                      className="absolute right-4 top-1/2 -translate-y-1/2 p-3 bg-black/60 backdrop-blur-sm rounded-full border border-white/20 text-white hover:bg-[#45a6dd] hover:border-[#45a6dd] hover:text-black transition-all"
                    >
                      <ChevronRight className="w-6 h-6" />
                    </button>
                    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 px-3 py-1.5 bg-black/60 backdrop-blur-sm rounded-full text-sm text-white/80 font-mono">
                      {zoomImageIndex + 1} / {selectedProject.images.length}
                    </div>
                  </>
                )}
              </>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
}
