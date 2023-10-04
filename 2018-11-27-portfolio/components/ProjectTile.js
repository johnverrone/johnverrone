import React from "react";

export default ({name, type, img}) => (
  <div className="root">
    <div className="overlay">
      <div className="projectinfo">
        <h2>{name}</h2>
        <h5>{type}</h5>
      </div>
    </div>
    <style jsx>{`
      .root {
        background: url(../static/images/${img}) no-repeat;
        position: relative;
        background-position: center;
        background-size: cover;
        min-height: 340px;
        min-width: 300px;
        transition: all 0.3s ease-out;
      }

      .overlay {
        position: absolute;
        display: block;
        width: 100%;
        height: 100%;
        transition: all 0.3s ease-out;
      }

      .root:hover .overlay {
        background-color: rgba(0, 0, 0, 0.5);
      }

      .root:hover .projectinfo {
        bottom: 50%;
      }

      .projectinfo {
        position: absolute;
        bottom: 0;
        width: 100%;
        margin: 0 auto;
        padding: 10px 0;
        background-color: rgba(255, 255, 255, 0.9);
        transition: all 0.3s ease-out;
      }

      h2,
      h5 {
        font-weight: 300;
        margin: 5px 0;
      }

      h5 {
        font-style: italic;
        text-transform: lowercase;
      }
    `}</style>
  </div>
);
