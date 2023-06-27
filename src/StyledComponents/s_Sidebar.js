import { List, ListItem, Typography, styled } from "@mui/material";

export const SidebarList = styled(List)({
  position: "absolute",
  width: "9.7vw",
  maxWidth: "9.7vw !important",
  float: "left",
  height: "41vw",
  padding: "0 !important",
  borderTop: "1px solid #2b2a33",
});
export const SidebarItem = styled(ListItem)({
  display: "flex",
  justifyContent: "flex-start",
  alignItems: "center",
  padding: "8px",
  width: "100%",
  height: "40px",
  borderBottom: "1px solid #2b2a33",
  borderRight: "1px solid #2b2a33",
  color: "white",
  transition: "all 0.5s",
  "&:hover": {
    backgroundColor:"#2b2a33"
  }
});

export const SidebarText = styled(Typography)({
  fontSize: "14px",
});
