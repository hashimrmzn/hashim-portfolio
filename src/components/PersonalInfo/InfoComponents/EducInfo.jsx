import React from 'react'
import { Box, Stack, Typography } from "@mui/material";
function EducInfo() {
    return (
          <>
      {/* Right Side */}
      <Stack sx={{ width: { xs: "100%", md: "50%" }, gap: 3 }}>
        <Typography
          className="fw-semibold"
          variant="h3"
          sx={{
            color: "#fff",
            textTransform: "uppercase",
            textAlign: "start",
            fontSize: { md: "28px", sm: "24px", xs: "20px" },
          }}
        >
          Education Infos
        </Typography>

        {/* Education List */}
        <Stack spacing={2}
        sx={{
            mt: 3
        }}
        >
          {[
            {
              title: "Matriculation (Computer Science)",
              institute: "2015 - 2017",
            },
            {
              title: "FSc Pre-Engineering — Punjab Group of Colleges",
              institute: "2017 - 2019",
            },
            {
              title: "BS Computer Science — University of Central Punjab",
              institute: "2019 - 2023",
            },
             {
              title: "IBM Full-Stack JavaScript Developer",
              institute: "Oct - Dec 2025",
            },
            {
              title: "Bootcamps — WordPress & Frontend Development",
              institute: "June - July 2023",
            },
          ].map((edu, index) => (
            <Box
              key={index}
              sx={{
                width: "100%",
                background: "linear-gradient(145deg, #2a2a2a, #383838)",
                border: "2px solid #ffb400",
                borderRadius: "12px",
                padding: "1rem",
                display: "flex",
                flexDirection: "column",
                gap: 0.5,
                transition: "all 0.3s ease",
                cursor: "copy",
                position: "relative",
                overflow: "hidden",
                "&::before": {
                  content: '""',
                  position: "absolute",
                  width: "100%",
                  height: "100%",
                  background:
                    "linear-gradient(45deg, transparent, rgba(255,255,255,0.1), transparent)",
                  top: "-100%",
                  left: "-100%",
                  transition: "all 0.5s ease",
                },
                "&:hover": {
                  transform: "scale(1.05)",
                  boxShadow: "5px 5px 0 #ffb40050",
                },
                "&:hover::before": {
                  top: "100%",
                  left: "100%",
                },
              }}
            >
              <Typography
                variant="h6"
                sx={{
                  color: "#ffb400",
                  fontWeight: "bold",
                  fontSize: { xs: "14px", sm: "16px" },
                }}
              >
                {edu.title}
              </Typography>
              <Typography
                sx={{
                  color: "#fff",
                  fontSize: { xs: "12px", sm: "14px" },
                  opacity: 0.8,
                }}
              >
                {edu.institute}
              </Typography>
            </Box>
          ))}
        </Stack>
      </Stack>
    </>
    )
}

export default EducInfo