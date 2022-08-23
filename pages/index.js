import Head from "next/head";
import Header from "../components/client/Header";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <div className="relative top-[5000px] bg-fuchsia-500">
        <h1>Hello World</h1>
      </div>
    </div>
  );
}