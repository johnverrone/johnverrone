import SectionHeader from "./SectionHeader";
import { Grid, GridItem } from "../Grid";

export default () => (
  <section id="contact">
    <SectionHeader>Contact</SectionHeader>
    <Grid className="contactBox cl-effect-21">
      <GridItem>
        <div className="center">
          <a
            href="https://www.linkedin.com/in/johnverrone/"
            target="_blank"
            className="socialButton"
            id="linkedinButton"
          >
            <svg
              version="1.1"
              id="Layer_1"
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              viewBox="0 0 20 20"
              enable-background="new 0 0 20 20"
            >
              <g>
                <g>
                  <path
                    id="linkedinPath"
                    d="M2.3,17.5h3v-12h-3V17.5z M14.3,5.5c-2.6,0-3.8,1.9-4,2v-2h-3v12h3v-7c0-0.3,0.6-2.3,3-2
                                                               c1.3,0.1,2,1.8,2,2v7l3,0V9.2C18.2,8,17.6,5.5,14.3,5.5z M3.8,1.5C3,1.5,2.3,2.2,2.3,3S3,4.5,3.8,4.5S5.3,3.8,5.3,3
                                                               S4.7,1.5,3.8,1.5z"
                  />
                </g>
              </g>
            </svg>
          </a>
          <h6>/in/johnverrone</h6>
        </div>
      </GridItem>
      <GridItem>
        <div className="center">
          <a
            href="http://instagram.com/johnverrone"
            target="_blank"
            className="socialButton"
            id="instagramButton"
          >
            <svg
              version="1.1"
              id="Layer_1"
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              viewBox="0 0 20 20"
              enable-background="new 0 0 20 20"
            >
              <path
                id="twitterPath"
                d="M19.3,3.9c-0.3,0.2-1.2,0.6-2.1,0.6c0.6-0.3,1.4-1.4,1.6-2.2c-0.5,0.4-1.8,0.9-2.4,0.9c0,0,0,0,0,0
                                                      C15.8,2.4,14.8,2,13.7,2c-2.1,0-3.8,1.8-3.8,4.1c0,0.3,0,0.6,0.1,0.9l0,0C7.2,6.9,3.8,5.3,2,2.7C0.8,4.9,1.8,7.3,3.1,8.1
                                                      c-0.4,0-1.3-0.1-1.7-0.5c0,1.4,0.6,3.3,2.9,4c-0.4,0.3-1.2,0.2-1.6,0.1c0.1,1.2,1.7,2.8,3.4,2.8c-0.6,0.8-2.7,2.1-5.3,1.7
                                                      c1.7,1.1,3.8,1.8,5.9,1.8c6.1,0,10.9-5.3,10.6-11.9c0,0,0,0,0,0c0,0,0,0,0-0.1c0,0,0,0,0-0.1C18.1,5.6,18.8,4.9,19.3,3.9z"
              />
            </svg>
          </a>
          <h6>@johnverrone</h6>
        </div>
      </GridItem>
      <GridItem>
        <div className="center">
          <a
            href="mailto:john.verrone@gmail.com"
            target="new"
            className="socialButton"
            id="mailButton"
          >
            <svg
              version="1.1"
              id="Layer_1"
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              viewBox="0 0 20 20"
              enable-background="new 0 0 20 20"
            >
              <path
                id="mailPath"
                d="M13.7,6.1c0-0.1,0-0.1,0-0.2c0-0.6-0.3-0.8-1-0.8c-0.3,0-0.6,0.1-0.7,0.2c-0.1,0.1-0.2,0.3-0.2,0.7
                                                   c-0.3-0.4-0.5-0.6-0.8-0.8C10.8,5.1,10.4,5,10,5C8.8,5,7.8,5.6,6.9,6.8c-0.8,1.1-1.2,2.3-1.2,3.5c0,1,0.3,1.8,0.8,2.6
                                                   c0.6,0.8,1.3,1.2,2.2,1.2c0.8,0,1.5-0.3,2.3-0.8c0.3,0.6,0.9,0.8,1.7,0.8c1.5,0,2.8-0.6,3.8-1.9c1-1.2,1.5-2.6,1.5-4.1
                                                   c0-1.9-0.8-3.4-2.3-4.7c-1.4-1.1-3.1-1.7-5-1.7c-2.4,0-4.5,0.8-6.1,2.3C2.9,5.6,2,7.7,2,10.1c0,2.5,0.9,4.4,2.6,5.8
                                                   c1.6,1.2,3.6,1.8,6.2,1.8c1.1,0,2.1-0.2,3.2-0.5c1.1-0.4,2.1-0.9,2.8-1.6c0.2-0.2,0.5-0.5,0.7-0.8c0.3-0.4,0.4-0.7,0.4-1
                                                   c0-0.2-0.1-0.3-0.2-0.5c-0.1-0.1-0.3-0.2-0.5-0.2c-0.3,0-0.6,0.1-0.9,0.4c-0.4,0.4-0.7,0.7-0.9,0.9c-1.2,1.1-2.8,1.6-4.7,1.6
                                                   c-2,0-3.6-0.5-4.8-1.5C4.7,13.6,4,12,4,10c0-1.9,0.6-3.6,1.9-4.9c1.2-1.3,2.8-1.9,4.7-1.9c1.5,0,2.7,0.4,3.7,1.3
                                                   c1.1,0.9,1.6,2.1,1.6,3.6c0,0.8-0.1,1.5-0.4,2.2c-0.3,0.8-0.7,1.3-1.3,1.7c-0.4,0.3-0.8,0.5-1,0.5c-0.3,0-0.4-0.1-0.4-0.4
                                                   c0-0.1,0.1-0.6,0.2-1.4L13.7,6.1z M10.7,10.6c-0.5,1.3-1,2-1.5,2c-0.8,0-1.2-0.5-1.2-1.6c0-0.8,0.2-1.7,0.7-2.7
                                                   c0.5-1.2,1.2-1.8,1.9-1.8c0.3,0,0.5,0.2,0.6,0.5c0.1,0.2,0.2,0.5,0.2,0.8C11.3,8.5,11.1,9.5,10.7,10.6z"
              />
            </svg>
          </a>
          <h6>john.verrone@gmail.com</h6>
        </div>
      </GridItem>
    </Grid>
    <style jsx>{`
      .socialButton {
        width: 20px;
        height: 20px;
        position: relative;
        display: inline-block;
        outline: none;
        padding: 5px 0;
      }
      #twitterPath {
        fill: #4d4d4d;
        transition: fill 0.3s ease;
      }

      #linkedinPath {
        fill: #4d4d4d;
        transition: fill 0.3s ease;
      }

      #mailPath {
        fill: #4d4d4d;
        transition: fill 0.3s ease;
      }
    `}</style>
  </section>
);
