import { Box, List, ListItem, Typography, styled } from "@mui/material";

export const SidebarList = styled(List)({
    position:"absolute",
    width:"9.7vw",
    maxWidth:"9.7vw",
    float:"left",
    height:"41vw",
    padding:0
})
export const SidebarItem = styled(ListItem)({
    padding:0,
    width:"100%",
    height:"40px",
    border:"1px solid #2b2a33",
    color:"white"
})

export const SidebarText = styled(Typography)({
    fontSize:"13px"
})