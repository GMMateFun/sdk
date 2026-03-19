import dotenv from "dotenv";

dotenv.config();

export const CONFIG = {
  RPC_URL: process.env.RPC_URL!,
  PRIVATE_KEY: process.env.PRIVATE_KEY!
};
