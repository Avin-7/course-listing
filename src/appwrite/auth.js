/* eslint-disable no-useless-catch */
import { Client, Account, ID } from "appwrite";
import conf from "../conf/conf.js";

export class AuthService {
  client = new Client();
  account;

  constructor() {
    this.client.setEndpoint(conf.appWriteUrl);
    this.client.setProject(conf.appWriteProjectId);
    this.account = new Account(this.client);
  }

  async createAccount({ email, password, name }) {
    // eslint-disable-next-line no-useless-catch
    try {
      const userAccount = await this.account.create(
        ID.unique(),
        email,
        password,
        name
      );
      if (userAccount) {
        //call another method
        return this.login({ email, password });
      } else {
        return userAccount;
      }
    } catch (error) {
      throw error;
    }
  }
  async login({ email, password }) {
    try {
      return await this.account.createEmailPasswordSession(email, password);
    } catch (error) {
      throw error;
    }
  }

  async forgotPassword({ email }) {
    try {
      return await this.account.createRecovery(
        email,
        "http://localhost:5173/reset-password"
      );
    } catch (error) {
      console.log("ERROR in forgot password", error);
    }
  }
  async resetPassword({ userId, secret, password }) {
    try {
      return await this.account.updateRecovery(
        userId,
        secret,
        password.newPassword,
        password.repeatPassword
      );
    } catch (error) {
      console.log("ERROR in reset password", error);
    }
  }

  async getCurrentUser() {
    try {
      return await this.account.get();
    } catch (error) {
      throw error;
    }
    return null;
  }
  async logout() {
    try {
      await this.account.deleteSessions();
    } catch (error) {
      throw error;
    }
  }
}

const authService = new AuthService();

export default authService;
