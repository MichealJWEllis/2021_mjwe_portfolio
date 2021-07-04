import React from 'react'
import '../App.css'
import Navbar from './Navbar'
import Header from './Header'
import {
    Box,
    Grid,
    Card,
    CardActionArea,
    CardActions,
    CardContent,
    CardMedia,
    Button,
    Typography
} from "@material-ui/core"
import project1 from "../assets/images/projectimages/main-landing-page.png"
import bbrmInventory from "../assets/images/projectimages/Login.png"
import passwordSite from "../assets/images/projectimages/passwordgen.png"
import jsQuiz from "../assets/images/projectimages/quiz.png"
import teamGen from "../assets/images/projectimages/teamgen.png"
import toDo from "../assets/images/projectimages/todo.png"
import weatherDash from "../assets/images/projectimages/WeatherDash1.png"
import workDay from "../assets/images/projectimages/workday.png"
import budget from "../assets/images/projectimages/budget.png"

export const Portfolio = () => {
    return (
        <Box component="div">
            <Navbar />
            <Header />
            <Grid>
                {/* Project 1 */}
                <Grid item xs={12} sm={8} md={8} >
                    <Card style={{ background: "rgba(189, 189, 208, 0.535)" }}>
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                alt=""

                                image={project1}

                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5">
                                    When To Fly
                                </Typography>
                                <Typography variant="body2" color="textSecondary" component="p">
                                    Drones are categorized as Unmanned Aircraft Systems (UAS), which with other kinds of aircrafting systems are becoming highly available in almost all major electronic retail stores and online marketers. Every user of such technology, be it for business purposes or personal use, desires operating them whenevr, wherever and most especially, making safe operation a priority. Conversely, it is very easy to pick one up from the shelf for use by prospective operators, but without the awareness that, you cant just fly or operate them anytime nor anywhere. When-To-Fly is a website inspired by a group of University of Texas at Austin Coding BootCamp students, that provides drone users/operators with all the guidance and information required for responsible and safe operation.
                                </Typography>
                                <Typography gutterBottom variant="h5">
                                    Code Used: HTML, JavaScript, CSS, API'S
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                        <CardActions>

                            <Button size="small" color="primary" href="https://michealjwellis.github.io/when-to-fly/">
                                Demo
                            </Button>
                        </CardActions>
                    </Card>
                    <br></br>
                    <Card style={{ background: "rgba(189, 189, 208, 0.535)" }}>
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                alt=""

                                image={bbrmInventory}
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5">
                                    BBRM Inventory
                                </Typography>
                                <Typography variant="body2" color="textSecondary" component="p">
                                    This project was created to be a tool for an IT department. The BBRM inventory management tool uses Node.js and Express.js to create a RESTful API. It also uses Handlebars.js as the templating engine, MySQL and Sequelize ORM for the database. The BBRM inventory managment tool allows users to sign in, then create,update,delete inventory items.
                                </Typography>
                                <Typography gutterBottom variant="h5">
                                    Code Used: JavaScript, Node.js, Express.js, MySQL, Sequelize ORM, HTML, CSS, Handlebars.js
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                        <CardActions>

                            <Button size="small" color="primary" href="https://bbrm.herokuapp.com/">
                                Demo
                            </Button>
                        </CardActions>
                    </Card>
                    <br></br>
                    <Card style={{ background: "rgba(189, 189, 208, 0.535)" }}>
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                alt=""

                                image={passwordSite}
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5">
                                    Password Generator
                                </Typography>
                                <Typography variant="body2" color="textSecondary" component="p">
                                    Create an application that an employee can use to generate a random password.
                                </Typography>
                                <Typography gutterBottom variant="h5">
                                    Code Used: HTML, CSS, JavaScript
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                        <CardActions>

                            <Button size="small" color="primary" href="https://michealjwellis.github.io/Password-Generator/">
                                Demo
                            </Button>
                        </CardActions>
                    </Card>
                    <br></br>
                    <Card style={{ background: "rgba(189, 189, 208, 0.535)" }}>
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                alt=""

                                image={jsQuiz}
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5">
                                    JavaScript Quiz
                                </Typography>
                                <Typography variant="body2" color="textSecondary" component="p">
                                    Build a timed coding quiz with multiple-choice questions. This app will run in the browser. The app will feature dynamically updated HTML and CSS powered by JavaScript.
                                </Typography>
                                <Typography gutterBottom variant="h5">
                                    Code Used: HTML, CSS, JavaScript
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                        <CardActions>

                            <Button size="small" color="primary" href="https://michealjwellis.github.io/JavaScript_Quiz/">
                                Demo
                            </Button>
                        </CardActions>
                    </Card>
                    <br></br>
                    <Card style={{ background: "rgba(189, 189, 208, 0.535)" }}>
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                alt=""

                                image={teamGen}
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5">
                                    Team Generator
                                </Typography>
                                <Typography variant="body2" color="textSecondary" component="p">
                                    This project was to build a Node.js command-line application that takes in information about employees on a software engineering team and generates an HTML webpage that displays summaries for each person. This project also will run passing tests using jest to create each employee's role, ID, and information for each employee position.
                                </Typography>
                                <Typography gutterBottom variant="h5">
                                    Code Used: JavaScript, HTML, CSS, Node.js
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                        <CardActions>

                            <Button size="small" color="primary" href="https://github.com/MichealJWEllis/team_profile_generator">
                                Demo
                            </Button>
                        </CardActions>
                    </Card>
                    <br></br>
                    <Card style={{ background: "rgba(189, 189, 208, 0.535)" }}>
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                alt=""

                                image={toDo}
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5">
                                    express.js-Note Taker
                                </Typography>
                                <Typography variant="body2" color="textSecondary" component="p">
                                    This application will allow for a small business owner to write and save notes as to organize and keep track of tasks. This application was created out of necessity to allow for better organization.
                                </Typography>
                                <Typography gutterBottom variant="h5">
                                    Code Used: JavaScript, NodeJS, ExpressJS
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                        <CardActions>

                            <Button size="small" color="primary" href="https://nameless-woodland-32392.herokuapp.com/notes">
                                Demo
                            </Button>
                        </CardActions>
                    </Card>
                    <br></br>
                    <Card style={{ background: "rgba(189, 189, 208, 0.535)" }}>
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                alt=""

                                image={weatherDash}
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5">
                                    Weather Dashboard
                                </Typography>
                                <Typography variant="body2" color="textSecondary" component="p">
                                    Create an application that user can check their local weather. Use the OpenWeather API to retrieve weather data for cities. nclude dynamically updated HTML and CSS powered by JavaScript.
                                </Typography>
                                <Typography gutterBottom variant="h5">
                                    Code Used: HTML, CSS, JavaScript
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                        <CardActions>

                            <Button size="small" color="primary" href="https://michealjwellis.github.io/Weather_DashBoard/">
                                Demo
                            </Button>
                        </CardActions>
                    </Card>
                    <br></br>
                    <Card style={{ background: "rgba(189, 189, 208, 0.535)" }}>
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                alt=""

                                image={workDay}
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5">
                                    Work Day Scheduler
                                </Typography>
                                <Typography variant="body2" color="textSecondary" component="p">
                                    Develop an app that will allow a user to schedule their typical work day from 9-5
                                </Typography>
                                <Typography gutterBottom variant="h5">
                                    Code Used: HTML, CSS, JavaScript, Moment.JS, JQuery.JS, BOOTSTRAP
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                        <CardActions>

                            <Button size="small" color="primary" href="https://michealjwellis.github.io/Work_Day_Scheduler/">
                                Demo
                            </Button>
                        </CardActions>
                    </Card>
                    <br></br>
                    <Card style={{ background: "rgba(189, 189, 208, 0.535)" }}>
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                alt=""

                                image={budget}
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5">
                                    Budget Tracker
                                </Typography>
                                <Typography variant="body2" color="textSecondary" component="p">
                                    This application takes an existing budget tracker application and update it to allow for offline access and functionality. The user will be able to add expenses and deposits to their budget with or without a connection. If the user enters transactions offline, the total should be updated when they're brought back online.
                                </Typography>
                                <Typography gutterBottom variant="h5">
                                    Code Used: HTML, CSS, JavaScript
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                        <CardActions>

                            <Button size="small" color="primary" href="https://budget-tracker0511.herokuapp.com/">
                                Demo
                            </Button>
                        </CardActions>

                    </Card>

                </Grid>
            </Grid>
        </Box >
    )
}

export default Portfolio
