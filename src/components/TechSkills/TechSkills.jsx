// TechSkills.jsx
import React from "react";
import { Box, Grid, Typography, Card, CardContent } from "@mui/material";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaWordpress,
  FaPhp,
} from "react-icons/fa";
import { SiJquery, SiMui, SiBootstrap } from "react-icons/si";

const skills = [
  { name: "HTML5", icon: <FaHtml5 size={40} color="#ffb400" /> },
  { name: "CSS3", icon: <FaCss3Alt size={40} color="#ffb400" /> },
  { name: "JavaScript", icon: <FaJs size={40} color="#ffb400" /> },
  { name: "jQuery", icon: <SiJquery size={40} color="#ffb400" /> },
  { name: "Bootstrap", icon: <SiBootstrap size={40} color="#ffb400" /> },
  { name: "Material UI", icon: <SiMui size={40} color="#ffb400" /> },
  { name: "React", icon: <FaReact size={40} color="#ffb400" /> },
  { name: "WordPress", icon: <FaWordpress size={40} color="#ffb400" /> },
  { name: "PHP", icon: <FaPhp size={40} color="#ffb400" /> },
];

export default function TechSkills() {
  return (
    <div className="container">
    <Box
      sx={{
        color: "#fff",
        py: 6,
        px: { xs: 2, md: 6 },
      }}
    >
      <Typography
        variant="h4"
        sx={{
          textAlign: "center",
          color: "#ffb400",
          fontWeight: "bold",
          mb: 4,
          textTransform: "uppercase",
          letterSpacing: "2px",
        }}
      >
        My Tech Skills
      </Typography>

      <Grid container spacing={3} justifyContent="center">
        {skills.map((skill, index) => (
          <Grid item xs={6} sm={4} md={3} key={index}>
            <Card
           
              sx={{
                background: "linear-gradient(145deg, #2a2a2a, #383838)",
                border: "1px solid #ffb400",
                borderRadius: "12px",
                textAlign: "center",
                cursor: "pointer",
                transition: "all 0.3s ease",
                "&:hover": {
                  transform: "scale(1.08)",
                  boxShadow: "0px 0px 20px #ffb40060",
                  borderColor: "#fff",
                },
              }}
            >
              <CardContent
               data-aos="fade-up"
     data-aos-duration="1000"
              >
                
                <Box sx={{ mb: 1, display: "flex", justifyContent: "center" }}>
                  {skill.icon}
                </Box>
                <Typography
                  variant="subtitle1"
                  sx={{ color: "#fff", fontWeight: "bold" }}
                >
                  {skill.name}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
    </div>
  );
}
