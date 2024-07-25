"use client";
import Sidebar from "@/components/Sidebar";
import TopBar from "@/components/TopBar";
import { useAppSelector } from "@/hooks/redux";
import { ReactNode } from "react";

const HomeLayout = ({ children }: { children: Readonly<ReactNode> }) => {
  const isSidebarOpen = useAppSelector(state => state.sidebar.isSidebarOpen);
  return (
    <div>
      <Sidebar />
      {children}
    </div>
  );
};

export default HomeLayout;
