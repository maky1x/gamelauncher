import { Box, Button, Container, styled } from "@mui/material";

export const ContextMenu = styled(Box)(({ top, left }) => ({
  position: "absolute",
  width: "125px",
  backgroundColor: "#1c1b22",
  borderTop: "1px solid #2b2a33",
  borderRight: "1px solid #2b2a33",
  borderLeft: "1px solid #2b2a33",
  borderRadius: "5px",
  boxSizing: "border-box",
  top: `${top}px`,
  left: `${left}px`,
}));

export const ContextMenuButton = styled(Button)({
  fontSize: "12px",
  borderRadius: "0",
  textAlign: "center",
  marginLeft: "1px",
  marginBottom: "1px",
  border: "none",
  borderBottom: " 1px solid #2b2a33",
  textTransform: "none",
  width: "100%",
  color: "white",
  webkitTransition: "none",
  transition: "all 500ms",
  "&:hover": {
    border: "none",
    borderBottom: "1px solid #2b2a33",
    backgroundColor: "#2b2a33",
  },
});

export const Tooltip = styled(Box)(({ top, left }) => ({
  position: "absolute",
  width: "215px",
  backgroundColor: "#1c1b22",
  opacity: 0,
  padding: "5px",
  cursor:"default",
  border: "1px solid #2b2a33",
  top: `${top}px`,
  left: `${left}px`,
}));

export const Blur = styled(Box)({
  position: "absolute",
  left: 0,
  zIndex: "2",
  backgroundColor: "#1c1b22e6",
  width: "100vw",
  height: "100vh",
});

export const TooltipCon = styled(Container)({
  display: "flex",
  flexDirection: "row",
});

export const FriendList = styled(Box)({
  position: "absolute",
  zIndex: 3,
  top: 0,
  left: 0,
  height: "100vh",
  width: "100%",
  borderRight: "1px solid #2b2a33",
  backgroundColor: "#1c1b22",
});

export const FriendListCon = styled(Box)({
  position: "absolute",
  zIndex: 3,
  top: 0,
  left: 0,
  height: "100vh",
  width: "12%",
  backgroundColor: "#1c1b22",
});

export const FriendName = styled(Box)({
  width: "100%",
  marginRight: "35px",
});

export const FriendOption = styled(Box)({
  display: "flex",
  flexDirection: "row",
  verticalAlign: "middle",
  alignItems: "center",
  width: "230px",
  cursor:"default",
  fontSize: "20px",
  borderBottom: "1px solid #2b2a33",
  transition: "all 500ms",
  "&:hover": {
    backgroundColor: "#2b2a33",
  },
});

export const ListProfile = styled(Box)({
  display: "flex",
  flexDirection: "row",
  verticalAlign: "middle",
  alignItems: "center",
  width: "230px",
  fontSize: "20px",
  borderBottom: "1px solid #2b2a33",
  transition: "all 500ms",
})

export const EmptyList = styled(Box)({
  display: "flex",
  flexDirection: "row",
  verticalAlign: "middle",
  textAlign:"center",
  alignItems: "center",
  width: "230px",
  marginTop:"40px",
  fontSize: "35px",
  transition: "all 500ms",
})

export const UserProfileCon = styled(Box)({
  display: "flex",
  alignItems: "center",
  fontSize: "15px",
  width: "8%",
  paddingLeft: "5px",
  border: "1px solid #2b2a33",
  height: "50%",
  marginTop: "auto",
  marginBottom: "auto",
  cursor:"default",
  transition: "all 500ms",
  "&:hover": {
    backgroundColor: "#2b2a33",
  },
});

export const AddFriend = styled(Box)({
  width: "230px",
  fontSize: "20px",
  textAlign: "center",
  cursor: "pointer",
  borderBottom: "1px solid #2b2a33",
  transition: "all 500ms",
  "&:hover": {
    backgroundColor: "#2b2a33",
  },
});

export const ProfileMenu = styled(Box)({
  position: "absolute",
  top: "45px",
  left: "35px",
  border: "1px solid #2b2a33",
  width: "120px",
  textAlign: "center",
  zIndex: 15,
  backgroundColor: "#1c1b22",
  cursor: "pointer",
  transition: "all 500ms",
  "&:hover": {
    backgroundColor: "#2b2a33",
  },
});

export const UserPopup = styled(Box)({
  position: "absolute",
  display: "flex",
  padding: "50px",
  alignItems: "center",
  justifyContent: "space-between",
  top: "50vh",
  left: "50vw",
  transform: "translate(-50%, -50%)",
  backgroundColor: "#1c1b22",
  border: "1px solid #2b2a33",
  height: "30vh",
  width: "30vw",
  zIndex: 20,
});

export const PopUpButton = styled(Box)({
  borderBottom: "1px solid white",
  padding: "5px",
  marginTop: "32vh",
  cursor: "pointer",
  zIndex: 20,
});

export const ListIcon = styled("img")({
  height: "60px",
  marginRight: "15px",
  borderRight: "1px solid #2b2a33",
  width: "60px",
  backgroundColor: "#1c1b22",
});

export const TooltipFlex = styled("div")({
  display: "flex",
  flexDirection: "row",
});

export const TooltipIcon = styled("img")({
  height: "60px",
  width: "60px",
  border: "1px solid #2b2a33",
});

export const TooltipText = styled("div")({
  margin: "5px 0 0 10px"
})

export const ProfileIcon = styled("img")({
  height:"100%",
  marginRight:"20px"
})
