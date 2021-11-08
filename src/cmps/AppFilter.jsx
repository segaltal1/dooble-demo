import { Clear } from '@material-ui/icons'
import { IconButton, TextField } from '@material-ui/core'

export const AppFilter = () => {

    const onSetFilter = ({ target }) => {
    }

    return (
        <section className="app-filter flex align-center">
            <TextField
                id="field-basic"
                label="Search"
                variant="outlined"
                value={''}
                style={{
                    backgroundColor: "navy",
                    color: "white",
                    borderRadius: 5,

                }}
                onChange={onSetFilter}
            />
            <IconButton
                className="icon-clear"
                onClick={onSetFilter}
                style={{
                    color: '#ffffff',
                    borderRadius: '0px',
                    padding: '8px'
                }}
                aria-label="clear search"
                component="span"
            >
                <Clear />
            </IconButton>
        </section>
    )
}