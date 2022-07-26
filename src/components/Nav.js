import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMoon } from '@fortawesome/free-regular-svg-icons'
import { faSun } from '@fortawesome/free-regular-svg-icons'
import useToggle from "../hooks/useToggle";

export default function Nav() {
    const [darkmode, setDarkmode] = useToggle(false)
    const themeDiv = <><FontAwesomeIcon icon={darkmode ? faSun : faMoon} /><p>Dark Mode</p></>
    return (
        <div onClick={setDarkmode}>
        <h1>Where in the world?</h1>
        {themeDiv}
        </div>
    )
}