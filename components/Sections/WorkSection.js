import SectionHeader from "./SectionHeader";
import { Grid, GridItem } from "../Grid";
import Link from "next/link";
import ProjectTile from "../ProjectTile";

export default () => (
  <section id="work">
    <SectionHeader>Work</SectionHeader>
    <div className="container">
      <Grid alignItems="center">
        <Link prefetch href="/coffeetracker" passHref>
          <GridItem>
            <ProjectTile
              name="CoffeeTracker"
              type="Mobile App"
              img="chemex.jpg"
            />
          </GridItem>
        </Link>
        <Link prefetch href="/animation" passHref>
          <GridItem>
            <ProjectTile
              name="Loading Animation"
              type="Motion Graphics"
              img="spelling.gif"
            />
          </GridItem>
        </Link>
      </Grid>
    </div>
  </section>
);
