import ClipLoader from "react-spinners/ClipLoader";

import React from "react";

const override = {
  display: "block",
  margin: "0 auto",
  borderColor: "#0068e7",
};

function Spinner({ loading }) {
  return (
    <ClipLoader
      color={"#0068e7"}
      loading={loading}
      cssOverride={override}
      size={150}
      aria-label="Loading Spinner"
      data-testid="loader"
    />
  );
}

export default Spinner;
