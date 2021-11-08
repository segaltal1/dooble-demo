import axios from 'axios';
const gDatabase = require('../data/data.json');
const BASE_URL = 'https://rickandmortyapi.com/api/character?page=';

let PAGES_COUNT;
async function query() {
    console.log('Fetch Data')
    PAGES_COUNT = gDatabase.info.pages
    return gDatabase.results
}

function getPageCount() {
    return PAGES_COUNT
}

async function fetchEpisodes(firstUrl, lastUrl) {
    // const { data } = await axios.get(url)
    // return data.episode
}
// async function query(page = 1) {
//     const { data } = await axios.get(BASE_URL + page)
//     PAGES_COUNT = data.info.pages
//     return data.results;
// }

export const databaseService = {
    query,
    getPageCount,
    fetchEpisodes
}
