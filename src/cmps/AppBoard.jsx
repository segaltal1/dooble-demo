import { useEffect, useMemo } from "react"
import { AppFilter } from "./AppFilter"
import { CharacterList } from "./character-cmps/CharacterList"

export const AppBoard = ({ match }) => {


    // const charactersToDisaply = useMemo(() => {
    //     if (!filterBy) return characters
    //     const regex = new RegExp(filterBy, 'i');
    //     return Object.keys(characters).reduce((acc, title) => {
    //         acc[title] = characters[title].filter(character => regex.test(character.asset))
    //         return acc;
    //     }, {})

    // }, [filterBy, characters])

    // useEffect(() => {
    //     const { params } = match
    //     if (params.kraken) dispatch(loadCharacters(params.kraken))
    //     else if (match.path === '/') dispatch(loadCharacters('btc'))
    // }, [match])

    return (
        <section className="app-board flex column gap">
            <AppFilter />
           
        </section>
    )
}