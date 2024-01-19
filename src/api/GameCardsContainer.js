import React from "react";
import { Link } from "react-router-dom";
import { GameContainer, GameGrid, GameImage, Game, GameContent, GameText } from "../StyledComponents/s_GameCard";
import useApplication from "../Hooks/useApplication";

export const GameCardsContainer = () => {
  const { games, sidebarGames } = useApplication();

  return (
    <GameContainer>
      <GameGrid>
        {games.map((game) => (
          <Link key={game.id} to={`/games/${game.id}`} state={{
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
