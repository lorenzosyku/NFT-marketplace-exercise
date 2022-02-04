import Head from "next/head";
import NFTlist from "./compponents/NFTlist";

export default function Home() {
  return (
    <div className="p-5">
      <Head>
        <title>ThirdWeb Demo</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1 className="text-center text-4xl">
        Welcome Everyone To My NFT Collection!
      </h1>

      <NFTlist/>
      
      
    </div>
  );
}
