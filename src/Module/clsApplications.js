import axios from "axios";

export class clsApplication {
    static async GetAll() {
        try {
        const response = await axios.get(
            "https://localhost:7180/Application/GetAll"
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

    static async Create(Application) {
        try {
        const response = await axios.post(
            `https://localhost:7180/Application/Create`,
            Application
        );
        return response.data.Data;
        } catch (error) {
        console.log("error application type: " + error);
        }
    }

    static async Update(Application, AppID) {
        try {
        const response = await axios.put(
            `https://localhost:7180/Application/Update/${AppID}`,
            Application
        );
        return response.data.Data;
        } catch (error) {
        console.log("error application type: " + error);
        }
    }
}
