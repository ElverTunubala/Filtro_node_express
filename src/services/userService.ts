import UserRepository from "../repositories/userRepository";
import { injectable, inject } from "tsyringe";
import { User } from "../models/user";

@injectable()
export default class UserService {
  constructor(@inject(UserRepository) 
  private userRepository: UserRepository) {}

  async getAllUsers() {
    return await this.userRepository.findAll();
  }

  async getUserById(id: number) {
    try {
      return await this.userRepository.findById(id);
    } catch (error:any) {
      throw new Error(error.message);
    }
  }

  async getUserByEmail(email: string): Promise<User | null> {
    try {
      return await this.userRepository.findByEmail(email);
    } catch (error:any) {
      throw new Error(error.message);
    }
  }

  async createUser(user: Partial<User>) {
    try {
      return await this.userRepository.create(user);
    } catch (error:any) {
      throw new Error(error.message);
    }
  }
  async updateUser(id: number, user: Partial<User>) {
    try {
      return await this.userRepository.update(id, user);
    } catch (error:any) {
      throw new Error(error.message);
    }
  }
  async deleteUser(id: number) {
    try {
      await this.userRepository.delete(id);
    } catch (error:any) {
      throw new Error(error.message);
    }
  }

  //obtener productos relazionados con el id del usuario
  async getUserWithProducts(userId: number) {
    return await this.userRepository.findUserWithProducts(userId);
  }
}

