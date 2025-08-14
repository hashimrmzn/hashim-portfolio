import React from 'react'
import { Box, Typography } from "@mui/material";
function MyPortfolioHeading() {
    return (
        <>
            <Box>
                <Typography
                    variant="h3"
                    sx={{
                        color: "#ffb400",
                        textTransform: "uppercase",
                        fontWeight: "bold",
                        letterSpacing: "2px",
                        borderBottom: "2px solid #ffb400",
                        display: "inline-block",
                        paddingBottom: "4px",
                        fontSize: { xs: "20px", sm: "24px", md: "28px" },
                    }}
                >
                   Explore My Work
                </Typography>

            </Box>
        </>
    )
}

export default MyPortfolioHeading