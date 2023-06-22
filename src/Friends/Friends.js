import React, { useEffect, useState } from "react";
import "./Friends.css";
import { ContextMenu, ContextMenuButton, FriendName, FriendOption, Friendlist, Tooltip } from "../StyledComponents/s_Friends";
import { FriendTooltip } from "./FriendTooltip";
import { friends } from "./friendsvar";

export const Friends = ({ games }) => {
  const [clicked, setClicked] = useState(false);
  const [points, setPoints] = useState({ x: 0, y: 0 });
  const [hoverPoints, setHoverPoints] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleClick = () => setClicked(false);
    window.addEventListener("click", handleClick);
    return () => {
      window.removeEventListener("click", handleClick);
    };
  }, []);

  const showTooltip = (index) => {
    setHoverPoints({
      x: 235,
      y: 30 + 62 * index
    });
    document.getElementsByClassName("friendtooltip")[index].style.display =
      "block";
  };

  const hideTooltip = (index) => {
    document.getElementsByClassName("friendtooltip")[index].style.display =
      "none";
  };

  return (
        <Friendlist>
          {friends.map((friend, index) => (
            <>
              <FriendOption
                className="friendoption"
                onContextMenu={(e) => {
                  e.preventDefault();
                  setClicked(true);
                  setPoints({
                    x: e.pageX,
                    y: e.pageY,
                  });
                }}
                onMouseLeave={(e)=> {
                  hideTooltip(index);
                }}

                onMouseOver={(e) => {
                  showTooltip(index);
                }
                
                }>
                <img src={friend.image} className="listicon" alt="" />
                <FriendName>{friend.name}</FriendName>
              </FriendOption>
              <Tooltip className="friendtooltip" top={hoverPoints.y} left={hoverPoints.x}>
                <FriendTooltip index={index} games={games} />
              </Tooltip>
            </>
          ))}
          {clicked && (
            <ContextMenu top={points.y} left={points.x}>
              <ContextMenuButton>View Profile</ContextMenuButton>{" "}
              <ContextMenuButton>Invite to party</ContextMenuButton>{" "}
              <ContextMenuButton>Delete friend</ContextMenuButton>{" "}
            </ContextMenu>
          )}
        </Friendlist>
  );
};