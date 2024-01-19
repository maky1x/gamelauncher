import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import styled from "styled-components";
import { Friends } from './Friends.js';

const StyledHeader = styled.div`
  align-items: center;
  border-bottom:1px solid #e2e7f0;
  display: flex;
  height: 90px;
  justify-content: space-between;
  padding: 0px 100px 0px 100px;
  width: 89.5vw;

  & .header-buttons {
    align-items: flex-start;
    display: flex;
    justify-content: space-between;
    width: 12%;
  }

  & .button {
    all: unset;
    color: #e2e7f0;
    font-family: "Inter-SemiBold", Helvetica;
    font-size: 20px;
    font-weight: 600;
    cursor:pointer;
    transition:all 0.15s;
    &:hover {
      color:#909090;
    }
  }

  & .profile {
    align-items: center;
    display: flex;
    gap: 20px;
    position: relative;
  }

  & .logo {
    height: 58px;
    object-fit: cover;
    position: relative;
    width: 58px;
  }

  & .text-wrapper {
    color: #e2e7f0;
    font-family: "Inter-SemiBold", Helvetica;
    font-size: 20px;
    font-weight: 600;
    letter-spacing: 0;
    line-height: normal;
    position: relative;
    width: fit-content;
    &:hover {
      color:#909090;
    }
  }
`;

const Dim = styled.div`
  position: absolute;
  z-index: 5;
  top:0px;
  bottom:0px;
  left:0px;
  right:0px;
  background-color:rgba(30,30,30, 0.5);
`;

export const Header = () => {
  const [list, setList] = useState(false);
  const [animation, setAnimation] = useState(false);

  const handleAnimation = () => {
    if (!animation) return { animation: "list-in 0.3s" };
    return { animation: "list-out 0.2s" };
  };

  const handleDimClick = (event) => {
    event.preventDefault();
    setAnimation(true);
    setTimeout(() => setList(false), 200);
    setTimeout(() => setAnimation(false), 200);
  };

  return (
    <>
      {list && <><div style={handleAnimation()}><Friends /></div><Dim onClick={(e) => handleDimClick(e)} /></>}
      <StyledHeader>
        <div className="header-buttons">
          <Link to={`/`} className="button">Store</Link>
          <button className="button" onClick={() => setList(prev => !prev)}>Friends</button>
        </div>
        <div className="profile">
          <img className="logo" alt="Logo" src="logo.png" />
          <Link to={`/profile`} className="text-wrapper">maky1x</Link>
        </div>
      </StyledHeader>

    </>
  );
};