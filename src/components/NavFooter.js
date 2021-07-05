import React from 'react'
import { makeStyles } from '@material-ui/styles'
import { BottomNavigation, BottomNavigationAction } from '@material-ui/core'
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import EmailIcon from '@material-ui/icons/Email';

const useStyles = makeStyles({
    root: {
        "& .MuiBottomNavigationAction-root": {
            minWidth: 0,
            maxWidth: 250,
        },
        "& .MuiSvgIcon-root": {
            fill: "blue",
            "&:hover": {
                fill: "green"
            }
        }
    }

})


export const NavFooter = () => {
    const classes = useStyles()
    return (
        <BottomNavigation width="auto" style={{ background: "black" }}>
            <BottomNavigationAction
                className={classes.root}
                style={{ padding: 0 }}
                icon={<LinkedInIcon />}
                href="https://www.linkedin.com/in/michealjwellissr/"
            />
            <BottomNavigationAction
                className={classes.root}
                style={{ padding: 0 }}
                icon={<GitHubIcon />}
                href="https://github.com/MichealJWEllis"
            />
            <BottomNavigationAction
                className={classes.root}
                style={{ padding: 0 }}
                icon={<EmailIcon />}
                href="https://www.gmail.com"
            />

        </BottomNavigation>
    )
}

export default NavFooter
