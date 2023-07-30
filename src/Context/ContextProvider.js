import React, { createContext, useState } from "react";

export const ReferenceDataContext = createContext();

export const ContextProvider = ({ children }) => {
  const [username, setUsername] = useState("");
  const [sidebarGames, setSidebarGames] = useState([]);
  const [games, setGames] = useState([]);
  const [genres, setGenres] = useState([]);
  const [selectedGenres, setSelectedGenres] = useState([]);

  return (
    <ReferenceDataContext.Provider value={{
      username,
      setUsername,
      sidebarGames,
      setSidebarGames,
      games,
      setGames,
      genres,
      setGenres,
      selectedGenres,
      setSelectedGenres
    }}>
      {children}
    </ReferenceDataContext.Provider>
  );
};
