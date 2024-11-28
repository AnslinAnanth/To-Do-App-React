import React, { useState } from 'react'
import Menuitem from '../menuitem/menuitem'
import './menu.css'

function Menu() {
   const menuList=[
        {
            title:'Todo Tasks',
            path:'/'
        },
        {
            title:'Completed',
            path:'/completed'
        }
    ]
    const[menuSelected,setMenuSelected]=useState('Todo Tasks')
  return (
    <div className='mainMenu'>
        <h1>To do Task</h1>
        {menuList.map(item=>(
            <Menuitem menuitem={item} menuSelected={menuSelected} setMenuSelected={setMenuSelected} />
        ))}
    </div>
  )
}

export default Menu