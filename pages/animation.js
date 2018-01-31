import Layout from "../components/Layout";

export default () => (
  <Layout>
    <div className="background" />
    <style jsx>{`
      .background {
        width: 100%;
        height: 0;
        padding-top: 57.26%;
        background: url("/static/images/spelling.gif") no-repeat scroll;
        background-position: center;
        background-size: cover;
      }
    `}</style>
  </Layout>
);
