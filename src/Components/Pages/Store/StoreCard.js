import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledGame = styled(Link)`
    display: flex;
    flex-direction: column;
    gap: 6px;
    width:230px;
    box-sizing: border-box;
    transition: 0.15s all;
    &:hover {
      border:1px solid #444444;
      transform: scale(1.05);
      background-color: #2b2b2b;
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



export const Card = ({ game }) => {
  return (
    <StyledGame to={`/game/${game?.id}`} >
      <img className="image" alt={game?.slug} src={`${game?.background_image}`} />
      <div className="text-wrapper">{game?.name}</div>
    </StyledGame>
  );
};
