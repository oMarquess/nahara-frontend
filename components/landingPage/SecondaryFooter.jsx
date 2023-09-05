"use client"
import { styled, Typography } from "@mui/material";
import { Box, Container } from "@mui/system";

const SecondaryFooter = () => {
    const CustomContainer = styled(Container)(({ theme }) => ({
        display: "flex",
        justifyContent: "space-around",
        gap: theme.spacing(5),
        [theme.breakpoints.down("sm")]: {
            flexDirection: "column",
            textAlign: "center",
        },
    }));

    return (
        <Box sx={{backgroundColor: "#eaf3f9", py: 3 }}>
            <CustomContainer>
                copyright @2023
            </CustomContainer>
        </Box>
    )
}

export default SecondaryFooter;