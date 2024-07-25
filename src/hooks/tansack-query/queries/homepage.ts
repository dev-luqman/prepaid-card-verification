import { getAllCards, getCardStats, getUnresolvedCards, getUnverifiedCards, getVerifiedCards } from "@/api/homepage";
import { CardApiParams, CardsData, CardStatsData } from "@/app/(prepaid-card-portal)/home/types";
import { keepPreviousData, useQuery } from "@tanstack/react-query";

export const useGetCardStats = () => {
  const {
    data,
    isLoading: cardStatsLoading,
    isError: cardStatsError,
  } = useQuery<CardStatsData>({
    queryKey: ["card-stats"],
    queryFn: () => getCardStats(),
  });

  return {
    cardStats: data,
    cardStatsLoading,
    cardStatsError,
  };
};

export const useGetAllCards = (params: CardApiParams) => {
  const {
    data,
    isLoading: allCardsLoading,
    isError: allCardsError,
  } = useQuery<CardsData>({
    queryKey: ["all-cards", Object.values(params)],
    queryFn: () => getAllCards(params),
    placeholderData: keepPreviousData,
  });

  return {
    allCards: data,
    allCardsLoading,
    allCardsError,
  };
};

export const useGetVerifiedCards = (params: Omit<CardApiParams, "status">) => {
  const {
    data,
    isLoading: verifiedCardsLoading,
    isError: verifiedCardsError,
  } = useQuery<CardsData>({
    queryKey: ["verified-cards", Object.values(params)],
    queryFn: () => getVerifiedCards(params),
    placeholderData: keepPreviousData,
  });

  return {
    verifiedCards: data,
    verifiedCardsLoading,
    verifiedCardsError,
  };
};

export const useGetUnVerifiedCards = (params: Omit<CardApiParams, "status">) => {
  const {
    data,
    isLoading: unverifiedCardsLoading,
    isError: unverifiedCardsError,
  } = useQuery<CardsData>({
    queryKey: ["unverified-cards", Object.values(params)],
    queryFn: () => getUnverifiedCards(params),
    placeholderData: keepPreviousData,
  });

  return {
    unverifiedCards: data,
    unverifiedCardsLoading,
    unverifiedCardsError,
  };
};
export const useGetUnresolvedCards = (params: Omit<CardApiParams, "status">) => {
  const {
    data,
    isLoading: unresolvedCardsLoading,
    isError: unresolvedCardsError,
  } = useQuery<CardsData>({
    queryKey: ["unresolved-cards", Object.values(params)],
    queryFn: () => getUnresolvedCards(params),
    placeholderData: keepPreviousData,
  });

  return {
    unresolvedCards: data,
    unresolvedCardsLoading,
    unresolvedCardsError,
  };
};
