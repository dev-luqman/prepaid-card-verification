import CancelIcon from "@/assets/icons/cancel-box.svg";
import CheckIcon from "@/assets/icons/check-circle.svg";
import WarningIcon from "@/assets/icons/warning.svg";
import englishLogo from "@/assets/images/english-logo.png";
import hausaLogo from "@/assets/images/hausa-logo.png";
import { type StaticImageData } from "next/image";

export const languages: { logo: StaticImageData; name: "Hausa" | "English" }[] = [
  {
    logo: hausaLogo,
    name: "Hausa",
  },
  {
    logo: englishLogo,
    name: "English",
  },
];

export const cardStatus = {
  "0": {
    name: "Unverified",
    bgClass: "bg-[#F3E1E3]",
    icon: CancelIcon,
  },
  "1": {
    name: "Verified",
    bgClass: "bg-[#58CC0233]",
    icon: CheckIcon,
  },
  "2": {
    name: "Unresolved",
    bgClass: "bg-[#F8DF3F33]",
    icon: WarningIcon,
  },
};

export const cardStatusMapping = {
  unverified: "0",
  verified: "1",
  unresolved: "2",
};

export const sortMapping = {
  asc: "0",
  desc: "1",
};
