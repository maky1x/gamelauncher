import { useCallback, useContext } from "react";
import axios from "axios";
import { GameInfoContext } from "../context/GameInfoContextProvider";
import { API_KEY } from "../../Utils/constants";

export const useGameInfo = () => {
  const {
    gameInfo,
    setGameInfo,
    gameStores,
    setGameStores,
    allStores,
    setAllStores,
    tempStores,
    setTempStores
  } = useContext(GameInfoContext);

  const fetchGameInfo = useCallback((selGameId) => {
    axios
      .get(`https://rawg.io/api/games/${selGameId}?token&key=${API_KEY}`)
      .then((res) => {
        setGameInfo(res.data);
      });
  }, [setGameInfo]);

  const fetchStores = useCallback(() => {
    const fetchAllStores = axios.get(`https://api.rawg.io/api/stores?token&key=${API_KEY}`);
    const fetchStoreForGame = axios.get(`https://api.rawg.io/api/games/${gameInfo?.slug}/stores?token&key=${API_KEY}`);

    Promise.all([fetchAllStores, fetchStoreForGame])
      .then(res => {
        const allGamesStores = res.data.results[0];
        const storesForGames = res.data.results[1];
        let tempStores = [];

        for (const allGameStore of allGamesStores) {
          tempStores.push({
            storeId: allGameStore.id,
            storeName: allGameStore.name,
          });
        }

        for (const storeForGame of storesForGames) {
          for (const gameStoreKey in tempStores) {
            if (storeForGame.store_id === tempStores[gameStoreKey].storeId) {
              tempStores[gameStoreKey].storeLink = storeForGame.url;
            }
          }
        }
        console.log(tempStores);
        setGameStores(tempStores);

        let tempObj = {};
        if (gameInfo && gameInfo.stores) {
          for (const store of gameInfo.stores) {
            for (const gameStoreKey in gameStores) {
              console.log(gameStores[gameStoreKey].storeLink);
              if (store.store.id === gameStores[gameStoreKey].storeId) {
                tempObj[store.store.name] = gameStores[gameStoreKey].storeLink;
              }
            }
          }

          setAllStores(prev => ({ ...prev, a: tempStores }));
        }
      })
      .catch(e => console.log(e));
  }, [gameInfo, gameStores, setGameStores, setAllStores]);

  return {
    gameInfo,
    setGameInfo,
    gameStores,
    setGameStores,
    allStores,
    setAllStores,
    tempStores,
    setTempStores,
    fetchGameInfo,
    fetchStores
  };
};

export default useGameInfo;
