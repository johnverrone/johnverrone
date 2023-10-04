import React, { Component } from "react";
import Contact from '../Contact';

export default class HomeSection extends Component {
  constructor() {
    super();
    this.state = { collapsed: false };
  }

  componentDidMount() {
    window.addEventListener("resize", this.handleResize);
    this.handleResize();
  }

  handleResize = () => {
    const collapaseWidth = 1250;
    if (window.innerWidth > collapaseWidth) {
      this.setState({ collapsed: false });
    } else {
      this.setState({ collapsed: true });
    }
  };

  render() {
    return (
      <section id="home">
        <div className={`quote ${this.state.collapsed ? "quote-small" : "quote-big"}`}>
          <h2>Hi, my name is John</h2>
          <h2>and I build software.</h2>
          <Contact />
        </div>
        <style jsx>{`
          #home {
            padding: 25% 0 0 0;
            text-align: right;
            margin: 0 auto;
            height: 600px;
            background: url("/static/images/john-gc.jpg") no-repeat scroll;
            background-size: cover;
            background-position: center top;
            position: relative;
            top: 0;
            left: 0;
            bottom: 0;
            right: 0;
            z-index: -1;
          }

          .quote {
            text-align: center;
          }

          .quote-big {
            width: 45%;
            color: #FFFFFF;
          }

          .quote-small {
            width: 100%;
            background-color: rgba(255, 255, 255, 0.7);
            padding: 10px 0;
            font-size: 0.8em;
          }

          h2 {
            font-size: 4em;
            font-weight: 200;
            margin: 10px 0;
          }
        `}</style>
      </section>
    );
  }
}
