"use client";

import { PageContainer } from "@/components/layout";

import React from "react";
import HomeTableList from "./HomeTableList";
import HomeSearchInput from "./HomeSearchInput";
import HomeCTAButton from "./HomeCTAButton";
import {
  Button,
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  Input,
} from "@/components/primitives";
import { Folder } from "lucide-react";

const Home = () => {
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
                onClick={() => console.log("upload")}
              />

              <HomeCTAButton
                typeCTA="add-folder"
                onClick={() => console.log("add")}
              />
            </div>
          </div>

          <HomeTableList tableBody={bodyTable} />
        </div>
      </div>

      <Dialog>
        <form>
          <DialogTrigger asChild>
            <Button variant="outline">Open Dialog</Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-106.25">
            <DialogHeader>
              <DialogTitle>Edit profile</DialogTitle>
              <DialogDescription>
                Make changes to your profile here. Click save when you&apos;re
                done.
              </DialogDescription>
            </DialogHeader>
            <div className="grid gap-4">
              <div className="grid gap-3">
                {/* <Label htmlFor="name-1">Name</Label> */}
                <Input id="name-1" name="name" defaultValue="Pedro Duarte" />
              </div>
              <div className="grid gap-3">
                {/* <Label htmlFor="username-1">Username</Label> */}
                <Input
                  id="username-1"
                  name="username"
                  defaultValue="@peduarte"
                />
              </div>
            </div>
            <DialogFooter>
              <DialogClose asChild>
                <Button variant="outline">Cancel</Button>
              </DialogClose>
              <Button type="submit">Save changes</Button>
            </DialogFooter>
          </DialogContent>
        </form>
      </Dialog>
    </PageContainer>
  );
};

export default Home;
