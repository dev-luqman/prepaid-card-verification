"use client";
import CardsSkeleton from "@/app/(prepaid-card-portal)/home/_components/CardsSkeleton";
import TableSkeleton from "@/app/(prepaid-card-portal)/home/_components/TableSkeleton";
import { Stats } from "@/app/(prepaid-card-portal)/home/types";
import { feather } from "@/app/fonts";
import CancelIcon from "@/assets/icons/cancel-box.svg";
import CardIcon from "@/assets/icons/card.svg";
import CheckIcon from "@/assets/icons/check-circle.svg";
import FolderIcon from "@/assets/icons/folder.svg";
import SortIcon from "@/assets/icons/sort.svg";
import WarningIcon from "@/assets/icons/warning.svg";
import PageWrapper from "@/components/PageWrapper";
import TablePagination from "@/components/TablePagination";
import { Breadcrumb, BreadcrumbItem, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { useGetAllCards, useGetCardStats } from "@/hooks/tansack-query/queries/homepage";
import { cardStatus, cardStatusMapping, sortMapping } from "@/lib/constants";
import { MoreHorizontal } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

const Home = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const pathname = usePathname();

  let status = "";
  let sort = "";
  const statusParam = searchParams.get("status");
  const sortParam = searchParams.get("sort");

  if (statusParam) {
    status = statusParam
      .split(",")
      .map(item => cardStatusMapping[item as keyof typeof cardStatusMapping])
      .join(",");
  }

  if (sortParam) {
    const sortParamArr = sortParam.split(",");
    const sortParamObj: any = {};
    for (let i = 0; i < sortParamArr.length; i += 2) {
      sortParamObj[sortParamArr[i]] = sortMapping[sortParamArr[i + 1] as keyof typeof sortMapping] || "0";
    }
    sort = Object.entries(sortParamObj)
      .map(item => item.join(","))
      .join(",");
  }

  const pageParams = {
    query: searchParams.get("q") || "",
    status,
    sort,
  };

  const { cardStats, cardStatsLoading, cardStatsError } = useGetCardStats();
  const { allCards, allCardsLoading, allCardsError } = useGetAllCards({ search: pageParams.query, status: pageParams.status, sort: pageParams.sort });

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const searchValue = e.target.value;
    const params = new URLSearchParams(searchParams.toString());
    searchValue ? params.set("q", searchValue) : params.delete("q");
    router.push(`${pathname}?${params.toString()}`);
  };

  const handleSort = (sortKey: string) => {
    const params = new URLSearchParams(searchParams.toString());
    const sortParamObj: any = {};
    if (sortParam) {
      const sortParamArr = sortParam.split(",");
      for (let i = 0; i < sortParamArr.length; i += 2) {
        sortParamObj[sortParamArr[i]] = sortParamArr[i + 1] as keyof typeof sortMapping;
      }
    }
    sortParamObj[sortKey] === "asc" ? params.set("sort", `${sortKey},desc`) : params.set("sort", `${sortKey},asc`);
    router.push(`${pathname}?${params.toString()}`);
  };

  const stats: Stats[] = [
    {
      name: "Total Number of Cards",
      bgClass: "bg-[#00B4B91A]",
      number: cardStats?.all_cards,
      icon: FolderIcon,
      href: "",
    },
    {
      name: "Verified Cards",
      bgClass: "bg-[#54CC001A]",
      number: cardStats?.verified_cards,
      icon: CheckIcon,
      href: "/home/verified-cards",
    },
    {
      name: "Unverified Cards",
      bgClass: "bg-[#FF4B4B1A]",
      number: cardStats?.unverified_cards,
      icon: CancelIcon,
      href: "/home/unverified-cards",
    },
    {
      name: "Unresolved Cards",
      bgClass: "bg-[#F8DF3F1A]",
      number: cardStats?.unresolved_cards,
      icon: WarningIcon,
      href: "/home/unresolved-cards",
    },
    {
      name: "Preloaded Cards",
      bgClass: "bg-[#fff]",
      number: cardStats?.preloaded_cards,
      icon: CardIcon,
      href: "/home/preloaded-cards",
    },
  ];

  return (
    <PageWrapper searchPlaceholder="Search by ID, Name, Location" handleSearch={handleSearch}>
      <Breadcrumb className="mb-8">
        <BreadcrumbList>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>Homepage</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      {cardStatsLoading ? (
        <CardsSkeleton />
      ) : (
        <div className="mb-6 flex justify-between gap-4">
          {stats.map((stat, i) => (
            <Link key={i} href={stat.href} className={`block w-full rounded-[10px] p-3 ${stat.bgClass} ${stat.href || "cursor-default"}`}>
              <div>
                <div className="h-[40px] w-[40px]">
                  <Image src={stat.icon} alt={stat.name} className="h-full w-full" />
                </div>
                <p className="mb-4 mt-2">{stat.name}</p>
                <p className={`${feather.className} text-xl text-[700]`}>{stat.number?.toLocaleString()}</p>
              </div>
            </Link>
          ))}
        </div>
      )}
      {allCardsLoading ? (
        <TableSkeleton />
      ) : (
        <>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Holder Details</TableHead>
                <TableHead className="flex cursor-pointer items-center gap-2" onClick={() => handleSort("hub")}>
                  Hub <Image src={SortIcon} alt="Sort Icon" />
                </TableHead>
                <TableHead>BG Card ID</TableHead>
                <TableHead>Card Pan</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Issuer ID</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {allCards?.data.map(card => (
                <TableRow key={`${card.unique_entity_id} ${card.bank_card_id}`}>
                  <TableCell>
                    <div className="flex gap-2">
                      <div className="h-[45px] w-[45px]">
                        <Image
                          src={card.image}
                          alt={`${card.name} image`}
                          className="h-full w-full rounded-[5px] object-cover"
                          width={500}
                          height={500}
                        />
                      </div>
                      <div>
                        <p>{card.name}</p>
                        <p className="opacity-80">{card.ik_number}</p>
                      </div>
                    </div>
                  </TableCell>
                  <TableCell>{card.hub}</TableCell>
                  <TableCell>{card.card_id}</TableCell>
                  <TableCell>{card.card_pan}</TableCell>
                  <TableCell>
                    <div className={`flex items-center justify-center gap-2 rounded-[8px] px-2 py-1 ${cardStatus[card.status].bgClass} `}>
                      <Image src={cardStatus[card.status].icon} alt={`${cardStatus[card.status].name} Icon`} className="h-4 w-4" />
                      <p>{cardStatus[card.status].name}</p>
                    </div>
                  </TableCell>
                  <TableCell>{card.issuer_id}</TableCell>
                  <TableCell>
                    <DropdownMenu>
                      <DropdownMenuTrigger className="focus:outline-none">
                        <MoreHorizontal className="w-17 h-5" />
                      </DropdownMenuTrigger>
                      <DropdownMenuContent>
                        <DropdownMenuItem className="cursor-pointer focus:bg-[#54CC001A]">
                          {card.status === "0" ? "Change Status" : "View"}
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
          <div className="mt-4">
            <TablePagination />
          </div>
        </>
      )}
    </PageWrapper>
  );
};

export default Home;
