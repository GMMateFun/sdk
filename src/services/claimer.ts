import { FeeData } from "../types";
import { log } from "../utils/logger";

export const claimFees = async (fees: FeeData[]) => {
  log("Claiming fees...");

  const total = fees.reduce((sum, f) => sum + f.amount, 0);

  // Simulasi claim (replace dengan smart contract interaction)
  log(`Claimed ${total} SOL`);

  return total;
};
