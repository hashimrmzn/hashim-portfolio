import React from 'react'
import styles from "./Hero-components/Hero.module.css";
import { Box, Stack, Typography, Button, IconButton } from "@mui/material";
import 'bootstrap/dist/css/bootstrap.min.css';
import uniPic from "../../assets/images/uni-pic.jpg";
import { styled } from "@mui/material/styles";
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

function Hero() {


  return (
    <>
      <Box
        className="Hero-sec overflowx-hidden"
        component="section"
        sx={{
          alignContent: "end",
          minHeight: "auto", // default
          pt: 10,
          "@media (min-width:1280px)": {
            minHeight: "100vh"
          }
        }}
      >


        <div
          style={{ maxWidth: "1440px", margin: "0 auto" }}
        >
          <Stack
            direction={{ xs: "column", sm: "row" }}
            justifyContent="space-between"
            alignItems="center"
            spacing={2}
          >
            <Stack sx={{ flex: 1, }}
              position={'relative'}
            >
              <Box sx={{
                position: "relative",
                zIndex: "1"
              }}>
                <img
                  className="my-pic"
                  data-aos="fade-down-right"
                  src={uniPic}
                  alt="Muhammad Hashim"
                  style={{
                    width: "400px",
                    height: "400px",
                    objectFit: "cover",
                    margin: "0 auto 10px auto"
                  }}
                />


              </Box>
              <div className={styles.yellowcutbg}>

              </div>
            </Stack>

            <Stack sx={{ flex: 1, p: 3 }}>
              <Box>

                <Typography
                  data-aos="fade-up"
                  data-aos-duration="1000"
                  variant="h1"
                  sx={{
                    fontSize: {
                      xs: "1.5rem",
                      sm: "2rem",
                      md: "2.5rem",
                      lg: "3rem"
                    },
                    textAlign: "start",
                    color: "#fff"
                  }}
                >


                  I am Muhammad Hashim.
                </Typography>
                <Typography
                  data-aos="fade-up"
                  data-aos-duration="1500"
                  variant="h3"
                  sx={{
                    fontSize: {
                      xs: "1.2rem",
                      sm: "1.5rem",
                      lg: "2rem"
                    },
                    mt: "20px",
                    textAlign: "start",
                    color: "var( --main-primary-color)",
                    animation: "glowWhite 2s ease-in-out infinite",
                    "@keyframes glowWhite": {
                      "0%": {
                        textShadow: "0 0 10px #ffb400, 0 0 20px rgba(255,180,0,0.6), 0 0 30px rgba(255,180,0,0.3)"
                      },
                      "50%": {
                        textShadow: "0 0 20px #ffb400, 0 0 40px rgba(255,180,0,0.8), 0 0 60px rgba(255,180,0,0.4)"
                      },
                      "100%": {
                        textShadow: "0 0 10px #ffb400, 0 0 20px rgba(255,180,0,0.6), 0 0 30px rgba(255,180,0,0.3)"
                      }
                    }
                  }}
                >
                  Frontend &amp; WordPress Developer
                </Typography>

                <Typography
                  data-aos="fade-up"
                  data-aos-duration="2000"
                  variant="body1"
                  component="p"
                  sx={{
                    fontSize: "1.2rem",
                    mt: "20px",
                    textAlign: "start",
                  }}
                >
                  I’m a Frontend & WordPress Developer creating fast, responsive, and visually stunning websites.
                </Typography>
                <div
                  data-aos="fade-up"
                  data-aos-duration="2000"
                  style={{ margin: "20px  0 0 0", display: "flex", justifyContent: "start", alignItems: "center" }}>
                  <HoloButton variant="contained">More About Me</HoloButton>
                </div>
              </Box>
            </Stack>
          </Stack>
        </div>
      </Box >
    </>
  )
}

export default Hero