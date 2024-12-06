"use client";

import styled from "@mui/material/styles/styled";

export const Content = styled("div")(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',

    "& input": {
        fontFamily: "'__VIOLA_bb2b49', '__VIOLA_Fallback_bb2b49'",
        outline: 'none',
        border: '1px solid #b5bac3',
        padding: '15px',
        width: '400px',
        marginRight: '7px',
    },

    "& .inputContainer":{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        margin: '10px',


        "& button" : {
        fontFamily: "'__VIOLA_bb2b49', '__VIOLA_Fallback_bb2b49'",
            color: 'white',
            backgroundColor: '#1f2937',
            padding: '15px 30px',
            outline: 'none',
            border: 'none',
            cursor: 'pointer',
            transition: 'all .3s',
            ":hover": {
                backgroundColor: '#30425a',
            }
        }
    },

    "& span":{
        color: '#0f4fce',
        textDecoration: 'underline',
        cursor: 'pointer'
    }

}))