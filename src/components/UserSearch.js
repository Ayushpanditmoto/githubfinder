import React, { useState, useEffect, useContext } from "react";
import styled from "styled-components";
import GithubContext from "../context/githubContext";
import AlertContext from "../context/alertContext";

function UserSearch() {
  const [text, setText] = useState("");
  const { users, searchUsers, clearUsers, unauthorized } =
    useContext(GithubContext);
  const { setAlert } = useContext(AlertContext);

  // console.log(`unauthorized: ${unauthorized}`);

  const handleChange = (e) => {
    console.log(e.target.value);
    setText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text === "") {
      setAlert("Please enter something", "error");
    } else {
      searchUsers(text);
      setText("");
    }
  };

  //live search
  useEffect(() => {
    if (!text.trim()) {
      clearUsers();
      return;
    }
    searchUsers(text);
    // eslint-disable-next-line
  }, [text]);

  return (
    <>
      <SearchContain>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={text}
            onChange={handleChange}
            placeholder="Search for a user"
          />
          <div className="btnsearch">
            <div className="btnsearching">
              <button type="submit">Search</button>
            </div>

            {users.length > 0 && (
              <div className="cancel">
                <button type="button" onClick={clearUsers}>
                  Clear
                </button>
              </div>
            )}
          </div>
        </form>
      </SearchContain>
      {unauthorized && (
        <UNAUTH>
          <p>
            You have exceeded your rate limit. Please try again later. If you
            have a token, please add it to your .env file.
          </p>
        </UNAUTH>
      )}
    </>
  );
}

export default UserSearch;

const UNAUTH = styled.div`
  background-color: #f8d7da;
  border-color: #f5c6cb;
  color: #721c24;
  width: 300px;
  padding: 0.75rem 1.25rem;
  margin-bottom: 1rem;
  border: 1px solid transparent;
  border-radius: 0.25rem;
  p {
    margin: 0;
  }
`;

const SearchContain = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 1.3rem 0;
  .btnsearch {
    display: flex;
    flex-direction: row;
    gap: 1rem;
  }
  form {
    display: flex;
    flex-direction: row;
    /* flex-direction: column; */
    align-items: center;
    justify-content: center;
    gap: 1rem;
  }
  input {
    padding: 0.5rem;
    border: none;
    background-color: ${props=>props.theme.name === "light"?"white":"#635985"};
    color:${props=>props.theme.text};
    border-radius: 5px;
    outline: none;
    font-size: 1rem;
    width: 320px;
    height: 50px;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;

    ::-ms-input-placeholder { /* Microsoft Edge */
      color:  ${props=>props.theme.name === "light"?"#8e8e8e":"#393053"};
    }
    ::placeholder {
      color:  ${props=>props.theme.name === "light"?"#8e8e8e":"#393053"};
    }
  }
  button {
    background-color: ${props=>props.theme.secondary};

    &:hover {
      background-color: ${props=>props.theme.primary};
    }
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
