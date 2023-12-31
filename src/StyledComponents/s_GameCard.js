import { Box, Button, ButtonGroup, Card, CardContent, Container, Grid, Typography, styled } from '@mui/material';

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
    border: "1px solid #2b2a33",
    marginBottom:"10px",
    transition:"all 500ms",
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
    border: "1px solid #2b2a33",
    textTransform:"none",
    height: "30px",
    transition:"all 500ms",
    '&:hover': {
        backgroundColor: "#2b2a33"
    }
  });

  export const GenreButtonGroup = styled(ButtonGroup)({
    display: "flex",
    width:"90%",
    float:"right",
  })