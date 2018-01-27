import Layout from "../components/Layout";
import HomeSection from "../components/HomeSection";
import WorkSection from "../components/WorkSection";
import AboutSection from "../components/AboutSection";
import ContactSection from "../components/ContactSection";

export default () => (
  <Layout removePadding={true}>
    <HomeSection />
    <WorkSection />
    {/* <AboutSection /> */}
    <ContactSection />
  </Layout>
);
