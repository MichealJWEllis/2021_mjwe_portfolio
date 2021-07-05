import React, { useState } from 'react'
import '../App.css'
import Header from './Header'
import Navbar from './Navbar'
import {
    TextField, Typography, Button, Grid, Box
} from "@material-ui/core"
import SendIcon from "@material-ui/icons/Send"
import { makeStyles, withStyles } from '@material-ui/core/styles'
import Footer from './Footer'

const InputField = withStyles({
    root: {
        "& label.Mui-focused": {
            color: "white",
        },
        "& label": {
            color: "Blue"
        }
    }
})(TextField)





export const Contact = () => {
    const [status, setStatus] = useState("Submit")
    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus("Sending...")
        const { name, email, message } = e.target.elements
        let details = {
            name: name.value,
            email: email.value,
            message: message.value,
        }
        let response = await fetch("http://localhost:5000/contact", {
            method: "POST",
            headers: {
                "Content-Type": "application/json;charset=utf-8",

            },
            body: JSON.stringify(details),
        })
        setStatus("Submit")
        let result = await response.json()
        alert(result.status)
    }
    return (
        <div>
            <Navbar />
            <Header />
            <Box component="div" >
                <Grid>
                    <Box component="form">
                        <Typography variant="h5" style={{ color: "white", textTransform: "uppercase" }}>
                            Contact me for more information.
                        </Typography>
                        <br />
                        <InputField
                            fullWidth={true}
                            margin="dense"
                            size="medium"
                            label="Name:"
                            inputProps={{ style: { color: "white" } }}
                            variant="filled"
                            type="text"
                            id="name"

                        />
                        <InputField
                            fullWidth={true}
                            label="Email:"
                            variant="filled"
                            margin="dense"
                            size="medium"
                            inputProps={{ style: { color: "white" } }}
                            type="email"
                            id="email"
                        />

                        <InputField
                            fullWidth={true}
                            label="Company Name: "
                            variant="filled"
                            margin="dense"
                            size="medium"
                            inputProps={{ style: { color: "white" } }}
                            id="message"
                        />
                        <br />

                        <Button
                            variant="outlined"
                            fullWidth={false}
                            type="submit"
                            style={{ color: "white", background: "green" }}>
                            {status}
                        </Button>
                    </Box>
                </Grid>
            </Box>
            <Footer />
        </div>

    )
}

export default Contact
