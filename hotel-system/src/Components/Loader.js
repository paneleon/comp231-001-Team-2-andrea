import { useState, CSSProperties } from "react";
import React from "react";
import FadeLoader from "react-spinners/FadeLoader";

function Loader() {
  let [loading, setLoading] = useState(true);

  const loaderStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
  };

  return (
    <div style={loaderStyle}>
      <FadeLoader
        color='gray'
        loading={loading}
        size={150}
      />
    </div>
  );
}

export default Loader;
