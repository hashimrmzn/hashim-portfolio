import React, { useEffect } from "react";
import { Box, Typography, IconButton, Button } from "@mui/material";
import { styled } from "@mui/system";
import CloseIcon from "@mui/icons-material/Close";
import images from '../../../utils/images';
// HoloButton styling
const HoloButton = styled(Button)({
    position: "relative",
    overflow: "hidden",
    borderRadius: "8px",
    backgroundColor: "#111",
    color: "#ffb400",
    fontWeight: "bold",
    textTransform: "uppercase",
    padding: "12px 24px",
    border: "1px solid #ffb400",
    transition: "transform 0.3s ease, box-shadow 0.3s ease",
    zIndex: 1,
    "&::before": {
        content: '""',
        position: "absolute",
        top: "-50%",
        left: "-50%",
        width: "200%",
        height: "200%",
        background:
            "linear-gradient(0deg, transparent, transparent 30%, rgba(255,180,0,0.4))",
        transform: "rotate(-45deg)",
        transition: "all 0.5s ease",
        opacity: 0,
        zIndex: 0,
    },
    "&:hover": {
        transform: "scale(1.05)",
        boxShadow: "0 0 20px rgba(255,180,0,0.5)",
        backgroundColor: "#111",
    },
    "&:hover::before": {
        opacity: 1,
        transform: "rotate(-45deg) translateY(100%)",
    },
});

export default function ProjectPopup({ open, onClose, project }) {
    // Lock body scroll
    useEffect(() => {
        if (open) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }
        return () => (document.body.style.overflow = "auto");
    }, [open]);

    if (!open) return null;

    return (
        <Box
            onClick={onClose}
            sx={{
                position: "fixed",
                top: 0,
                left: 0,
                width: "100vw",
                height: "100vh",
                backgroundColor: "rgba(0,0,0,0.85)",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                zIndex: 9999,
            }}
        >
            {/* Inner Content */}
            <Box
                onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside
                sx={{
                    backgroundColor: "#111",
                    borderRadius: "12px",
                    maxWidth: "800px",
                    width: "90%",
                    padding: "20px",
                    position: "relative",
                    color: "#fff",
                    boxShadow: "0 0 30px rgba(0,0,0,0.8)",
                }}
            >
                {/* Close Button */}
                <IconButton
                    onClick={onClose}
                    sx={{
                        position: "absolute",
                        top: 10,
                        right: 10,
                        color: "#ffb400",
                    }}
                >
                    <CloseIcon />
                </IconButton>

                {/* Image */}
                <img
                    src={images[project.image]}
                    alt={project.title}
                    style={{ width: '100%', height: '300px',margin:"30px 0",objectFit:"cover",objectPosition:"top" }}
                />


                {/* Title */}
                <Typography
                    variant="h5"
                    sx={{ color: "#ffb400", fontWeight: "bold", marginBottom: "10px" }}
                >
                    {project?.title}
                </Typography>

                {/* Description */}
                <Typography
                className="descrption-height"
                    variant="body1"
                    sx={{ marginBottom: "20px", lineHeight: 1.6,maxHeight:"130px",  overflowY: "auto", }}
                >
                    {project?.description || "No description provided."}
                </Typography>

                {/* Live Preview Button */}
                <HoloButton
                    href={project?.url}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Live Preview
                </HoloButton>
            </Box>
        </Box>
    );
}
