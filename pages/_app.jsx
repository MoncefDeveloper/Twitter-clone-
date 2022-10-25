import "../styles/globals.css";
import { SessionProvider } from "next-auth/react";
import { useState, useEffect } from "react";
import Layout from "../components/Layout";

export default function MyApp({
  Component,
  pageProps: { session, ...pageProps },
}) {
  const [isStart, setIsStart] = useState(false);
  useEffect(() => {
    setIsStart(true);
  }, []);
  if (!isStart) return null;
  return (
    <SessionProvider session={session}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </SessionProvider>
  );
}
