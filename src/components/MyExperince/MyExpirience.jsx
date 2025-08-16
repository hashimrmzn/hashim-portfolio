import { Box, Stack, Typography } from "@mui/material";
import React from 'react'

function MyExpirience() {
    return (
        <>

            <div className='container'>
                <Typography variant='h3'
                    sx={{ color: "#ffb400" }}
                >
                    Where I’ve Worked
                </Typography>
                <Stack
                    sx={{
                        mt: {
                            md: "80px",
                            sm: "60px",
                            xs: "40px"
                        }
                    }}
                >
                    <Stack spacing={2} sx={{ mt: 3 }}>
                        {[
                            {
                                title: "Frontend Development Intern — Coding Pixel",
                                institute: "October 2023 – December 2023",
                            },
                            {
                                title: "Frontend & WordPress Developer — Coding Pixel",
                                institute: "January 2024 – July 2025",
                            },
                            {
                                title: "Web Manager — Ittefaq Electrotech",
                                institute: "July 2025 – Present",
                            },
                            {
                                title: "React Intern — Conect Solutions",
                                institute: "July 2025 – Present",
                            },
                        ].map((work, index) => (
                            <Box
                                data-aos="fade-up"
                                data-aos-duration="1500"
                                key={index}
                                sx={{
                                    width: "100%",
                                    background: "linear-gradient(145deg, #2a2a2a, #383838)",
                                    border: "2px solid #ffb400",
                                    borderRadius: "12px",
                                    padding: "1rem",
                                    display: "flex",
                                    flexDirection: "column",
                                    gap: 0.5,
                                    transition: "all 0.3s ease",
                                    cursor: "default",
                                    position: "relative",
                                    overflow: "hidden",
                                    "&::before": {
                                        content: '""',
                                        position: "absolute",
                                        width: "100%",
                                        height: "100%",
                                        background:
                                            "linear-gradient(45deg, transparent, rgba(255,255,255,0.1), transparent)",
                                        top: "-100%",
                                        left: "-100%",
                                        transition: "all 0.5s ease",
                                    },
                                    "&:hover": {
                                        transform: "scale(1.05)",
                                        boxShadow: "5px 5px 0 #ffb40050",
                                    },
                                    "&:hover::before": {
                                        top: "100%",
                                        left: "100%",
                                    },
                                }}
                            >
                                <Typography
                                    variant="h6"
                                    sx={{
                                        color: "#ffb400",
                                        fontWeight: "bold",
                                        fontSize: { xs: "14px", sm: "16px" },
                                    }}
                                >
                                    {work.title}
                                </Typography>
                                <Typography
                                    sx={{
                                        color: "#fff",
                                        fontSize: { xs: "12px", sm: "14px" },
                                        opacity: 0.8,
                                    }}
                                >
                                    {work.institute}
                                </Typography>
                            </Box>
                        ))}
                    </Stack>

                </Stack>
            </div>
        </>
    )
}

export default MyExpirience