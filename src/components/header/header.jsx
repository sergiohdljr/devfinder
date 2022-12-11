import React from "react"
import { useState } from "react"
import darkIcon from '../../assets/iconMoon.svg'
import lightIcon from '../../assets/iconSun.svg'
import { lightTheme, darkTheme } from "../../styles/themes"
import { useContext } from "react"
import ThemeContext from "../../context/themeContext"
import { DevFinderHeader } from "./header"


export const Header = () => {

    const {theme,setTheme} = useContext(ThemeContext)
    
    const [changeTheme,setChangeTheme] = useState(true)
    const [titleTheme,setTitleTheme] = useState('DARK')
    const [iconTheme,setIconTheme] = useState(darkIcon)

    const HandleChangeTheme = () => {

        setTheme(theme === lightTheme ? darkTheme : lightTheme )
        setChangeTheme(!changeTheme)

        if(changeTheme){
            setTitleTheme('LIGHT')
            setIconTheme(lightIcon)
        }
        else{
            setTitleTheme('DARK')
            setIconTheme(darkIcon)
        }
    }

    return(
            <DevFinderHeader>
                <h1>devfinder</h1>
                <button onClick={HandleChangeTheme}>
                    {titleTheme} <i><img src={iconTheme} alt="" /></i>
                </button>
            </DevFinderHeader>
    )
}

