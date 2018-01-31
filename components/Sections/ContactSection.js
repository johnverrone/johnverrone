import SectionHeader from "./SectionHeader";
import { Grid, GridItem } from "../Grid";

export default () => (
  <section id="contact">
    <SectionHeader>Contact</SectionHeader>
    <Grid className="cl-effect-21">
      <GridItem>
        <a
          href="https://www.linkedin.com/in/johnverrone/"
          target="_blank"
          className="socialButton"
          id="linkedinButton"
        />
        <h6>/in/johnverrone</h6>
      </GridItem>
      <GridItem>
        <a
          href="http://twitter.com/johnverrone"
          target="_blank"
          className="socialButton"
          id="twitterButton"
        />
        <h6>@johnverrone</h6>
      </GridItem>
      <GridItem>
        <a
          href="mailto:john.verrone@gmail.com"
          target="new"
          className="socialButton"
          id="mailButton"
        />
        <h6>john.verrone@gmail.com</h6>
      </GridItem>
    </Grid>
  </section>
);
