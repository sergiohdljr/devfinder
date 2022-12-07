import React from "react"
import { useState } from "react"
import styled from "styled-components"
import Moon from '../assets/iconMoon.svg'
import sun from '../assets/iconSun.svg'
import { lightTheme, darkTheme } from "../styles/themes"


export const Header = () => {
    
    const[atualTheme,setAtualTheme] = useState(lightTheme)
    const [mudaTheme,setChangeTheme] = useState(true)
    const [theme,setTheme] = useState('DARK')
    const [icon,setIcon] = useState(Moon)

    const ChangeTheme = () =>{

        setAtualTheme(atualTheme===lightTheme ? darkTheme : lightTheme )
        setChangeTheme(!mudaTheme)

        if(mudaTheme){
            setTheme('LIGHT')
            setIcon(sun)
        }
        else{
            setTheme('DARK')
            setIcon(Moon)
        }
    }

    return(
            <DevFinderHeader>
                <h1>devfinder</h1>
                <button onClick={ChangeTheme}>
                    {theme} <i><img src={icon} alt="" /></i>
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