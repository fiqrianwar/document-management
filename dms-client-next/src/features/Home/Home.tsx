"use client";

import { PageContainer } from "@/components/layout";

import HomeTableList from "./HomeTableList";
import HomeSearchInput from "./HomeSearchInput";
import HomeCTAButton from "./HomeCTAButton";
import { Folder } from "lucide-react";
import { useRef } from "react";
import HomeDialogForm, { TypeRef } from "./HomeDialogForm";

const Home = () => {
  const refModal = useRef<TypeRef>(null!);
  const bodyTable = [
    {
      id: "1",
      cells: [
        {
          id: "1",
          title: (
            <div className="flex gap-2 items-center">
              <Folder />
              <h1>aksm</h1>
            </div>
          ),
          onClick: () => console.log("tes"),
        },
        {
          id: "2",
          title: "books",
        },
        {
          id: "3",
          title: "books",
        },
        {
          id: "4",
          title: "books",
        },
      ],
      // onClick?: () => void
    },
  ];

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

          <HomeTableList tableBody={bodyTable} />
        </div>
      </div>

      <HomeDialogForm ref={refModal} />
    </PageContainer>
  );
};

export default Home;
