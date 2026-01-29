"use client";

import { PageContainer } from "@/components/layout";

import React from "react";
import HomeTableList from "./HomeTableList";
import HomeSearchInput from "./HomeSearchInput";
import HomeCTAButton from "./HomeCTAButton";

const Home = () => {
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
                variant="upload-files"
                onClick={() => console.log("upload")}
              />

              <HomeCTAButton
                variant="add-folder"
                onClick={() => console.log("add")}
              />
            </div>
          </div>

          <HomeTableList />
        </div>
      </div>
    </PageContainer>
  );
};

export default Home;
