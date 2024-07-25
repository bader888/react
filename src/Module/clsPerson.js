import axios from "axios";

export class clsPerson {
  constructor() {}

  // Method to create a new person
  static async createPerson(personData) {
    try {
      const response = await axios.post(
        "https://localhost:7122/Person/AddNewPerson",
        personData
      );
      return response.data;
    } catch (error) {
      console.error("Error creating person:", error);
      throw error;
    }
  }

  static async Update(personData, PersonID) {
    try {
      const response = await axios.put(
        `https://localhost:7122/Person/UpdatePerson/${PersonID}`,
        personData
      );
      return response.data;
    } catch (error) {
      console.error("Error creating person:", error);
      throw error;
    }
  }

  // Method to delete a person
  static async Delete(PersonID) {
    try {
      const response = await axios.delete(
        `https://localhost:7122/Person/DeletePerson/${PersonID}`
      );
      return response.data;
    } catch (error) {
      console.error("Error deleting person:", error);
      throw error;
    }
  }

  // Method to find a person by ID
  static async findPerson(personId) {
    try {
      const response = await axios.get(
        `https://localhost:7122/Person/FindPerson/${personId}`
      );
      return response.data.Data;
    } catch (error) {
      console.log("Error finding person:", error.message);
    }
  }

  // Method to get all people
  static async GetAllPeople() {
    try {
      const response = await axios.get(
        "https://localhost:7122/Person/AllPeople"
      );
      return response.data.Data;
    } catch (error) {
      console.error("Error getting all people:", error);
      throw error;
    }
  }
}

export const person = {
  PersonID: " ",
  FirstName: " ",
  SecondName: " ",
  ThirdName: " ",
  LastName: " ",
  NationalNo: " ",
  Email: "",
  Phone: "",
  DateOfBirth: "",
  Address: "",
  NationalityCountryID: "",
  ImagePath: "",
  Gendor: " ",
  FullName: " ",
};
