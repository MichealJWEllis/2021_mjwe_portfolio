import React from 'react'
import {
    AppBar,
    Toolbar,
    ListItem,
    IconButton,
    ListItemText,
    Avatar,
    Divider,
    List,
    Typography,
    Box
} from '@material-ui/core'
import {
    ArrowBack,
    AssignmentInd,
    Home,
    Apps,
    ContactMail
} from '@material-ui/icons'


export const Navbar = () => {
    return (
        <Box component="nav">
            <AppBar position="static" style={{ background: "rgba(0, 0, 0, 0.5)" }}>
                <Toolbar>
                    <Typography className="topnav" id="myTopnav">

                        <a href="#" className="active">Find out more about Micheal</a>

                    </Typography>
                </Toolbar>
            </AppBar>
        </Box>
    )
}

export default Navbar