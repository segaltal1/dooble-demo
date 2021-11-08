import { memo, useMemo } from 'react';
import { CharacterPreview } from './CharacterPreview';

export const CharacterList = memo(function _CharacterList({ characters, onToggleModal, onSelectedCharcter }) {



    return (
        <section className="character-list flex column">
            <div className="character-list-head  flex align-center">
                <span>name</span>
                <span>origin</span>
                <span>status</span>
                <span>species</span>
                <span>gender</span>
            </div>
            {characters?.map(character => (
                <CharacterPreview key={character.id}
                    character={character} onToggleModal={onToggleModal} onSelectedCharcter={onSelectedCharcter} />
            ))}
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