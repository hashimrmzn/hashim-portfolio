import React from 'react'
import { Box, Stack, Typography, Button, IconButton } from "@mui/material";
import logo from "../../../assets/images/logo.png";
import MenuIcon from "@mui/icons-material/Menu";
function Navbar() {
    return (
        <>
            <Box
                className="site-header"
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
                            >
                                <MenuIcon fontSize="inherit" />
                            </IconButton>
                        </Stack>
                    </Stack>
                </div>
            </Box>
        </>
    )
}

export default Navbar