"use client";

import { Skeleton, Spinner } from "@heroui/react";

const SkeletonLoader = () => {
    return (
        <div className="flex justify-center items-center h-screen w-full">
            <Spinner className="size-15"/>
        </div>

        // <div className="space-y-5">
        //     {[...Array(5)].map((_, index) => (
        //         <div key={index} className="border rounded-xl p-5 shadow-sm">
        //             <div className="flex items-center gap-4">
        //                 <Skeleton className="w-16 h-16 rounded-full" />
        //                 <div className="flex-1 space-y-3">
        //                     <Skeleton className="h-4 w-2/3 rounded-lg" />
        //                     <Skeleton className="h-4 w-1/2 rounded-lg" />
        //                     <Skeleton className="h-4 w-1/3 rounded-lg" />
        //                 </div>
        //             </div>
        //         </div>
        //     ))}
        // </div>
    );
};

export default SkeletonLoader;
