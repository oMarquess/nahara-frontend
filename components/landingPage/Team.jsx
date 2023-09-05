"use client"
import React from "react";
import { Box, Container, styled, Typography } from "@mui/material";
import TeamMember from "./TeamMember";
import Carousel from 'react-material-ui-carousel'
// import KeyboardArrowLeftIcon from "@material-ui/icons/KeyboardArrowLeft";
// import KeyboardArrowRightIcon from "@material-ui/icons/KeyboardArrowRight";

const Team = () => {
    const members = [
        {
            name: "Emmanuel E. Asiamah",
            role: "Project Advisor",
            link: "linkedIn.com",
            sex: "m"
        },
        {
            name: "Elli  Banini",
            role: "Project Advisor",
            link: "linkedIn.com",
            sex: "m"
        },
        {
            name: "Redeemer Salami Okekale",
            role: "Project Lead",
            link: "linkedIn.com",
            sex: "m"
        },
        {
            name: "Schandorf Osam-Frimpong",
            role: "Medical Data Review Team Lead",
            link: "linkedIn.com",
            sex: "m"
        },
        {
            name: "Felix Coker",
            role: "Engineering Team Lead",
            link: "linkedIn.com",
            sex: "m"
        },
        {
            name: "Daniel Gohoho ",
            role: "Frontend Engineer",
            link: "linkedIn.com",
            sex: "m"
        },
        {
            name: "Victus Amenorpe ",
            role: "UI/UX Designer",
            link: "linkedIn.com",
            sex: "m"
        },
        {
            name: "Aaron Kofi Gayi",
            role: "Research Lead",
            link: "linkedIn.com",
            sex: "m"
        },
        {
            name: "Asiwome A. Cherrlyn",
            role: "Volunteer",
            link: "linkedIn.com",
            sex: "f"
        },
        {
            name: "Ama Quarshie",
            role: "Volunteer",
            link: "linkedIn.com",
            sex: "f"
        },
        {
            name: "Benson Azumah",
            role: "Volunteer",
            link: "linkedIn.com",
            sex: "m"
        },
        {
            name: "Andrew Kojo Mensah-Onumah",
            role: "Volunteer",
            link: "linkedIn.com",
            sex: "m"
        },
        
    ];

    const CustomBox = styled(Box)(({ theme }) => ({
        display: "flex",
        justifyContent: "space-between",
        // gap: theme.spacing(5),
        marginTop: theme.spacing(5),
        marginBottom: theme.spacing(5),
        paddingTop: theme.spacing(10),
        paddingBottom: theme.spacing(10),
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

    const items = [];
    const sliderItems = 3
    for (let i = 0; i < members.length; i += sliderItems) {
        if (i % sliderItems === 0) {
            items.push(
                <Box sx={{display: "flex"}}>
                    {members.slice(i, i + sliderItems).map((memberData, index) => {
                        return <TeamMember
                            key={i}
                            name={memberData.name}
                            role={memberData.role}
                            sex={memberData.sex}
                            link={memberData.link}
                        />;
                    })}
                </Box>
            );
        }
    }

    return (
        <Box sx={{ backgroundColor: "#E6F0FF", py: 1}}>
            <Container>
                <CustomBox>
                    <Box sx={{ flex: "1 1 0px" }}>
                        <Typography
                            variant="body2"
                            sx={{ fontSize: "18px", color: "#000000", my: 4 }}
                        >
                            Our Team.
                        </Typography>
                        <Title variant="h1">
                            We have the most amazing team.
                        </Title>
                        <Typography
                            variant="body2"
                            sx={{ fontSize: "18px", color: "#5A6473", my: 4 }}
                        >
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        </Typography>
                    </Box>
                    <Box sx={{ flex: "1 1 0px" }}>
                        <Carousel
                            sx={{ mt: 5, }}
                            animation="slide"
                            duration="700"
                            indicatorIconButtonProps={{
                                style: {
                                    display: 'none',
                                }
                            }}
                        >
                            {items}

                        </Carousel>
                    </Box>
                </CustomBox>
            </Container>
        </Box>
    );

}
export default Team;