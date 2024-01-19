import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Card } from "../Store/StoreCard.js";
import useApplication from "../../Hooks/useApplication.js";

const StyledSimilarGames = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding:0px 0 0 20px;
`;

const AboutWrapper = styled.div`
  display: inline-flex;
  flex-direction: column;
  gap: 40px;
  padding-top:40px;
`;

const PurchaseWrapper = styled.div`
  align-items: center;
  border: 1px solid #e2e7f0;
  border-radius: 8px;
  display: flex;
  justify-content: space-between;
  padding: 0px 30px;
`;

const TextWrapper = styled.p`
  font-family: "Inter-Regular", Helvetica;
  font-size: 24px;
`;

const AddToLibraryWrapper = styled.div`
  align-items: center;
  display: flex;
  gap: 25px;
  justify-content: center;
`;

const PriceWrapper = styled.div`
  color: #e2e7f080;
  font-family: "Inter-Regular", Helvetica;
  font-size: 20px;
`;

const ButtonWrapper = styled.button`
  all: unset;
  align-items: center;
  border: 1px solid #e2e7f080;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  padding: 10px 40px;
  transition: all 0.15s;
  &:hover {
    color:#1a1a1a;
    background-color: #e2e7f0;
  }
`;

const DivWrapper = styled.div`
  text-align: center;
`;

const DescriptionWrapper = styled.div`
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const DivWrapper2 = styled.div`
  border-bottom:1px solid #e2e7f0;
  border-radius: 4px;
  display: flex;
  padding: 0px 0px 5px 6px;
  width: 100%;
`;

const TextWrapper2 = styled.div`
  color: #e2e7f0;
  font-family: "Inter-SemiBold", Helvetica;
  font-size: 28px;
`;

const DescWrapper = styled.p`
  font-family: "Inter-Regular", Helvetica;
  font-size: 20px;
  width: 40vw;
`;


const MainWrapper = styled.div`
  align-items: flex-start;
  display: flex;
  justify-content: center;

  & .images {
    display: flex;
    flex-wrap: wrap;
    width: 538px;
  }

  & .image {
    height: 295px;
    object-fit: cover;
  }

  & .image-bar {
    align-items: center;
    display: flex;
    flex-grow: 1;
    justify-content: center;
  }

  & .img {
    height: 91px;
  }

  & .game-info {
    padding:20px 0 0 20px;
    display: flex;
    flex-direction: column;
    gap: 5px;
    width: 22vw;
  }

  & .text-wrapper {
    font-family: "Inter-Bold", Helvetica;
    font-size: 36px;
    font-weight: 700;
  }

  & .div {
    font-family: "Inter-Regular", Helvetica;
    font-size: 20px;
    font-weight: 400;
  }

  & .ratings {
    align-items: flex-start;
    display: flex;
    gap:20px;
  }

  & .div-2 {
    display: flex;
    flex-direction: column;
    gap: 13px;
  }

  & .text-wrapper-3 {
    font-family: "Inter-Regular", Helvetica;
    font-size: 18px;
  }
`;

