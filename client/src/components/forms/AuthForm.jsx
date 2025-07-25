import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Form } from "@/components/ui/form";
import CustomInput from "@/components/inputs/CustomInput";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { AuthFormSchema } from "@/lib/schema";
import { Button } from "@/components/ui/button";
import { Loader2 } from "lucide-react";
import { toast } from "sonner";
import { AuthContext } from "@/context/AuthProvider";
const AuthForm = ({ type }) => {
  const [loading, setLoading] = useState(false);
  const { SignIn } = useContext(AuthContext);
  const form = useForm({
    resolver: zodResolver(AuthFormSchema(type)),
    defaultValues: {
      email: "",
      name: "",
      password: "",
    },
  });

  const navigate = useNavigate();

  const onProcess = async (data) => {
    console.log("Form submitted", data);
    try {
      setLoading(true);
      if (type === "sign-in") {
        const ok = await SignIn({
          email: data.email,
          password: data.password,
        });

        if (!ok) {
          toast.error("Server Error");
        } else {
          navigate("/dashboard");
        }
      }
    } catch (error) {
      toast.error(error?.response?.data?.message || "Invalid login");
    } finally {
      setLoading(false);
    }
  };

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
        <form onSubmit={form.handleSubmit(onProcess)} className="space-y-8">
          <CustomInput
            control={form.control}
            name="email"
            label="Email"
            placeholder="Enter your email"
          />
          <CustomInput
            control={form.control}
            name="password"
            label="Password"
            placeholder="Enter your password"
            type="password"
          />

          <button
            type="submit"
            className="cursor-pointer  w-full py-2 px-4 text-white font-semibold rounded-lg bg-gradient-to-r from-purple-500 via-pink-500 to-fuchsia-500 hover:brightness-110 transition"
            disabled={loading}
          >
            {loading ? (
              <>
                <Loader2 className="animate-spin" size={30} /> loading...
              </>
            ) : (
              "Sign In"
            )}
          </button>
        </form>
      </Form>
    </section>
  );
};

export default AuthForm;
