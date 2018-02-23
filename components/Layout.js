import { Fragment } from "react";
import Link from "next/link";
import Head from "next/head";
import Header from "../components/Header";

export default props => (
  <Fragment>
    <Head>
      <title>John Verrone</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />

      <link rel="icon" href="/static/images/favicon.ico" />
      <link rel="shortcut icon" href="/static/images/favicon.ico" />

      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/normalize/7.0.0/normalize.min.css"
      />
      <link
        href="https://fonts.googleapis.com/css?family=Open+Sans:300italic,400italic,400,300,700,600,800"
        rel="stylesheet"
        type="text/css"
      />
      <link
        href="https://fonts.googleapis.com/css?family=Oswald:300,400"
        rel="stylesheet"
        type="text/css"
      />
    </Head>
    {props.children}
    <style jsx global>{`
      body {
        font-family: -apple-system, system-ui, BlinkMacSystemFont, "Segoe UI",
          Roboto, "Helvetica Neue", Arial, sans-serif;
        font-size: 12px;
        height: 100%;
      }

      a {
        color: inherit;
        text-decoration: none;
      }

      h1,
      h2,
      h3,
      h6 {
        font-style: normal;
        font-weight: 400;
        line-height: 1.17em;
        margin: 0 0 10px;
      }

      .center {
        text-align: center;
      }

      .cl-effect-21 a {
        color: #777;
        text-shadow: none;
        -webkit-transition: color 0.3s;
        -moz-transition: color 0.3s;
        transition: color 0.3s;
        cursor: pointer;
      }

      .cl-effect-21 a::before,
      .cl-effect-21 a::after {
        position: absolute;
        left: 0;
        width: 100%;
        height: 2px;
        background: #de8642;
        content: "";
        opacity: 0;
        -webkit-transition: opacity 0.3s, -webkit-transform 0.3s;
        -moz-transition: opacity 0.3s, -moz-transform 0.3s;
        transition: opacity 0.3s, transform 0.3s;
        -webkit-transform: translateY(-10px);
        -moz-transform: translateY(-10px);
        transform: translateY(-10px);
      }

      .cl-effect-21 a::before {
        top: 0;
        -webkit-transform: translateY(-10px);
        -moz-transform: translateY(-10px);
        transform: translateY(-10px);
      }

      .cl-effect-21 a::after {
        bottom: 0;
        -webkit-transform: translateY(10px);
        -moz-transform: translateY(10px);
        transform: translateY(10px);
      }

      .cl-effect-21 a:hover,
      .cl-effect-21 a:focus {
        color: #de8642;
      }

      .cl-effect-21 a:hover::before,
      .cl-effect-21 a:focus::before,
      .cl-effect-21 a:hover::after,
      .cl-effect-21 a:focus::after {
        opacity: 1;
        -webkit-transform: translateY(0px);
        -moz-transform: translateY(0px);
        transform: translateY(0px);
      }
    `}</style>
  </Fragment>
);
