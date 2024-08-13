import axios from "axios";

export class clsTestType {
    static async GetAll() {
        try {
        const response = await axios.get(
            "https://localhost:7180/TestType/GetAll"
        );
        return response.data.Data;
        } catch (error) {
        console.log("error application type: " + error);
        }
    }

    static async FindbyID(ID) {
        try {
        const response = await axios.get(
            `https://localhost:7180/TestType/${ID}`
        );

        return response.data.Data;
        } catch (error) {
        console.log("error application type: " + error);
        }
    }


    static async Update(ID, TestTypeData) {
        
        console.log(TestTypeData);
        try {
        const response = await axios.put(
            `https://localhost:7180/TestType/Update/${ID}`,TestTypeData
            
        );
        return response.data.Data;
        } catch (error) {
        console.log("error application type: " + error);
        }
    }
}