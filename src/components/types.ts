import React from "react";

export type SideBarLinks = {
  icon: string;
  href: string;
  name: string;
};

export type FilterProps = {
  alignContent: "start" | "center" | "end";
  contentOffset: number;
};

export type TopBarProps = {
  showSearch?: boolean;
  showFilter?: boolean;
  searchPlaceholder?: string;
  handleSearch: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export type StatusParam = {
  name: string;
  checked: boolean;
};
