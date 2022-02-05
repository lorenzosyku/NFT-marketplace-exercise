import { ThirdwebSDK } from "@3rdweb/sdk";
import type { NFTModule, NFTMetadataOwner } from "@3rdweb/sdk";
import { useEffect, useState } from "react";

const contractAddress = "0x156cCEe877f2568FD895bDAaa6E31CBE236a08aD";
//const address = "0x593c44Df9E15906E329103c740CEBdbfA956180b";

function NFTlist() {
  const [nfts, setNfts] = useState<NFTMetadataOwner[]>([]);

  useEffect(() => {
    const initSDK = async () => {
      const sdk = new ThirdwebSDK("rinkeby");
      const nftModule: NFTModule = sdk.getNFTModule(contractAddress);
      const nftListWithOwnerAddress: NFTMetadataOwner[] =
        await nftModule.getAllWithOwner();
      setNfts(nftListWithOwnerAddress);
    };
    initSDK();
  }, []);

  console.log(nfts);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-2 lg:grid-cols-3 ">
      {nfts.map((nft) => (
        <div className="shadow-lg p-5 rounded-xl m-5" key={nft.metadata.id}>
          <p className="text-3xl font-bold mb-5">{nft.metadata.name}</p>
          <p className="text-sm">{nft.metadata.description}</p>
          <img className="mt-5" src={nft.metadata.image} alt="" />
          <p className="text-left italic py-2 truncate">Owned by: {nft.owner}</p>
          <button className="bg-indigo-500 shadow-lg p-2 rounded-xl text-white cursor-pointer hover:scale-105">Buy / Sell</button>
        </div>
      ))}
    </div>
  );
}

export default NFTlist;
