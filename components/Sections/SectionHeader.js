import React from "react";

export default (props) => (
  <div className="title">
    <h2>{props.children}</h2>
    <span className="border" />
    <style jsx>{`
      .title {
        margin-bottom: 30px;
        padding-top: 80px;
        padding-bottom: 30px;
        text-align: center;
      }

      .title h2 {
        font-size: 1.5em;
        font-weight: 300;
        text-transform: uppercase;
      }

      .border {
        display: block;
        width: 80px;
        height: 2px;
        background: #999999;
        margin: 0 auto;
      }
    `}</style>
  </div>
);
