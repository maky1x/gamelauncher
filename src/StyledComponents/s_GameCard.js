import { Box, Button, Card, CardContent, Container, Grid, Typography, styled } from '@mui/material';

export const GameContainer = styled(Container)({
    width:"90vw",
    maxWidth:"90vw !important",
    padding:"0 !important",
    float:'right'
})

export const GameGrid = styled(Grid)({
    rows:4,
    columns:5,
    width:"100%",
    margin:"0px auto",
})

export const Game = styled(Card)({
    margin: 0,
    width: "344px",
    height: "200px",
    backgroundSize: "384px 100px",
    backgroundRepeat: "no-repeat",
    border: "2px solid #2b2a33",
    marginBottom:"10px",
    // backgroundSize: "cover",
    backgroundColor:"#1c1b22",
    textAlign:"center",
    borderRadius:0,
    "&:hover": {
        backgroundColor:"#2b2a33"
    }
})

export const GameContent = styled(CardContent)({
    padding: 0
})

export const GameImage = styled(Box)({
    width:"344px",
    height:"150px",
    backgroundSize:"cover",
    backgroundRepeat:"no-repeat"
})

export const GameText = styled(Typography)({
    fontSize:"19px"
})

export const GenreButton = styled(Button)({
    padding: 0,
    fontSize: "14px",
    lineHeight: 1,
    color: "white",
    width: "150px",
    border: "2px solid #2b2a33",
    textTransform:"none",
    height: "30px",
    '&:hover': {
        border:"2px solid #2b2a33",
        borderRight:"2px solid #2b2a33 !important",
        backgroundColor: "#2b2a33"
    }
  });