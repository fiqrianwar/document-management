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
        <h1 className="text-xl font-medium">Documents</h1>

        <div className="py-8 space-y-4">
          <HomeSearchInput />
          <HomeCTAButton
            variant="upload-files"
            onClick={() => console.log("upload")}
          />
          <HomeCTAButton
            variant="add-folder"
            onClick={() => console.log("add")}
          />
          <HomeTableList />
        </div>
      </div>
    </PageContainer>
  );
};

export default Home;
