import { AxiosResponse } from "axios";
import { api } from "../libs/api";

class OrdersAPI {

    async getOrders(): Promise<AxiosResponse> {
        try {
            return await api.get("/orders");
        } catch (error) {
            console.error("Error: ", error);
            throw error;
        }
    }
}

export default new OrdersAPI();