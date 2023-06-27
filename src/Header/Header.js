import React, { useState } from "react";
import { Box } from "@mui/material";
import "../Friends/Animations.css";
import { Close, Remove } from "@mui/icons-material";
import { grey } from "@mui/material/colors";
import { Group } from "@mui/icons-material";
import { Blur, FriendListCon } from "../StyledComponents/s_Friends";
import { FriendsIcon, HeaderGroup, TitleBarBox } from "../StyledComponents/s_Header";
import { Friends } from "../Friends/Friends";
import { UserProfile } from "../Friends/UserProfile";

export const Header = ({ games }) => {
  const [friendList, setFriendList] = useState(false);
  const [animation, setAnimation] = useState(false);

  const handleBlurClick = (event) => {
    event.preventDefault();
    setAnimation(true);
    setTimeout(() => setFriendList(false), 300);
    setTimeout(() => setAnimation(false), 300);
  };

  const handleAnimation = () => {
    if (!animation) return { animation: "list-in 0.5s" };
    return { animation: "list-out 0.3s" };
  };

  return (
    <Box>
      <HeaderGroup>
        <UserProfile />
        <FriendsIcon onClick={() => setFriendList(true)}>
          <Group />
        </FriendsIcon>
        {friendList && (
          <>
            <FriendListCon sx={handleAnimation()}>
              <Friends games={games} />
            </FriendListCon>
            <Blur onClick={(e) => handleBlurClick(e)} />
          </>
        )}
      </HeaderGroup>
      
      <TitleBarBox>
        <Remove sx={{ color: grey[500] }} />
        <Close sx={{ color: grey[500] }} />
      </TitleBarBox>
    </Box>
  );
};
