import { useCallback, useContext } from "react";
import axios from "axios";
import { ReferenceDataContext } from "../ContextProvider.js";
import { useParams } from "react-router-dom";

export const useApplication = () => {
  const {
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
  } = useContext(ReferenceDataContext);

  const API_KEY = "07469a842fe048668650c087c85b15f9";

    let { id } = useParams();

  const fetchGenres = useCallback(() => {
    axios.get(`https://rawg.io/api/genres?token&key=${API_KEY}`).then((res) => {
      setGenres(res.data.results);
    });
  }, [setGenres]);

  const fetchGames = useCallback(() => {
    if (selectedGenre === 0) {
      axios
        .get(`https://rawg.io/api/games?token&key=${API_KEY}`)
        .then((res) => {
          setGames(res.data.results);
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      axios
        .get(`https://rawg.io/api/games?token&genres=${selectedGenre}&key=${API_KEY}`)
        .then((res) => {
          setGames(res.data.results);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [selectedGenre, setGames]);

  const fetchGame = useCallback(() => {
    axios.get(`https://api.rawg.io/api/games/${id}?token&key=${API_KEY}`).then((res) => {
      setGame(res.data);
    })
  }, [setGame, id]);

  const fetchPictures = useCallback(() => {
    axios.get(`https://api.rawg.io/api/games/${id}/screenshots?token&key=${API_KEY}`).then((res) => {
      setPictures(res.data.results);
    })
  }, [])

  const fetchSeries = useCallback(() => {
    axios.get(`https://api.rawg.io/api/games/${id}/game-series?token&key=${API_KEY}`).then((res) => {
      setSeries(res.data.results);
    })
  }, [])

  const fetchStores = useCallback(() => {
    axios.get(`https://api.rawg.io/api/games/${id}/stores?token&key=${API_KEY}`).then((res) => {
      setStores(res.data.results);
    })
  }, [])

  const fetchPrices = useCallback(async(steamId)=> {
    const response = await fetch(`http://localhost:8080?id=${steamId}`);
    const data = await response.json();
    setPrice(data[steamId]);
    return data;
  }, [])


  //
  return {
    username,
    setUsername,
    sidebarGames,
    setSidebarGames,
    games,
    setGames,
    genres,
    game,
    setGame,
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
    setPrice,
    fetchGenres,
    fetchGames,
    fetchGame,
    fetchPictures,
    fetchSeries,
    fetchStores,
    fetchPrices
  };
};

export default useApplication;