import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link as ScrollLink } from "react-scroll";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { DesignShowcase } from "@/components/DesignShowcase";
import { EngineeringShowcase } from "@/components/EngineeringShowcase";
import { ProgrammingShowcase } from "@/components/ProgrammingShowcase";
import { Button } from "@/components/ui/button";
import { Send, Download, CircuitBoard, Wrench, Hammer, Ruler, FlaskConical, Cpu, Linkedin, Code, Palette } from "lucide-react";
import { getAssetUrl } from "@/lib/assets";

// Skill groups mirror the resume so recruiters can cross-reference instantly.
const skillGroups = [
  {
    category: "CAD & Design",
    icon: Ruler,
    color: "#7fb8dd",
    skills: ["SolidWorks (CSWA Certified)", "CATIA V5", "Onshape", "AutoCAD", "3D Modeling", "2D Drafting & Drawings"],
  },
  {
    category: "Analysis & Simulation",
    icon: FlaskConical,
    color: "#7fb8dd",
    skills: ["MATLAB", "Simulink", "FEA", "Heat Transfer & Thermal Modeling", "Fluid Mechanics Simulation"],
  },
  {
    category: "Controls & Programming",
    icon: Cpu,
    color: "#7fb8dd",
    skills: ["C/C++", "Python", "ROS2", "Arduino / ESP32", "PID Control", "MQTT / IoT"],
  },
  {
    category: "Prototyping & Methods",
    icon: Hammer,
    color: "#7fb8dd",
    skills: ["GD&T", "DFM / DFA", "Tolerance Analysis", "FDM 3D Printing (PLA/ABS)", "Failure Analysis", "Assembly & Bring-up"],
  },
];

// --- Hero Section ---
const roles = ["Mechanical Design", "Robotics", "Thermal Systems", "Rapid Prototyping"];

const heroStats = [
  { value: "3.94", label: "GPA @ Stevens" },
  { value: "CSWA", label: "SolidWorks Certified" },
  { value: "20+", label: "Engineers Led (VEXU)" },
  { value: "12+", label: "Projects Built" },
];

