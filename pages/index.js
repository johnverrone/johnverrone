import React from "react";
import Layout from "../components/Layout";
import SectionHeader from "../components/SectionHeader";
import ProjectTile from "../components/ProjectTile";
import { Grid, GridItem } from "../components/Grid";

export default () => (
  <Layout>
    <section id="home" />
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
        padding: 480px 0;
      }

      #home::after {
        content: "";
        background: url("/static/images/desk.jpg");
        background-size: cover;
        background-position: bottom;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        position: absolute;
        z-index: -1;
      }

      .container {
        width: 80%;
        margin: 0 auto;
      }
    `}</style>
  </Layout>
);