export const Game = () => {
  const [release, setRelease] = useState("");
  const { pictures, fetchPictures, fetchGame, game, series, fetchSeries, stores, fetchStores, fetchPrices, price } = useApplication();



  useEffect(() => {
    fetchGame();
    fetchPictures();
    fetchSeries();
    fetchStores();
  }, [fetchGame, fetchPictures, fetchSeries, fetchStores])

  useEffect(() => {
    let release2 = new Date(game?.released).toDateString().slice(4);
    setRelease(release2);
  }, [game])

  useEffect(() => {
    for (let store of stores) {
      if (store?.store_id === 1) {
        let gameid = store?.url.split("/");
        gameid = gameid[4];
        fetchPrices(gameid);
      }
    }
  }, [stores, fetchPrices]);

  const resolveStoreName = (id) => {
    switch (id) {
      case 1: return "Steam";
      case 2: return "PlayStation Store";
      case 3: return "Xbox Store";
      case 4: return "App Store";
      case 5: return "GOG";
      case 6: return "Nintendo Store";
      case 7: return "Xbox 360 Store";
      case 8: return "Google Play";
      case 9: return "itch.io";
      case 11: return "Epic Games";
      default: return;
    }
  };

  return (
    <div style={{ margin: "0 auto 0 auto", width: "fit-content", paddingTop: "20px" }}>
      <MainWrapper>
        <div className="images">
          <img className="image" alt="Imae" src={`${game.background_image}`} />
          <div className="image-bar">
            <img className="img" alt="Apps" src={`${pictures?.[0]?.image}`} />
            <img className="img" alt="Apps" src={`${pictures?.[1]?.image}`} />
            <img className="img" alt="Apps" src={`${pictures?.[2]?.image}`} />
          </div>
        </div>
        <div className="game-info">
          <div className="text-wrapper" key={game?.id}>{game?.name}</div>
          <p className="div">
            Genres: {game?.genres?.map((genre, id) => (
              <>{genre.name}{id !== game?.genres?.length - 1 ? ", " : ""}</>
            ))}
            <br /><br />
            Stores: {stores.map((store, id) => (
              <><a href={`${store.url}`} target="_blank" rel="noreferrer" style={{ textDecoration: "underline" }}>{resolveStoreName(store.store_id)}</a>{id !== game?.stores?.length - 1 ? ", " : ""}</>
            ))}
          </p>
          <div className="ratings">
            <div className="div-2">
              <div className="text-wrapper-3">Release Date:</div>
              <div className="text-wrapper-3">Rating:</div>
              <div className="text-wrapper-3">Developer:</div>
              <div className="text-wrapper-3">Publisher:</div>
            </div>
            <div className="div-2">
              <div className="text-wrapper-3">{release}</div>
              <div className="text-wrapper-3">{game.rating}</div>
              <div className="text-wrapper-3">{game?.developers?.map((developer, id) => (<>{developer.name}{id !== game?.developers?.length - 1 ? ", " : ""}</>))}</div>
              <div className="text-wrapper-3">{game?.publishers?.map((publisher, id) => (<>{publisher.name}{id !== game?.publishers?.length - 1 ? ", " : ""}</>))}</div>
            </div>
          </div>
        </div>

      </MainWrapper>

      <div style={{ display: "flex" }}>
        <AboutWrapper className="about">
          <PurchaseWrapper className="purchase">
            <TextWrapper className="text-wrapper">Buy {game.name}</TextWrapper>
            <AddToLibraryWrapper className="add-to-library">
              <PriceWrapper className="price">{price?.data?.price_overview?.final_formatted}</PriceWrapper>
              <ButtonWrapper className="button">
                <DivWrapper className="div">{price?.data?.price_overview?.final_formatted ? "Add to library" : "Unavailable"}</DivWrapper>
              </ButtonWrapper>
            </AddToLibraryWrapper>
          </PurchaseWrapper>
          <DescriptionWrapper className="description">
            <DivWrapper2 className="div-wrapper">
              <TextWrapper2 className="text-wrapper-2">About</TextWrapper2>
            </DivWrapper2>
            <DescWrapper className="desc">
              {game.description_raw}
            </DescWrapper>
          </DescriptionWrapper>
        </AboutWrapper>

        <div style={{ display: "flex", flexDirection: "column", paddingTop: "30px" }}>
          <div style={{ fontSize: "25px", fontFamily: "Helvetica", padding: "0 0 5px 20px", gap: 0 }}>
            Similar games:
          </div>
          <StyledSimilarGames>
            <Card game={series[0]} />
            <Card game={series[1]} />
            <Card game={series[2]} />
          </StyledSimilarGames>
        </div>
      </div>

    </div>
  );
};