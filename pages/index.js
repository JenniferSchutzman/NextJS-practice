import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>Bienvidos a mi sitio</p>
        <p>
          Aqui es my sitio para aprender NextJS. Estoy muy emocionada para
          presentarlo.
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.
        </p>
      </section>
    </Layout>
  );
}
