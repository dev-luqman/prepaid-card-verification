import NotificationIcon from "@/assets/icons/notification.svg";
import SearchIcon from "@/assets/icons/search.svg";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import { useAppDispatch } from "@/hooks/redux";
import { ChevronDown } from "lucide-react";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import AllCardsFilter from "./AllCardsFilter";
import { TopBarProps } from "./types";

const TopBar = ({ showSearch = true, showFilter = true, searchPlaceholder, handleSearch }: TopBarProps) => {
  const dispatch = useAppDispatch();
  const searchParams = useSearchParams();

  return (
    <div className="flex items-center justify-between py-5 pl-5 pr-8">
      <div className="flex w-1/2 items-center justify-between gap-4">
        <div className={`relative w-full ${showSearch || "hidden"}`}>
          <Input
            placeholder={searchPlaceholder}
            className="h-[3rem] border-[#75748F00] pr-8"
            onChange={e => handleSearch(e)}
            defaultValue={searchParams.get("q") || ""}
          />
          <Image src={SearchIcon} alt="Search Icon" className="absolute bottom-1/2 right-3 translate-y-1/2" />
        </div>
        <div className={`${showFilter || "hidden"}`}>
          <AllCardsFilter alignContent="end" contentOffset={20} />
        </div>
      </div>
      <div className="flex h-10 w-1/2 items-center justify-end gap-3">
        <div className="flex h-full w-10 items-center justify-center rounded-full bg-[#75748F1A]">
          <Image src={NotificationIcon} alt="Notification Icon" className="h-[18px] w-[18px] cursor-pointer" />
        </div>
        <Avatar>
          <AvatarImage src="" />
          <AvatarFallback>AM</AvatarFallback>
        </Avatar>
        <div>
          <p className="font-bold">Adamu Mustphara</p>
          <p className="text-sm text-primary-gray">IK00000045</p>
        </div>
        <ChevronDown className="cursor-pointer" />
      </div>
    </div>
  );
};

export default TopBar;
