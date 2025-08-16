import React from 'react'
import { Box, Stack, Typography, Button, IconButton, Menu } from "@mui/material";
import logo from "../../../assets/images/logo.png";
import MenuIcon from "@mui/icons-material/Menu";
import { useEffect, useState } from "react";
import MenuBox from './MenuBox';
function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 1);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <>
            <Box
                className={`site-header ${scrolled ? "scrolled" : ""}`}
                component="header"
                sx={{
                    width: "100%",
                    position: "fixed",
                    top: 0,
                    left: 0,
                    zIndex: 1100,
                }}
            >

                <div className='container'>
                    <Stack
                        className="header-all-content"
                        direction="row"
                        justifyContent="space-between"
                        alignItems="center"

                    >
                        <Box component="img" src={logo} alt="Logo" sx={{ height: 100 }} />

                        <Stack>
                            <IconButton
                                sx={{ color: "#ffb400" }}
                                size="large"
                                aria-label="menu"
                                onClick={() => setMenuOpen(true)}
                            >
                                <MenuIcon fontSize="inherit" />
                            </IconButton>
                        </Stack>
                    </Stack>
                </div>
            </Box>
            <MenuBox open={menuOpen} onClose={() => setMenuOpen(false)} />
        

        </>
    )
}

export default Navbar