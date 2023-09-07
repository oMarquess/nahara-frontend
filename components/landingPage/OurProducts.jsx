"use client"
import { Box, Button, styled, Typography, Card } from "@mui/material";
import { Container } from "@mui/system";
import Image from 'next/image'
import visionIconImage from "../../public/vision-icon.svg";
import chatIconImage from "../../public/medcon-icon.svg";
import baseIconImage from "../../public/base-icon.svg";

const OurProducts = () => {

    const services = [
        {
            imageSrc: chatIconImage,
            title: "Nahara MedCon",
            description: "MedCon provides evidence-based suggestions, empowering clinicians with valuable insights to make informed decisions.",
            url: "#",
            availability: "",
        },
        {
            imageSrc: visionIconImage,
            title: "Nahara Vision",
            description: "Lorem ipsum donor amet siti ceali placeholder text",
            url: "#",
            availability: "coming soon",
        },
        {
            imageSrc: baseIconImage,
            title: "Nahara Sounds",
            description: "Lorem ipsum donor amet siti ceali placeholder text",
            url: "#",
            availability: "coming soon",
        }
    ];

    const CustomBox = styled(Box)(({ theme }) => ({
        display: "flex",
        gap: theme.spacing(10),
        alignItems: "center",
        margin: "auto",
        justifyContent: "space-between",
        [theme.breakpoints.down("md")]: {
            flexDirection: "column",
            textAlign: "center",
        },
    }));

    const CardBox = styled(Box)(({ theme }) => ({
        transitionProperty: "transform",
        transitionTimingFunction: "cubic- bezier(0.4, 0, 0.2, 1)",
        transitionDuration: "300ms",
        "&:hover": {
            cursor: "pointer",
            transform: "translate(0, 0) rotate(0) skewX(0) skewY(0) scaleX( 1.05) scaleY( 1.05)",
        },
    }))

    const BoxContainer = styled(Box)(({ theme }) => ({
        width: "33.333%", 
        maxWidth: "20rem",
        [theme.breakpoints.down("md")]: {
            width: "100%",
        },
        [theme.breakpoints.down("sm")]: {
            width: "100%",
        },
    }))

    return (
        <Box sx={{ my: 3, py: 10 }} id="products"> 
            <Container>
                <Box>
                    <Typography
                        sx={{
                            fontSize: "35px",
                            color: "#A2195B",
                            fontWeight: "700",
                            my: 3,
                            textAlign: "center"
                        }}
                    >
                        Our Products
                    </Typography>
                    <Typography
                        sx={{
                            fontSize: "16px",
                            color: "#5A6473",
                            lineHeight: "27px",
                            mb: 3,
                            textAlign: "center" 
                        }}
                    >
                        Lorem ipsum dolor sit amet,
                    </Typography>

                    <CustomBox className="mt-10">
                        {services?.map((card, i) => (
                            <BoxContainer key={i} className="text-center h-full mx-4 px-4 py-8 rounded">
                                <CardBox href={card.url} className="mt-10 flex flex-col items-center lg:items-stretch lg:flex-row flex-wrap lg:justify-center max-w-screen-lg mx-auto">
                                    <span className="text-center rounded-full p-4 bg-gray-100" style={{ textAlign: "-webkit-center", backgroundColor: "#E6F0FF" }}>
                                        <Image
                                            src={card.imageSrc}
                                            alt={card.title}
                                            style={{ maxWidth: "100%" }}
                                            className="w-8 h-8"
                                        />
                                    </span>
                                    <span className="mt-4 font-bold text-xl leading-none" style={{ color: "#A2195B" }}>{card.title}</span>
                                    <p className="mt-4 text-sm font-medium text-secondary">{card.description}</p>
                                    <p className="inline-flex items-center pt-5 text-sm font-bold text-primary-300 leading-none" style={{ color: "blue", marginTop: "3px"}}>{card.availability}</p>
                                </CardBox>
                            </BoxContainer>
                        ))}
                    </CustomBox>
                </Box>
            </Container>
        </Box>
    );
};
export default OurProducts;