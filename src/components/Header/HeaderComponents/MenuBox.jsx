import React, { useEffect } from "react";
import profileImg from "../../../assets/images/programming.webp"; 
import {
  Box,
  Typography,
  IconButton,
  Grid,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

function MenuBox({ open, onClose }) {
  // Prevent body scroll when menu is open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => (document.body.style.overflow = "auto");
  }, [open]);

  // Links for left/right
  const leftLinks = [
    { label: "About", id: "about" },
    { label: "Skills", id: "techskills" },
    { label: "Portfolio", id: "myprojects" },
  ];
  const rightLinks = [
    { label: "Work Experience", id: "myexpirience" },
    { label: "Info", id: "myinfor" },
    { label: "Contact", id: "contact" },
  ];

  const handleScroll = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
      onClose();
    }
  };

  if (!open) return null;

  return (
    <Box
      onClick={onClose}
      sx={{
        position: "fixed",
        inset: 0,
        bgcolor: "rgba(0,0,0,0.85)",
        zIndex: 1300,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        p: 2,
      }}
    >
      {/* Child container */}
      <Box
        onClick={(e) => e.stopPropagation()}
        sx={{
          position: "relative",
          width: "90%",
          maxWidth: "900px",
          bgcolor: "#1c1c1c",
          borderRadius: "16px",
          p: 6,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          boxShadow: "0 0 20px rgba(255, 180, 0, 0.4)",
        }}
      >
        {/* Close Button */}
        <IconButton
          onClick={onClose}
          sx={{
            position: "absolute",
            top: 16,
            right: 16,
            color: "#ffb400",
            "&:hover": { color: "#fff" },
          }}
        >
          <CloseIcon fontSize="large" />
        </IconButton>

        {/* Content Grid */}
        <Grid container spacing={4} alignItems="center" justifyContent="center">
          {/* Left links */}
          <Grid item xs={12} sm={4} textAlign="center">
            {leftLinks.map((link) => (
              <Typography
                key={link.id}
                onClick={() => handleScroll(link.id)}
                sx={{
                  fontSize: "1.5rem",
                  fontWeight: "bold",
                  color: "#ffb400",
                  mb: 3,
                  cursor: "pointer",
                  transition: "all 0.3s ease",
                  "&:hover": { color: "#fff", transform: "scale(1.1)" },
                }}
              >
                {link.label}
              </Typography>
            ))}
          </Grid>

          {/* Middle Image */}
          <Grid
            item
            xs={12}
            sm={4}
            textAlign="center"
            sx={{ display: "flex", justifyContent: "center" }}
          >
            <Box
              component="img"
              src={profileImg}
              alt="Profile"
              sx={{
                width: "160px",
                height: "160px",
                borderRadius: "50%",
                border: "3px solid #ffb400",
                objectFit: "cover",
                boxShadow: "0 0 15px rgba(255,180,0,0.5)",
              }}
            />
          </Grid>

          {/* Right links */}
          <Grid item xs={12} sm={4} textAlign="center">
            {rightLinks.map((link) => (
              <Typography
                key={link.id}
                onClick={() => handleScroll(link.id)}
                sx={{
                  fontSize: "1.5rem",
                  fontWeight: "bold",
                  color: "#ffb400",
                  mb: 3,
                  cursor: "pointer",
                  transition: "all 0.3s ease",
                  "&:hover": { color: "#fff", transform: "scale(1.1)" },
                }}
              >
                {link.label}
              </Typography>
            ))}
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}

export default MenuBox;
