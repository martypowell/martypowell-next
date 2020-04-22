import Head from "next/head";
import { TaglineSection } from "../components/resume";
import resumeData from "../data/resume.json";
import Layout from "../components/Layout";

export function getStaticProps() {
  return { props: { ...resumeData } };
}

export default ({ tagline, ...rest }) => (
  <Layout title="Marty Powell's Resume">
    <div>
      <h1>Resume</h1>
      <TaglineSection {...tagline} />
    </div>
  </Layout>
);
