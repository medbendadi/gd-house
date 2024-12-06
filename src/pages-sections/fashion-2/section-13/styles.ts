"use client";

import styled from "@mui/material/styles/styled";

export const FeaturedItem = styled("div")(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '0 50px',
    [theme.breakpoints.down("md")]: { flexWrap: 'wrap'},



    "& div": {
        display: 'flex',
        alignItems: 'center',

        "& h3":{
            marginLeft: '10px',
        },

        [theme.breakpoints.down("md")]: { width: '100%', marginBottom: '20px', padding: '0 144px', textAlign: 'left'},
    }
}))