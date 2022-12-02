import React, { useContext } from 'react';
import styled from 'styled-components';
import User from './User';
import ClipLoader from 'react-spinners/ClipLoader';
import GithubContext from '../context/githubContext';

const override = {
  display: 'block',
  margin: '0 auto',
  borderColor: '#00E773',
};

function UserResults() {
  const githubContext = useContext(GithubContext);
  const { users, loading } = githubContext;

  return (
    <UserResultContainer>
      {loading ? (
        <ClipLoader
          color={'#00E773'}
          loading={loading}
          cssOverride={override}
          size={150}
          aria-label='Loading Spinner'
          data-testid='loader'
        />
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
  flex-wrap: wrap;
`;
