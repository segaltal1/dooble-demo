import { useCallback, useEffect, useMemo, useState } from "react"
import { Pagination } from "@material-ui/lab"
import { databaseService } from "../services/database.service"
import { utilService } from "../services/utils"
import { AppFilter } from "./AppFilter"
import { CharacterList } from "./character-cmps/CharacterList"
import { BasicModal } from "./Modal"

export const AppBoard = () => {
    const [characters, setCharcters] = useState(null)
    const [page, setPage] = useState(1)
    const [isOpenModal, setOpenModal] = useState(false);
    const [selectedCharcter, setSelectedCharcter] = useState(null)

    const [filterBy, setFilterBy] = useState({
        name: '',
        gender: '',
        status: ''
    })

    const onToggleModal = () => {
        setOpenModal((prevState) => !prevState)
    }

    const onSelectedCharcter = (selectedCharcter) => {
        setSelectedCharcter(selectedCharcter)
    }

    const onSetFilter = ({ target }) => {
        console.log('setting filter');
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
    // const debouncedSetFilter = useCallback(utilService.debounce(onSetFilter, 300), []);

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

    if (!characters) return <h1>Loading</h1>
    return (
        <section className="app-board flex column gap">
            <AppFilter onSetFilter={onSetFilter} clearFilter={clearFilter} filterBy={filterBy} />
            {
                characters?.length > 0 ?
                    <>
                        <CharacterList characters={charactersToDisaply} onSelectedCharcter={onSelectedCharcter} onToggleModal={onToggleModal} />
                        <Pagination count={databaseService.getPageCount()} page={page} onChange={onSetPage} />

                    </>
                    : <h1>No Characters founds</h1>
            }

            <BasicModal onToggleModal={onToggleModal} isOpen={isOpenModal}
                onSelectedCharcter={onSelectedCharcter} selectedCharcter={selectedCharcter} />
        </section>
    )
}