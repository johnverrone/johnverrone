import React from "react";

export const Grid = props => (
  <div className={"root "}>
    {props.children}
    <style jsx>{`
      .root {
        display: flex;
        flex-wrap: wrap;
      }

      .center {
        text-align: center;
      }
    `}</style>
  </div>
);

export const GridItem = props => (
  <div className="item" {...props}>
    {props.children}
    <style jsx>{`
      .item {
        flex: 1;
        margin: 10px;
      }
    `}</style>
  </div>
);
