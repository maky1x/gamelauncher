import styled from "styled-components";
import { Card } from "./StoreCard.js";
import useApplication from "../../Hooks/useApplication.js";
import { useEffect } from "react";


const StyledHero = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  padding:30px 0 0 40px;

  & .title {
    align-items: center;
    display: flex;

    & .div {
      color: #e2e7f0;
      font-family: "Inter-Bold", Helvetica;
      font-size: 35px;
      font-weight: 700;
    }
  }
`;

const StyledGameGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 3fr);
  gap: 30px;

  & .grid {
    display: flex;
    justify-content: space-between;
    gap:40px;
  }

  & .game {
    align-items: center;
    display: flex;
    flex-direction: column;
    gap: 6px;
  }

  & .image {
    height: 128px;
    object-fit: cover;
    width: 227px;
  }

  & .text-wrapper {
    align-self: stretch;
    color: #e2e7f0;
    font-family: "Inter-Regular", Helvetica;
    font-size: 18px;
    font-weight: 400;
  }
`;

export const StoreHero = () => {

  const { fetchGames, games } = useApplication();
  useEffect(()=> {
    fetchGames();

  }, [fetchGames])


  return (
    <StyledHero>
      <div className="title">
        <div className="div">Top Rated</div>
      </div>
      <StyledGameGrid>
        {games.map((game) => (
        <Card game={game} key={`${game?.id}`} />
        ))}
      </StyledGameGrid>
    </StyledHero>
  );
};