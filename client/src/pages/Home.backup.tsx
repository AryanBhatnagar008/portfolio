import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link as ScrollLink } from "react-scroll";
import { useSkills } from "@/hooks/use-portfolio";
import { Navigation } from "@/components/Navigation";
import { SkillBar } from "@/components/SkillBar";
import { Footer } from "@/components/Footer";
import { DesignShowcase } from "@/components/DesignShowcase";
import { EngineeringShowcase } from "@/components/EngineeringShowcase";
import { ProgrammingShowcase } from "@/components/ProgrammingShowcase";
import { Button } from "@/components/ui/button";
import { Send, Download, ChevronRight, CircuitBoard, Palette, Wrench, Code, Loader2 } from "lucide-react";

// --- Hero Section ---
const roles = ["Mechanical Engineer", "Product Designer", "Maker", "Innovator"];

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
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[128px]" />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-accent/10 rounded-full blur-[96px]" />
        {/* Grid pattern overlay */}
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20" />
      </div>

      <div className="container relative z-10 px-4 flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary/50 border border-white/10 mb-6 backdrop-blur-sm">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            <span className="text-xs font-mono text-muted-foreground uppercase tracking-wider">Available for new projects</span>
          </div>

          <h1 className="font-display font-bold text-5xl md:text-7xl lg:text-8xl mb-6 leading-tight">
            Building the <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-white/50">
              Physical World
            </span>
          </h1>

          <div className="h-12 md:h-16 mb-8 flex items-center justify-center overflow-hidden">
            <span className="font-mono text-xl md:text-2xl text-primary/80 mr-3">{">"}</span>
            <AnimatePresence mode="wait">
              <motion.span
                key={roleIndex}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -20, opacity: 0 }}
                className="font-mono text-xl md:text-3xl text-primary font-bold"
              >
                {roles[roleIndex]}
              </motion.span>
            </AnimatePresence>
            <span className="font-mono text-xl md:text-2xl text-primary/80 ml-1 animate-pulse">_</span>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <ScrollLink to="portfolio" smooth={true} duration={800} offset={-50}>
              <Button size="lg" className="rounded-full px-8 py-6 text-lg font-bold bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/40 transition-all">
                View My Work
              </Button>
            </ScrollLink>
            <ScrollLink to="contact" smooth={true} duration={800} offset={-50}>
              <Button variant="outline" size="lg" className="rounded-full px-8 py-6 text-lg font-bold border-white/20 hover:bg-white/5 hover:border-primary/50 transition-all">
                Contact Me
              </Button>
            </ScrollLink>
          </div>
        </motion.div>
      </div>

      {/* Decorative mechanical element */}
      <motion.div 
        animate={{ rotate: 360 }}
        transition={{ duration: 100, repeat: Infinity, ease: "linear" }}
        className="absolute -right-20 -bottom-20 opacity-5 pointer-events-none"
      >
        <CircuitBoard size={400} />
      </motion.div>
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
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative order-2 md:order-1"
          >
            <div className="aspect-square rounded-2xl overflow-hidden bg-secondary border border-white/10 relative group">
              {/* Using Unsplash placeholder for profile */}
              {/* professional portrait man engineer */}
              <img 
                src="/assets/profile-photo.jpg" 
                alt="Aryan Bhatnagar" 
                className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
              <div className="absolute bottom-6 left-6">
                <p className="font-mono text-primary text-sm mb-1">HELLO_WORLD</p>
                <h3 className="font-display font-bold text-2xl">Aryan Bhatnagar</h3>
              </div>
            </div>
            {/* Decorative border */}
            <div className="absolute -inset-4 border border-primary/20 rounded-3xl -z-10 translate-x-4 translate-y-4" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="order-1 md:order-2 space-y-6"
          >
            <div className="flex items-center gap-4 mb-4">
              <span className="h-[1px] w-12 bg-primary/50" />
              <span className="font-mono text-primary text-sm tracking-widest uppercase">About Me</span>
            </div>
            <h2 className="font-display font-bold text-4xl md:text-5xl leading-tight">
              Bridging the gap between <br />
              <span className="text-primary">Design & Engineering</span>
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              I'm a Mechanical Engineering student at Stevens Institute of Technology, passionate about 
              designing and building innovative solutions. From autonomous robots to IoT-integrated systems, 
              I combine CAD expertise in SolidWorks and Onshape with hands-on fabrication skills.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Currently a member of Stevens Robotics Club and SAE Baja, I work on everything from 
              pneumatic actuation systems to off-road vehicle fabrication. When I'm not in the machine shop, 
              I'm developing ML applications or prototyping with 3D printing.
            </p>
            
            <div className="pt-6">
              <a href="/assets/Bhatnagar_Aryan_Resume.pdf" download>
                <Button variant="outline" className="group rounded-full border-primary/30 text-primary hover:bg-primary hover:text-white transition-all">
                  Download Resume <Download className="ml-2 w-4 h-4 group-hover:translate-y-1 transition-transform" />
                </Button>
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// --- Skills Section ---
function Skills() {
  const { data: skills, isLoading } = useSkills();

  // Group skills by category
  const categories = skills 
    ? Array.from(new Set(skills.map(s => s.category)))
    : [];

  return (
    <section id="skills" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="font-mono text-primary text-sm tracking-widest uppercase mb-2 block">My Arsenal</span>
          <h2 className="font-display font-bold text-4xl mb-4">Technical Proficiency</h2>
          <p className="text-muted-foreground">
            A comprehensive overview of the tools and technologies I use to bring ideas to life.
          </p>
        </motion.div>

        {isLoading ? (
          <div className="flex justify-center">
            <Loader2 className="w-8 h-8 animate-spin text-primary" />
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categories.map((category, idx) => (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-secondary/10 border border-white/5 rounded-2xl p-6 hover:border-primary/20 transition-colors"
              >
                <h3 className="font-display font-bold text-xl mb-6 flex items-center gap-2">
                  <ChevronRight className="w-5 h-5 text-primary" />
                  {category}
                </h3>
                <div className="space-y-6">
                  {skills
                    ?.filter(s => s.category === category)
                    .map((skill, i) => (
                      <SkillBar 
                        key={skill.id} 
                        name={skill.name} 
                        proficiency={skill.proficiency} 
                        delay={i}
                      />
                    ))}
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

// --- Portfolio Section with 3 Tabs ---
function Portfolio() {
  const portfolioTabs = [
    {
      id: "design",
      title: "Design",
      icon: Palette,
      description: "Adobe Creative Suite work",
      image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&q=80&w=400",
      targetSection: "design-showcase"
    },
    {
      id: "engineering",
      title: "Engineering",
      icon: Wrench,
      description: "Hands-on builds & CAD",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=400",
      targetSection: "engineering-showcase"
    },
    {
      id: "programming",
      title: "Programming",
      icon: Code,
      description: "Code & algorithms",
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=400",
      targetSection: "programming-showcase"
    }
  ];

  return (
    <section id="portfolio" className="py-24 bg-secondary/10 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="font-mono text-primary text-sm tracking-widest uppercase mb-2 block">
            Explore My Work
          </span>
          <h2 className="font-display font-bold text-4xl mb-4">Portfolio</h2>
          <p className="text-muted-foreground">
            Browse through my creative and technical projects across design, engineering, and programming.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {portfolioTabs.map((tab, idx) => (
            <motion.div
              key={tab.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.15 }}
            >
              <ScrollLink
                to={tab.targetSection}
                smooth={true}
                duration={800}
                offset={-50}
                className="block cursor-pointer"
              >
                <div
                  className="group relative rounded-2xl overflow-hidden border border-white/10 bg-secondary/20 hover:border-[#BB86FC]/50 transition-all hover:shadow-[0_0_30px_rgba(187,134,252,0.2)]"
                  data-testid={`portfolio-tab-${tab.id}`}
                >
                  {/* Image */}
                  <div className="aspect-[4/3] overflow-hidden">
                    <img
                      src={tab.image}
                      alt={tab.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 opacity-60 group-hover:opacity-80"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#121212] via-[#121212]/60 to-transparent" />
                  </div>
                  
                  {/* Content Overlay */}
                  <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center">
                    <div className="w-16 h-16 rounded-2xl bg-[#BB86FC]/20 border border-[#BB86FC]/30 flex items-center justify-center mb-4 group-hover:bg-[#BB86FC]/30 transition-colors">
                      <tab.icon className="w-8 h-8 text-[#BB86FC]" />
                    </div>
                    <h3 className="font-display font-bold text-2xl mb-2 text-white">{tab.title}</h3>
                    <p className="text-sm text-muted-foreground">{tab.description}</p>
                    <div className="mt-4 flex items-center gap-2 text-[#BB86FC] text-sm font-mono opacity-0 group-hover:opacity-100 transition-opacity">
                      <span>View Projects</span>
                      <ChevronRight className="w-4 h-4" />
                    </div>
                  </div>
                </div>
              </ScrollLink>
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
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-secondary/30 to-transparent pointer-events-none -z-10" />

      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="font-mono text-primary text-sm tracking-widest uppercase mb-2 block">Get in Touch</span>
            <h2 className="font-display font-bold text-4xl mb-6">Let's build something amazing together.</h2>
            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
              I'm always open to discussing engineering projects, design work, or collaboration opportunities.
              Whether you have a question or just want to say hi, feel free to reach out!
            </p>
            
            <a 
              href="mailto:aryanbhatnagar008@gmail.com"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-primary hover:bg-primary/90 text-primary-foreground font-bold text-lg transition-all duration-300"
              data-testid="button-send-message"
            >
              <Send className="w-5 h-5" />
              Send Message
            </a>
            
            <div className="mt-8 font-mono text-sm text-muted-foreground">
              aryanbhatnagar008@gmail.com
            </div>
          </motion.div>
        </div>
      </div>
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
        <Skills />
        <Portfolio />
        <EngineeringShowcase />
        <ProgrammingShowcase />
        <DesignShowcase />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
