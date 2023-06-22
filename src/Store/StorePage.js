import { ButtonGroup, ThemeProvider } from "@mui/material";
import "./StorePage.css";
import React, { useEffect, useState } from "react";
import { myTheme } from "../Theme/theme";
import { Sidebar } from "../Sidebar/Sidebar";
import axios from "axios";
import { Header } from "../Header/Header";
import { GameCard } from "../api/GameCard";
import { GenreButton } from "../StyledComponents/s_GameCard";

var selectedGenres = [];

export const StorePage = () => {
  const API_KEY = "07469a842fe048668650c087c85b15f9";
  const [sidebarGames, setSidebarGames] = useState([]);
  const [games, setGames] = useState([]);
  const [genres, setGenres] = useState([]);
  const [selGenresS, setSelGenresS] = useState([]);

  useEffect(() => {
    axios.get(`https://rawg.io/api/genres?token&key=${API_KEY}`).then((res) => {
      setGenres(res.data.results);
    });
  }, []);

  useEffect(() => {
    console.log("p");
    if (selGenresS.length === 0) {
      axios
        .get(`https://rawg.io/api/games?token&key=${API_KEY}`)
        .then((res) => {
          setSidebarGames(res.data.results);
          setGames(res.data.results);
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      console.log("else");
      axios
        .get(
          `https://rawg.io/api/games?token&genres=${selGenresS}&key=${API_KEY}`
        )
        .then((res) => {
          setGames(res.data.results);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [selGenresS]);

  const handleGenre = (e, id) => {
    e.target.classList.toggle("genre-btn");
    let found = false;
    console.log(`check ${selectedGenres}`);
    if (selectedGenres.includes(id)) found = true;
    if (found) {
      selectedGenres = selectedGenres.filter((genre) => genre !== id);
      console.log(`pop ${selectedGenres}`);
      setSelGenresS(selectedGenres);
    } else {
      selectedGenres.push(id);
      console.log(`push ${selectedGenres}`);
      setSelGenresS(selectedGenres);
    }
  };

  return (
    <ThemeProvider theme={myTheme}>
      <Header games={sidebarGames}/>
      <ButtonGroup className="btn-grp-genre">
        {genres.map((genre) => (
          <GenreButton
            key={genre.id}
            onClick={(e) => handleGenre(e, genre.id)}
          >
            {genre.name}
          </GenreButton>
        ))}
      </ButtonGroup>
      <Sidebar games={sidebarGames} />
      <GameCard games={games} sidebarGames={sidebarGames} />
    </ThemeProvider>
  );
};
