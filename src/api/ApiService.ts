import axios, {Method} from "axios";

const apiInstance = axios.create({
    baseURL: 'http://localhost:9500/api'
})

apiInstance.interceptors.request.use ((config) => {
    const token = localStorage.getItem('token')
    if(token && config.headers) config.headers.Authorization = token
    return config;
});

export default class ApiService {
    static async apiRequest(url: string, method: Method = 'GET', data: Record<string, unknown> = {}, params: Record<string, unknown> = {}) {
        try {
            const response = await apiInstance({
                method,
                url,
                data,
                params
            })
            return response.data
        } catch (e: any) {
            console.log(e?.data)
            return {errors: e}
        }
    }
}
