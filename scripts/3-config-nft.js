import sdk from "./1-initialize-sdk.js";
import { readFileSync } from "fs";

const editionDrop = sdk.getEditionDrop(
  "0x2718e62e424853527f32428102681efd2a3cff0a"
);

(async () => {
  try {
    await editionDrop.createBatch([
      {
        name: "La key",
        description: "This NFT will give you access to DATrip!",
        image: readFileSync("scripts/assets/elpapi.png"),
      },
    ]);
    console.log("✅ Successfully created a new NFT in the drop!");
  } catch (error) {
    console.error("failed to create the new NFT", error);
  }
})();
