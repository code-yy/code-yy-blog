import Head from "next/head";
import { client } from "@/libs/client/client";
import data from "@/libs/rss/data.json";
import type { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className="text-xl font-bold text-red-400 ">Hello World</h1>
        {data.map((item) => (
          <div key={item.title}>
            <h2 className="text-sm font-bold text-blue-400">{item.title}</h2>
            <p className="text-gray-700">{item.link}</p>
          </div>
        ))}
      </main>
    </div>
  );
};

export const getStaticProps = async () => {
  const data = await client.get({
    endpoint: "blogs",
  });

  return {
    props: {
      data,
    },
  };
};

export default Home;
