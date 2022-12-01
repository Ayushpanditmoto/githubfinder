import React from 'react';
import UserResults from '../components/UserResults';

function Home() {
  return (
    <div>
      <UserResults />
      {/* <p>{process.env.REACT_APP_GITHUB_URL}</p>
      <p>{process.env.REACT_APP_GITHUB_TOKEN}</p> */}
    </div>
  );
}

export default Home;
