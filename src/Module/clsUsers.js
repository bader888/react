
import { Password } from "@mui/icons-material";
import axios from "axios";
export class clsUser {
    constructor() {
    }
  
    // Method to create a new User
    static async createUser(UserData) {
      try {
        const response = await axios.post(
          "https://localhost:7122/User/AddNewUser",
          UserData
        );
        return response.data;
      } catch (error) {
        console.error("Error creating User:", error);
        throw error;
      }
    }
  
    static async Update(UserData, UserID) {
      try {
        const response = await axios.put(
          `https://localhost:7122/User/UpdateUser/${UserID}`,
          UserData
        );
        return response.data;
      } catch (error) {
        console.error("Error creating User:", error);
        throw error;
      }
    }
  
    // Method to delete a User
    static async Delete(UserID) {
      try {
        const response = await axios.delete(
          `https://localhost:7122/User/Delete/${UserID}`
        );
        return response.data;
      } catch (error) {
        console.error("Error deleting User:", error);
        throw error;
      }
    }
  
    // Method to find a User by ID
    static async findUser(UserId) {
      try {
        const response = await axios.get(
          `https://localhost:7122/User/GetUser/${UserId}`
        );
        return response.data.Data;
      } catch (error) {
        console.log("Error finding User:", error.message);
      }
    }
  
    // Method to get all people
    static async GetAllUsers() {
      try {
        const response = await axios.get(
          "https://localhost:7122/User/ListUsers"
        );
        return response.data.Data;
      } catch (error) {
        console.error("Error getting all people:", error);
        throw error;
      }
    }
  }
  

  export const UserData = {
    UserID :"",
    PersonID: "",
    Password: "", 
    UserName: "",
    IsActive: "",
    Permisstion:""
  };
  