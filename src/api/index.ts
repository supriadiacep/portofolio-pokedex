import axios, { AxiosRequestConfig } from 'axios'
import { APIConfiguration } from '@/configs/api.configs'

const config: AxiosRequestConfig = {
  baseURL: APIConfiguration.baseUrl,
  headers: {
    'Content-Type': 'application/json',
  },
}

export const instance = axios.create(config)
