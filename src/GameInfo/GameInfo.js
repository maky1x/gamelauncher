import { Box, Container, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./GameInfo.css";
import { Header } from "../Header/Header";
import { Sidebar } from "../Sidebar/Sidebar";
import axios from "axios";
import {
  BackButton,
  GameDesc,
  GameImage,
  GameInfoCon,
  GameInfoMain,
  GameTitle,
  RatingText,
  RatingsCon,
  SidebarBox,
} from "../StyledComponents/s_GameInfo";

export const GameInfo = () => {
  const [gameInfoAPI, setGameInfoAPI] = useState({});
  const API_KEY = `07469a842fe048668650c087c85b15f9`;
  const location = useLocation();
  const sidebarGames = location.state.sidebarGames;
  const selGameId = location.state.selGameId;

  useEffect(() => {
    axios
      .get(`https://rawg.io/api/games/${selGameId}?token&key=${API_KEY}`)
      .then((res) => {
        setGameInfoAPI(res.data);
      });
  }, []);

  return (
    <>
      <Header />
      <SidebarBox>
        <Sidebar games={sidebarGames} />
        <Link to="/">
          <BackButton>Back</BackButton>
        </Link>
      </SidebarBox>
      <GameInfoCon>
        <GameInfoMain>
          <a href={gameInfoAPI.website} target="_blank">
            <GameImage
              sx={{ backgroundImage: `url(${gameInfoAPI.background_image})` }}
            />
          </a>
          <RatingsCon>
            <GameTitle>{gameInfoAPI?.name}</GameTitle>
            <RatingText>
              Developers: {gameInfoAPI?.developers?.[0]?.name} <br />
              Publishers: {gameInfoAPI?.publishers?.[0]?.name} <br />
              Genres:{" "}
              {gameInfoAPI &&
                gameInfoAPI.genres &&
                gameInfoAPI.genres.map((genre, index) =>
                  index !== gameInfoAPI?.genres.length - 1 ? (
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
              {gameInfoAPI &&
                gameInfoAPI.platforms &&
                gameInfoAPI.platforms.map((platform, index) =>
                  index !== gameInfoAPI?.platforms.length - 1 ? (
                    <> {platform.platform.name}, </>
                  ) : (
                    <> {platform.platform.name}.</>
                  )
                )}{" "}
              <br />
              Ratings:
              {gameInfoAPI &&
                gameInfoAPI.ratings &&
                gameInfoAPI.ratings.map((rating, index) => (
                  <li>
                    {rating.title} ({rating.count})
                  </li>
                ))}
              Overall rating: {gameInfoAPI.metacritic}
              <br></br>
              Buy {gameInfoAPI?.name} in these stores:
              {gameInfoAPI && gameInfoAPI.stores && gameInfoAPI.stores.map((store, index) =>
                index !== gameInfoAPI?.stores.length - 1 ? (
                  <>
                    {" "}
                    <a href="">{store.store.name}</a>,{" "}
                  </>
                ) : (
                  <>
                    {" "}
                    <a href="">{store.store.name}</a>.
                  </>
                )
              )}
            </RatingText>
          </RatingsCon>
        </GameInfoMain>

        <GameDesc>{gameInfoAPI.description_raw}</GameDesc>
      </GameInfoCon>
    </>
  );
};
