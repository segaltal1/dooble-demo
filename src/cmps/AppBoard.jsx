import { useCallback, useEffect, useMemo, useState } from "react"
import { Pagination } from "@material-ui/lab"
import { databaseService } from "../services/database.service"
import { utilService } from "../services/utils"
import { AppFilter } from "./AppFilter"
import { CharacterList } from "./character-cmps/CharacterList"
import { BasicModal } from "./Modal"
import { Loader } from "./Loader"

export const AppBoard = ({ view }) => {
    const [characters, setCharcters] = useState(null)
    const [selectedCharcter, setSelectedCharcter] = useState(null)
    const [page, setPage] = useState(1)
    const [filterBy, setFilterBy] = useState({
        name: '',
        gender: '',
        status: ''
    })

    const onSelectedCharcter = (selectedCharcter) => {
        setSelectedCharcter(selectedCharcter)
    }

    const onSetFilter = ({ target }) => {
        const { name, value } = target
        setFilterBy(prevFilter => ({ ...prevFilter, [name]: value }))
    }

    const clearFilter = () => {
        const filter = {
            name: '',
            gender: '',
            status: ''
        }
        setFilterBy(filter)
    }

    const onSetPage = (event, value) => {
        setPage(value);
    };

    const charactersToDisaply = useMemo(() => {
        if (characters?.length) {
            let charsToShow = [...characters];
            if (filterBy.name) {
                const regex = new RegExp(filterBy.name, 'i');
                charsToShow = charsToShow.filter(character => regex.test(character.name))
            }
            if (filterBy.gender) {
                charsToShow = charsToShow.filter(character => character.gender === filterBy.gender)
            }
            if (filterBy.status) {
                charsToShow = charsToShow.filter(character => character.status === filterBy.status)
            }
            return charsToShow
        }
    }, [filterBy, characters])

    const loadCharacters = async (page) => {
        const characters = await databaseService.query(page)
        setCharcters(characters)
    }

    useEffect(() => {
        loadCharacters(page)
    }, [page])

    useEffect(() => {
        loadCharacters(view)
    }, [view])



    if (!characters?.length) return <Loader />
    return (
        <section className="app-board flex column gap">

            <AppFilter
                onSetFilter={onSetFilter}
                clearFilter={clearFilter}
                filterBy={filterBy} />
            {
                charactersToDisaply?.length > 0 ?
                    <>
                        <CharacterList
                            characters={charactersToDisaply}
                            onSelectedCharcter={onSelectedCharcter} />
                        <Pagination
                            count={databaseService.getPageCount()}
                            page={page}
                            onChange={onSetPage} />

                    </>
                    : <h1 style={{ textAlign: 'center' }}>No Characters found!</h1>
            }

            <BasicModal
                onSelectedCharcter={onSelectedCharcter}
                selectedCharcter={selectedCharcter} />
        </section>
    )
}