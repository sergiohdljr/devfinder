import {useForm} from 'react-hook-form'
import { useState } from "react";
import { CardUser } from "../cardUser/cardUser.jsx";
import { criacaoConta, disponivel } from "../../utils/utils";
import { ResearchBar } from "./search";

export const SearchBar = () => {
  const [gitHubUser, setGitHubUser] = useState();
  const [inputChange, setChange] = useState(false);
  const {register,handleSubmit,reset,setError, formState={errors},clearErrors,setFocus} = useForm({
    defaultValues:{
      usuario:''
    }
  });

  const onSubmit = (data) => {
    fetch(`https://api.github.com/users/${data.usuario}`)
      .then((respos) => respos.json())
      .then((githubUser) => setGitHubUser(githubUser));
    setChange(true);
    clearErrors("usuario")
  }

  const clearInput = () => {
     reset();
     setChange(false);
  }

  const onError = () =>{
    setError("usuario",{
      type:"required",
      message:"O campo não pode estar em branco"
    })
    setFocus("usuario")
  }

  return (
        <>
        {formState.errors && 
        <p style={{color:"red", fontSize:"14px"}}>{formState.errors?.usuario?.message}</p>}
          <ResearchBar onSubmit={handleSubmit(onSubmit,onError)}>
            <svg height="24" width="25" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M10.609 0c5.85 0 10.608 4.746 10.608 10.58 0 2.609-.952 5-2.527 6.847l5.112 5.087a.87.87 0 01-1.227 1.233l-5.118-5.093a10.58 10.58 0 01-6.848 2.505C4.759 21.16 0 16.413 0 10.58 0 4.747 4.76 0 10.609 0zm0 1.74c-4.891 0-8.87 3.965-8.87 8.84 0 4.874 3.979 8.84 8.87 8.84a8.855 8.855 0 006.213-2.537l.04-.047a.881.881 0 01.058-.053 8.786 8.786 0 002.558-6.203c0-4.875-3.979-8.84-8.87-8.84z"
                fill=""
              />
            </svg>
            <input
              onChange={()=>setChange(true)}
              type="text"
              {...register("usuario",{required:true})}              
              placeholder="Busque o seu github user"/>
            {inputChange && (
              <button type="button" className="Clear_input" 
              onClick={clearInput}> X </button>)}
            <button type="submit" className="Submit_input">
              Pesquisar
            </button>
          </ResearchBar>
          {gitHubUser && (
            <CardUser
              name={gitHubUser.name}
              avatar={gitHubUser.avatar_url}
              login={gitHubUser.login}
              criacao={gitHubUser.created_at && criacaoConta(gitHubUser.created_at)}
              bio={gitHubUser.bio || "Bio não definida"}
              repos={gitHubUser.public_repos}
              followes={gitHubUser.followers}
              following={gitHubUser.following}
              local={disponivel(gitHubUser.location)}
              twitter={disponivel(gitHubUser.twitter_username)}
              blog={gitHubUser.blog === "" ? "indisponivel" : gitHubUser.blog}
              company={disponivel(gitHubUser.company)}
            />
          )}
        </>
      )}
