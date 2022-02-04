import Head from "next/head";
import { ThirdwebSDK } from "@3rdweb/sdk";
import { useEffect, useState } from "react";
//import { NFTModule, NFTMetadataOwner } from "@3rdweb/sdk";

const contractAddress = "0x156cCEe877f2568FD895bDAaa6E31CBE236a08aD";
export default function Home() {
  const [nfts, steNfts] = useState([]);

  useEffect(() => {
    let initSDK = async () => {
      const sdk = new ThirdwebSDK("rinkeby");
      const nftModule = sdk.getNFTModule(contractAddress);
      const nftListWithOwnerAddress = nftModule.getAllWithOwner();
      console.log(nftListWithOwnerAddress);
      steNfts(nftListWithOwnerAddress);
    };
    initSDK();
  }, []);

  return (
    <div className="p-5">
      <Head>
        <title>ThirdWeb Demo</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1 className="text-center text-4xl">
        Welcome Everyone To My NFT Collection!
      </h1>
      
    </div>
  );
}
