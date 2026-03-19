import { Keypair } from "@solana/web3.js";
import { CONFIG } from "../config";

export const getWallet = (): Keypair => {
  const secret = Uint8Array.from(JSON.parse(CONFIG.PRIVATE_KEY));
  return Keypair.fromSecretKey(secret);
};
