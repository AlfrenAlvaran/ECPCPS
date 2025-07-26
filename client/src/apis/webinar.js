import { server } from "@/constants/server";
import api from "@/services/api";

export const create_api = async (data) => {
  try {
    const response = await api.post(`${server}/webinar/`, data);
    return response.data;
  } catch (error) {
    console.error("Internal Server Error", error?.message);
  }
};

export const get_all_webinars_api = async () => {
  try {
    const response = await api.get(`${server.api}/webinars`);
    return response.data;
  } catch (error) {
    console.error("Internal Error", error?.message);
  }
};

export const count_webinars = async () => {
  try {
    const response = await api.get(`${server.api}/counts`);
    return response.data.data;
  } catch (e) {
    console.error("Internal Error", e?.message);
  }
};

export const chartData_api = async () => {
  try {
    const response = await api.get(`${server.api}/chart-data`);
    return response.data.data;
  } catch (error) {
    console.error("Internal Error", error?.message);
  }
};

export const group_chart_api = async () => {
  try {
    const response = await api.get(`${server.api}/group-chart`);
    return response.data.data;
  } catch (error) {
    console.error("Internal Error", error?.message);
  }
};

export const donut_chart_api = async () => {
  try {
    const response = await api.get(`${server.api}/donut-chart`)
    return response.data.data
  } catch (error) {
    
  }
};
