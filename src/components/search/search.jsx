import {Field, Formik } from "formik";
import { useState } from "react";
import { CardUser } from "../cardUser/cardUser.jsx";
import { criacaoConta, disponivel } from "../../utils/utils";
import { ResearchBar } from "./search";

export const SearchBar = () => {
  const github = `https://api.github.com/users/`;
  const [data, setData] = useState();
  const [inputChange,setChange] = useState(false)
  
  return (
    <Formik
      initialValues={{ usuario: "" }}
      onSubmit={({ usuario }) => {
        fetch(`${github}${usuario}`)
          .then((respos) => respos.json())
          .then((githubUser) => setData(githubUser))

          setChange(false);
      }}
    >
      {({ handleSubmit, handleReset }) => (
        <>
          <ResearchBar
            onSubmit={handleSubmit}
            onChange={() => setChange(true)}
          >
            <svg height="24" width="25" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M10.609 0c5.85 0 10.608 4.746 10.608 10.58 0 2.609-.952 5-2.527 6.847l5.112 5.087a.87.87 0 01-1.227 1.233l-5.118-5.093a10.58 10.58 0 01-6.848 2.505C4.759 21.16 0 16.413 0 10.58 0 4.747 4.76 0 10.609 0zm0 1.74c-4.891 0-8.87 3.965-8.87 8.84 0 4.874 3.979 8.84 8.87 8.84a8.855 8.855 0 006.213-2.537l.04-.047a.881.881 0 01.058-.053 8.786 8.786 0 002.558-6.203c0-4.875-3.979-8.84-8.87-8.84z"
                fill=""
              />
            </svg>
            <Field
              type="text"
              name="usuario"
              placeholder="Pesquise o nome de usuário do Github..."
            />
            {inputChange && (
              <button
                type="button"
                className="Clear_input"
                onClick={() => {
                  handleReset();
                  setChange(false);
                }}
              >
                X
              </button>
            )}
            <button type="submit" className="Submit_input">
              Pesquisar
            </button>
          </ResearchBar>
          {data && (
            <CardUser
              name={data.name}
              avatar={data.avatar_url}
              login={data.login}
              criacao={data.created_at && criacaoConta(data.created_at)}
              bio={data.bio || "Bio não definida"}
              repos={data.public_repos}
              followes={data.followers}
              following={data.following}
              local={disponivel(data.location)}
              twitter={disponivel(data.twitter_username)}
              blog={data.blog === "" ? "indisponivel" : data.blog}
              company={disponivel(data.company)}
            />
          )}
        </>
      )}
    </Formik>
  );
};
