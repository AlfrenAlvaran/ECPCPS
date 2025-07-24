import React from "react";
import { FormControl, FormField, FormLabel } from "../ui/form";
import { Input } from "../ui/input";

const CustomInput = ({ control, name, label, placeholder }) => {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <div className="flex-1 flex-col gap-1.5">
          <FormLabel className={"text-[14px] font-medium text-gray-700"}>
            {label}
          </FormLabel>
          <div className="flex w-full flex-col">
            <FormControl>
              <Input
                id={name}
                placeholder={placeholder}
                className="w-full h-9 !px-4 !py-3 text-[16px] placeholder:text-[16px] placeholder:pr-2 rounded-lg border border-gray-300 text-gray-900 placeholder:text-gray-500 focus-visible:ring-[3px] focus-visible:ring-ring/50"
                type={
                  name === "password"
                    ? "password"
                    : name === "date"
                    ? "date"
                    : name === "amount"
                    ? "number"
                    : "text"
                }
                step="any"
                {...field}
                value={field.value ?? ""}
              />
            </FormControl>
          </div>
        </div>
      )}
    />
  );
};

export default CustomInput;
