import { PageContainer } from "@/components/layout";
import { SkeletonLoader } from "@/components/ui";
import React from "react";

const FileExplorerLoader = () => {
  const cellLoader = [0, 1, 2, 3, 4, 5, 6];

  return (
    <PageContainer>
      <div className="p-4">
        <div className="py-5 md:py-14 space-y-4">
          <div className="space-y-4 md:flex justify-between">
            <div className="space-y-4">
              <SkeletonLoader className="h-5 w-30 bg-gray-300" />
              <SkeletonLoader className="h-8 w-full md:w-40 bg-gray-300" />
            </div>
            <div className="space-y-4 md:flex md:gap-3">
              <div>
                <SkeletonLoader className="h-8 w-full md:w-40 bg-gray-300" />
              </div>
              <div>
                <SkeletonLoader className="h-8 w-full md:w-40 bg-gray-300" />
              </div>
            </div>
          </div>

          <div>
            <SkeletonLoader className="h-8 w-full bg-gray-300" />
          </div>

          {cellLoader.map((_, index) => (
            <div className="flex justify-between" key={index}>
              <div className="flex gap-2 items-center">
                <SkeletonLoader className="h-5 w-7 bg-gray-300" />
                <SkeletonLoader className="h-5 w-46 bg-gray-300" />
              </div>
              <div className="flex gap-2 items-center">
                <SkeletonLoader className="h-5 w-30 bg-gray-300" />
              </div>
              <div className="flex gap-2 items-center">
                <SkeletonLoader className="h-5 w-26 bg-gray-300" />
              </div>
              <div className="flex gap-2 items-center">
                <SkeletonLoader className="h-5 w-10 bg-gray-300" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </PageContainer>
  );
};

export default FileExplorerLoader;
