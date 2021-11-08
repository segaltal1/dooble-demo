import { databaseService } from './database.service';

async function getBtcCharacter() {
    const { btcCharacters } = await databaseService.query();
    return btcCharacters;
}

export const btcService = {
    getBtcCharacter
}
