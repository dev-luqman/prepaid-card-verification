import { feather } from "@/app/fonts";
import { Button } from "@/components/ui/button";
import React, { ComponentProps, useEffect, useState } from "react";
import { StatusParam, FilterProps } from "./types";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { CircleChevronLeft, CircleChevronRight } from "lucide-react";

const TablePagination = ({ className }: React.HTMLAttributes<HTMLDivElement>) => {
  return (
    <div>
      <div className="flex items-center gap-2">
        <Button
          variant="outline"
          className={`${feather.className} flex gap-2 rounded-[10px] bg-transparent px-6 py-2 text-sm hover:bg-transparent hover:text-primary-green/80`}
        >
          <CircleChevronLeft size={20} /> Prev
        </Button>
        <Button variant="outline" className="border-none bg-transparent hover:bg-transparent hover:text-primary-green/80">
          First
        </Button>
        <Button variant="outline" className="border-none bg-transparent hover:bg-transparent hover:text-primary-green/80">
          1
        </Button>
        <Button variant="outline" className="border-none bg-transparent hover:bg-transparent hover:text-primary-green/80">
          2
        </Button>
        <Button variant="outline" className="border-none bg-transparent hover:bg-transparent hover:text-primary-green/80">
          Last
        </Button>
      </div>
    </div>
  );
};

export default TablePagination;
