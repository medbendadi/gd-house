"use client";

import styled from "@mui/material/styles/styled";

export const ContentContainer = styled("div")(({ theme }) => ({
  width: '100%',
  
  "& .demandeContainer": {
  minHeight: '460px',
  minWidth: '460px',
  display: 'flex',
  flexDirection: 'column',
  overflow:'hidden',
  justifyContent:'center',
  alignItems: 'center',
  padding: '25px',
  objectFit: 'contain',
  backgroundSize: "contain",
  backgroundColor: "grey.500",
  backgroundRepeat: "no-repeat",
  borderRadius: '25px',
  backgroundImage: "url(/assets/images/calendar/japane.png)",

  [theme.breakpoints.down('md')]: {
      minWidth: '100%',
      minHeight: '460px',
  backgroundSize: "cover",
      backgroundPosition: "center",
  },

  "& p": {
    fontSize: '14px',
    textAlign: 'center',
    color: '#cfbfbf',
    margin: '15px 0'
  }
  },

  "& button":{
    backgroundColor: 'white',
    color: 'black',
    padding: '10px 15px',
    borderRadius: '2px',
    transition: 'all .3s',
    ":hover": {
      backgroundColor: '#d8d8d8 !important',
    }
  },


  "& .liveContainer": {
    marginTop: '30px',
    overflow: 'hidden',
    minHeight: '260px',
    borderRaduis: '25px',
    minWidth: '460px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent:'center',
    alignItems: 'center',
    padding: '25px',
    backgroundSize: "contain",
    backgroundColor: "grey.500",
    backgroundRepeat: "no-repeat",
    backgroundImage: "url(/assets/images/calendar/girl.png)",

    [theme.breakpoints.down('md')]: {
      minWidth: '100%',
      backgroundSize: "contain",
      minHeight: '460px',
      backgroundPosition: "center",
    },
  
    "& p": {
      fontSize: '14px',
      textAlign: 'center',
      color: '#cfbfbf',
      margin: '15px 0'
    }
  }
  
}))