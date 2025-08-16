import React from 'react'
import { useState } from "react";
import { Box, Stack, Typography, Button } from "@mui/material";
import images from '../../../../../utils/images';
import ProjectPopup from '../../ProjectPopup';
const projects = [
    {
        title: "Todo-List",
        image: "todolistpng.png",
        url: "https://hashimrmzn.github.io/TodoList/",
        description: "A modern and responsive Todo List application built with React, CSS, and Material-UI. It allows users to add, update, and delete tasks with a clean and intuitive interface. Designed with smooth UI interactions and responsive layouts, this project demonstrates my skills in React component architecture, state management, and UI/UX design.",
    },
    {
        title: "Enertia",
        image: "enertia.png",
        url: "https://hashimrmzn.github.io/Enertia/",
        description: "Enertia is a sleek and responsive web application developed with React, CSS, and Material-UI. It highlights a modern design approach with a focus on usability and clean layouts. This project showcases my ability to build interactive components, manage state effectively, and create visually appealing interfaces optimized for different devices.",
    },
    {
        title: "Ittefaq Electrotech",
        image: "itet.png",
        url: "https://itelectrotech.com/",
        description: "Ittefaq Electrotech is a custom WordPress theme developed from scratch with a fully responsive frontend. I built the interface using HTML, CSS, JavaScript, jQuery, and AOS animations to deliver smooth transitions and an engaging user experience. The project reflects my expertise in crafting tailored WordPress themes with modern design and performance in mind.",
    },
    {
        title: "Ittefaq Construction",
        image: "icca.png",
        url: "https://itelectrotech.com/",
        description: "Ittefaq Construction is a custom WordPress theme project where I developed the frontend from scratch. Using HTML, CSS, JavaScript, jQuery, and AOS animations, I created a responsive and visually engaging design. The theme emphasizes smooth interactions, modern layout, and performance optimization, showcasing my skills in building tailored WordPress solutions with a focus on user experience.",
    },
    {
        title: "Girls Life",
        image: "girlslife.png",
        url: "https://girlslife.com/",
        description: "Girls Life is a custom WordPress theme project where I built the frontend using HTML, CSS, JavaScript, jQuery, and AOS animations. The design focuses on delivering a lively and engaging user experience with smooth animations, responsive layouts, and modern styling. This project highlights my ability to create tailored WordPress themes that balance aesthetics with performance.",
    },

    {
        title: "Augamis",
        image: "augam.png",
        url: "https://augamishealth.com/",
        description: "Augamis is a custom Shopify theme project where I developed the frontend using HTML, CSS, JavaScript, jQuery, and AOS animations. The design delivers a clean and modern e-commerce experience, ensuring smooth navigation, responsive layouts, and engaging animations. This project demonstrates my expertise in crafting custom Shopify themes that combine functionality with an appealing user interface.",
    },
    {
        title: "xtreaminternet",
        image: "xtreaminternet.png",
        url: "https://xtreaminternet.com/",
        description: "Xtream Internet is a custom WordPress theme project where I developed the frontend using HTML, CSS, JavaScript, jQuery, and AOS animations. The site was designed to be responsive, fast-loading, and user-friendly, ensuring a seamless browsing experience while reflecting the brand’s professional identity.",
    },

    {
        title: "Pinecrest",
        image: "pinecrest.png",
        url: "https://www.pinecrestconsulting.com/",
        description: "Pinecrest Consulting is a custom WordPress theme project where I built the frontend using HTML, CSS, JavaScript, jQuery, and AOS animations. The website was crafted to deliver a modern, responsive, and engaging user experience while maintaining a professional and corporate look that aligns with the client’s brand identity.",
    },

];
function FrontendProjects() {
    const [selectedProject, setSelectedProject] = useState(null);
    return (
        <>
            <Box>
                <Stack spacing={1}>
                    <Stack

                        className="all-projects-wrap"
                        direction="row"
                        flexWrap="wrap"
                        gap={3}
                        justifyContent="start"
                        sx={{
                            mt: 4,

                        }}
                    >
                        {projects.map((project, i) => (
                            <Box
                                key={i}
                                sx={{
                                    width: { xs: "100%", sm: "48%", md: "30%" },
                                    position: "relative",
                                    overflow: "hidden",
                                    borderRadius: "10px",
                                    cursor: "pointer",
                                    "&:hover .overlay": { transform: "translateY(0)" },
                                }}
                            >
                                {/* Project Image */}
                                <Box
                                    component="img"
                                    src={images[project.image]} // using your images.js loader
                                    alt={project.title}
                                    sx={{
                                        width: "100%",
                                        height: "250px",
                                        objectFit: "cover",
                                        display: "block",
                                    }}
                                />

                                {/* Overlay */}
                                <Box
                                    className="overlay"
                                    sx={{
                                        position: "absolute",
                                        bottom: 0,
                                        left: 0,
                                        width: "100%",
                                        height: "100%",
                                        backgroundColor: "rgba(0,0,0,0.8)",
                                        color: "#fff",
                                        display: "flex",
                                        flexDirection: "column",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        transform: "translateY(100%)",
                                        transition: "transform 0.5s ease",
                                    }}
                                >
                                    <Typography
                                        variant="h6"
                                        sx={{ color: "#ffb400", fontWeight: "bold", mb: 2 }}
                                    >
                                        {project.title}
                                    </Typography>
                                    <Button
                                        variant="outlined"
                                        sx={{
                                            borderColor: "#ffb400",
                                            color: "#ffb400",
                                            "&:hover": {
                                                backgroundColor: "#ffb400",
                                                color: "#111",
                                                borderColor: "#ffb400",
                                            },
                                        }}
                                        onClick={() => setSelectedProject(project)}
                                    >
                                        See Details
                                    </Button>
                                </Box>
                            </Box>
                        ))}
                    </Stack>
                </Stack>
            </Box>

            {/* Popup */}

            <ProjectPopup
                open={!!selectedProject}
                onClose={() => setSelectedProject(null)}
                project={selectedProject}
            />
        </>
    )
}

export default FrontendProjects