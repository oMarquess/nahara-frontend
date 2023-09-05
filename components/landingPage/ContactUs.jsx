"use client"
import { Box, styled, Typography } from "@mui/material";
import { Container } from "@mui/system";
import Image from 'next/image'
import SvgIcon from '@mui/material/SvgIcon';
import ContactUsImage from "../../public/contact-us.png"
import emailIcon from "../../public/envelope-regular.svg"
import phoneIcon from "../../public/phone-solid.svg"

const ContactUs = () => {
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

    const ContactDetailsBox = styled(Box)(({ theme }) => ({
        display: "flex",
        justifyContent: "space-between",
        gap: theme.spacing(5),
        marginTop: theme.spacing(3),
        [theme.breakpoints.down("md")]: {
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center",
        },
    }));

    const DetailBox = styled(Box)(({ theme }) => ({
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        backgroundColor: "#efeeee",
        padding: "20px",
        borderRadius: "10px",
        width: "50%",
        alignItems: "center",
        textAlign: "center",
        marginTop: theme.spacing(3),
        [theme.breakpoints.down("md")]: {
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center",
        },
    }));

    return (
        <Box sx={{ backgroundColor: "#E6F0FF", my: 3, py: 8 }}>
            <Container>
                <CustomBox>
                    <Box sx={{ flex: "1" }}>
                        <Typography
                            variant="body2"
                            sx={{ fontSize: "18px", color: "#000000", my: 4 }}
                        >
                            Contact Us.
                        </Typography>
                        <Title variant="h1">
                            Feel free to get in touch with us.
                        </Title>
                        <Typography
                            variant="body2"
                            sx={{ fontSize: "15px", color: "#5A6473" }}
                        >
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        </Typography>
                        <ContactDetailsBox>
                            <DetailBox>
                                <Image
                                    src={emailIcon}
                                    alt="phone"
                                    className="w-8 h-8"
                                    style={{ maxWidth: "100%", marginBottom: "2rem" }}
                                />
                                <span><a href="mailto:sredeemer@gmail.com">Send a Mail</a></span>
                            </DetailBox>
                            <DetailBox>
                                <Image
                                    src={phoneIcon}
                                    alt="phone"
                                    className="w-8 h-8"
                                    style={{ maxWidth: "100%", marginBottom: "2rem" }}
                                />
                                <span><a href="tel:+2330555225870">+233 055 5225870</a> </span>
                            </DetailBox>
                        </ContactDetailsBox>
                    </Box>

                    <Box sx={{ flex: "1.25" }}>
                        <Image
                            src={ContactUsImage}
                            alt="vision"
                            style={{ maxWidth: "100%", marginBottom: "2rem" }}
                        />
                    </Box>
                </CustomBox>
            </Container>
        </Box>
    )
}
export default ContactUs;