const gDatabase = require('../data/data.json');

async function query() {
    return gDatabase.results
}

export const databaseService = {
    query
}
