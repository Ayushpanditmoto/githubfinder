import React, { useContext } from 'react';
import styled from 'styled-components';
import User from './User';
// import ClipLoader from 'react-spinners/ClipLoader';
import GithubContext from '../context/githubContext';
import Spinner from './Spinner';

// const override = {
//   display: 'block',
//   margin: '0 auto',
//   borderColor: '#00E773',
// };

function UserResults() {
  const githubContext = useContext(GithubContext);
  const { users, loading } = githubContext;

  return (
    <UserResultContainer>
      {loading ? (
        <Spinner loading={loading} />
      ) : (
        users.map((user) => <User key={user.id} user={user} />)
      )}
    </UserResultContainer>
  );
}

export default UserResults;

const UserResultContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  gap:1rem;
  flex-wrap: wrap;
`;
