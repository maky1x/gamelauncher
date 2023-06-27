import React, { useContext, useEffect, useState } from "react";
import "./Animations.css";
import {
  AddFriend,
  Blur,
  ContextMenu,
  ContextMenuButton,
  EmptyList,
  FriendList,
  FriendName,
  FriendOption,
  ListIcon,
  ListProfile,
  PopUpButton,
  Tooltip,
  UserPopup,
} from "../StyledComponents/s_Friends";
import { FriendTooltip } from "./FriendTooltip";
import { friends } from "./friendsvar";
import { TextField } from "@mui/material";
import { ReferenceDataContext } from "../App/ContextProvider";

export const Friends = ({ games }) => {
  const [clicked, setClicked] = useState(false);
  const [points, setPoints] = useState({ x: 0, y: 0 });
  const [hoverPoints, setHoverPoints] = useState({ x: 0, y: 0 });
  const [userPopup, setUserPopup] = useState(false);
  const [animation, setAnimation] = useState(false);
  const [clickedFriendId, setClickedFriendId] = useState(0);
  const {username} = useContext(ReferenceDataContext)

  useEffect(() => {
    const handleClick = () => {
      setClicked(false);
      setClickedFriendId(0);
    };
    window.addEventListener("click", handleClick);
    return () => {
      window.removeEventListener("click", handleClick);
    };
  }, []);

  const popupExitAnimation = () => {
    setAnimation(true);
    setTimeout(() => setUserPopup(false), 200);
    setTimeout(() => setAnimation(false), 200);
  }

  const handleDelete = () => {
    friends.splice(clickedFriendId, 1);
    setClickedFriendId(0);
  };

  const handleFriendAdd = () => {
    const name = document.getElementById("friend-name").value;
    // const image = "something" <- needs work
    const newFriend = {
      name:name,
      image: "/icon.png" // dummy image for now
    };
    friends.push(newFriend);

    popupExitAnimation();
  };

  const ContextMenuClick = (event, id) => {
    event.preventDefault();
    setClickedFriendId(id);
    setClicked(true);
    setPoints({
      x: event.pageX,
      y: event.pageY,
    });
  };

  const handleAnimation = () => {
    if (!animation) return { animation: "tooltip-in 0.4s" };
    return { animation: "tooltip-out 0.2s" };
  };

  const handleBlurClick = (event) => {
    event.preventDefault();
    popupExitAnimation();
  };

  const showTooltip = (index) => {
    setHoverPoints({
      x: 235,
      y: 117 + 62 * index,
    });
    let tooltip = document.getElementsByClassName("friend-tooltip")[index];
    tooltip.classList.remove("tooltip-out");
    tooltip.classList.add("tooltip-in");
  };

  const hideTooltip = (index) => {
    let tooltip = document.getElementsByClassName("friend-tooltip")[index];
    tooltip.classList.remove("tooltip-in");
    tooltip.classList.add("tooltip-out");
  };

  //
  //
  // MAKE ELEMENTS IN RELATIVE UNITS
  //
  //

  return (
    <>
      <FriendList>
        <ListProfile>
          <ListIcon src="./icon.png" alt=""/><FriendName>{username}</FriendName>
          {/* <UserProfile page="friends"/> */}
        </ListProfile>
        <AddFriend onClick={() => setUserPopup(true)}>Add a friend</AddFriend>
        {friends.length === 0 ? (
          <EmptyList>
            Your friend list is empty {":)"}
          </EmptyList>
        ) : (<></>)}
        {friends.map((friend, index) => (
          <>
            <FriendOption
              onContextMenu={(e) => ContextMenuClick(e, index)}
              onMouseLeave={() => hideTooltip(index)}
              onMouseOver={() => showTooltip(index)}
            >
              <ListIcon src={friend.image} alt="" />
              <FriendName>{friend.name}</FriendName>
            </FriendOption>
            <Tooltip
              className="friend-tooltip"
              top={hoverPoints.y}
              left={hoverPoints.x} 
            >
              <FriendTooltip index={index} games={games} />
            </Tooltip>
          </>
        ))}
        {clicked && (
          <ContextMenu top={points.y} left={points.x}>
            <ContextMenuButton onClick={()=>handleDelete()}>Delete friend</ContextMenuButton>{" "}
          </ContextMenu>
        )}
      </FriendList>
      {userPopup && (
        <>
          <Blur sx={{ zIndex: 20 }} onClick={(e) => handleBlurClick(e)} />
          <UserPopup sx={handleAnimation()}>
            <img src="/icon.png" alt="" />
            <TextField variant="standard" placeholder="Name" id="friend-name"></TextField>
            <PopUpButton onClick={()=>handleFriendAdd()}>Add</PopUpButton>
          </UserPopup>
        </>
      )}
    </>
  );
};
