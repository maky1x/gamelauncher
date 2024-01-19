import React from 'react'
import { Sidebar } from './Sidebar.js'
import { StoreHero } from './StoreHero.js'

export const Store = () => {
  return (
    <div style={{display:"flex"}}>
    <Sidebar/>
    <StoreHero/>
    </div>
  )
}
