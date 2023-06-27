import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Header } from "../Header/Header";
import { Sidebar } from "../Sidebar/Sidebar";
import axios from "axios";
import "../Friends/Animations.css";
import {
  BackButton,
  GameDesc,
  GameImage,
  GameInfoCon,
  GameInfoMain,
  GameTitle,
  RatingText,
  RatingsCon,
} from "../StyledComponents/s_GameInfo";

export const GameInfo = () => {
  const [gameInfoAPI, setGameInfoAPI] = useState({});
  const [gameStores, setGameStores] = useState([]);
  const [allStores, setAllStores] = useState({});
  const [tempStores, setTempStores] = useState([]);
  const API_KEY = `07469a842fe048668650c087c85b15f9`;
  const location = useLocation();
  const sidebarGames = location.state.sidebarGames;
  const selGameId = location.state.selGameId;

  useEffect(() => {
    axios
      .get(`https://rawg.io/api/games/${selGameId}?token&key=${API_KEY}`)
      .then((res) => {
        setGameInfoAPI(res.data);
        console.log(res.data);
      });
  }, []);

  useEffect(() => {
    let tempArr = [];
    axios
      .get(`https://api.rawg.io/api/stores?token&key=${API_KEY}`)
      .then((res) => {
        for (const store in res.data.results) {
          tempArr.push({
            storeId: res.data.results[store].id,
            storeName: res.data.results[store].name,
          });
          setTempStores(tempArr);
        }
      });

    axios
      .get(
        `https://api.rawg.io/api/games/${gameInfoAPI?.slug}/stores?token&key=${API_KEY}`
      )
      .then((res) => {
        for (const store in res.data.results) {
          for (const gameStore in tempStores) {
            if (
              res.data.results[store].store_id === tempStores[gameStore].storeId
            ) {
              tempArr[gameStore].storeLink = res.data.results[store].url;
            }
          }
        }
        console.log(tempArr);
        setGameStores(tempArr);
      });
  }, [gameInfoAPI]);

  useEffect(() => {
    let tempObj = {};
    for (const store in gameInfoAPI &&
      gameInfoAPI.stores &&
      gameInfoAPI.stores) {
      for (const gameStore in gameStores) {
        console.log(gameStores[gameStore].storeLink);
        if (
          gameInfoAPI.stores[store].store.id === gameStores[gameStore].storeId
        ) {
          tempObj[gameInfoAPI.stores[store].store.name] =
            gameStores[gameStore].storeLink;
        }
      }
    }
    setAllStores(tempObj);
  }, [gameStores]);

  useEffect(() => {
    console.log(allStores);
  }, [allStores]);

  return (
    <>
      <Header games={sidebarGames} />
      <Sidebar games={sidebarGames} page="games" />
      <Link to="/">
        <BackButton>Back</BackButton>
      </Link>
      <GameInfoCon>
        <GameInfoMain sx={{ animation: "game-con 1s" }}>
          <a href={gameInfoAPI.website} target="_blank" rel="noreferrer">
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
                gameInfoAPI.ratings.map((rating) => (
                  <li>
                    {rating.title} ({rating.count})
                  </li>
                ))}
              Overall rating: {gameInfoAPI.metacritic}
              <br></br>
              Buy {gameInfoAPI?.name} in these stores:
              {gameInfoAPI &&
                gameInfoAPI.stores &&
                gameInfoAPI.stores.map((store, index) =>
                  index !== gameInfoAPI?.stores.length - 1 ? (
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
          {gameInfoAPI.description_raw}
        </GameDesc>
      </GameInfoCon>
    </>
  );
};
