import React, { createContext, useState } from "react";

export const ReferenceDataContext = createContext();

export const ContextProvider = ({ children }) => {
  const [username, setUsername] = useState("");
  const [sidebarGames, setSidebarGames] = useState([]);
  const [game, setGame] = useState({});
  const [games, setGames] = useState([]);
  const [genres, setGenres] = useState([]);
  const [pictures, setPictures] = useState([]);
  const [selectedGenre, setSelectedGenre] = useState(0);
  const [series, setSeries] = useState([]);
  const [price, setPrice] = useState(0);
  const [stores, setStores] = useState([]);

  return (
    <ReferenceDataContext.Provider value={{
      username,
      setUsername,
      sidebarGames,
      setSidebarGames,
      game,
      setGame,
      games,
      setGames,
      genres,
      setGenres,
      selectedGenre,
      setSelectedGenre,
      pictures,
      setPictures,
      series,
      setSeries,
      stores,
      setStores,
      price,
      setPrice
    }}>
      {children}
    </ReferenceDataContext.Provider>
  );
};