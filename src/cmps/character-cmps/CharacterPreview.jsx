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
        <section className="character-preview flex align-center "
            onClick={() => {
                onSelectedCharcter(getSelectedCharcter)
            }}>
            <div className="character-img">
                <img src={image} alt={name} />
            </div>
            <span>{name}</span>
            <span>{origin.name}</span>
            <span>{status}</span>
            <span>{species}</span>
            <span>{gender}</span>
        </section >
    )
}