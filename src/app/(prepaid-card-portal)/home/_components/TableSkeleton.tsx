import { Skeleton } from "@/components/ui/skeleton";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

const TableSkeleton = () => {
  const headers = ["Holder Details", "Hub", "BG Card ID", "Card Plan", "Status", "Issuer ID"];
  return (
    <Table>
      <TableHeader>
        <TableRow>
          {headers.map(header => (
            <TableHead key={header}>
              <Skeleton className="h-2" />
            </TableHead>
          ))}
        </TableRow>
      </TableHeader>
      <TableBody>
        {headers.map(header => (
          <TableRow key={header}>
            <TableCell>
              <Skeleton className="h-6" />
            </TableCell>
            <TableCell>
              <Skeleton className="h-6" />
            </TableCell>
            <TableCell>
              <Skeleton className="h-6" />
            </TableCell>
            <TableCell>
              <Skeleton className="h-6" />
            </TableCell>
            <TableCell>
              <Skeleton className="h-6" />
            </TableCell>
            <TableCell>
              <Skeleton className="h-6" />
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default TableSkeleton;
