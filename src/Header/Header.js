import React, { useState } from "react";
import { Box } from "@mui/material";
import "./Header.css";
import { Close, Remove } from "@mui/icons-material";
import { grey } from "@mui/material/colors";
import { Group } from "@mui/icons-material";
import { Blur } from "../StyledComponents/s_Friends";
import {
  HeaderButtonGroup,
  TitleBarBox,
} from "../StyledComponents/s_Header";
import { Friends } from "../Friends/Friends";

export const Header = ({games}) => {
  const [friendlist, setFriendlist] = useState(false);
  
  return (
    <Box>

      <HeaderButtonGroup>
        <div className="userprofile"><img src="/icon.png" className="userimg"></img></div>
      <div className="flicon" onClick={()=>setFriendlist(true)}><Group /></div>
        {friendlist && (<><Friends games={games}/> <Blur onClick={()=>setFriendlist(false)}/></>)}

        {/* <HeaderButton className="header-btn">Shop</HeaderButton>
        <HeaderButton className="header-btn">Library</HeaderButton>
        <HeaderButton className="header-btn">Friends</HeaderButton> */}
      </HeaderButtonGroup>

      <TitleBarBox>
        <Remove sx={{ color: grey[500] }} />
        <Close sx={{ color: grey[500] }} />
      </TitleBarBox>
      
    </Box>
  );
};
