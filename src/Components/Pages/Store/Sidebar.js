import React, { useEffect } from "react";
import styled from "styled-components";
import { GenreButton } from "./GenreOption.js";
import useApplication from "../../Hooks/useApplication.js";

export const StyledSidebar = styled.div`
  display: flex;
  flex-direction: column;
  padding: 40px 40px 0px;
  gap:30px;

  & .search {
    align-items: center;
    border-bottom:2px solid #e2e7f0;
    display: flex;
    width:10vw;
    
  }

  & .div {
    background: transparent;
    border: none;
    color: #e2e7f080;
    font-family: "Inter-Regular", Helvetica;
    font-size: 18px;
    font-weight: 400;
    padding-bottom: 5px;
  }

  & .frame {
    height: 20px;
    width: 20px;
    margin-left:-50px;
  }

  & .genre-sidebar {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap:8px;
  }
`;



export const Sidebar = () => {  
  const { fetchGenres, genres, selectedGenre, setSelectedGenre } = useApplication();
  
  useEffect(()=> {
    fetchGenres();
  }, [fetchGenres])

  const handleGenre = (e,id) => {
    e.target.style.color = "#515151";
    let found = false;
    if (selectedGenre === id) found = true;
    if (found) {
      setSelectedGenre(0);
      e.target.style.color = "#e2e7f0";
    } else {
      setSelectedGenre(id);
    }
  };

  return (
    <StyledSidebar>
      {/* <div className="search">
        <input className="div" placeholder="Search.." type="text" />
        <img className="frame" alt="Frame" src="search.svg" />
      </div> */}
      <div className="genre-sidebar" >

        {genres.map((genre) => (
          <div key={`${genre.id}`} onClick={(e) => handleGenre(e,genre.id)}><GenreButton option={genre.name} /></div>
        ))}
      </div>
    </StyledSidebar>
  );
};