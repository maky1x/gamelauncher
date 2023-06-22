import { Box, Button, Container, styled } from "@mui/material";

export const ContextMenu = styled(Box)(({ top, left }) => ({
  position: "absolute",
  width: "125px",
  backgroundColor: "#1c1b22",
  borderTop: "2px solid #2b2a33",
  borderRight: "2px solid #2b2a33",
  borderLeft: "2px solid #2b2a33",
  borderRadius: "5px",
  boxSizing: "border-box",
  top: `${top}px`,
  left: `${left}px`,
}));

export const ContextMenuButton = styled(Button)({
  fontSize: "12px",
  width:"120px",
  borderRadius:"0",
  textAlign: "center",
  marginLeft: "1px",
  marginBottom: "1px",
  borderBottom: " 2px solid #2b2a33",
  color: "white",
  webkitTransition:"none",
  transition:"none",
  "&:hover": {
    borderBottom:"1px solid white"
  }
});

export const Tooltip = styled(Box)(({ top, left }) => ({
  position: "absolute",
  width: "215px",
  backgroundColor: "#1c1b22",
  borderTop: "2px solid #2b2a33",
  borderRight: "2px solid #2b2a33",
  borderLeft: "2px solid #2b2a33",
  padding:"5px",
  top: `${top}px`,
  left: `${left}px`,
}));

export const Blur = styled(Box)({
  position: "absolute",
  zIndex: "2",
  // backgroundColor: "#404040b3",
  backgroundColor:"#1c1b22e6",
  width:"100vw",
  height:"100vh"
});

export const TooltipCon = styled(Container)({
  display:"flex",
  flexDirection:"row",
  
})

// export const TooltipIcon = styled(Box)({
//   height:"60px",
//   width:"60px",
//   border:"1px solid #2b2a33",
//   margin:"5px 0 5px 5px",
// })

export const TooltipText = styled(Container)({
  margin:"5px 0 0 10px"
})

export const Friendlist = styled(Box)({
  position:"absolute",
  zIndex:3,
  top:0,
  left:0,
  height:"100vh",
  width:"12%",
  borderRight:"2px solid #2b2a33",
  backgroundColor:"#1c1b22",
})

export const FriendName = styled(Box)({
  width:"100%",
  marginRight:"35px"
})

export const FriendOption = styled(Box)({
  display:"flex",
  flexDirection:"row",
  verticalAlign:"middle",
  alignItems:"center",
  width:"230px",
  fontSize:"20px",
  borderBottom:"2px solid #2b2a33",
  "&:hover": {
    // borderRight:"3px solid #474747",
    // borderBottom:"3px solid #474747",
    // borderTop:"3px solid #474747"
    backgroundColor:"#2b2a33"
  }
})
