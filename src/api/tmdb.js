import axios from "axios";

const API_KEY = '93b872e765d2e0bc708fe8fd68ea2ad0';
const BASE_URL = 'https://api.themoviedb.org/3';

export function baseImageURL() {
    return 'https://image.tmdb.org/t/p/w1280';
}

//Acesso à API para buscar filmes ou séries
export async function getData(categoria, pageNumber, order) {
    let tipoCategoria = categoria == 'filmes' ? 'movie' : 'tv';

    //https://api.themoviedb.org/3/tv/popular
    const response = await axios.get(`${BASE_URL}/${tipoCategoria}/${order}`, {

        params: {
            api_key: API_KEY,
            language: 'pt-br',
            page: pageNumber
        }

    });

    //console.log(response.data.results);
    return response.data.results;
}


export async function getDataId(categoria, id) {
    let tipoCategoria = categoria == 'filmes' ? 'movie' : 'tv';

    const response = await axios.get(`${BASE_URL}/${tipoCategoria}/${id}`, {

        params: {
            api_key: API_KEY,
            language: 'pt-br',            
        }
        
    });

    console.log(response.data);
    return response.data;
}
