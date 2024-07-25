import BetterLifeIcon from "@/assets/icons/better-life.svg";
import HomePageIcon from "@/assets/icons/homepage.svg";
import SettingsIcon from "@/assets/icons/settings.svg";
import SidebarRightArrowIcon from "@/assets/icons/sidebar-right-arrow.svg";
import SidebarLeftArrowIcon from "@/assets/icons/sidebar-left-arrow.svg";
import VideoIcon from "@/assets/icons/video.svg";
import Image from "next/image";
import { FC } from "react";
import NavLink from "./NavLink";
import { SideBarLinks } from "./types";
import { useAppDispatch, useAppSelector } from "@/hooks/redux";
import { closeSidebar, openSidebar } from "@/lib/redux/slices/sidebarSlice";

const sideBarLinks: SideBarLinks[] = [
  {
    icon: VideoIcon,
    href: "",
    name: "LEARNING VIDEOS",
  },
  {
    icon: HomePageIcon,
    href: "/home",
    name: "MY HOMEPAGE",
  },
  {
    icon: SettingsIcon,
    href: "",
    name: "SETTINGS",
  },
];

const Sidebar: FC = () => {
  const isSidebarOpen = useAppSelector(state => state.sidebar.isSidebarOpen);
  const dispatch = useAppDispatch();

  return (
    <aside
      className={`fixed left-0 top-0 h-screen border border-r-[#DBDFF0] p-4 ${isSidebarOpen ? "w-[250px]" : "w-[100px]"} transition-[width] duration-200 ease-in-out`}
    >
      <div className={`mb-14 flex items-center ${isSidebarOpen ? "justify-between" : "mt-3 justify-center"}`}>
        <div className={`h-[40px] w-[40px] ${isSidebarOpen || "hidden"}`}>
          <Image src={BetterLifeIcon} alt="Better Life Logo" className="h-full w-full" />
        </div>
        <div className="h-[16px] w-[32px] cursor-pointer">
          <Image
            src={SidebarRightArrowIcon}
            alt="Sidebar Open Icon"
            className={`h-full w-full ${isSidebarOpen ? "block" : "hidden"}`}
            onClick={() => dispatch(closeSidebar())}
          />
          <Image
            src={SidebarLeftArrowIcon}
            alt="Sidebar Close Icon"
            className={`h-full w-full ${isSidebarOpen ? "hidden" : "block"}`}
            onClick={() => dispatch(openSidebar())}
          />
        </div>
      </div>
      <nav className="flex flex-col gap-4">
        {sideBarLinks.map((link, i) => (
          <NavLink key={i} href={link.href} className={`${isSidebarOpen || "justify-center"}`}>
            <Image src={link.icon} alt={`${link.name} Icon`} className="h-[28px] w-[28px]" />
            <p className={`${isSidebarOpen || "hidden"}`}>{link.name}</p>
          </NavLink>
        ))}
      </nav>
    </aside>
  );
};

export default Sidebar;
