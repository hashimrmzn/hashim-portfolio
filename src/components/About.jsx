import React from 'react'
import { Box, Stack, Typography, Button, IconButton } from "@mui/material";
import aboutimage from "../assets/images/about.jpg";
function About() {
    return (
        <>
            <Box
                className="overflowx-hidden"
                component="section"
                sx={{
                    alignContent: "center",
                    minHeight: "100vh",
                    pt: 10
                }}
            >
                <div
                    className='container'
                >
                    <Stack
                        direction={{ xs: "column", sm: "row" }}
                        justifyContent="space-between"
                        alignItems="center"
                        spacing={2}
                    >
                        <Stack sx={{ flex: 1, }}
                            position={'relative'}
                        >
                            <Box sx={{
                                position: "relative",
                                zIndex: "1"
                            }}>
                                <img
                                    className='about-img'
                                    data-aos="fade-down-right"
                                    src={aboutimage}
                                    alt="Who I am"
                                    style={{
                                        width: "100%",
                                        height: "auto",
                                        objectFit: "cover",


                                    }}
                                />

                            </Box>

                        </Stack>

                        <Stack sx={{ flex: 1, p: 3 }}>
                            <Box>

                                <Typography
                                    data-aos="fade-up"

                                    variant='h1'
                                    sx={{
                                        fontSize: "3rem",
                                        textAlign: "start",
                                        color: "var( --main-primary-color)"
                                    }}
                                >
                                    About Me
                                </Typography>
                                <Typography
                                    data-aos="fade-up"

                                    variant='h3'
                                    sx={{
                                        fontSize: "2rem",
                                        mt: '20px',
                                        textAlign: "start",
                                        color: "#fff"
                                    }}
                                >
                                    I am Muhammad Hashim.
                                </Typography>
                                <Typography
                                    data-aos="fade-up"

                                    variant="body1"
                                    component="p"
                                    sx={{
                                        fontSize: "1.2rem",
                                        mt: "20px",
                                        textAlign: "start",
                                    }}
                                >
                                    I’m a passionate Web Developer with 2 years of professional experience specializing in WordPress development and frontend engineering.
                                </Typography>
                                <Typography
                                    data-aos="fade-up"

                                    variant="body1"
                                    component="p"
                                    sx={{
                                        fontSize: "1.2rem",
                                        mt: "20px",
                                        textAlign: "start",
                                    }}
                                >
                                    On the frontend, I work with HTML, CSS, JavaScript, jQuery, Bootstrap, MUI, and React to craft visually engaging and user-friendly interfaces. My focus is on creating responsive, accessible, and performance-optimized websites
                                </Typography>

                                <Typography
                                    data-aos="fade-up"

                                    variant="body1"
                                    component="p"
                                    sx={{
                                        fontSize: "1.2rem",
                                        mt: "20px",
                                        textAlign: "start",
                                    }}
                                >
                                    In WordPress, I build custom solutions ranging from Elementor-powered sites to fully custom themes, integrating Advanced Custom Fields (ACF) for dynamic content management. With extensive experience in PHP, I develop robust custom functionalities, optimize performance, and create tailored features that perfectly match client requirements.
                                </Typography>
                            </Box>
                        </Stack>
                    </Stack>
                </div>

            </Box>
        </>
    )
}

export default About