import { FeeData } from "../types";
import { log } from "../utils/logger";

// Simulasi tracking (replace dengan API Pump.fun nanti)
export const trackFees = async (): Promise<FeeData[]> => {
  log("Tracking fees...");

  // Dummy data
  return [
    { amount: 1.25, token: "SOL" },
    { amount: 0.75, token: "SOL" }
  ];
};
