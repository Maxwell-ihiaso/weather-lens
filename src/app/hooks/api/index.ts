import { WEATHER_API_BASE_URL } from '@/config'
import axios from 'axios'

export const AxiosPrivate = axios.create({
    baseURL: WEATHER_API_BASE_URL,
    headers: {
        'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
    },
    //   withCredentials: true,
})
