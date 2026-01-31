"use client";

import { PageContainer } from "@/components/layout";

import HomeTableList from "./HomeTableList";
import HomeSearchInput from "./HomeSearchInput";
import HomeCTAButton from "./HomeCTAButton";
import { Folder } from "lucide-react";
import { useEffect, useMemo, useRef } from "react";
import HomeDialogForm, { TypeRef } from "./HomeDialogForm";
import useSWR from "swr";
import { fetcher } from "@/lib/fetcher";
import {
  documentsService,
  useFetchAllDocuments,
} from "@/services/documents/documents";

const Home = () => {
  const { data, isLoading, error } = useFetchAllDocuments();

  const transformData = useMemo(() => {
    return (
      data?.data.map((item) => ({
        id: item.id,
        cells: [
          {
            id: item.id,
            title: (
              <div className="flex gap-2 items-center">
                <Folder />
                <h1>{item.name}</h1>
              </div>
            ),
            onClick: () => console.log("Clicked:", item.name),
          },
          {
            id: `${item.id}-createdBy`,
            title: <span>{item.createdBy}</span>,
          },
          {
            id: `${item.id}-createdAt`,
            title: <span>{new Date(item.createdAt).toLocaleDateString()}</span>,
          },
        ],
      })) ?? []
    );
  }, [data]);

  const refModal = useRef<TypeRef>(null!);
  console.log(error);

  return (
    <PageContainer>
      <div className="p-4">
        <div className="py-5 md:py-14 space-y-4">
          <div className="space-y-4 md:flex justify-between">
            <div className="space-y-4">
              <h1 className="text-xl font-medium">Documents</h1>
              <HomeSearchInput />
            </div>
            <div className="space-y-4 md:flex md:gap-3">
              <HomeCTAButton
                typeCTA="upload-files"
                onClick={() => refModal.current.handleOpenModal("upload-files")}
              />

              <HomeCTAButton
                typeCTA="add-folder"
                onClick={() => refModal.current.handleOpenModal("add-folder")}
              />
            </div>
          </div>

          <HomeTableList tableBody={transformData} />
        </div>
      </div>

      <HomeDialogForm ref={refModal} />
    </PageContainer>
  );
};

export default Home;
