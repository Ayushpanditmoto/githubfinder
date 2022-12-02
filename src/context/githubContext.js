import { createContext, useReducer } from 'react';
import { actionTypes } from './actionType';
import githubReducer from './githubReducer';

const GithubContext = createContext();

const GITHUB_URL = process.env.REACT_APP_GITHUB_URL;
const GITHUB_TOKEN = process.env.REACT_APP_GITHUB_TOKEN;

export const GithubProvider = ({ children }) => {
  const initialState = {
    users: [],
    loading: false,
  };

  const [state, dispatch] = useReducer(githubReducer, initialState);

  const clearUsers = () => {
    dispatch({
      type: actionTypes.CLEAR_USERS,
    });
  };

  const searchUsers = async (searchTerm) => {
    setLoading();

    const res = await fetch(`${GITHUB_URL}/search/users?q=${searchTerm}`, {
      headers: {
        authorization: `token ${GITHUB_TOKEN}`,
      },
    });
    const { items } = await res.json();
    console.log(items);
    dispatch({ type: actionTypes.GET_USERS, payload: items });
  };

  const setLoading = () => {
    dispatch({ type: actionTypes.SET_LOADING });
  };

  return (
    <GithubContext.Provider
      value={{
        users: state.users,
        loading: state.loading,
        searchUsers,
        clearUsers,
      }}
    >
      {children}
    </GithubContext.Provider>
  );
};

export default GithubContext;
