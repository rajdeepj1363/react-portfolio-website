import React from "react";
import "./styles.css";

function MainContainer() {
  return (
    <div className="container demo">
      <div className="content">
        <div id="large-header" className="large-header">
          <canvas id="demo-canvas"></canvas>
          <h1 className="main-title">
            <span className="thin">Explore</span> Space
          </h1>
        </div>
      </div>
    </div>
  );
}

export default MainContainer;
