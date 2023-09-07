"use client"
import { styled, Typography } from "@mui/material";
import { Box, Container } from "@mui/system";
import React from "react";

// import fbIcon from "../media/fbicon.png";
// import twitterIcon from "../media/twittericon.png";
// import linkedinIcon from "../media/linkedinicon.png";

const Footer = () => {
  const CustomContainer = styled(Container)(({ theme }) => ({
    display: "flex",
    justifyContent: "space-around",
    gap: theme.spacing(5),
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
      textAlign: "center",
    },
  }));

  const IconBox = styled(Box)(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    gap: "1rem",
    [theme.breakpoints.down("sm")]: {
      justifyContent: "center",
    },
  }));

  const FooterLink = styled("span")(({ theme }) => ({
    fontSize: "16px",
    color: "#7A7A7E",
    fontWeight: "300",
    cursor: "pointer",
    "&:hover": {
      color: "#000",
    },
  }));

  return (
    <Box sx={{ py: 10, backgroundColor: "#E6F0FF" }}>
      <CustomContainer>
        <CustomContainer>
          <Box>
            <Typography
              sx={{
                fontSize: "20px",
                color: "#1C1C1D",
                fontWeight: "700",
                mb: 2,
              }}
            >
              Nahara
            </Typography>

            <Typography
              sx={{
                fontSize: "16px",
                color: "#7A7A7E",
                fontWeight: "500",
                mb: 2,
              }}
            >
              Enhance your healthcare experience <br></br> 
              with meticulously crafted tools aimed <br></br> 
              at alleviating stress and optimizing patient care. <br></br>
              Achieve more while mitigating stress
            </Typography>

          </Box>
          <Box>
            <Typography
              sx={{
                fontSize: "20px",
                color: "#1C1C1D",
                fontWeight: "700",
                mb: 2,
              }}
            >
              Links
            </Typography>

            <FooterLink>Home</FooterLink>
            <br />
            <FooterLink>MedCon</FooterLink>
            <br />
            <FooterLink>Contact Us</FooterLink>
            <br />
            <FooterLink>Team</FooterLink>
          </Box>

          <Box>
            <Typography
              sx={{
                fontSize: "20px",
                color: "#1C1C1D",
                fontWeight: "700",
                mb: 2,
              }}
            >
              Company
            </Typography>

            <FooterLink>Partnerships</FooterLink>
            <br />
            <FooterLink>Terms of use</FooterLink>
            <br />
            <FooterLink>Privacy</FooterLink>
            <br />
            {/* <FooterLink>Sitemap</FooterLink> */}
          </Box>

        </CustomContainer>
      </CustomContainer>
    </Box>
  );
};

export default Footer;
