import axios from "axios";

export class clsApplicationType {
  static async GetAll() {
    try {
      const response = await axios.get(
        "https://localhost:7180/ApplicationType/GetAll"
      );
      return response.data.Data;
    } catch (error) {
      console.log("error application type: " + error);
    }
  }

  static async FindbyID(ID) {
    try {
      const response = await axios.get(
        `https://localhost:7180/ApplicationType/${ID}`
      );
     
      return response.data.Data.ApplicationTypeData;
    } catch (error) {
      console.log("error application type: " + error);
    }
  }

  static async Remove(ID) {
    try {
      const response = await axios.delete(
        `https://localhost:7180/ApplicationType/Remove/${ID}`
      );
     
      return response.data.Data;
    } catch (error) {
      console.log("error application type: " + error);
    }
  }

  static async Create(ApplicationType) {
    try {
      const response = await axios.post(
        `https://localhost:7180/ApplicationType/Create`,
        ApplicationType
      );
      return response.data.Data;
    } catch (error) {
      console.log("error application type: " + error);
    }
  }

  static async Update(ApplicationType, ID) {
    try {
      const response = await axios.put(
        `https://localhost:7180/ApplicationType/Update/${ID}`,
        ApplicationType
      );
      return response.data.Data;
    } catch (error) {
      console.log("error application type: " + error);
    }
  }
}
