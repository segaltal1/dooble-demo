import { Pagination } from "@material-ui/lab"
import { useCallback, useEffect, useMemo, useState } from "react"
import { databaseService } from "../services/database.service"
import { utilService } from "../services/utils"
import { AppFilter } from "./AppFilter"
import { CharacterList } from "./character-cmps/CharacterList"

export const AppBoard = () => {
    const [characters, setCharcters] = useState(null)
    const [page, setPage] = useState(1)

    const [filterBy, setFilterBy] = useState({
        name: '',
        gender: '',
        status: ''
    })


    const debouncedloadCharacters = useCallback(utilService.debounce(loadCharacters, 250), []);

    const onSetFilter = ({ target }) => {
        const { name, value } = target
        setFilterBy(prevFilter => ({ ...prevFilter, [name]: value }))
    }

    const onSetPage = (event, value) => {
        setPage(value);
    };

    const charactersToDisaply = useMemo(() => {

        if (filterBy.name) {
            console.log('test');
            const regex = new RegExp(filterBy.name, 'i');
            return characters?.filter(character => regex.test(character.name))
        }
        return characters
    }, [filterBy, characters])

    const loadCharacters = async (page) => {
        const characters = await databaseService.query(page)
        setCharcters(characters)
    }


    useEffect(() => {
        loadCharacters(page)
    }, [page])

    if (!characters) return <h1>Loading</h1>
    return (
        <section className="app-board flex column gap">
            <AppFilter onSetFilter={onSetFilter} />
            {
                characters.length > 0 ? <CharacterList characters={charactersToDisaply} filterBy={filterBy} />
                    : <h1>No Characters founds</h1>
            }

            <Pagination count={42} page={page} onChange={onSetPage} />

        </section>
    )
}