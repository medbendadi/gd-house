"use client";

import styled from "@mui/material/styles/styled";

export const ImageContainer = styled("div")(({ theme }) => ({
    position: 'relative',
    width: '100%',
    objectFit: 'contain',
    minHeight: '550px'
}))