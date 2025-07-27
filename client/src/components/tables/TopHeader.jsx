import React from "react";
import { Button } from "../ui/button";
import { PlusIcon } from "lucide-react";

const TopHeader = ({ event }) => {
  return (
    <div className="flex flex-row justify-between items-center px-8 ">
      <Button>
        <PlusIcon className="w-4 h-4 mr-2" />
        {event}
      </Button>
    </div>
  );
};

export default TopHeader;
