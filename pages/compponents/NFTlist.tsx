import { ThirdwebSDK } from "@3rdweb/sdk";
import type { NFTModule, NFTMetadataOwner } from "@3rdweb/sdk";
import { useEffect, useState } from "react";

const contractAddress = "0x156cCEe877f2568FD895bDAaa6E31CBE236a08aD";
const address = "0x593c44Df9E15906E329103c740CEBdbfA956180b";

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
    <div>
      {nfts.map((nft) => (
        <div className="" key={nft.metadata.id}>
          <p>{nft.metadata.name}</p>
          <p>{nft.metadata.description}</p>
          <img src={nft.metadata.image} alt="" />
          <p>Owned by: {nft.owner}</p>
        </div>
      ))}
    </div>
  );
}

export default NFTlist;
