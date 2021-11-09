import { useCallback, useEffect, useState } from 'react'
import {
    FormControl,
    IconButton,
    InputLabel,
    MenuItem,
    Select,
    TextField
} from '@material-ui/core'
import { utilService } from '../services/utils'

export const AppFilter = ({ onSetFilter, filterBy, clearFilter }) => {
    const [name, setName] = useState('')
    const handleChange = ({ target }) => {
        setName(target.value)
    }

    const debouncedSetFilter = useCallback(utilService.debounce(onSetFilter, 300), []);

    useEffect(() => {
        debouncedSetFilter({ target: { name: 'name', value: name } })
    }, [name])

    return (
        <section className="app-filter flex  column gap">
            <div className="search-filter flex align-center">
                <TextField
                    id="field-basic"
                    label="Search"
                    variant="outlined"
                    name="name"
                    value={name}
                    style={{
                        backgroundColor: "transparent",
                        color: "#333333",
                        borderRadius: 5,
                        width: "100%"
                    }}
                    onChange={handleChange}
                />

            </div>
            <div className="search-selections flex align-center gap">

                <FormControl fullWidth >
                    <InputLabel id="gender">Gender</InputLabel>
                    <Select
                        MenuProps={{
                            getContentAnchorEl: null,
                            anchorOrigin: {
                                vertical: "bottom",
                                horizontal: "left"
                            }
                        }}
                        labelId="gedner"
                        id="demo-simple-select"
                        name="gender"
                        value={filterBy.gender}
                        variant="outlined"
                        label="Gender"
                        onChange={onSetFilter}
                    >
                        <MenuItem value={'Male'}>Male</MenuItem>
                        <MenuItem value={'Female'}>Female</MenuItem>
                        <MenuItem value={'unknown'}>Unknown</MenuItem>
                    </Select>
                </FormControl>
                <FormControl fullWidth>
                    <InputLabel id="status">Status</InputLabel>
                    <Select
                        MenuProps={{
                            getContentAnchorEl: null,
                            anchorOrigin: {
                                vertical: "bottom",
                                horizontal: "left"
                            }
                        }}
                        labelId="status"
                        id="demo-simple-select"
                        name="status"
                        value={filterBy.status}
                        label="Status"
                        variant="outlined"
                        onChange={onSetFilter}
                    >
                        <MenuItem value={'Alive'}>Alive</MenuItem>
                        <MenuItem value={'Dead'}>Dead</MenuItem>
                        <MenuItem value={'unknown'}>Unknown</MenuItem>
                    </Select>
                </FormControl>
                <IconButton
                    className="icon-clear"
                    onClick={() => {
                        setName('')
                        clearFilter()
                    }}
                    name="clear"
                    style={{
                        color: '#fefefe',
                        backgroundColor: "#176cc0",
                        borderRadius: '5px',
                        padding: "1rem",
                        fontSize: "1.2rem",
                        textTransform: "uppercase"
                    }}
                    aria-label="clear search"
                    component="span">
                    Clear All
                </IconButton>

            </div>
        </section>
    )
}