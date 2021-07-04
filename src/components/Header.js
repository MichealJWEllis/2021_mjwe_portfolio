import React from 'react'
import {
    Typography,
    Avatar,
    Grid,
    Box
} from "@material-ui/core"
import chiImage from '../assets/images/IMG_1244.jpg'
import '../App.css'
import video from '../assets/video/DJI_0043_Trim.mp4'

export const Header = () => {
    return (
        <>
            <Box id="right">
                <Box>
                    <video loop autoPlay id="myVideo">
                        <source src={video} type="video/mp4" />
                        Your browser does not support HTML5 video.
                    </video>
                </Box>
                <img id="chi" src={chiImage} alt="MJWE Chicago Image" />
            </Box>
        </>
    )
}

export default Header
