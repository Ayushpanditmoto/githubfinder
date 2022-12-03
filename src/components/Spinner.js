import ClipLoader from 'react-spinners/ClipLoader';

import React from 'react';

const override = {
  display: 'block',
  margin: '0 auto',
  borderColor: '#00E773',
};

function Spinner({ loading }) {
  return (
    <ClipLoader
      color={'#00E773'}
      loading={loading}
      cssOverride={override}
      size={150}
      aria-label='Loading Spinner'
      data-testid='loader'
    />
  );
}

export default Spinner;
