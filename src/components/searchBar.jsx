import styled from "styled-components"
import searchIcon from '../assets/icon-search.svg'

export const SearchBar = () =>{
    return(
        <ResearchBar>
            <i><img src={searchIcon} alt="" /></i>
            <input type="text" placeholder="Pesquise o nome de usuário do Github" />
            <button type="submit"></button>
        </ResearchBar>
    )
}

const ResearchBar = styled.h1`
    display: flex;
    justify-content: space-evenly;
    width: 100%;
    background-color: ${({theme})=>theme.contentBackground};
    /* padding-left: 1rem;
    padding-right: 1rem; */
    border-radius: 0.8rem;

    input{
        width: 70%;
        background-color: transparent;
        outline: none;
        border: none;
    }

    button{
        width: 15%;

    }
`