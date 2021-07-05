import React from 'react'
import '../App.css'
import { Typography, Box, Button } from '@material-ui/core'
import Navbar from './Navbar'
import Header from './Header'
import DownloadLink from 'react-download-link'
import Footer from './Footer'


export const Resume = () => {
    const erie = `Erie Construction ___ August 17,2020 – Present
    3516 Granite Circle				
    Supervisor: Tim Sink
    tim@erieconstruction.com
    Toledo, OH 43617				
    PH: (419) 472-4200
    `
    const alro = `Alro Steel Inc.___ June 5, 2017 – August 14, 2020
    1605 Executive Dr.			                   
    Supervisor: Chuck Houghton
    choughton@alro.com
    Jackson, MI 49204			                   
    PH: (517) 788-3131
    `
    const alro2 = `Alro Steel Inc.__ March 18, 2013 – June 2, 2017
    1800 W. Willow St.			                   
    Supervisor: Jamie Gaskill
    jgaskill@alro.com
    Lansing, MI 48915			                   
    PH: (517) 371-9616
    `

    return (
        <div>
            <Navbar />
            <Header />
            <Box component="header">
                <Typography variant="h4" align="center" style={{ color: "white" }}>

                    WORK EXPERIENCE
                </Typography>

                <Box>
                    <div className="container">
                        <ul>
                            <li><span></span>
                                <div>
                                    <Button href="../assets/images/resume.pdf" style={{  background: "green" }}><DownloadLink style={{ color: "white",textDecoration: "none" }}
                                        label="Download Resume"
                                        filename="../assets/images/resume.pdf"
                                        exportFile={() => "Client side cache data here…"}
                                    /></Button>
                                    <div className="title">( I.T Help-Desk Analyst / Full-Stack Developer )</div>
                                    <div className="info">
                                        {erie.split('\n\n').map(paragraph =>
                                            <p>
                                                {paragraph.split('\n').reduce((total, line) => [total, <br />, line])}
                                            </p>
                                        )}

                                    </div>

                                </div> <span className="number"><span>Current</span> <span>August 2020</span></span>
                            </li>
                            <li>
                                <div><span></span>
                                    <div className="title">(I.T / Help-desk Analyst)
                                    </div>
                                    <div className="info">
                                        {alro.split('\n\n').map(paragraph =>
                                            <p>
                                                {paragraph.split('\n').reduce((total, line) => [total, <br />, line])}
                                            </p>
                                        )}

                                    </div>

                                </div> <span className="number"><span>August 2020</span> <span>June 2017</span></span>
                            </li>
                            <li>
                                <div><span></span>
                                    <div className="title">(CAD Operator / Shift Supervisor)</div>
                                    <div className="info">
                                        {alro2.split('\n\n').map(paragraph =>
                                            <p>
                                                {paragraph.split('\n').reduce((total, line) => [total, <br />, line])}
                                            </p>
                                        )}

                                    </div>
                                </div> <span className="number"><span>June 2017</span> <span>March 2013</span></span>
                            </li>

                        </ul>
                    </div>

                </Box>
            </Box>

        </div>


    )
}

export default Resume
