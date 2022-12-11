import { Card } from "./cardUser.js";

export const CardUser = ({
  avatar,
  name,
  login,
  bio,
  criacao,
  repos,
  followes,
  following,
  local,
  blog,
  twitter,
  company,
}) => {
  return (
    <Card>
      <div className="Card__header">
        <figure className="Card__header__avatar">
          <img src={avatar} className="Card__header__avatar_pic" />
        </figure>
        <div className="Card__header__info">
          <div className="Card__header_info_text">
            <div className="info">
              <h1>{name}</h1>
              <p>{login}</p>
            </div>
            <span>{criacao}</span>
          </div>
          <div className="Card__header_info_bio">
            <span>{bio}</span>
          </div>
        </div>
      </div>
      <div className="Card__github">
        <div className="Card__github__info">
          <span>Repos</span>
          <span>Seguidores</span>
          <span>Seguindo</span>
          <h2>{repos}</h2>
          <h2>{followes}</h2>
          <h2>{following}</h2>
        </div>
        <div className="Card__github__local">
          <div>
            <span>{local}</span>
          </div>
          <div>
            <i></i>
            <span>{twitter}</span>
          </div>
          <div>
            <i></i>
            <span>{blog}</span>
          </div>
          <div>
            <i></i>
            <span>{company}</span>
          </div>
        </div>
      </div>
    </Card>
  );
};


