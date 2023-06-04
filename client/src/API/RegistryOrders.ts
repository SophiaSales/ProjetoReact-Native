import { AxiosResponse } from "axios";
import { api } from "../libs/api";

class RegistryOrders {
    async postRegistryOrders(orderNumber: number, orderOwner: string, orderItems: string[]): Promise<AxiosResponse> {
        try {
            return await api.post('/orders', {
                orderNumber: orderNumber,
                orderOwner: orderOwner,
                orderItems: orderItems
            });
        } catch (error) {
            console.error("Error: ", error);
            throw error;
        }
    }
}
export default new RegistryOrders();