import { Box, Button, ButtonGroup, styled } from "@mui/material";

export const HeaderButtonGroup = styled(ButtonGroup)({
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