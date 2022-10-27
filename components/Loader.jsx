import React from "react";

function Loader() {
  return (
    <section className="container-2">
      <div
        className="loader"
        role="alert"
        aria-busy="true"
        aria-label="loading"
      >
        <div className="circle" />
        <div className="bar" />
        <div className="bar short" />
      </div>
    </section>
  );
}

export default Loader;
