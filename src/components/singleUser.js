import React, { useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import GithubContext from '../context/githubContext';

function SingleUser() {
  const { login } = useParams();
  const { user, getUser, loading } = useContext(GithubContext);

  useEffect(() => {
    getUser(login);
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

  if (loading) return <h1>Loading...</h1>;

  return (
    <SingleUserContainer>
      <div className='user-info'>
        <img src={avatar_url} alt={name} />
        <h2>{name}</h2>
        <p>{location}</p>
      </div>
      <div className='user-bio'>
        <h3>Bio</h3>
        <p>{bio}</p>
      </div>
      <div className='user-links'>
        {login && <p>Username: {login}</p>}
        {blog && <p>Website: {blog}</p>}
        {html_url && <p>GitHub: {html_url}</p>}
      </div>
      <div className='user-stats'>
        <div className='user-followers'>
          <h3>Followers</h3>
          <p>{followers}</p>
        </div>
        <div className='user-following'>
          <h3>Following</h3>
          <p>{following}</p>
        </div>
        <div className='user-repos'>
          <h3>Repos</h3>
          <p>{public_repos}</p>
        </div>
        <div className='user-gists'>
          <h3>Gists</h3>
          <p>{public_gists}</p>
        </div>
      </div>
    </SingleUserContainer>
  );
}

export default SingleUser;

const SingleUserContainer = styled.div`
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
  .user-stats {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    margin: 2rem 0;
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
  }
`;
