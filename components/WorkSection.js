import SectionHeader from './SectionHeader';
import { Grid, GridItem } from './Grid';
import ProjectTile from './ProjectTile';

export default () => (
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
);
