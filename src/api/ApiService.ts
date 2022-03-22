import axios, {Method} from "axios";

const apiInstance = axios.create({
    baseURL: 'http://localhost:9500'
})

export default class ApiService {
    static async apiRequest(url: string, method: Method = 'GET', params: Record<string, unknown> = {}) {
        return apiInstance({
            method,
            url,
            params
        })
    }
}
