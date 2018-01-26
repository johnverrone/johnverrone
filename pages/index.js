import React from "react";
import Layout from "../components/Layout";
import SectionHeader from "../components/SectionHeader";
import ProjectTile from "../components/ProjectTile";
import { Grid, GridItem } from "../components/Grid";

export default () => (
  <Layout>
    <section id="home">
      <div className="quote">
        <h2>
          Hey, I'm John.<br />
          I make software.
        </h2>
      </div>
    </section>
    <section id="work">
      <SectionHeader>Work</SectionHeader>
      <div className="container">
        <Grid alignItems="center">
          <GridItem>
            <ProjectTile />
          </GridItem>
          <GridItem>
            <ProjectTile />
          </GridItem>
        </Grid>
      </div>
    </section>
    <section id="about">
      <SectionHeader>About</SectionHeader>
      <div className="container">
        <p> this is about me</p>
      </div>
    </section>' '
    <section id="contact">
      <SectionHeader>Contact</SectionHeader>
      <div className="container">
        <p>contact me</p>
      </div>
    </section>
    <style jsx>{`
      #home {
        padding: 300px 0 550px 0;
        text-align: right;
        margin: 0 auto;
      }

      #home::after {
        content: "";
        background: url("/static/images/john-park.jpg");
        background-size: cover;
        background-position: 25% center;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        position: absolute;
        z-index: -1;
      }

      .quote {
        width: 35%;
        float: right;
        margin-right: 15%;
        text-align: left;
      }

      h2 {
        font-size: 4em;
        font-weight: 200;
      }

      .john {
        font-weight: 400;
      }

      .container {
        width: 80%;
        margin: 0 auto;
      }
    `}</style>
  </Layout>
);
