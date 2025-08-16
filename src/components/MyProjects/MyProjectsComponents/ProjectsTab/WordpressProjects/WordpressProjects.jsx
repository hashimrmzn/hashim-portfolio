import React from 'react'
import { useState } from "react";
import { Box, Stack, Typography, Button } from "@mui/material";
import images from '../../../../../utils/images';
import ProjectPopup from '../../ProjectPopup';
const projects = [
    {
        title: "Mason Law",
        image: "mlapg.png",
        url: "https://mlapg.com/",
        description: "Mason Law is a professional law firm website built with WordPress using Elementor and Elementor Pro. I customized the design with tailored CSS to achieve a polished and modern look, ensuring a responsive layout and smooth user experience. The project highlights my expertise in creating clean, functional, and client-focused WordPress solutions.",
    },
    {
        title: "Dr-Brooks",
        image: "brooks.png",
        url: "https://cmswebdeveloper.com/dr-brooks/",
        description: "Dr-Brooks is a portfolio website designed for a motivational speaker, built with WordPress using Elementor and Elementor Pro. I crafted a modern and engaging layout with custom CSS enhancements to highlight the speaker’s brand, services, and achievements. The site is fully responsive, visually appealing, and optimized for an impactful user experience.",
    },
    {
        title: "Ittefaq Electrotech",
        image: "itet.png",
        url: "https://itelectrotech.com/",
        description: "Ittefaq Electrotech is a custom WordPress theme that I developed from scratch using HTML, CSS, JavaScript, jQuery, and PHP. The dynamic content was managed with ACF Pro, while Contact Form 7 handled form submissions. To ensure performance, security, and optimization, I integrated essential plugins such as Wordfence Security, an SEO plugin, and a caching plugin. The result is a fully responsive, fast, and secure website tailored to the client’s business needs.",
    },
    {
        title: "Ittefaq Construction",
        image: "icca.png",
        url: "https://itelectrotech.com/",
        description: "Ittefaq Construction is a custom WordPress theme that I built using HTML, CSS, JavaScript, jQuery, and PHP. I implemented ACF Pro for dynamic content management and Contact Form 7 for seamless form handling. To enhance site performance, SEO, and security, I integrated key plugins including Wordfence Security, an SEO plugin, and a caching plugin. The project delivers a responsive, optimized, and secure online presence tailored to the client’s construction business.",
    },
    {
        title: "Girls Life",
        image: "girlslife.png",
        url: "https://girlslife.com/",
        description: "Girls Life is a custom WordPress theme crafted using HTML, CSS, JavaScript, jQuery, and PHP. I utilized ACF Pro for flexible content management and Contact Form 7 for interactive forms. Wordfence Security, SEO, and caching plugins were integrated to ensure performance, search optimization, and protection. The project delivers a dynamic and responsive magazine-style layout tailored to the brand’s audience.",
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
        description: "Xtream Internet is a fully customized WordPress theme built with HTML, CSS, JavaScript, jQuery, and PHP. I implemented ACF Pro to manage dynamic site content and Contact Form 7 for user inquiries. To secure and optimize the website, Wordfence Security, SEO, and caching plugins were added. The result is a professional, fast, and responsive platform for the internet service provider.",
    },

    {
        title: "Pinecrest",
        image: "pinecrest.png",
        url: "https://www.pinecrestconsulting.com/",
        description: "Pinecrest Consulting features a custom WordPress theme developed with HTML, CSS, JavaScript, jQuery, and PHP. I incorporated ACF Pro for flexible content fields and Contact Form 7 for smooth client communication. Wordfence Security, SEO, and caching plugins were applied to enhance protection, visibility, and performance. The site provides a polished and reliable online presence for the consulting firm.",
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