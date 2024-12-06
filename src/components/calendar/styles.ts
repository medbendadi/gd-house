"use client";

import styled from "@mui/material/styles/styled";

export const TitleBox = styled("div")(({ theme }) => ({
    display: 'flex',
    alignItems:'center',
    justifyContent: 'center',
    marginBottom: '20px',

    "& svg":{
        cursor: 'pointer',
        transition: 'all .3s',
        ":hover" : {color: 'rgb(74 74 74)'}
    },
    "& h2": {
        margin: '0 10px 0 10px'
    }

}));

export const BoxTitle = styled("div")(({ theme }) => ({
    padding: '8px 10px',
    backgroundColor: 'white',
    color: '#969696',
    border: 'solid 1px #ededed'
}))

export const BoxDays = styled("div")(({ theme }) => ({
    padding: '8px 10px',
    cursor: 'pointer',
    fontSize: '1.5rem',
    backgroundColor: '#f9f9f9',
    minHeight: '100px',
    color: '#dadada',
    border: 'solid 1px #ededed',
    translate: 'all .3s',

    ":hover": {
        backgroundColor: '#2d272770',
        color:'#fff'    
    }
}))

export const ActiveBoxTitle = styled("div")(({ theme }) => ({
    fontSize: '1.5rem',
    cursor: 'pointer',
    padding: '8px 10px',
    backgroundColor: 'white',
    minHeight: '100px',
    color: '#969696',
    border: 'solid 1px #ededed',
    translate: 'all .3s',

    ":hover": {
        backgroundColor: '#2d2727',
        color:'#fff'    
    }
}))


export const ActiveDayBox = styled("div")(({ theme }) => ({
    fontSize: '1.5rem',
    cursor: 'pointer',
    padding: '8px 10px',
    minHeight: '100px',
    border: 'solid 1px #ededed',
    translate: 'all .3s',
    backgroundColor: '#2d2727',
    color:'#fff'    
}))