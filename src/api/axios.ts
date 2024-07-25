import { PREPAID_CARD_API } from "@/config";
import axios from "axios";

export const prepaidCardsApi = axios.create({
  // baseURL: PREPAID_CARD_API,
  baseURL: "http://portfolio.dev.agric-os.com/web",
});
