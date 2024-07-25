export type Stats = {
  name: string;
  bgClass: string;
  number?: number;
  icon: string;
  href: string;
};

export type CardStatsData = {
  all_cards: number;
  unverified_cards: number;
  verified_cards: number;
  unresolved_cards: number;
  preloaded_cards: number;
};

type CardData = {
  unique_entity_id: string;
  bank_card_id: number;
  ik_number: string;
  card_id: string;
  card_pan: string;
  status: "0" | "1" | "2";
  issuer_id: string;
  name: string;
  hub: string;
  image: string;
};

export type CardsData = {
  totalPages: number;
  currentPage: number;
  data: CardData[];
};

export type CardApiParams = {
  search: string;
  status: string;
  sort: string;
};
