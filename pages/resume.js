import Head from "next/head";
import { TaglineSection } from "../components/resume";
import resumeData from "../data/resume.json";

export function getStaticProps() {
  return { props: { ...resumeData } };
}

export default ({ tagline, ...rest }) =>
  console.log(rest) || (
    <>
      <Head>
        <title>Resume for Marty Powell</title>
      </Head>
      <div>
        <h1>Resume</h1>
        <TaglineSection {...tagline} />
      </div>
    </>
  );
