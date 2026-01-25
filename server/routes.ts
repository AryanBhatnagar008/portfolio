import type { Express } from "express";
import type { Server } from "http";
import { storage } from "./storage";
import { api } from "@shared/routes";
import { z } from "zod";
import { insertMessageSchema } from "@shared/schema";

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {
  
  // Skills
  app.get(api.skills.list.path, async (_req, res) => {
    const skills = await storage.getSkills();
    res.json(skills);
  });

  // Projects
  app.get(api.projects.list.path, async (_req, res) => {
    const projects = await storage.getProjects();
    res.json(projects);
  });

  app.get(api.projects.get.path, async (req, res) => {
    const id = parseInt(req.params.id);
    if (isNaN(id)) return res.status(404).json({ message: "Invalid ID" });
    
    const project = await storage.getProject(id);
    if (!project) return res.status(404).json({ message: "Project not found" });
    res.json(project);
  });

  // Contact
  app.post(api.contact.submit.path, async (req, res) => {
    try {
      const input = api.contact.submit.input.parse(req.body);
      const message = await storage.createMessage(input);
      res.status(201).json(message);
    } catch (err) {
      if (err instanceof z.ZodError) {
        res.status(400).json({
          message: err.errors[0].message,
          field: err.errors[0].path.join('.')
        });
      } else {
        res.status(500).json({ message: "Internal server error" });
      }
    }
  });

  // Seed Data
  const existingSkills = await storage.getSkills();
  if (existingSkills.length === 0) {
    console.log("Seeding database...");
    
    // Seed Skills
    const seedSkills = [
      { name: "SolidWorks", category: "Technical", proficiency: 90 },
      { name: "AutoCAD", category: "Technical", proficiency: 85 },
      { name: "Python", category: "Coding", proficiency: 75 },
      { name: "MATLAB", category: "Coding", proficiency: 70 },
      { name: "3D Printing", category: "Fabrication", proficiency: 95 },
      { name: "Woodworking", category: "Fabrication", proficiency: 80 },
      { name: "CNC Machining", category: "Fabrication", proficiency: 65 },
      { name: "Photoshop", category: "Design", proficiency: 60 },
    ];
    
    for (const skill of seedSkills) {
      await storage.createSkill(skill);
    }

    // Seed Projects
    const seedProjects = [
      {
        title: "Robotic Arm Prototype",
        description: "A 6-DOF robotic arm designed for educational purposes.",
        category: "3D CAD",
        imageUrl: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80",
        technologies: ["SolidWorks", "Arduino", "3D Printing"],
        details: "Designed a fully functional 6-axis robotic arm using SolidWorks. The parts were 3D printed using PLA+ for strength. Powered by NEMA 17 stepper motors and controlled via an Arduino Mega with a custom Python interface for trajectory planning."
      },
      {
        title: "Smart Home Sensor Node",
        description: "IoT device for monitoring temperature and humidity.",
        category: "Coding",
        imageUrl: "https://images.unsplash.com/photo-1558346490-a72e53ae2d4f?auto=format&fit=crop&q=80",
        technologies: ["Python", "ESP32", "MQTT"],
        details: "Developed a low-power sensor node using ESP32. It collects environmental data and sends it to a Raspberry Pi broker via MQTT. Features include deep sleep mode for battery longevity and a web dashboard for data visualization."
      },
      {
        title: "Walnut Coffee Table",
        description: "Hand-crafted mid-century modern coffee table.",
        category: "Woodworking",
        imageUrl: "https://images.unsplash.com/photo-1605118744599-528242491b49?auto=format&fit=crop&q=80",
        technologies: ["Walnut", "Joinery", "Finishing"],
        details: "Built a custom coffee table from rough-sawn black walnut. Utilized traditional mortise and tenon joinery for the base. Finished with rubio monocoat for a durable, matte look that highlights the natural grain."
      },
      {
        title: "Drone Frame Optimization",
        description: "Generative design study for a racing drone frame.",
        category: "Design",
        imageUrl: "https://images.unsplash.com/photo-1473968512647-3e447244af8f?auto=format&fit=crop&q=80",
        technologies: ["Fusion 360", "Generative Design", "Carbon Fiber"],
        details: "Used Fusion 360's generative design tools to minimize the weight of a racing drone frame while maintaining structural rigidity. The final design reduced weight by 30% compared to the stock frame."
      },
       {
        title: "Custom Mechanical Keypad",
        description: "Macro pad for CAD shortcuts.",
        category: "3D Printing",
        imageUrl: "https://images.unsplash.com/photo-1595225476474-87563907a212?auto=format&fit=crop&q=80",
        technologies: ["Fusion 360", "QMK Firmware", "Soldering"],
        details: "Designed and built a custom 12-key macro pad specifically for SolidWorks shortcuts. The case was 3D printed, and the PCB was hand-wired. Running QMK firmware for fully programmable layers."
      }
    ];

    for (const project of seedProjects) {
      await storage.createProject(project);
    }
  }

  return httpServer;
}
