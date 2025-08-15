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
        description: "",
    },
    {
        title: "Enertia",
        image: "enertia.png",
        url: "https://hashimrmzn.github.io/Enertia/",
        description: "",
    },
    {
        title: "Ittefaq Electrotech",
        image: "itet.png",
        url: "https://itelectrotech.com/",
        description: "",
    },
    {
        title: "Ittefaq Construction",
        image: "icca.png",
        url: "https://itelectrotech.com/",
        description: "",
    },
    {
        title: "Girls Life",
        image: "girlslife.png",
        url: "https://girlslife.com/",
        description: "",
    },

    {
        title: "Augamis",
        image: "augam.png",
        url: "https://augamishealth.com/",
        description: "",
    },
    {
        title: "xtreaminternet",
        image: "xtreaminternet.png",
        url: "https://xtreaminternet.com/",
        description: "",
    },

    {
        title: "Pinecrest",
        image: "pinecrest.png",
        url: "https://www.pinecrestconsulting.com/",
        description: "",
    },

];

function WordpressProjects() {
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

export default WordpressProjects