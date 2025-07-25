import { server } from "@/constants/server";
import api from "@/services/api";

export const create_api = async (data) => {
  try {
    const response = await api.post(`${server}/webinar/`, data);
    return response.data
  } catch (error) {
    console.error("Internal Server Error", error?.message);
  }
};
