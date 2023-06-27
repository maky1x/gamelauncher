import { Box, Button, ButtonGroup, styled } from "@mui/material";

export const HeaderGroup = styled(ButtonGroup)({
    width:"100vw",
    height:"60px",
    display:"flex",
    paddingLeft:"15px"
})

export const HeaderButton = styled(Button)({
    color: "white",
    flexGrow:1,
    flexBasis:0,
    border:"none",
    boxSizing:"border-box"
})

export const TitleBarBox = styled(Box)({
    position: "absolute",
    top:"0px",
    right:"5px"
})

export const FriendsIcon = styled("div")({
    backgroundColor: "#1c1b22",
    border:"1px solid #2b2a33",
    width:"3%",
    height:"25px",
    alignItems: "center",
    marginTop: "auto",
    marginBottom:"auto",
    marginLeft:"15px",
    display:"flex",
    justifyContent: "center",
    borderRadius: "20px",
    cursor:"pointer",
    transition:"all 500ms",
    "&:hover": {
        backgroundColor:"#2b2a33"
    }
})