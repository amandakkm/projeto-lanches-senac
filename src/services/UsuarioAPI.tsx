import axios from "axios";
const baseUrl = 'http://localhost:8080'
const apiClient = axios.create({
    baseURL: baseUrl,
    headers: {
        'Content-Type': 'application/json'
    }
})


export const fetchUser = (idUsuario: number)  => {
   return apiClient.get<any>(`${baseUrl}/usuarios/${idUsuario}`);
}
