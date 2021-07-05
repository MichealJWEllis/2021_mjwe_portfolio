import React, { useState } from 'react'
import { Link } from "react-router-dom"
import { makeStyles } from '@material-ui/core/styles'
import SideSlider from "@material-ui/core/Drawer"
import sideBarImage from '../assets/images/background1.jpg'
import {
    AppBar,
    Toolbar,
    ListItem,
    ListItemIcon,
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
import avatar from "../assets/images/ME.jpg"
import NavFooter from "../components/NavFooter"


// CSS STYLES

const myStyles = makeStyles(theme => ({
    menuBar: {
        width: 425,
        background: "black",
        height: "100%",

    },
    avatar: {
        display: "block",
        margin: "2rem auto",
        width: theme.spacing(30),
        height: theme.spacing(30),


    },
    listItem: {
        color: "white",
        width: 50,
        height: 50,
        marginRight: theme.spacing(2)


    }
}))

const iconMenu = [
    {
        listIcon: <Home />,
        listText: "Home",
        listPath: "/"
    },
    {
        listIcon: <AssignmentInd />,
        listText: "Resume",
        listPath: "/Resume"
    },
    {
        listIcon: <Apps />,
        listText: "Portfolio",
        listPath: "/Portfolio"
    },
    {
        listIcon: <ContactMail />,
        listText: "Contact",
        listPath: "/Contact"
    }
]





export const Navbar = () => {
    const [state, setState] = useState({
        right: false
    })

    const sliderMove = (slide, open) => () => {
        setState({ ...state, [slide]: open })
    }
    const classes = myStyles()
    const sideBar = slide => (

        <Box className={classes.menuBar} component="div" onClick={sliderMove("right", false)}>
            <Avatar className={classes.avatar} src={avatar} alt="MJWE Avatar image" />
            <Divider />
            <List>
                {iconMenu.map((lsItem, key) => (
                    <ListItem button key={key} component={Link} to={lsItem.listPath}>
                        <ListItemIcon className={classes.listItem}>
                            {lsItem.listIcon}
                        </ListItemIcon>
                        <ListItemText className={classes.listItem} primary={lsItem.listText} />
                    </ListItem>
                ))}
            </List>

        </Box>

    )
    return (
        <>
            <Box component="nav">
                <AppBar position="static" style={{ background: "rgba(0, 0, 0, 0.5)" }}>
                    <Toolbar>

                        <div className="topnav" id="myTopnav">
                            <a onClick={sliderMove("right", true)} className="active">Find out more about Micheal</a>
                        </div>

                        <SideSlider
                            anchor="left"
                            open={state.right}
                            onClose={sliderMove("right", false)}
                        >
                            {sideBar("right")}
                            <NavFooter />
                        </SideSlider>
                    </Toolbar>
                </AppBar>
            </Box>
        </>
    )
}

export default Navbar