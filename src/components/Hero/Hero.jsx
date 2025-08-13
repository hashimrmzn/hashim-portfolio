import React from 'react'
import styles from "./Hero-components/Hero.module.css";
import { Box, Stack, Typography, Button, IconButton } from "@mui/material";
import 'bootstrap/dist/css/bootstrap.min.css';
import hImage from "../../assets/images/h.png";
function Hero() {
  

  return (
    <>
      <Box
        className="Hero-sec overflowx-hidden"
        component="section"
        sx={{
          alignContent: "end",
          minHeight: "100vh",
          pt: 10
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
                  data-aos="fade-down-right"
                  src={hImage}
                  alt="Muhammad Hashim"
                  style={{
                    width: "400px",
                    height: "400px",
                    objectFit: "cover",
                    borderRadius: "50%",
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
                  variant='h1'
                  sx={{
                    fontSize: "3rem",
                    textAlign: "start",
                    color: "var( --main-primary-color)"
                  }}
                >
                  I am Muhammad Hashim.
                </Typography>
                <Typography
                  data-aos="fade-up"
                  data-aos-duration="1500"
                  variant='h3'
                  sx={{
                    fontSize: "2rem",
                    mt: '20px',
                    textAlign: "start",
                    color: "#fff"
                  }}
                >
                  Frontend & WordPress Developer
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

              </Box>
            </Stack>
          </Stack>
        </div>
      </Box>
    </>
  )
}

export default Hero