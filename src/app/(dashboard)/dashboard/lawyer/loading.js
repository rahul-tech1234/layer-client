import { Skeleton } from "@heroui/react";

export default function Loading() {
    // You can add any UI inside Loading, including a Skeleton.
    return (
        <div className="w-11/12 mx-auto space-y-3 mt-10 ">
            <Skeleton className="h-10 w-full rounded" />
            <Skeleton className="h-10 w-full rounded" />
            <Skeleton className="h-10 w-full rounded" />
            <Skeleton className="h-10 w-fulll rounded" />
            <Skeleton className="h-10 w-full rounded" />
        </div>
    );
}
