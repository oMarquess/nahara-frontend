"use client"
import { styled, Typography } from "@mui/material";
import { Box, Container } from "@mui/system";
import React from "react";
import medcon from "../../public/medcon.png"
import Image from 'next/image'

const MedCon = () => {
    const CustomBox = styled(Box)(({ theme }) => ({
        display: "flex",
        gap: theme.spacing(10),
        alignItems: "center",
        justifyContent: "space-between",
        [theme.breakpoints.down("md")]: {
            flexDirection: "column",
            textAlign: "center",
        },
    }));

    const ImgContainer = styled(Box)(({ theme }) => ({
        width: "100%",
        [theme.breakpoints.down("md")]: {
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
        },
    }));

    const Divider = styled("div")(({ theme }) => ({
        width: "13%",
        height: "5px",
        backgroundColor: "#A2195B",
        [theme.breakpoints.down("md")]: {
            marginLeft: "auto",
            marginRight: "auto",
        },
    }));

    return (
        <Box sx={{ py: 10, backgroundColor: "#E6F0FF", }}>
            <Container>
                <CustomBox>
                    <ImgContainer>
                        <Image
                            src={medcon}
                            alt="mecon"
                            style={{ maxWidth: "100%" }}
                        />
                    </ImgContainer>

                    <Box>
                        <Divider />
                        <Typography
                            sx={{
                                fontSize: "35px",
                                color: "#A2195B",
                                fontWeight: "700",
                                my: 3,
                            }}
                        >
                            What is MedCon?
                        </Typography>

                        <Typography
                            sx={{
                                fontSize: "16px",
                                color: "#5A6473",
                                lineHeight: "27px",
                                mb: 3
                            }}
                        >
                            MedCon is a cutting-edge healthcare companion app designed to alleviate stress in the consulting room for clinicians.
                            Powered by advanced AI technology, MedCon assists clinicians by predicting potential diagnoses, recommending investigations, and offering treatment guidelines, all based on the information provided by clients.
                            {/* Importantly, MedCon provides evidence-based suggestions, empowering clinicians with valuable insights to make informed decisions, ultimately enhancing the quality of patient care.  */}
                            {/* Elevate your practice with MedCon and experience the future of healthcare consultation. */}
                        </Typography>

                        {/* <CustomButton
              backgroundColor="#A2195B"
              color="#fff"
              buttonText="Try Demo"
              heroBtn={true}
            /> */}
                    </Box>
                </CustomBox>

            </Container>
        </Box>
    );
};

export default MedCon;
