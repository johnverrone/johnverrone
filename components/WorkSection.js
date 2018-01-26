import SectionHeader from './SectionHeader';
import { Grid, GridItem } from './Grid';
import ProjectTile from './ProjectTile';

export default () => (
  <section id="work">
    <SectionHeader>Work</SectionHeader>
    <div className="container">
      <Grid alignItems="center">
        <GridItem>
          <ProjectTile name="CoffeeTracker" type="Mobile App" img="chemex.jpg"/>
        </GridItem>
        <GridItem>
          <ProjectTile name="Loading Screen" type="Motion Graphics" img="spelling.gif"/>
        </GridItem>
      </Grid>
    </div>
  </section>
);
