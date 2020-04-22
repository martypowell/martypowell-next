import Head from "next/head";
export default (props) => (
  <>
    <Head>
      <link
        href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,400;0,600;1,400&family=Roboto&display=swap"
        rel="stylesheet"
      />
    </Head>
    <div>{props.children}</div>
  </>
);
