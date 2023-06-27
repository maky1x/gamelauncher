import { ThemeProvider } from "@mui/material";
import React, { useEffect, useState } from "react";
import { myTheme } from "../Theme/theme";
import { Sidebar } from "../Sidebar/Sidebar";
import axios from "axios";
import { Header } from "../Header/Header";
import { GameCard } from "../api/GameCard";
import { GenreButton, GenreButtonGroup } from "../StyledComponents/s_GameCard";

export const StorePage = () => {
  const API_KEY = "07469a842fe048668650c087c85b15f9";
  const [sidebarGames, setSidebarGames] = useState([]);
  const [games, setGames] = useState([]);
  const [genres, setGenres] = useState([]);
  const [selectedGenres, setSelectedGenres] = useState([]);

  useEffect(() => {
    axios.get(`https://rawg.io/api/genres?token&key=${API_KEY}`).then((res) => {
      setGenres(res.data.results);
    });
  }, []);

  useEffect(() => {
    if (selectedGenres.length === 0) {
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
      axios
        .get(`https://rawg.io/api/games?token&genres=${selectedGenres}&key=${API_KEY}`)
        .then((res) => {
          setGames(res.data.results);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [selectedGenres]);

  const handleGenre = (e, id) => {
    e.target.classList.toggle("genre-btn");
    let found = false;
    if (selectedGenres.includes(id)) found = true;
    if (found) {
      setSelectedGenres((current)=>current.filter((genre) => genre !== id))
    } else {
      setSelectedGenres((current)=> [...current, id])
    }
  };
  
  return (
    <ThemeProvider theme={myTheme}>
      <Header games={sidebarGames} />
      <GenreButtonGroup>
        {genres.map((genre) => (
          <GenreButton key={genre.id} onClick={(e) => handleGenre(e, genre.id)}>
            {genre.name}
          </GenreButton>
        ))}
      </GenreButtonGroup>
      <Sidebar games={sidebarGames} />
      <GameCard games={games} sidebarGames={sidebarGames} />
    </ThemeProvider>
  );
};
