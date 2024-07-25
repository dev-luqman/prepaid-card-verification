import { PropsWithChildren } from "react";
import TopBar from "./TopBar";
import { useAppSelector } from "@/hooks/redux";
import { TopBarProps } from "./types";

const PageWrapper = ({ children, showSearch = true, showFilter = true, searchPlaceholder="", handleSearch }: PropsWithChildren<TopBarProps>) => {
  const isSidebarOpen = useAppSelector(state => state.sidebar.isSidebarOpen);

  return (
    <div className={`${isSidebarOpen ? "ml-[250px]" : "ml-[100px]"} transition-all duration-200 ease-in-out`}>
      <TopBar showSearch={showSearch} showFilter={showFilter} searchPlaceholder={searchPlaceholder} handleSearch={handleSearch} />
      <div className="bg-[#F2F2F4] px-4 py-6">{children}</div>
    </div>
  );
};

export default PageWrapper;
