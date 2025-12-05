import React from 'react'
import { Box, Stack, Typography} from "@mui/material";
import aboutimage from "../assets/images/about.jpg";
function About() {
    return (
        <>
            <Box
                className="overflowx-hidden"
                component="section"
                sx={{
                    alignContent: "center",
                    pt: 10
                }}
            >
                <div
                    className='container'
                >
                    <Stack
                        direction={{
                            xs: "column", 
                            sm: "column", 
                            md: "row"     
                        }}
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
    <Box data-aos="fade-left">

        <Typography
            variant='h2'
            sx={{
                fontSize: "2.2rem",
                textAlign: "start",
                color: "var(--main-primary-color)"
            }}
        >
            About Me
        </Typography>



        <Typography
            variant="body1"
            component="p"
            sx={{
                fontSize: "1rem",
                mt: "20px",
                textAlign: "start",
            }}
        >
            I’m a Frontend & WordPress Developer, and an IBM-Certified Full-Stack JavaScript Developer with 2 years of professional experience. I specialize in creating modern, fast, and user-focused websites and applications.
        </Typography>

        <Typography
            variant="body1"
            component="p"
            sx={{
                fontSize: "1rem",
                mt: "20px",
                textAlign: "start",
            }}
        >
            On the frontend, I work with HTML, CSS, JavaScript, jQuery, Bootstrap, MUI, and React to build clean, responsive, and highly interactive interfaces. I focus on performance, accessibility, and smooth user experience.
        </Typography>

        <Typography
            variant="body1"
            component="p"
            sx={{
                fontSize: "1rem",
                mt: "20px",
                textAlign: "start",
            }}
        >
            In WordPress, I develop custom themes from scratch, WooCommerce stores, and dynamic CMS-driven sites using ACF and modern best practices—ensuring fast, scalable, and fully optimized solutions for clients.
        </Typography>

        <Typography
            variant="body1"
            component="p"
            sx={{
                fontSize: "1rem",
                mt: "20px",
                textAlign: "start",
            }}
        >
            With full-stack knowledge from the IBM program, I also work with Node.js, Express, and MongoDB to build reliable backend APIs and complete full-stack applications.
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