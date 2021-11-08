import axios from 'axios';
const gDatabase = require('../data/data.json');
const BASE_URL = 'https://rickandmortyapi.com/api/character?page=';

async function query() {
    console.log('Fetch Data')
    return gDatabase.results
}

// async function query(page = 1) {
//     const { data } = await axios.get(BASE_URL + page)
//     return data.results;
// }

export const databaseService = {
    query
}
