"use client"
import { Box, styled, Typography } from "@mui/material";
import { Container } from "@mui/system";
import Image from 'next/image'
import missionImage from "../../public/mission.jpg"
import visionImage from "../../public/vision.jpg"

const AboutUs = () => {
    const CustomBox = styled(Box)(({ theme }) => ({
        display: "flex",
        justifyContent: "center",
        gap: theme.spacing(5),
        marginTop: theme.spacing(3),
        [theme.breakpoints.down("md")]: {
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center",
        },
    }));

    const Title = styled(Typography)(({ theme }) => ({
        fontSize: "34px",
        color: "#A2195B",
        fontWeight: "bold",
        margin: theme.spacing(4, 0, 4, 0),
        [theme.breakpoints.down("sm")]: {
            fontSize: "20px",
        },
    }));

    return (
        <Box sx={{ backgroundColor: "#ffff", mt: 3}} id="aboutUs">
            <Container>
                <Typography
                    variant="body2"
                    sx={{ fontSize: "25px", fontWeight: "bold", color: "#A2195B", mt: 4, textAlign: "center" }}
                >
                    
                </Typography>
                <CustomBox>
                    <Box sx={{ flex: "1" }}>
                        <Typography
                            variant="body2"
                            sx={{ fontSize: "18px", color: "#000000", my: 4 }}
                        >
                            Our Vision.
                        </Typography>
                        <Title variant="h1">
                            Transformative Healthcare
                        </Title>
                        <Typography
                            variant="body2"
                            sx={{ fontSize: "18px", color: "#5A6473", my: 4 }}
                        >
                            To pioneer a transformative healthcare landscape where clinicians experience unrivaled stress relief and unprecedented productivity through cutting-edge AI tools, empowering them to deliver exceptional care.
                        </Typography>
                    </Box>

                    <Box sx={{ flex: "1.25" }}>
                        <Image
                            src={visionImage}
                            alt="vision"
                            style={{ maxWidth: "100%", marginBottom: "2rem" }}
                        />
                    </Box>
                </CustomBox>
                <CustomBox>
                    <Box sx={{ flex: "1" }}>
                        <Image
                            src={missionImage}
                            alt="mission"
                            style={{ maxWidth: "100%", marginBottom: "2rem" }}
                        />
                    </Box>
                    <Box sx={{ flex: "1.25" }}>
                        <Typography
                            variant="body2"
                            sx={{ fontSize: "18px", color: "#000000", my: 4 }}
                        >
                            Our Mission.
                        </Typography>
                        <Title variant="h1">
                            Empower Clinicians.
                        </Title>
                        <Typography
                            variant="body2"
                            sx={{ fontSize: "18px", color: "#5A6473", my: 4 }}
                        >
                            Our mission is to empower clinicians with an all-in-one platform of state-of-the-art AI tools, tailored to alleviate stress and enhance productivity. By revolutionizing healthcare support, we aim to enable clinicians to focus on what truly matters – providing optimal patient care with unwavering dedication
                        </Typography>
                    </Box>
                </CustomBox>
            </Container>
        </Box>
    )
}
export default AboutUs;