import React from "react"
import { useState } from "react"
import styled from "styled-components"
import darkIcon from '../assets/iconMoon.svg'
import lightIcon from '../assets/iconSun.svg'
import { lightTheme, darkTheme } from "../styles/themes"
import { useContext } from "react"
import ThemeContext from "../context/themeContext"


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

const DevFinderHeader = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    
    h1{
        color: ${({theme}) => theme.textAlt};
    }

    button{
        background-color: transparent;
        color: ${({theme}) => theme.textAlt};
        outline: none;
        border: none;
        font-family: 'Space Mono', monospace;
        font-size: 1rem;
        font-weight: 700;
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 1rem;
        cursor: pointer;
    }
`