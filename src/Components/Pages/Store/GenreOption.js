import React from "react";
import styled from "styled-components";

const StyledGenreButton = styled.div`
  transition: 0.15s all;
  align-items: center;
  display: flex;
  padding: 5px 5px;
    color: #e2e7f0;
    font-family: "Inter-Regular", Helvetica;
    font-size: 18px;
    font-weight: 400;
    cursor:pointer;
    &:hover {
      color:#909090;
    }
`;

export const GenreButton = ({ option }) => {
  return (
    <StyledGenreButton>
      {option}
    </StyledGenreButton>
  );
};