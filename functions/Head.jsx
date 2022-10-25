import Head from "next/head";

function MyHead({ title }) {
  return (
    <Head>
      <title>{title}</title>
      <meta name="keywords" content="test" />
    </Head>
  );
}

export default MyHead;
