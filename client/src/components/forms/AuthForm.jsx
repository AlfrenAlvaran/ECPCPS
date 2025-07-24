import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Form } from "../ui/form";
import CustomInput from "../inputs/CustomInput";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { AuthFormSchema } from "@/lib/schema";
import { Button } from "../ui/button";
const AuthForm = ({ type }) => {
  const [loading, isLoading] = useState(false);
  const form = useForm({
    resolver: zodResolver(AuthFormSchema(type)),
    defaultValues: {
      email: "",
      name: "",
      password: "",
    },
  });
  return (
    <section className="flex min-h-screen max-w-[420px] flex-col justify-center gap-5 py-10 md:gap-8">
      <header className="flex flex-col gap-5 md:gap-8">
        <Link
          to="/sign-in"
          className="cursor-pointer flex items-center gap-2 p-2 px-4"
        >
          <img
            src="/logo/logo.jpg"
            alt="EPCPS Logo"
            className="w-15 h-15 mb-3 rounded-full"
          />
          <div className="flex flex-col">
            <h1 className="text-3xl font-bold text-gray-800 tracking-wide">
              EPCPS
            </h1>
            <p className="text-sm text-gray-400">Infinity and Beyond</p>
          </div>
        </Link>
      </header>

      <Form {...form}>
        <form className="space-y-8">
          <CustomInput
            control={form.control}
            name={"email"}
            placeholder={"Enter your email"}
            label={"email"}
          />
          <CustomInput
            control={form.control}
            name={"email"}
            placeholder={"Enter your password"}
            label={"password"}
          />

          <Button     className="w-full py-2 px-4 text-white font-semibold rounded-lg bg-gradient-to-r from-purple-500 via-pink-500 to-fuchsia-500 hover:brightness-110 transition">
            Sign In
          </Button>
        </form>
      </Form>
    </section>
  );
};

export default AuthForm;
