"use client";
import { ReactNode } from "react";
import { Provider } from "react-redux";
import { store } from '@/lib/redux/store';
import { QueryClientProvider } from "@tanstack/react-query";
import queryClient from '@/lib/tansack-query/queryClient';

const Providers = ({children}: {children: ReactNode}) => {

  return (
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>{children}</Provider>
    </QueryClientProvider>
  );
}

export default Providers
