import React from "react";

function Success() {
  const successStyle = {
    backgroundColor: "#d4edda",
    borderColor: "#c3e6cb",
    color: "#155724",
    padding: "0.75rem 1.25rem",
    borderRadius: "0.25rem",
    margin: "20px 0",
    textAlign: "center",
  };

  return (
    <div style={successStyle}>
      Your action was successful!
    </div>
  );
}

export default Success;
