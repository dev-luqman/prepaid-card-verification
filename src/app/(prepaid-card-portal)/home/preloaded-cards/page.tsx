"use client";
import PageWrapper from "@/components/PageWrapper";
import React from "react";

const PreloadedCards = () => {
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
  };
  return (
    <PageWrapper showFilter={false} searchPlaceholder="Search by ID, Name, Location" handleSearch={handleSearch}>
      Preloaded Cards
    </PageWrapper>
  );
};

export default PreloadedCards;
