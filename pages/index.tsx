import type { NextPage } from "next";
import Head from "next/head";
import { Navbar } from "../components/navbar";

const Home: NextPage = (): JSX.Element => {
  return (
    <div>
      <Head>
        <title>ReactTube</title>
      </Head>
      <Navbar />
      <main>
        <section className="w-full flex flex-wrap p-4">
          <div className="w-48 h-24 rounded-sm bg-red-300 mx-4"></div>
          <div className="w-48 h-24 rounded-sm bg-red-300 mx-4"></div>
          <div className="w-48 h-24 rounded-sm bg-red-300 mx-4"></div>
          <div className="w-48 h-24 rounded-sm bg-red-300 mx-4"></div>
          <div className="w-48 h-24 rounded-sm bg-red-300 mx-4"></div>
        </section>
      </main>
    </div>
  );
};

export default Home;
