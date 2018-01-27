import Link from "next/link";
import Head from "next/head";
import Header from "../components/Header";

export default props => (
  <div>
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
    <Header />
    <div
      style={
        !props.removePadding ? { paddingTop: 100, margin: "0 auto" } : null
      }
    >
      {props.children}
    </div>
    <style jsx global>{`
      body {
        font-family: -apple-system, system-ui, BlinkMacSystemFont, "Segoe UI",
          Roboto, "Helvetica Neue", Arial, sans-serif;
        font-size: 12px;
      }

      a {
        color: inherit;
        text-decoration: none;
      }
    `}</style>
  </div>
);