function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* faint drawing in the margin, like a sheet corner */}
      <div className="absolute -right-16 -bottom-16 opacity-[0.06] pointer-events-none text-primary">
        <CircuitBoard size={420} strokeWidth={1} />
      </div>

      <div className="container relative z-10 px-4 flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-sm bg-primary/10 border border-primary/30 mb-8">
            <span className="w-1.5 h-1.5 bg-primary" />
            <span className="text-[11px] font-mono text-primary uppercase tracking-[0.2em]">Open to Internships &amp; Co-ops</span>
          </div>

          <div className="font-mono text-xs text-muted-foreground uppercase tracking-[0.3em] mb-4">Mechanical Engineer</div>

          <h1 className="font-display font-bold text-5xl md:text-7xl lg:text-8xl mb-6 leading-[0.95] tracking-tight">
            Aryan <br />
            Bhatnagar
          </h1>

          <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto mb-8 leading-relaxed">
            Mechanical Engineering student at Stevens Institute of Technology. I design,
            build, and test real hardware, from liquid-cooled battery plates to
            competition robots.
          </p>

          {/* discipline focus, framed like a drawing annotation (no terminal cursor) */}
          <div className="h-8 mb-10 flex items-center justify-center gap-3 font-mono text-sm md:text-base">
            <span className="text-muted-foreground uppercase tracking-widest">Focus</span>
            <span className="h-px w-8 bg-border" />
            <AnimatePresence mode="wait">
              <motion.span
                key={roleIndex}
                initial={{ y: 12, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -12, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="text-primary font-medium"
              >
                {roles[roleIndex]}
              </motion.span>
            </AnimatePresence>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
            <ScrollLink to="projects" smooth={true} duration={800} offset={-50}>
              <Button size="lg" className="rounded-sm px-8 py-6 text-base font-semibold bg-primary hover:bg-primary/90 text-primary-foreground transition-colors">
                View My Work
              </Button>
            </ScrollLink>
            <a href={getAssetUrl("/assets/Bhatnagar_Aryan_Resume.pdf")} download>
              <Button variant="outline" size="lg" className="rounded-sm px-8 py-6 text-base font-semibold border-border hover:bg-primary/5 hover:border-primary/50 transition-colors">
                <Download className="mr-2 w-5 h-5" /> Resume
              </Button>
            </a>
            <ScrollLink to="contact" smooth={true} duration={800} offset={-50}>
              <Button variant="outline" size="lg" className="rounded-sm px-8 py-6 text-base font-semibold border-border hover:bg-primary/5 hover:border-primary/50 transition-colors">
                Contact
              </Button>
            </ScrollLink>
          </div>

          <div className="mt-14 grid grid-cols-2 sm:grid-cols-4 gap-px bg-border border border-border max-w-3xl mx-auto">
            {heroStats.map((stat) => (
              <div key={stat.label} className="bg-background px-4 py-5">
                <div className="font-display font-bold text-2xl text-foreground">{stat.value}</div>
                <div className="font-mono text-[10px] uppercase tracking-[0.15em] text-muted-foreground mt-1.5">{stat.label}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

// --- About Section ---
function About() {
  return (
    <section id="about" className="py-24 bg-secondary/20 relative">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5 }}
            className="relative order-2 md:order-1"
          >
            <div className="aspect-square rounded-sm overflow-hidden bg-secondary border border-border relative group">
              <img
                src={getAssetUrl("/assets/profile-photo.jpg")}
                alt="Aryan Bhatnagar"
                className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 to-transparent" />
              <div className="absolute top-3 left-3 font-mono text-[10px] text-primary/90 uppercase tracking-[0.2em] bg-background/70 px-2 py-1 border border-primary/30">Fig. 01 — Profile</div>
              <div className="absolute bottom-6 left-6">
                <h3 className="font-display font-bold text-2xl">Aryan Bhatnagar</h3>
                <p className="font-mono text-xs text-muted-foreground mt-1">Hoboken / Princeton, NJ</p>
              </div>
            </div>
            {/* Drafting frame offset */}
            <div className="absolute -inset-3 border border-primary/25 rounded-sm -z-10 translate-x-3 translate-y-3" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5 }}
            className="order-1 md:order-2 space-y-6"
          >
            <div className="flex items-center gap-4 mb-4">
              <span className="h-px w-10 bg-primary/60" />
              <span className="font-mono text-primary text-xs tracking-[0.25em] uppercase">Sec. 01 / About</span>
            </div>
            <h2 className="font-display font-bold text-4xl md:text-5xl leading-tight tracking-tight">
              From sketch to <br />
              <span className="text-primary">working prototype</span>
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              I'm a Mechanical Engineering student at Stevens Institute of Technology (3.94 GPA,
              Dean's List, Pinnacle Scholar) with a focus on mechanical design and robotics.
              Right now I split my time between two things I really enjoy: a research position
              where I'm designing a liquid cold plate that keeps EV and aircraft batteries cool,
              and leading mechanical design for our VEXU robotics team, where 20 of us build
              competition robots from the ground up.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed">
              I'm CSWA certified in SolidWorks and comfortable across the whole build cycle:
              CAD, thermal and structural analysis in MATLAB, controls with ROS2 and Arduino,
              and a lot of 3D printing. What I care about most is that every part I design has
              a reason for existing. If a bracket, joint, or channel is in one of my assemblies,
              it's because the math said it should be.
            </p>
            
            <div className="pt-6">
              <a href={getAssetUrl("/assets/Bhatnagar_Aryan_Resume.pdf")} download>
                <Button variant="outline" className="group rounded-sm border-primary/40 text-primary hover:bg-primary hover:text-primary-foreground transition-colors">
                  Download Resume <Download className="ml-2 w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
                </Button>
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// --- Experience Section ---
const experiences = [
  {
    role: "Research Assistant, Battery Thermal Management",
    org: "Stevens Institute of Technology",
    period: "Apr 2025 – Present",
    icon: FlaskConical,
    bullets: [
      "Designing a liquid cold plate in SolidWorks that keeps an EV/aircraft battery below its 40 °C limit while dissipating a 500 W load through a 6-channel U-manifold.",
      "Built an ε-NTU thermal solver in MATLAB and validated it against an LMTD energy balance. My design uses 6 to 9 times less pumping power than a serpentine baseline.",
      "Currently characterizing nanofluid coolants and 3D printing cold plate prototypes for bench testing.",
    ],
    tags: ["SolidWorks", "MATLAB", "Heat Transfer", "Nanofluids"],
  },
  {
    role: "Mechanical Design Lead & Treasurer, VEXU Robotics",
    org: "Stevens Robotics Club · 20-member competition team",
    period: "Sep 2025 – Present",
    icon: Wrench,
    bullets: [
      "Lead the SolidWorks design of our competition robot, including custom sensor housings, modular battery mounts, and a mechanical aligner for repeatable high-speed scoring.",
      "Designed the pneumatic actuation system and custom conveyor, tuning cylinder placement and tolerances so the robot deploys reliably on the field.",
      "Handle the team budget and purchase orders as Treasurer to keep prototyping funded.",
    ],
    tags: ["SolidWorks", "Pneumatics", "DFM", "Team Leadership"],
  },
];

function Experience() {
  return (
    <section id="experience" className="py-24 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="font-mono text-primary text-xs tracking-[0.25em] uppercase mb-3 block">Sec. 02 / Experience</span>
          <h2 className="font-display font-bold text-4xl mb-4 tracking-tight">Experience</h2>
          <p className="text-muted-foreground">
            Research and leadership roles where I ship real hardware.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {experiences.map((exp, idx) => (
            <motion.div
              key={exp.role}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: idx * 0.1, duration: 0.4 }}
              className="rounded-sm border border-border bg-secondary/20 p-6 hover:border-primary/40 transition-colors flex flex-col relative blueprint-corner"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-sm bg-primary/10 border border-primary/30 flex items-center justify-center flex-shrink-0">
                  <exp.icon className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-base text-foreground leading-snug">{exp.role}</h3>
                  <span className="font-mono text-[11px] text-primary">{exp.period}</span>
                </div>
              </div>
              <p className="text-muted-foreground text-xs mb-3">{exp.org}</p>
              <ul className="space-y-2 mb-4 flex-1">
                {exp.bullets.map((b, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-sm text-muted-foreground">
                    <div className="w-1.5 h-1.5 bg-primary/70 mt-1.5 flex-shrink-0" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-2">
                {exp.tags.map((tag) => (
                  <span key={tag} className="px-2.5 py-1 bg-primary/10 border border-primary/30 rounded-sm text-[11px] font-mono text-primary">
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// --- Skills Section ---
function Skills() {
  return (
    <section id="skills" className="py-24 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="font-mono text-primary text-xs tracking-[0.25em] uppercase mb-3 block">Sec. 03 / Capabilities</span>
          <h2 className="font-display font-bold text-4xl mb-4 tracking-tight">Technical Skills</h2>
          <p className="text-muted-foreground">
            The tools and methods behind my projects, organized the same way as my resume.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {skillGroups.map((group, idx) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: idx * 0.08, duration: 0.4 }}
              className="rounded-sm border border-border bg-secondary/20 p-6 hover:border-primary/40 transition-colors relative blueprint-corner"
              data-testid={`skill-category-${group.category.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`}
            >
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-sm flex items-center justify-center bg-primary/10 border border-primary/30">
                  <group.icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="font-display font-bold text-lg text-foreground">{group.category}</h3>
              </div>

              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 rounded-sm text-xs font-mono border border-border bg-background text-muted-foreground hover:border-primary/40 hover:text-foreground transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// --- Contact Section ---
function Contact() {
  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.4 }}
          >
            <span className="font-mono text-primary text-xs tracking-[0.25em] uppercase mb-3 block">Sec. 05 / Contact</span>
            <h2 className="font-display font-bold text-4xl mb-6 tracking-tight">Let's talk.</h2>
            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
              I'm looking for mechanical design and robotics internships and co-ops. If you have
              a role, a project, or just a question, my inbox is open.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
              <a
                href="mailto:aryanbhatnagar008@gmail.com"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-sm bg-primary hover:bg-primary/90 text-primary-foreground font-semibold text-base transition-colors"
                data-testid="button-send-message"
              >
                <Send className="w-5 h-5" />
                Email Me
              </a>
              <a
                href="https://linkedin.com/in/aryanbhatnagar008"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-sm border border-border hover:border-primary/50 hover:bg-primary/5 text-foreground font-semibold text-base transition-colors"
              >
                <Linkedin className="w-5 h-5" />
                LinkedIn
              </a>
            </div>

            <div className="mt-8 font-mono text-sm text-muted-foreground">
              aryanbhatnagar008@gmail.com · Princeton, NJ
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// --- Projects Section (tabbed) ---
// Only the active tab mounts, so the heavy design images never load
// unless that tab is opened. The navbar switches tabs via a custom event.
export type ProjectTabId = "engineering" | "programming" | "design";

const projectTabs: { id: ProjectTabId; label: string; icon: typeof Wrench }[] = [
  { id: "engineering", label: "Engineering", icon: Wrench },
  { id: "programming", label: "Programming", icon: Code },
  { id: "design", label: "Design", icon: Palette },
];

function ProjectsSection() {
  const [tab, setTab] = useState<ProjectTabId>("engineering");

  useEffect(() => {
    const handler = (e: Event) => {
      const detail = (e as CustomEvent).detail;
      if (detail === "engineering" || detail === "programming" || detail === "design") {
        setTab(detail);
      }
    };
    window.addEventListener("projects:tab", handler);
    return () => window.removeEventListener("projects:tab", handler);
  }, []);

  return (
    <section id="projects" className="bg-[#121212]">
      <div className="container mx-auto px-4 pt-16">
        <div className="text-center max-w-2xl mx-auto mb-2">
          <span className="font-mono text-primary text-xs tracking-[0.25em] uppercase mb-3 block">Sec. 04 / Projects</span>
          <h2 className="font-display font-bold text-4xl mb-6 tracking-tight">Projects</h2>
        </div>
        <div className="flex justify-center px-2">
          <div className="flex w-full max-w-md sm:w-auto sm:max-w-none items-center gap-1 p-1 rounded-sm border border-border bg-secondary/30">
            {projectTabs.map((t) => (
              <button
                key={t.id}
                onClick={() => setTab(t.id)}
                data-testid={`projects-tab-${t.id}`}
                className={`flex flex-1 sm:flex-none items-center justify-center gap-1.5 sm:gap-2 px-2 sm:px-5 py-2.5 rounded-sm font-mono text-xs sm:text-sm whitespace-nowrap transition-colors ${
                  tab === t.id
                    ? "bg-primary text-primary-foreground font-semibold"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                <t.icon className="w-4 h-4 flex-shrink-0" />
                {t.label}
              </button>
            ))}
          </div>
        </div>
      </div>
      {tab === "engineering" && <EngineeringShowcase />}
      {tab === "programming" && <ProgrammingShowcase />}
      {tab === "design" && <DesignShowcase />}
    </section>
  );
}

// --- Main Page Component ---
export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary/30">
      <Navigation />
      <main>
        <Hero />
        <About />
        <Experience />
        <Skills />
        <ProjectsSection />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
