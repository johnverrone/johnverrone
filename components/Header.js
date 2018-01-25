import Link from "next/link";
import { Link as LocalLink, animateScroll as scroll } from "react-scroll";

export default () => (
  <header>
    <div className="logoContainer">
      <a
        href="/"
        onClick={e => {
          e.preventDefault();
          scroll.scrollToTop();
        }}
      >
        <h2 className="logo">JV</h2>
      </a>
    </div>
    <nav className="cl-effect-21">
      <div>
        <LocalLink to="work" smooth={true}>
          <a href="">Work</a>
        </LocalLink>
        <Link href="/about">
          <a>About</a>
        </Link>
        <Link href="http://johnverrone.com">
          <a>Photography</a>
        </Link>
        <Link href="/resume.pdf">
          <a>Resume</a>
        </Link>
        <Link href="https://github.com/jverrone3">
          <a>GitHub</a>
        </Link>
      </div>
    </nav>

    <style jsx>{`
      header {
        position: fixed;
        width: 100%;
        background-color: rgba(255, 255, 255, 0.9);
        border-bottom: thin solid black;
        padding: 30px 0;
        transition: all 0.3s;
        display: flex;
        justify-content: space-between;
        align-items: center;
      }

      nav {
        width: auto;
        margin-right: 15%;
        position: relative;
      }

      nav a {
        position: relative;
        display: inline-block;
        text-transform: lowercase;
        margin-right: 20px;
        line-height: 30px;
        transition: all 0.3s;
      }

      .logoContainer {
        margin-left: 15%;
        float: left;
      }

      .logo {
        font-family: "Oswald";
        font-weight: 300;
        font-variant: small-caps;
        letter-spacing: 0.1em;
        line-height: "30px";
        margin: 0 auto;
        padding: 3px 4px 3px 6px;
        border: 1px solid black;
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
  </header>
);
