import Layout from "../components/Layout";

export default () => (
  <Layout removePadding={true}>
    <div className="background">
      <div className="content">
        <h1>Coffee Tracker</h1>
      </div>
    </div>
    <style jsx>{`
      .background {
        width: 100%;
        height: 0;
        padding-top: 57.26%;
        background: url("/static/images/coffeetracker/iphonex-mockup.png")
          no-repeat scroll;
        background-position: center;
        background-size: cover;
      }
      .content {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        margin-top: 8%;
        text-align: center;
      }
      h1 {
        position: relative;
        display: inline-block;
        border-bottom: thin solid #ccc;
        padding: 0 30px;
        font-size: 6em;
        font-weight: 200;
        color: #ccc;
      }
    `}</style>
  </Layout>
);
