import { Box, List, ListItem, Typography } from '@mui/material'
import React from 'react'
import "./Sidebar.css"
import { Link } from 'react-router-dom'

export const Sidebar = ({games}) => {
  return (
    <List className="sidebar-list">
        {games.map((game) => (
          <Link to='/gameinfo' state={{
            games: games,
            selGameId: game.id
          }}>
          <ListItem className="sidebar-listitem">
              <Box
                sx={{ backgroundImage: `url(${game.background_image})` }}
                className="sidebar-img"
              ></Box>
              <Typography className="sidebar-text">{game.name}</Typography>
          </ListItem>
          </Link>
        ))}
    </List>
  )
}
