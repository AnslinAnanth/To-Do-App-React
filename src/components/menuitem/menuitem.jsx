import React from 'react'
import { Navigate, useNavigate } from 'react-router-dom'
import './menuitem.css'

function Menuitem(props) {
    const { menuitem, menuSelected, setMenuSelected } = props
    const navigate = useNavigate()

    function onMenuClicked() {
        navigate(menuitem.path)
        setMenuSelected(menuitem.title)
    }
    return (
        <div className={menuSelected === menuitem.title ? "mainMenuItemSelected" : "mainMenuItem"} onClick={onMenuClicked}>
            <p>{menuitem.title}</p>

        </div>
    )
}

export default Menuitem