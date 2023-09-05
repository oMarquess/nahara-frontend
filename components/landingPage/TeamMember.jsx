"use client"
import React from "react";
import { Box, IconButton, Button, Container, styled, Typography, Paper } from "@mui/material";
import Image from 'next/image'
import male from "../../public/male.png"
import female from "../../public/female.png"
import Link from "next/link";
import LinkedinIcon from "../../public/linkedin-icon.svg";

const TeamMember = ({ name, role, sex, link }) => {
    const TeamMemberBox = styled(Box)(({ theme }) => ({
        borderTopLeftRadius: "10px",
        borderTopRightRadius: "10px",
        backgroundColor: "#E6F0FF",
        margin: theme.spacing(0, 2, 0, 2),
        [theme.breakpoints.down("md")]: {
            margin: theme.spacing(2, 0, 2, 0),
        },
    }));

    const MemberBox = styled(Box)(({ theme }) => ({
        display: "flex", 
        flexDirection: "column", 
        alignContent: "center", 
        alignItems: "center",
        textAlign: "center",
        margin: theme.spacing(0, 2, 0, 2),
        [theme.breakpoints.down("md")]: {
            margin: theme.spacing(2, 0, 2, 0),
        },
    }));


    return (
        <TeamMemberBox>
            <MemberBox>
                <Image
                    src={sex == "m" ? male : female}
                    alt={name}
                    style={{ maxWidth: "100%", marginBottom: "1rem" }}
                    className="w-10.2 h-10.2"
                />
                <Typography variant="body2" sx={{ fontWeight: "700" }}>
                    {name}
                </Typography>
                <Typography variant="body2" sx={{ my: 2 }}>
                    {role}
                </Typography>
                <a style={{ transitionDuration: "300ms", color: "rgb(156 163 175 / 1)"}} href={link}>
                    <Image
                        src={LinkedinIcon}
                        alt={link}
                        className="fill-current w-3 h-3"
                    />
                </a>
            </MemberBox>
        </TeamMemberBox>
    )
}
export default TeamMember;