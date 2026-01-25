import { db } from "./db";
import {
  skills, projects, messages,
  type InsertSkill, type InsertProject, type InsertMessage,
  type Skill, type Project, type Message
} from "@shared/schema";
import { eq } from "drizzle-orm";

export interface IStorage {
  getSkills(): Promise<Skill[]>;
  createSkill(skill: InsertSkill): Promise<Skill>;
  
  getProjects(): Promise<Project[]>;
  getProject(id: number): Promise<Project | undefined>;
  createProject(project: InsertProject): Promise<Project>;
  
  createMessage(message: InsertMessage): Promise<Message>;
}

export class DatabaseStorage implements IStorage {
  async getSkills(): Promise<Skill[]> {
    return await db.select().from(skills);
  }

  async createSkill(skill: InsertSkill): Promise<Skill> {
    const [newSkill] = await db.insert(skills).values(skill).returning();
    return newSkill;
  }

  async getProjects(): Promise<Project[]> {
    return await db.select().from(projects);
  }

  async getProject(id: number): Promise<Project | undefined> {
    const [project] = await db.select().from(projects).where(eq(projects.id, id));
    return project;
  }

  async createProject(project: InsertProject): Promise<Project> {
    const [newProject] = await db.insert(projects).values(project).returning();
    return newProject;
  }

  async createMessage(message: InsertMessage): Promise<Message> {
    const [newMessage] = await db.insert(messages).values(message).returning();
    return newMessage;
  }
}

export const storage = new DatabaseStorage();
