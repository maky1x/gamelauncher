import { useCallback, useContext } from "react";
import axios from "axios";
import { ReferenceDataContext } from "../Context/ContextProvider";
import { API_KEY } from "../Utils/constants";

export const useApplication = () => {
  const {
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
  } = useContext(ReferenceDataContext);

  const fetchGenres = useCallback(() => {
    axios.get(`https://rawg.io/api/genres?token&key=${API_KEY}`).then((res) => {
      setGenres(res.data.results);
    });
  }, [setGenres]);

  const fetchGames = useCallback(() => {
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
  }, [selectedGenres, setGames, setSidebarGames]);

  return {
    username,
    setUsername,
    sidebarGames,
    setSidebarGames,
    games,
    setGames,
    genres,
    setGenres,
    selectedGenres,
    setSelectedGenres,
    fetchGenres,
    fetchGames
  };
};

export default useApplication;
