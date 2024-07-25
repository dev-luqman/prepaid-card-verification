"use client";
import SortIcon from "@/assets/icons/sort.svg";
import PageWrapper from "@/components/PageWrapper";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { useGetVerifiedCards } from "@/hooks/tansack-query/queries/homepage";
import { cardStatus, sortMapping } from "@/lib/constants";
import { MoreHorizontal } from "lucide-react";
import Image from "next/image";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import TableSkeleton from "../_components/TableSkeleton";

const VerifiedCards = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const pathname = usePathname();

  let sort = "";
  const sortParam = searchParams.get("sort");

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
    sort,
  };

  const { verifiedCards, verifiedCardsLoading, verifiedCardsError } = useGetVerifiedCards({ search: pageParams.query, sort: pageParams.sort });

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

  return (
    <PageWrapper showFilter={false} searchPlaceholder="Search by ID, Name, Location" handleSearch={handleSearch}>
      <Breadcrumb className="mb-8">
        <BreadcrumbList>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink onClick={() => router.push("/home/cards")}>Homepage</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>Verified Cards</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      {verifiedCardsLoading ? (
        <TableSkeleton />
      ) : (
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
            {verifiedCards?.data.map(card => (
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
                      <DropdownMenuItem className="cursor-pointer focus:bg-[#54CC001A]">View</DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      )}
    </PageWrapper>
  );
};

export default VerifiedCards;
