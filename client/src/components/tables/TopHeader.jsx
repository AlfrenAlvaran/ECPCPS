import React from "react";
import { Button } from "../ui/button";
import { PlusIcon } from "lucide-react";

const TopHeader = () => {
  return (
    <div className="flex flex-row justify-between items-center px-8 pt-8">
      <Button>
        <PlusIcon className="w-4 h-4 mr-2" />
        Add new Events
      </Button>
    </div>
  );
};

export default TopHeader;
