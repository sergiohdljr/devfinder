import styled from "styled-components"
import searchIcon from '../assets/icon-search.svg'
import { Field, Formik} from "formik"
import { useState } from "react"

export const SearchBar = () =>{
    const github = `https://api.github.com/users/`
    const[data,setData] = useState({})

    return(
    <Formik
        initialValues={{ usuario: ''}}
        onSubmit={({usuario}) => {
            fetch(`${github}${usuario}`).then(respos=>respos.json()).then(githubUser =>setData(githubUser))
        }}>
        {props => (
         <>
         
         <ResearchBar onSubmit={props.handleSubmit}>
            <i><img src={searchIcon} alt="" /></i>
            <Field 
            type="text"
            name="usuario"
            placeholder="Pesquise o nome de usuário do Github..."
            />
            <button type="submit">Pesquisar</button>
         </ResearchBar>

         <h1>{data && data.login}</h1>
         </>
        )} 
    </Formik>
    )
}

const ResearchBar = styled.form`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 70px;
    background-color: ${({theme})=>theme.contentBackground};
    border-radius: 0.8rem;
    padding: 0.3rem;
    box-shadow: ${({theme})=>theme.shadow};


    input{
        width: 70%;
        background-color: transparent;
        outline: none;
        border: none;
        font-size: 1.2rem;
        color:${({theme})=>theme.text};

        ::placeholder{
            color: ${({theme})=>theme.text};
        }
    }

    button{
        width: 15%;
        height: 90%;
        background-color:${({theme})=>theme.btn};
        border: none;
        border-radius: 0.8rem;
        color: ${({theme})=>theme.contentBackground};
        font-weight: 700;
        font-size: 1rem;
        cursor: pointer;
        
        :hover{
            background-color:${({theme})=>theme.btnHover};
        }
    }
`