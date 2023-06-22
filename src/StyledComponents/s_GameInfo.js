import { Box, Container, Typography, styled } from "@mui/material";

export const SidebarBox = styled(Box)({
    position:"absolute",
    display:"flex",
    flexDirection:"column-reverse",
    textAlign:"center"
})

export const BackButton = styled(Typography)({
    fontSize:"30px",
    marginLeft:"20px",
    color:"white"
})

export const GameInfoCon = styled(Container)({
    margin:"0px auto 0px auto",
    width:"1200px",
    height:"600px"
})

export const GameInfoMain = styled(Box)({
    width:"1200px",
    height:"400px",
    display:"flex",
    flexDirection:"row"
})

export const GameImage = styled(Box)({
    width:"900px",
    height:"400px",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover"
})

export const RatingsCon = styled(Box)({
    paddingLeft: "20px"
})

export const GameTitle = styled(Typography)({
    fontSize:"30px",
    marginLeft: "auto",
    marginRight: "auto"
})

export const RatingText = styled(Typography)({
    fontSize: "15px"
})

export const GameDesc = styled(Typography)({
    flex: 1,
    fontSize: "20px",
    margin: "20px 20px auto 20px"
})