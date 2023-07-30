import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  SidebarItem,
  SidebarList,
  SidebarText,
} from "../StyledComponents/s_Sidebar";

export const Sidebar = ({ games, page }) => {
  const [topPx, setTopPx] = useState("");

  useEffect(() => {
    if (page === "games")
      setTopPx("12vh");
  }, [page]);

  //aaaaabbbbb

  return (
    <SidebarList sx={{ top: topPx }}>
      {games && games.map((game) => (
        <Link
          key={game.id}
          to={`/games/${game.id}`}
          state={{
            sidebarGames: games,
            selGameId: game.id,
          }}
        >
          <SidebarItem>
            <SidebarText>{game.name}</SidebarText>
          </SidebarItem>
        </Link>
      ))}
    </SidebarList>

  );
};
