import { memo } from 'react'
import { NavLink } from 'react-router-dom'
// import { Button } from '@material-ui/core'

export const AppHeader = memo(function _AppHeader() {

    return (
        <header className="app-header flex align-center  main-layout space-between">
            <NavLink to='/'>
                <h1>Rick and Morty Characters App</h1>
            </NavLink>
            <NavLink to='/charts'>Charts</NavLink>
        </header>
    )
})