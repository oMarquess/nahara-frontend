"use client"
import { styled, Typography } from "@mui/material";
import { Box, Container } from "@mui/system";
import React from "react";
import CustomButton from "./CustomButton";
import { ReactComponent as SvgDecoratorBlob1 } from "../../public/svg-decorator-blob-9.svg";
import Image from 'next/image'

const GetStarted2 = () => {
  const PrimaryBox = styled(Box)(({ theme }) => ({
    paddingTop: "5rem",
    paddingBottom: "5rem",
    background: "#A2195B",
    [theme.breakpoints.down("md")]: {
      flexDirection: "column",
      textAlign: "center",
    },
  }));

  const RowBox = styled(Box)(({ theme }) => ({
    width: "100%",
    paddingLeft: "2rem",
    paddingRight: "2rem",
    maxWidth: "1024px",
    marginLeft: "auto",
    marginRight: "auto",
    zIndex: 10,
    display: "flex",
    flexDirection: "row",
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column"
    },
  }));

  const TextBox = styled(Typography)(({ theme }) => ({
    maxWidth: "32rem",
    color: "rgb(243 244 246 / 1)",
    fontSize: "1.5rem",
    lineHeight: "2rem",
    fontWeight: "700",
    [theme.breakpoints.down("sm")]: {
    fontSize: "1rem",
    lineHeight: "2.25rem",
    },
  }));

  const LinksBox = styled(Box)(({ theme }) => ({
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "row",
    width: "30%",
    [theme.breakpoints.down("sm")]: {
      justifyContent: "center",
      marginTop: "5px",
      flexDirection: "column",
      width: "100%",

    },
  }));


  return (
    <Box sx={{ py: 10 }}>
      <Container>
        <PrimaryBox className="rounded-lg relative">
          <RowBox className="flex items-center relative text-center">
            <TextBox>Elevate your practice with MedCon and experience the future of healthcare consultation. </TextBox>

            <LinksBox >
              <CustomButton sx={{marginRight: "10px"}} backgroundColor="#A2195B"
              color="#fff"
              buttonText="Get Started"
              getStartedBtn={true}
              ></CustomButton>

              <CustomButton sx={{ marginRight: "10px" }} backgroundColor="#A2195B"
              color="#fff"
              buttonText="Contact Us"
              getStartedBtn={true}
              ></CustomButton>
            </LinksBox>
          </RowBox>

        </PrimaryBox>

      </Container>
    </Box>
  );
};

export default GetStarted2;
