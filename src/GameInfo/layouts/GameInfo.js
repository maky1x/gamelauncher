import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "../../Friends/Animations.css";
import {
  BackButton,
  GameDesc,
  GameImage,
  GameInfoCon,
  GameInfoMain,
  GameTitle,
  RatingText,
  RatingsCon
} from "../../StyledComponents/s_GameInfo";
import useGameInfo from "../hooks/useGameInfo";

export const GameInfo = () => {
  const { 
    gameInfo,
    allStores,
    fetchGameInfo,
    fetchStores
  } = useGameInfo();
  const location = useLocation();
  const selGameId = location.state.selGameId;

  useEffect(() => {
    fetchGameInfo(selGameId);
  }, [fetchGameInfo]);

  useEffect(() => {
    fetchStores();
  }, [fetchStores]);

  console.log(allStores);

  return (
    <>
      <Link to="/">
        <BackButton>Back</BackButton>
      </Link>
      <GameInfoCon>
        <GameInfoMain sx={{ animation: "game-con 1s" }}>
          <a href={gameInfo.website} target="_blank" rel="noreferrer">
            <GameImage
              sx={{ backgroundImage: `url(${gameInfo.background_image})` }}
            />
          </a>
          <RatingsCon>
            <GameTitle>{gameInfo?.name}</GameTitle>
            <RatingText>
              Developers: {gameInfo?.developers?.[0]?.name} <br />
              Publishers: {gameInfo?.publishers?.[0]?.name} <br />
              Genres:{" "}
              {gameInfo &&
                gameInfo.genres &&
                gameInfo.genres.map((genre, index) =>
                  index !== gameInfo?.genres.length - 1 ? (
                    <>
                      {" "}
                      <a href="/">{genre.name}</a>,{" "}
                    </>
                  ) : (
                    <>
                      {" "}
                      <a href="/">{genre.name}</a>.
                    </>
                  )
                )}{" "}
              <br />
              Available on:
              {gameInfo &&
                gameInfo.platforms &&
                gameInfo.platforms.map((platform, index) =>
                  index !== gameInfo?.platforms.length - 1 ? (
                    <> {platform.platform.name}, </>
                  ) : (
                    <> {platform.platform.name}.</>
                  )
                )}{" "}
              <br />
              Ratings:
              {gameInfo &&
                gameInfo.ratings &&
                gameInfo.ratings.map((rating) => (
                  <li>
                    {rating.title} ({rating.count})
                  </li>
                ))}
              Overall rating: {gameInfo.metacritic}
              <br></br>
              Buy {gameInfo?.name} in these stores:
              {gameInfo &&
                gameInfo.stores &&
                gameInfo.stores.map((store, index) =>
                  index !== gameInfo?.stores.length - 1 ? (
                    <>
                      {" "}
                      <a
                        href={allStores[store.store.name]}
                        target="_blank"
                        rel="noreferrer"
                      >
                        {store.store.name}
                      </a>
                      ,{" "}
                    </>
                  ) : (
                    <>
                      {" "}
                      <a
                        href={allStores[store.store.name]}
                        target="_blank"
                        rel="noreferrer"
                      >
                        {store.store.name}
                      </a>
                      .
                    </>
                  )
                )}
            </RatingText>
          </RatingsCon>
        </GameInfoMain>

        <GameDesc sx={{ animation: "game-desc 1s" }}>
          {gameInfo.description_raw}
        </GameDesc>
      </GameInfoCon>
    </>
  );
};
