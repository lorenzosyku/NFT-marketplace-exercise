import Head from "next/head";
import { ThirdwebSDK } from "@3rdweb/sdk";
import { useEffect, useState } from "react";

const contractAddress = "0x156cCEe877f2568FD895bDAaa6E31CBE236a08aD";
const address = "0x593c44Df9E15906E329103c740CEBdbfA956180b";

export default function Home() {
  const [nfts, setNfts] = useState([]);

  useEffect(() => {
    let initSDK = async () => {
      const sdk = new ThirdwebSDK("rinkeby");
      const nftModule = sdk.getNFTModule(contractAddress);
      const nftListWithOwnerAddress = await nftModule.getAllWithOwner();

      setNfts(nftListWithOwnerAddress);
    };
    initSDK();
  }, []);

  console.log(nfts);

  return (
    <div className="p-5">
      <Head>
        <title>ThirdWeb Demo</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1 className="text-center text-4xl">
        Welcome Everyone To My NFT Collection!
      </h1>

      
      {nfts.map((nft) => {
        <div className="" key={nft.metadata.id}>
          <p>{nft.metadata.name}</p>
          <p>{nft.metadata.description}</p>
          <img src={nft.metadata.image} alt="" />
          <p>Owned by: {nft.owner}</p>
        </div>;
      })}
      
    </div>
  );
}
