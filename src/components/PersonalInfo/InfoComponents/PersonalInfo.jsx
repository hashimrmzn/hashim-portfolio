import React from 'react'
import { Box, Stack, Typography, Button, IconButton } from "@mui/material";
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import styles from "./Personal.module.css";

import DownloadIcon from "@mui/icons-material/Download";
function PersonalInfo() {
    return (
        <>

                        {/* Left Side */}
                        <Stack sx={{ width: { xs: "100%", md: "50%" } }}>
                            <Typography
                                className="fw-semibold"
                                variant="h3"
                                sx={{
                                    color: "#fff",
                                    textTransform: "uppercase",
                                    textAlign: "start",
                                    fontSize: { md: "28px", sm: "24px", xs: "20px" }
                                }}
                            >
                                Personal Infos
                            </Typography>

                            <Box className={styles["info-list"]}>
                                <List
                                    sx={{
                                        width: "100%",
                                        height: { xs: "auto", sm: "300px" },
                                        display: "flex",
                                        justifyContent:"space-between",
                                        flexDirection: { xs: "column", md: "row" }, 
                                        flexWrap: "wrap",
                                        gap: 2,
                                        mt: 3
                                    }}
                                >
                                    {[
                                        { label: "First Name:", value: "Muhammad" },
                                        { label: "Last Name:", value: "Hashim" },
                                        { label: "Role:", value: "Developer" },
                                        { label: "Age:", value: "25 Years" },
                                        { label: "Freelance:", value: "Available", color: "#ffb400" },
                                        {
                                            label: "Phone:",
                                            value: (
                                                <Typography
                                                    component="a"
                                                    href="tel:+923008108820"
                                                    sx={{
                                                        color: "#fff",
                                                        fontWeight: 600,
                                                        textDecoration: "none",
                                                        "&:hover": { color: "#ffb400" }
                                                    }}
                                                >
                                                    +92 300 8108820
                                                </Typography>
                                            )
                                        },
                                        { label: "Nationality:", value: "Pakistan" },
                                        { label: "Address:", value: "Model Town, Lahore" },
                                        {
                                            label: "Email:",
                                            value: (
                                                <Typography
                                                    component="a"
                                                    href="mailto:hashimramzan666@gmail.com"
                                                    sx={{
                                                        color: "#fff",
                                                        fontWeight: 600,
                                                        textDecoration: "none",
                                                        "&:hover": { color: "#ffb400" }
                                                    }}
                                                >
                                                    hashimramzan666@gmail.com
                                                </Typography>
                                            )
                                        },
                                        { label: "Languages:", value: "English, Urdu" }
                                    ].map((item, i) => (
                                        <ListItem key={i} sx={{ display: "flex", gap: 1, px: 0 }}>
                                            <Typography sx={{ fontWeight: "normal", color: "#fff" }}>
                                                {item.label}
                                            </Typography>
                                            {typeof item.value === "string" ? (
                                                <Typography
                                                    sx={{
                                                        fontWeight: 600,
                                                        color: item.color || "#fff"
                                                    }}
                                                >
                                                    {item.value}
                                                </Typography>
                                            ) : (
                                                item.value
                                            )}
                                        </ListItem>
                                    ))}
                                </List>
                                
                            </Box>
                        </Stack>

                     
        </>
    )
}

export default PersonalInfo