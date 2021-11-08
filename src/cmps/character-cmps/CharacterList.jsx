import { memo } from 'react';
import { CharacterPreview } from './CharacterPreview';

export const CharacterList = memo(function _CharacterList({
    characters,
    onToggleModal,
    onSelectedCharcter }) {

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
        </section>
    )
})