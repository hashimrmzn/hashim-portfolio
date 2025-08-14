import React from 'react'
import { Button } from "@mui/material";
import { styled } from "@mui/system";
import { Box } from "@mui/material";
import DownloadIcon from "@mui/icons-material/Download";
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

function DownloadCv() {
  return (
   <>
<Box sx={{
    mt:"40px",
    alignContent:"start"
}}>
     <HoloButton
      variant="contained"
      startIcon={<DownloadIcon />}
      href="/cv.pdf" // Change this to your CV file path
      download
    >
      Download CV
    </HoloButton>
    </Box>
   </>
  )
}

export default DownloadCv