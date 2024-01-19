import React from 'react'
import styled from 'styled-components'

export const Friends = () => {
    const Container = styled.div`
    width:250px;
    border:1px solid #2e2e2e;
    position:absolute;
    background-color: #1e1e1e;
    top:0px;
    right:0px;
    bottom:0px;
    left:0px;
    z-index:10;
    `

    const Option = styled.div`
    padding:5px;
    display:flex;
    align-items: center;
    gap:15px;
    border-bottom:1px solid #2e2e2e;
    `

    const FriendOption = styled(Option)`
    transition: all 0.15s;
    &:hover {
      background-color: #3a3a3a;
    }
    `;

  return (
    <Container>
        <Option><img src="logo.png" alt="friend" height="50px"/>maky1x</Option>
        <Option style={{justifyContent:"space-between"}}>Friend requests<div>2</div></Option>
        <Option style={{justifyContent:"space-between"}}>Friends<div>6</div></Option>
        <FriendOption ><img src="logo.png" alt="friend" height="40px" />maky1x</FriendOption>
        <FriendOption ><img src="logo.png" alt="friend" height="40px" />maky1x</FriendOption>
        <FriendOption ><img src="logo.png" alt="friend" height="40px" />maky1x</FriendOption>
        <FriendOption ><img src="logo.png" alt="friend" height="40px" />maky1x</FriendOption>
        <FriendOption ><img src="logo.png" alt="friend" height="40px" />maky1x</FriendOption>
        <FriendOption ><img src="logo.png" alt="friend" height="40px" />maky1x</FriendOption>
    </Container>
  )
}
