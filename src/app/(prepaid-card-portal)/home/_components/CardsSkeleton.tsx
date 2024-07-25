import { Skeleton } from "@/components/ui/skeleton";

const CardsSkeleton = () => {
  const stats: string[] = ["Total Number of Cards", "Verified Cards", "Unverified Cards", "Unresolved Cards", "Preloaded Cards"];
  return (
    <div className="mb-6 mt-8 flex justify-between gap-4">
      {stats.map(stat => (
        <div key={stat} className="w-full rounded-[10px]">
          <Skeleton className="h-[10rem]" />
        </div>
      ))}
    </div>
  );
};

export default CardsSkeleton;
