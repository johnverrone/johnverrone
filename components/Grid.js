import React from "react";

export const Grid = props => (
  <div className={"root " + props.alignItems + " " + props.className}>
    {props.children}
    <style jsx>{`
      .root {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;
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
