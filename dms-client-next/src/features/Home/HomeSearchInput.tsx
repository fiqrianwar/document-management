import React from "react";
import {
  Button,
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/components/ui";
import { SearchIcon } from "lucide-react";

const HomeSearchInput = () => {
  return (
    <div>
      <InputGroup>
        <InputGroupInput id="inline-start-input" placeholder="Search..." />
        <InputGroupAddon align="inline-end">
          <SearchIcon className="text-primary" />
        </InputGroupAddon>
      </InputGroup>
    </div>
  );
};

export default HomeSearchInput;
