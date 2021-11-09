import { useMemo, useState } from "react";

export const CharacterPreview = ({ character, onToggleModal, onSelectedCharcter }) => {
    const { name, origin, status, species, gender, image, episode } = character

    const getSelectedCharcter = useMemo(() => {
        const [first] = episode
        const last = episode[episode.length - 1]
        return {
            first,
            last,
            image,
            name
        }

    }, [character]);

    return (
        <section className="character-preview cards"
            onClick={() => {
                onSelectedCharcter(getSelectedCharcter)
            }}>
            <div className="character-img">
                <img src={image} alt={name} />
            </div>
            <span className="name">{name}</span>
            <span className="origin">{origin.name}</span>
            <span className="status">{status}</span>
            <span className="species">{species}</span>
            <span className="gender">{gender}</span>
        </section >
    )
}