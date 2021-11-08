import { memo, useMemo } from 'react';
import { CharacterPreview } from './CharacterPreview';

export const CharacterList = memo(function _CharacterList({ characters }) {
    // const imgSrcg = useMemo(() => {
    //     return `https://cdn.jsdelivr.net/gh/atomiclabs/cryptocurrency-icons@d5c68edec1f5eaec59ac77ff2b48144679cebca1/32/white/${title.toLowerCase()}.png`
    // }, [title]);


    return (
        <section className="character-list flex column">
            {/* <div className="title-container flex alig-center gap">
                <img src={imgSrcg} alt="icon" />
                <h2 className="title">{title}</h2>
            </div>
            {characters.length > 0 && characters.map(character => <CharacterInfo
                key={character.asset}
                character={character}
            />)} */}
        </section>
    )
})