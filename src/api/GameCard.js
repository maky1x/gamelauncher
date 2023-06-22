import React from "react";
import { Link } from "react-router-dom";
import { GameContainer, GameGrid, GameImage, Game, GameContent, GameText } from "../StyledComponents/s_GameCard";

export const GameCard = ({ games, sidebarGames }) => {
  return (
      <GameContainer>
        <GameGrid>
          {games.map((game) => (
            <Link to={`/gameinfo`} state={{
              sidebarGames: sidebarGames,
              selGameId: game.id
            }}>
            <Game>
              <GameContent>
                <GameImage
                  sx={{ backgroundImage: `url(${game.background_image})` }}
                ></GameImage>
                <GameText>{game.name}</GameText>
              </GameContent>
            </Game>
            </Link>
          ))}
        </GameGrid>
      </GameContainer>
  );
};
