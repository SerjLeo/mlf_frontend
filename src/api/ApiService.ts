import axios, {Method} from "axios";

const apiInstance = axios.create({
    baseURL: 'http://localhost:9500/api'
})

export default class ApiService {
    static async apiRequest(url: string, method: Method = 'GET', data: Record<string, unknown> = {}, params: Record<string, unknown> = {}) {
        return apiInstance({
            method,
            url,
            data,
            params
        })
    }
}
