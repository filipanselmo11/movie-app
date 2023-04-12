import axios from 'axios'


const axiosIns = axios.create({
    method: 'GET',
    url: 'https://moviesdatabase.p.rapidapi.com',
    headers: {
        'X-RapidAPI-Key': 'e99002eed9msh954e56e6ebc5b6cp1a7e89jsn5618c4dffc9d',
        'X-RapidAPI-Host': 'moviesdatabase.p.rapidapi.com'
    },
})

// const axiosIns = axios.create({
//     baseURL: 'https://api.themoviedb.org/3',
//     timeout: 1000,
//     method: 'GET',
//     params: {
//         api_key: '4a2e4d0af961347cdfbcb02e4cfef3f2',
//         language: 'pt-BR',
//     },
// })

export default axiosIns