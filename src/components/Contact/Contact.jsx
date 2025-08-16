import React from "react";
import {
    Box,
    Container,
    Typography,
    Card,
    TextField,
    Button,
    Link,
} from "@mui/material";
import {
    Phone,
    Email,
    LocationOn,
    LinkedIn,
    GitHub,
    Work,
} from "@mui/icons-material";

function Contact() {
    const contactItems = [
        {
            icon: <Phone sx={{ fontSize: 36, color: "#ffb400" }} />,
            title: "Phone",
            value: "+92 300 8108820",
        },
        {
            icon: <Email sx={{ fontSize: 36, color: "#ffb400" }} />,
            title: "Email",
            value: "hashimramzan666@gmail.com",
        },
        {
            icon: <LocationOn sx={{ fontSize: 36, color: "#ffb400" }} />,
            title: "Address",
            value: "Model Town, Lahore",
        },
        {
            icon: <Work sx={{ fontSize: 36, color: "#ffb400" }} />,
            title: "Freelance",
            value: (
                <Link
                    href="https://www.fiverr.com/hashim_666/build-a-custom-wordpress-theme-from-scratch"
                    target="_blank"
                    underline="hover"
                    sx={{ color: "#fff" }}
                >
                    Fiverr
                </Link>
            ),
        },
        {
            icon: <LinkedIn sx={{ fontSize: 36, color: "#ffb400" }} />,
            title: "LinkedIn",
            value: (
                <Link
                    href="https://www.linkedin.com/in/muhammad-hashim-64bb7620b"
                    target="_blank"
                    underline="hover"
                    sx={{ color: "#fff" }}
                >
                    linkedin.com/in/muhammad-hashim
                </Link>
            ),
        },
        {
            icon: <GitHub sx={{ fontSize: 36, color: "#ffb400" }} />,
            title: "GitHub",
            value: (
                <Link
                    href="https://github.com/hashimrmzn"
                    target="_blank"
                    underline="hover"
                    sx={{ color: "#fff" }}
                >
                    github.com/hashimrmzn
                </Link>
            ),
        },
    ];

    return (
        <Container maxWidth="lg">
            <Box id="contact" sx={{ color: "#fff", py: 8 }}>
                <Typography
                    variant="h4"
                    sx={{
                        textAlign: "center",
                        color: "#ffb400",
                        fontWeight: "bold",
                        mb: 6,
                        textTransform: "uppercase",
                        letterSpacing: "2px",
                        fontSize: { xs: "20px", sm: "32px", md: "40px" },
                    }}
                >
                    Contact Me
                </Typography>

                {/* Flex Wrapper */}
                <Box
                    sx={{
                        display: "flex",
                        flexDirection: { xs: "column", md: "row" },
                        justifyContent: "space-between",
                        gap: { xs: 4, md: 0 },
                    }}
                >
                    {/* Left Column - Contact Info */}
                    <Box
                        sx={{
                            width: { xs: "100%", md: "48%" },
                            display: "flex",
                            flexDirection: "column",
                            gap: 2,
                        }}
                    >
                        {contactItems.map((item, idx) => (
                            <Box
                                key={idx}
                                sx={{
                                    display: "flex",
                                    alignItems: "flex-start",   // align icon + text at top
                                    gap: 2,
                                    background: "rgba(255, 255, 255, 0.05)",
                                    borderRadius: "10px",
                                    px: 2,
                                    py: 2,
                                    transition: "all 0.3s ease",
                                    "&:hover": {
                                        background: "rgba(255, 180, 0, 0.15)",
                                    },
                                }}
                            >
                                {item.icon}
                                <Box sx={{ display: "flex", flexDirection: "column", alignItems: "flex-start" }}>
                                    <Typography
                                        sx={{ fontWeight: "bold", color: "#ffb400", textAlign: "start" }}
                                    >
                                        {item.title}
                                    </Typography>
                                    <Typography sx={{ fontSize: "14px", textAlign: "start" }}>
                                        {item.value}
                                    </Typography>
                                </Box>
                            </Box>
                        ))}

                    </Box>

                    {/* Right Column - Contact Form */}
                    <Box sx={{ width: { xs: "100%", md: "48%" } }}>
                        <Card
                            sx={{
                                background: "rgba(255, 255, 255, 0.05)",
                                backdropFilter: "blur(10px)",
                                borderRadius: "16px",
                                border: "1px solid rgba(255, 180, 0, 0.4)",
                                p: { xs: 3, sm: 4 },
                            }}
                        >
                            <Typography
                                variant="h6"
                                sx={{
                                    color: "#ffb400",
                                    mb: 3,
                                    textAlign: "center",
                                    fontWeight: "bold",
                                }}
                            >
                                Send Me a Message
                            </Typography>

                            <Box
                                component="form"
                                action="https://formspree.io/f/xyzpaggy"
                                method="POST"
                                sx={{ display: "flex", flexDirection: "column", gap: 2 }}
                            >
                                <TextField
                                    label="Your Name"
                                    name="name"
                                    fullWidth
                                    required
                                    variant="outlined"
                                    InputLabelProps={{ style: { color: "#fff" } }}
                                    sx={{
                                        "& .MuiOutlinedInput-root": {
                                            color: "#fff",
                                            "& fieldset": { borderColor: "#ffb400" },
                                            "&:hover fieldset": { borderColor: "#fff" },
                                        },
                                    }}
                                />
                                <TextField
                                    label="Your Email"
                                    name="email"
                                    type="email"
                                    fullWidth
                                    required
                                    variant="outlined"
                                    InputLabelProps={{ style: { color: "#fff" } }}
                                    sx={{
                                        "& .MuiOutlinedInput-root": {
                                            color: "#fff",
                                            "& fieldset": { borderColor: "#ffb400" },
                                            "&:hover fieldset": { borderColor: "#fff" },
                                        },
                                    }}
                                />
                                <TextField
                                    label="Message"
                                    name="message"
                                    multiline
                                    rows={4}
                                    fullWidth
                                    required
                                    variant="outlined"
                                    InputLabelProps={{ style: { color: "#fff" } }}
                                    sx={{
                                        "& .MuiOutlinedInput-root": {
                                            color: "#fff",
                                            "& fieldset": { borderColor: "#ffb400" },
                                            "&:hover fieldset": { borderColor: "#fff" },
                                        },
                                    }}
                                />
                                <Button
                                    type="submit"
                                    variant="contained"
                                    sx={{
                                        backgroundColor: "#ffb400",
                                        color: "#111",
                                        fontWeight: "bold",
                                        "&:hover": { backgroundColor: "#fff", color: "#111" },
                                        mt: 1,
                                    }}
                                >
                                    Send Message
                                </Button>
                            </Box>
                        </Card>
                    </Box>
                </Box>
            </Box>
        </Container>
    );
}

export default Contact;
