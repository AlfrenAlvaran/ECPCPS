import api from "@/services/api";

export const sign = async (data) => {
  try {
    const response = await api.post("api/login", data);
    // console.log('====================================');
    // console.log(response.data.data);
    // console.log('====================================');
    return response;
  } catch (error) {
    console.error("API Error:", error);
    return { error: true, message: "Request failed" };
  }
};
