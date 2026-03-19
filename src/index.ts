import { trackFees } from "./services/tracker";
import { claimFees } from "./services/claimer";
import { getWallet } from "./services/wallet";
import { log } from "./utils/logger";

const main = async () => {
  log("Starting GMMate...");

  const wallet = getWallet();
  log(`Wallet loaded: ${wallet.publicKey.toBase58()}`);

  const fees = await trackFees();

  if (fees.length === 0) {
    log("No fees available");
    return;
  }

  const total = await claimFees(fees);

  log(`Done. Total claimed: ${total} SOL`);
};

main();
