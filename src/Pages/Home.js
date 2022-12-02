import React from 'react';
import UserResults from '../components/UserResults';
import UserSearch from '../components/UserSearch';

function Home() {
  return (
    <div>
      <UserSearch />
      <UserResults />
      {/* <p>{process.env.REACT_APP_GITHUB_URL}</p>
      <p>{process.env.REACT_APP_GITHUB_TOKEN}</p> */}
    </div>
  );
}

export default Home;
