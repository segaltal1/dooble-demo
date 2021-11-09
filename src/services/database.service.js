import axios from 'axios';
const gDatabase = require('../data/data.json');
const BASE_URL = 'https://rickandmortyapi.com/api/character?page=';

let PAGES_COUNT;

async function query() {
    PAGES_COUNT = gDatabase.info.pages
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(gDatabase.results);
        }, 1000);
    });

}

function getPageCount() {
    return PAGES_COUNT
}

async function fetchEpisodes(firstUrl, lastUrl) {
    try {
        const promise1 = axios.get(firstUrl)
        const promise2 = axios.get(lastUrl)
        const episodes = await Promise.all([promise1, promise2])
        return episodes.map(({ data }) => data.episode)
    } catch (error) {
        console.log(error);
    }

}

// async function query(page = 1) {
//     try {
//         const { data } = await axios.get(BASE_URL + page)
//         PAGES_COUNT = data.info.pages
//         return data.results;

//     } catch (error) {
//         console.log(error);
//     }
// }

export const databaseService = {
    query,
    getPageCount,
    fetchEpisodes,
}
