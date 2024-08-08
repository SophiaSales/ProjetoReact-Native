import { AxiosResponse } from "axios";
import { api } from "../libs/api";

class UsersAPI {

    async postUsers(email: string, password: string): Promise<AxiosResponse> {
        try {
            return await api.post('/register', {
                email: email,
                password: password,
            });
        } catch (error) {
            console.error("Error: ", error);
            throw error;
        }
    }

}

export default new UsersAPI();