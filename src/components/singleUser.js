import React, { useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import GithubContext from "../context/githubContext";
import Spinner from "./Spinner";
import RepoList from "./RepoList";

function SingleUser() {
  const { login } = useParams();
  const { user, getUser, loading, getUserRepos, repos } =
    useContext(GithubContext);

  useEffect(() => {
    getUser(login);
    getUserRepos(login);
    // eslint-disable-next-line
  }, []);

  const {
    name,
    avatar_url,
    location,
    bio,
    blog,
    html_url,
    followers,
    following,
    public_repos,
    public_gists,
  } = user;

  if (loading) return <Spinner loading={loading} />;

  return (
    <SingleUserContainer>
      <div className="user-info">
        <img src={avatar_url} alt={name} />
        <h2>{name}</h2>
        <p>{location}</p>
      </div>
      <div className="user-bio">
        <h3>Bio</h3>
        <p>{bio}</p>
      </div>
      <div className="user-links">
        {login && (
          <p>
            <a href={html_url} target="_blank" rel="noopener noreferrer">
              Visit {login}'s GitHub
            </a>
          </p>
        )}
        {blog && (
          <p>
            <a href={blog || "#"}>Visit {login}'s Website</a>
          </p>
        )}
        {/* {html_url && <p>GitHub: {html_url}</p>} */}
      </div>
      <div className="user-stats">
        <div className="card">
          <h3>Followers</h3>
          <p>{followers}</p>
        </div>
        <div className="card">
          <h3>Following</h3>
          <p>{following}</p>
        </div>
        <div className="card">
          <h3>Repos</h3>
          <p>{public_repos}</p>
        </div>
        <div className="card">
          <h3>Gists</h3>
          <p>{public_gists}</p>
        </div>
      </div>
      <div className="repo">
        <h2>Latest Respository</h2>
        {repos && <RepoList repos={repos} />}
      </div>
    </SingleUserContainer>
  );
}

export default SingleUser;

const SingleUserContainer = styled.div`
  color:  ${props=>props.theme.text};
  text-align: center;

  .repo {
    width: 100%;
    display: flex;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    border-radius: 10px;
    gap: 20px;
    max-width: 700px;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    h2 {
      font-size: 2rem;
      margin: 1rem 0;
    }
  }
  padding: 50px 20px;
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  .user-info {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;

    img {
      width: 200px;
      height: 200px;
      border-radius: 50%;
      box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    }
    h2 {
      font-size: 2rem;
      margin: 1rem 0;
    }

    p {
      font-size: 1.5rem;
      margin: 1rem 0;
    }
  }
  .user-links {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0.5rem 0;
    border-radius: 10px;
    gap: 1rem;
    p {
      background-color: ${props=>props.theme.primary};
      padding:20px;
      border-radius: 25px;
      font-size: 1.2rem;
      a {
        text-decoration: none;
        font-weight: 700;
        color: white;
        text-align: center;
        word-wrap: break-word;
      }
    }
  }
  .user-stats {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    margin: 2rem 0;

    .card {
      box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
      width: 45%;
      color: ${props=>props.theme.text};
      display: flex;
      background-color:  ${props=>props.theme.name === "light"?"antiquewhite":"#635985"};
      border-radius: 1rem;
      margin: 0.5rem;
      flex-direction: column;
      align-items: center;
      h3 {
        font-size: 1.5rem;
        margin: 0.5rem 0;
      }
      p {
        font-size: 1.5rem;
        margin: 0.5rem 0;
      }
    }
    /*

    Deprecated in favour of single card class
    #TODO: Remove these.

    .user-followers {
      box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
      width: 45%;
      display: flex;
      background-color: antiquewhite;
      border-radius: 1rem;
      margin: 0.5rem;
      flex-direction: column;
      align-items: center;
      h3 {
        font-size: 1.5rem;
        margin: 0.5rem 0;
      }
      p {
        font-size: 1.5rem;
        margin: 0.5rem 0;
      }
    }

    .user-following {
      box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
      width: 45%;
      display: flex;
      background-color: antiquewhite;
      border-radius: 1rem;
      margin: 0.5rem;
      flex-direction: column;
      align-items: center;
      width: 45%;
      display: flex;
      background-color: antiquewhite;
      border-radius: 1rem;
      margin: 0.5rem;
      flex-direction: column;
      align-items: center;
      h3 {
        font-size: 1.5rem;
        margin: 0.5rem 0;
      }
      p {
        font-size: 1.5rem;
        margin: 0.5rem 0;
      }
    }
    .user-repos {
      box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
      width: 45%;
      display: flex;
      background-color: antiquewhite;
      border-radius: 1rem;
      margin: 0.5rem;
      flex-direction: column;
      align-items: center;
      h3 {
        font-size: 1.5rem;
        margin: 0.5rem 0;
      }
      p {
        font-size: 1.5rem;
        margin: 0.5rem 0;
      }
    }
    .user-gists {
      box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
      width: 45%;
      color: ${props=>props.theme.text};
      display: flex;
      background-color:  ${props=>props.theme.name === "light"?"antiquewhite":"#635985"};
      border-radius: 1rem;
      margin: 0.5rem;
      flex-direction: column;
      align-items: center;
      h3 {
        font-size: 1.5rem;
        margin: 0.5rem 0;
      }
      p {
        font-size: 1.5rem;
        margin: 0.5rem 0;
      }
    }
  }*/
  }
`;
