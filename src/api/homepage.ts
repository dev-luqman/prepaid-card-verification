import { CardApiParams } from "@/app/(prepaid-card-portal)/home/types";
import { prepaidCardsApi } from "./axios";

export const getCardStats = async () => {
  const response = await prepaidCardsApi("/cards/status-stats");
  return response?.data?.data;
};

export const getAllCards = async (params: CardApiParams) => {
  const response = await prepaidCardsApi("/cards", { params });
  return response?.data?.data;
};

export const getVerifiedCards = async (params: Omit<CardApiParams, "status">) => {
  const response = await prepaidCardsApi("/cards?status=1", { params });
  return response?.data?.data;
};

export const getUnverifiedCards = async (params: Omit<CardApiParams, "status">) => {
  const response = await prepaidCardsApi("/cards?status=0", { params });
  return response?.data?.data;
};

export const getUnresolvedCards = async (params: Omit<CardApiParams, "status">) => {
  const response = await prepaidCardsApi("/cards?status=2", { params });
  return response?.data?.data;
};
