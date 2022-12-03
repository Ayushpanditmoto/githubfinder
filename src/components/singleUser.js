import React, { useEffect, useContext } from 'react';
import { Link, useParams } from 'react-router-dom';
import styled from 'styled-components';
import GithubContext from '../context/githubContext';
import Spinner from './Spinner';

function SingleUser() {
  const { login } = useParams();
  const { user, getUser, loading } = useContext(GithubContext);

  useEffect(() => {
    getUser(login);
    // eslint-disable-next-line
  }, []);

  const {
    name,
    type,
    avatar_url,
    location,
    bio,
    blog,
    twitter_username,
    html_url,
    followers,
    following,
    public_repos,
    public_gists,
    hirable,
  } = user;

  if (loading) return <Spinner loading={loading} />;

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
        {login && (
          <p>
            <a href={html_url} target='_blank' rel='noopener noreferrer'>
              Visit {login}'s GitHub
            </a>
          </p>
        )}
        {blog && (
          <p>
            Website: <a href={blog || '#'}>Visit {login}'s Website</a>
          </p>
        )}
        {/* {html_url && <p>GitHub: {html_url}</p>} */}
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
  .user-links {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0.5rem 0;
    background-color: #00c8aa;
    border-radius: 10px;
    /* gap: 1rem; */
    p {
      font-size: 1.2rem;
      margin: 1rem 0;
      a {
        text-decoration: none;
        font-weight: 700;
        //text wrap
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
