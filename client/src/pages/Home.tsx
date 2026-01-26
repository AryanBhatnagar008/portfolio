import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link as ScrollLink } from "react-scroll";
import { useSkills, useSendMessage } from "@/hooks/use-portfolio";
import { Navigation } from "@/components/Navigation";
import { SkillBar } from "@/components/SkillBar";
import { Footer } from "@/components/Footer";
import { DesignShowcase } from "@/components/DesignShowcase";
import { EngineeringShowcase } from "@/components/EngineeringShowcase";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { insertMessageSchema, type InsertMessage } from "@shared/schema";
import { Loader2, Send, Download, ChevronRight, CircuitBoard } from "lucide-react";

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
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=800&fit=crop" 
                alt="Profile" 
                className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
              <div className="absolute bottom-6 left-6">
                <p className="font-mono text-primary text-sm mb-1">HELLO_WORLD</p>
                <h3 className="font-display font-bold text-2xl">Alex Chen</h3>
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
              I am a mechanical engineer with a passion for functional design and rapid prototyping. 
              My work focuses on creating elegant solutions to complex physical problems, leveraging 
              both traditional manufacturing and modern additive techniques.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed">
              When I'm not in CAD or the machine shop, I'm coding interactive experiences 
              or building custom furniture. I believe the best products come from a deep 
              understanding of both the materials and the user experience.
            </p>
            
            <div className="pt-6">
              <Button variant="outline" className="group rounded-full border-primary/30 text-primary hover:bg-primary hover:text-white transition-all">
                Download Resume <Download className="ml-2 w-4 h-4 group-hover:translate-y-1 transition-transform" />
              </Button>
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

// --- Contact Section ---
function Contact() {
  const { toast } = useToast();
  const sendMessage = useSendMessage();
  
  const form = useForm<InsertMessage>({
    resolver: zodResolver(insertMessageSchema),
    defaultValues: {
      name: "",
      email: "",
      message: ""
    }
  });

  const onSubmit = (data: InsertMessage) => {
    sendMessage.mutate(data, {
      onSuccess: () => {
        toast({
          title: "Message Sent",
          description: "Thanks for reaching out! I'll get back to you soon.",
          className: "bg-green-500 text-white border-none"
        });
        form.reset();
      },
      onError: (error) => {
        toast({
          title: "Error",
          description: error.message,
          variant: "destructive"
        });
      }
    });
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      {/* Decorative */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-secondary/30 to-transparent pointer-events-none -z-10" />

      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="font-mono text-primary text-sm tracking-widest uppercase mb-2 block">Get in Touch</span>
            <h2 className="font-display font-bold text-4xl mb-6">Let's build something amazing together.</h2>
            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
              I'm always open to discussing product design work or partnership opportunities.
              Whether you have a question or just want to say hi, I'll try my best to get back to you!
            </p>
            
            <div className="space-y-6 font-mono text-sm">
              <div className="flex items-center gap-4 text-muted-foreground">
                <span className="w-12 h-[1px] bg-primary" />
                <span>San Francisco, CA</span>
              </div>
              <div className="flex items-center gap-4 text-muted-foreground">
                <span className="w-12 h-[1px] bg-primary" />
                <span>alex.chen@example.com</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-secondary/10 border border-white/5 p-8 rounded-3xl backdrop-blur-sm"
          >
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-mono text-muted-foreground">Name</label>
                  <Input 
                    {...form.register("name")}
                    placeholder="John Doe" 
                    className="bg-black/20 border-white/10 focus:border-primary focus:ring-1 focus:ring-primary/50"
                  />
                  {form.formState.errors.name && (
                    <span className="text-red-500 text-xs">{form.formState.errors.name.message}</span>
                  )}
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-mono text-muted-foreground">Email</label>
                  <Input 
                    {...form.register("email")}
                    placeholder="john@example.com" 
                    className="bg-black/20 border-white/10 focus:border-primary focus:ring-1 focus:ring-primary/50"
                  />
                  {form.formState.errors.email && (
                    <span className="text-red-500 text-xs">{form.formState.errors.email.message}</span>
                  )}
                </div>
              </div>
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-mono text-muted-foreground">Message</label>
                <Textarea 
                  {...form.register("message")}
                  placeholder="Tell me about your project..." 
                  className="bg-black/20 border-white/10 min-h-[150px] focus:border-primary focus:ring-1 focus:ring-primary/50"
                />
                {form.formState.errors.message && (
                  <span className="text-red-500 text-xs">{form.formState.errors.message.message}</span>
                )}
              </div>
              
              <Button 
                type="submit" 
                className="w-full h-12 rounded-xl bg-primary hover:bg-primary/90 text-primary-foreground font-bold text-lg"
                disabled={sendMessage.isPending}
              >
                {sendMessage.isPending ? (
                  <Loader2 className="w-5 h-5 animate-spin mr-2" />
                ) : (
                  <Send className="w-5 h-5 mr-2" />
                )}
                Send Message
              </Button>
            </form>
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
        <DesignShowcase />
        <EngineeringShowcase />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
