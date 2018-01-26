export default () => (
  <section id="home">
    <div className="quote">
      <h2>
        Hi, I'm John,<br />
        I make software.
      </h2>
    </div>
    <style jsx>{`
      #home {
        padding: 250px 0 0 0;
        text-align: right;
        margin: 0 auto;
        height: 960px;
        background: url("/static/images/desk.jpg") no-repeat scroll;
        background-size: cover;
        background-position: 25% center;
        position: relative;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        z-index: -1;
      }

      .quote {
        width: 35%;
        float: right;
        margin-right: 15%;
        text-align: left;
      }

      h2 {
        text-align: center;
        font-size: 4em;
        font-weight: 200;
      }
      `}</style>
  </section>
);
