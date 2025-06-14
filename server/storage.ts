import { users, gameStates, type User, type InsertUser, type GameState, type InsertGameState } from "@shared/schema";

export interface IStorage {
  getUser(id: number): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  getGameStates(userId: number): Promise<GameState[]>;
  saveGameState(gameState: InsertGameState): Promise<GameState>;
  deleteGameState(id: number, userId: number): Promise<boolean>;
}

export class MemStorage implements IStorage {
  private users: Map<number, User>;
  private gameStates: Map<number, GameState>;
  private currentUserId: number;
  private currentGameStateId: number;

  constructor() {
    this.users = new Map();
    this.gameStates = new Map();
    this.currentUserId = 1;
    this.currentGameStateId = 1;
  }

  async getUser(id: number): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = this.currentUserId++;
    const user: User = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }

  async getGameStates(userId: number): Promise<GameState[]> {
    return Array.from(this.gameStates.values()).filter(
      (gameState) => gameState.userId === userId
    );
  }

  async saveGameState(insertGameState: InsertGameState): Promise<GameState> {
    const id = this.currentGameStateId++;
    const now = new Date();
    const gameState: GameState = {
      ...insertGameState,
      id,
      createdAt: now,
      updatedAt: now,
    };
    this.gameStates.set(id, gameState);
    return gameState;
  }

  async deleteGameState(id: number, userId: number): Promise<boolean> {
    const gameState = this.gameStates.get(id);
    if (gameState && gameState.userId === userId) {
      this.gameStates.delete(id);
      return true;
    }
    return false;
  }
}

export const storage = new MemStorage();
