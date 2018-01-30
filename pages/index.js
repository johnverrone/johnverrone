import Layout from "../components/Layout";
import HomeSection from "../components/HomeSection";
import WorkSection from "../components/WorkSection";
import ContactSection from "../components/ContactSection";

export default () => (
  <Layout removePadding={true}>
    <HomeSection />
    <WorkSection />
    <ContactSection />
  </Layout>
);
