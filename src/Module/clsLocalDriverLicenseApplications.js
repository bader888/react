import axios from "axios";
import BaseURL from "../Urls/BaseURL";

export class clsLocalDriverLicenseApplications {
  static async GetAll() {
    try {
      const response = await axios.get(
        BaseURL("LocalDrivingLicenseApplication/GetAll")
      );
      return response.data.Data;
    } catch (error) {
      console.log("error application type: " + error);
    }
  }

  static async FindbyID(ID) {
    try {
      const response = await axios.get(
        `https://localhost:7180/Application/Find/${ID}`
      );

      return response.data.Data.ApplicationInfo;
    } catch (error) {
      console.log("error application type: " + error);
    }
  }

  static async FindLocalDrivingLicenseApplication(ID)
  {
    try {
      const response = await axios.get(
        `https://localhost:7180/LocalDrivingLicenseApplication/Find/${ID}`
      );

      return response.data.Data;
    } catch (error) {
      console.log("error application type: " + error);
    }
  }

  static async Remove(ID) {
    try {
      const response = await axios.delete(
        `https://localhost:7180/Application/Delete/${ID}`
      );

      return response.data.Data;
    } catch (error) {
      console.log("error application type: " + error);
    }
  }

  static async Create({ Application }) {
    try {
      const response = await axios.post(
        `https://localhost:7180/Application/Create`,
        Application
      );
      return response.data;
    } catch (error) {
      console.log("error application type: " + error);
    }
  }

  static async Update(ApplicationDate, AppID) {
    const data = { NewApplicationDate: ApplicationDate, ApplicationID: AppID };
    console.log(data);
    try {
      const response = await axios.put(
        `https://localhost:7180/Application/Update/${AppID}`,
        data
      );
      return response.data.Data;
    } catch (error) {
      console.log("error application type: " + error);
    }
  }
}
