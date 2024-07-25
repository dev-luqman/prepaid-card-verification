"use client";
import BetterLifeLogo from "@/assets/images/better-life.png";
import { Button } from "@/components/ui/button";
import { languages } from "@/lib/constants";
import { cn } from "@/lib/utils";
import { CircleChevronRight } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { feather } from "./fonts";

export default function EntryPoint() {
  const router = useRouter();
  const [userLanguage, setUserLanguage] = useState<null | "English" | "Hausa">(null);

  const handleLanguageClick = (value: null | "English" | "Hausa") => {
    setUserLanguage(value === userLanguage ? null : value);
  };

  return (
    <main>
      {/* <div className="bg-primary-yellow h-screen flex justify-center items-center">
        <div className="w-[180px] h-[200px]">
          <Image src={BetterLifeLogo} alt="Better Life Image" className="w-full h-full" />
        </div>
      </div> */}
      <div className="flex h-screen flex-col items-center justify-center text-center">
        <div className="h-[116px] w-[106px]">
          <Image src={BetterLifeLogo} alt="Better Life Logo" className="h-full w-full" />
        </div>
        <div>
          <p className={`${feather.className} mb-2 mt-8 text-[2rem]`}>Select Your Language 3</p>
          <p className="mb-10 text-xl opacity-70">Please select the preferred language you want to use.</p>
          <div className="flex w-[500px] justify-between">
            {languages.map((language, i) => (
              <div
                className={cn(
                  "flex items-center justify-between gap-2 rounded-[10px] border border-solid border-primary-gray px-14 py-6 hover:cursor-pointer hover:border-primary-orange hover:bg-secondary-yellow",
                  `${userLanguage === language.name && "border-primary-orange bg-secondary-yellow"}`,
                )}
                key={i}
                onClick={() => handleLanguageClick(language.name)}
              >
                <div className="h-[72px] w-[72px]">
                  <Image src={language.logo} alt={`${language.name} Logo`} className="w-full" />
                </div>
                <p>{language.name}</p>
              </div>
            ))}
          </div>
          <Button
            className={`${feather.className} mt-16 flex w-full gap-2 rounded-[10px] py-6`}
            disabled={!userLanguage}
            onClick={() => router.push("/home/cards")}
          >
            Next <CircleChevronRight />
          </Button>
        </div>
      </div>
    </main>
  );
}
