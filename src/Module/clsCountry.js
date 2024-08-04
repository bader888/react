import axios from "axios";

export class clsCountry {
  constructor() {}

  static async GetAllCountry() {
    try {
      const response = await axios.get(
        "https://localhost:7180/Country/GetAllCountries"
      ); 
      return response.data.Data;
    } catch (error) {
      console.log(error);
    }
  }
}
