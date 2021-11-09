import { memo, useContext } from 'react';
import { Context } from '../../App';
import { CharacterPreview } from './CharacterPreview';

export const CharacterList = memo(function _CharacterList({
    characters,
    onToggleModal,
    onSelectedCharcter }) {
    const view = useContext(Context);

    return (
        <section className={`character-list  ${view ? 'cards' : ''}`}>
            {!view && <div className="character-list-head   align-center">
                <div>&nbsp;</div>
                <span>name</span>
                <span>origin</span>
                <span>status</span>
                <span>species</span>
                <span>gender</span>
            </div>
            }
            {characters?.map(character => (
                <CharacterPreview key={character.id}
                    character={character} onToggleModal={onToggleModal} onSelectedCharcter={onSelectedCharcter} />
            ))}
        </section>
    )
})