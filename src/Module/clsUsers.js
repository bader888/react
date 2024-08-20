import axios from "axios";
export class clsUser {
  static async Login(UserData) {
    try {
      const response = await axios.post(
        "https://localhost:7180/User/Login",
        UserData
      );
      return response.data;
    } catch (error) {
      console.error("Error creating User:", error);
    }
  }
  // Method to create a new User
  static async createUser(UserData) {
    try {
      const response = await axios.post(
        "https://localhost:7180/User/CreateUser",
        UserData
      );
      return response.data;
    } catch (error) {
      console.error("Error login User:", error);
    }
  }

  static async Update(UserData, UserID) {
    try {
      const response = await axios.put(
        `https://localhost:7180/User/UpdateUser/${UserID}`,
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
        `https://localhost:7180/User/Delete/${UserID}`
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
        `https://localhost:7180/User/GetUser/${UserId}`
      );
      return response.data.Data;
    } catch (error) {
      console.log("Error finding User:", error.message);
    }
  }

  // Method to get all people
  static async GetAllUsers() {
    try {
      const response = await axios.get("https://localhost:7180/User/ListUsers");
      return response.data.Data;
    } catch (error) {
      console.error("Error getting all people:", error);
      throw error;
    }
  }

  static async ChangePassword(UserData) {
    try {
      const response = await axios.post(
        "https://localhost:7180/User/changePassword",
        UserData
      );
      return response.data;
    } catch (error) {
      console.error("Error login User:", error);
    }
  }

  static async ToggleActive(userID, isActive) {
    try {
      const response = await axios.post(
        `https://localhost:7180/User/ToggleActive?userId=${userID}&isActive=${isActive}`
      );
      return response.data;
    } catch (error) {
      console.error("Error toggle active User:", error);
    }
  }
}

export const UserData = {
  UserID: "",
  PersonID: "",
  Password: "",
  UserName: "",
  IsActive: "",
  Permisstion: "",
};

export const CreateUserData = {
  PersonID: "",
  Password: "",
  UserName: "",
  Permisstions: "",
};
