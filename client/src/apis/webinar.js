import { server } from "@/constants/server"
import api from "@/services/api"

const create_api = async (data) => {
    try {
        const response = await api.post(`${server}/webinar/`)
    } catch (error) {
        
    }
}