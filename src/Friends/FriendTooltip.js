import React, { useEffect, useState } from 'react'
import { friends } from "./friendsvar";

export const FriendTooltip = ({index, games}) => {
  const [level, setLevel] = useState(0);
  const [playing, setPlaying] = useState("");
  const {name, image} = friends[index];
  useEffect(()=> {
    setLevel(Math.floor(Math.random()*100));
  }, [])

  useEffect(()=> {
    const dice = Math.random();
    if(dice>0.5) {
      const index = Math.floor(Math.random() * (games.length-1));
      setPlaying(`Currently playing:\n${games?.[index]?.name}`);
    } else if(dice<0.5){
      setPlaying("Online");
    }
    
  }, [games])

  return (
    <div className="tooltipflex">
      <img className="tooltipicon" src={image} alt=""/>
      <div className="tooltipname">{name}<br/>Level {level}<br/>{playing}</div>
    </div>
  )
}
