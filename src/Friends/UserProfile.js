import React, { useContext, useEffect, useState } from "react";
import {
  Blur,
  PopUpButton,
  ProfileIcon,
  ProfileMenu,
  UserPopup,
  UserProfileCon,
} from "../StyledComponents/s_Friends";
import {ReferenceDataContext} from "../App/ContextProvider"
import { TextField } from "@mui/material";

export const UserProfile = ({page}) => {
  const [userPopup, setUserPopup] = useState(false);
  const [userProfile, setUserProfile] = useState(false);
  const [animation, setAnimation] = useState(false);
  const [animationPop, setAnimationPop] = useState(false);
  const {username, setUsername} = useContext(ReferenceDataContext)
  const [newName, setNewName] = useState("");
  const [sxStyle, setSxStyle] = useState({});

  useEffect(()=> {
    setUsername("maky1x");
    if(page==="friends") {
      setSxStyle({
        width:"100%",
        height:"100%",
        "&:hover": {
          backgroundColor:"#1c1b22"
        }
      })
    }
  }, [])

  const handleProfileClick = () => {
    if (userProfile) {
      setAnimation(true);
      setTimeout(() => setUserProfile(false), 500);
    } else {
      setUserProfile(true);
      setAnimation(false);
    }
  };

  const handleProfileChange = () => {
    setUsername(newName);
  }

  const handleAnimation = () => {
    if (!animation) return { animation: "tooltip-in 0.5s" };
    return { animation: "tooltip-out 0.5s" };
  };

  const handleMenuClick = () => {
    setUserProfile(false);
    setUserPopup(true);
  };

  const popupExitAnimation = () => {
    setAnimationPop(true);
    setTimeout(() => setUserPopup(false), 200);
    setTimeout(() => setAnimationPop(false), 200);
  }

  const handleBlurClick = (event) => {
    event.preventDefault();
    popupExitAnimation();
  };

  const handleTooltipAnimation = () => {
    if (!animationPop) return { animation: "tooltip-in 0.4s" };
    return { animation: "tooltip-out 0.2s" };
  };

  return (
    <>
      <UserProfileCon sx={sxStyle} onClick={page!=="friends" ? ()=>handleProfileClick() : ()=>""}>
        <ProfileIcon src="/icon.png" alt="" />
        {username}
      </UserProfileCon>
      {userProfile && (
        <ProfileMenu sx={handleAnimation()} onClick={() => handleMenuClick()}>
          Change info
        </ProfileMenu>
      )}
      {userPopup && (
        <>
          <Blur onClick={(e) => handleBlurClick(e)} />
          <UserPopup sx={handleTooltipAnimation()}>
            <img src="/icon.png" alt="" />
            <TextField variant="standard" placeholder={username} value={newName} onChange={(e)=>setNewName(e.target.value)}></TextField>
            <PopUpButton onClick={()=>handleProfileChange()}>Save changes</PopUpButton>
          </UserPopup>
        </>
      )}
    </>
  );
};
