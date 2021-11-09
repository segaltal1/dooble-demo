import { memo } from 'react'
import { NavLink } from 'react-router-dom'
import { FormControl, InputLabel, MenuItem, Select } from '@material-ui/core'
// import { Button } from '@material-ui/core'

export const AppHeader = ({ toggleView, view }) => {
    const label = { inputProps: { 'aria-label': 'Switch demo' } };
    return (
        <header className="app-header flex align-center  main-layout space-between">
            <NavLink to='/'>
                <h1>Rick and Morty Characters App</h1>
            </NavLink>
            <div className="flex align-center gap">
                <FormControl style={{ width: '100px' }} >
                    <InputLabel style={{ color: 'white' }} id="gender">View</InputLabel>
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
                        value={view || ''}
                        variant="outlined"
                        label="Gender"
                        onChange={(ev) => { toggleView(ev) }}
                    >
                        <MenuItem value={'table'}>Table</MenuItem>
                        <MenuItem value={'cards'}>Cards</MenuItem>
                    </Select>
                </FormControl>

                <NavLink to='/charts'>Charts</NavLink>
            </div>
        </header>
    )
}
