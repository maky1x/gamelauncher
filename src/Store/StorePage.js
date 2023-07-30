import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { Header } from "../Header/Header";
import { Sidebar } from "../Sidebar/Sidebar";
import { GameInfo } from "../GameInfo/GameInfo";
import { GameCardsContainer } from "../api/GameCardsContainer";
import { GenreButton, GenreButtonGroup } from "../StyledComponents/s_GameCard";
import useApplication from "../Hooks/useApplication";

export const StorePage = () => {
  const { fetchGenres, fetchGames, genres, sidebarGames, selectedGenres, setSelectedGenres } = useApplication();

  useEffect(() => {
    fetchGenres();
  }, [fetchGenres]);

  useEffect(() => {
    fetchGames();
  }, [fetchGames]);

  const handleGenre = (e, id) => {
    e.target.classList.toggle("genre-btn");

    if (selectedGenres.includes(id)) {
      setSelectedGenres((current) => current.filter((genre) => genre !== id));
    } else {
      setSelectedGenres((current) => [...current, id]);
    }
  };

  return (
    <>
      <Header games={sidebarGames} />
      <GenreButtonGroup>
        {genres.map((genre) => (
          <GenreButton key={genre.id} onClick={(e) => handleGenre(e, genre.id)}>
            {genre.name}
          </GenreButton>
        ))}
      </GenreButtonGroup>
      <Sidebar games={sidebarGames} />
      <Routes>
        {/* Shows the main page with the list of game icons */}
        <Route path="/" Component={GameCardsContainer} />
        {/* Shows the detail page of the selected game */}
        <Route path="/games/:id" Component={GameInfo} />
      </Routes>
    </>
  );
};
