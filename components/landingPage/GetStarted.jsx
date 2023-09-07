"use client"
import { styled, Typography } from "@mui/material";
import { Box, Container } from "@mui/system";
import React from "react";
import CustomButton from "./CustomButton";
import { ReactComponent as SvgDecoratorBlob1 } from "../../public/svg-decorator-blob-9.svg";
import Image from 'next/image'

const Details = () => {
  const PrimaryBox = styled(Box)(({ theme }) => ({
    paddingTop: "5rem",
    paddingBottom: "5rem",
    background: "#A2195B",
    [theme.breakpoints.down("md")]: {
      textAlign: "center",
    },
  }));

  const RowBox = styled(Box)(({ theme }) => ({
    width: "100%",
    paddingLeft: "2rem",
    paddingRight: "2rem",
    [theme.breakpoints.down("sm")]: {
    },
  }));

  const TextBox = styled(Typography)(({ theme }) => ({
    maxWidth: "50rem",
    marginLeft: "auto",
    marginRight: "auto",
    color: "rgb(243 244 246 / 1)",
    fontSize: "1.5rem",
    lineHeight: "2rem",
    fontWeight: "700",
    [theme.breakpoints.down("sm")]: {
    fontSize: "1rem",
    lineHeight: "2.25rem",
    },
  }));

  return (
    <Box sx={{ py: 10 }}>
      <Container>
        <PrimaryBox className="rounded-lg relative">
          <RowBox className="text-center">
            <TextBox>Enhance your healthcare experience
              with meticulously crafted tools aimed
at alleviating stress and optimizing patient care. </TextBox>
          </RowBox>

        </PrimaryBox>

      </Container>
    </Box>
  );
};

export default Details;
