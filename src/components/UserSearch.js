import React, { useState, useContext } from 'react';
import styled from 'styled-components';
import GithubContext from '../context/githubContext';

function UserSearch() {
  const [text, setText] = useState('');
  const { users, searchUsers, clearUsers } = useContext(GithubContext);

  const handleChange = (e) => {
    console.log(e.target.value);
    setText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text === '') {
      alert('Please enter something', 'light');
    } else {
      searchUsers(text);
      setText('');
    }
  };

  return (
    <SearchContain>
      <form onSubmit={handleSubmit}>
        <input
          type='text'
          value={text}
          onChange={handleChange}
          placeholder='Search for a user'
        />
        <div className='btnsearch'>
          <button type='submit'>Search</button>
          {users.length > 0 && (
            <button type='button' onClick={clearUsers}>
              Clear
            </button>
          )}
        </div>
      </form>
    </SearchContain>
  );
}

export default UserSearch;

const SearchContain = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 1.3rem 0;
  .btnsearch button {
    background-color: #00dc7c;
    color: white;
    padding: 0.5rem 1rem;
    border: none;
    border-radius: 5px;
    margin: 0.5 0.5rem;
    cursor: pointer;
    font-size: 1.2rem;
    font-weight: 700;
  }
  form {
    display: flex;
    /* flex-direction: column; */
    align-items: center;
    justify-content: center;
    gap: 1rem;
  }
  .btnsearch button:hover {
    background-color: #00b86b;
  }
  input {
    padding: 0.5rem;
    border: none;
    border-radius: 5px;
    outline: none;
    font-size: 1rem;
    width: 320px;
    height: 50px;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  }
  //media query
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 0.5rem;
    button {
      margin: 0.5rem 0.5rem;
    }
    form {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }
  }
`;