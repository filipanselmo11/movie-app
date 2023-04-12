import axios from 'axios'

const URL = 'https://api.themoviedb.org/3'


const axiosIns = axios.create({
    baseURL: URL,
    timeout: 1000,
    params: {
        api_key: '4a2e4d0af961347cdfbcb02e4cfef3f2',
        language: 'pt-BR',
    },
})

export default axiosIns