import AuthForm from "@/components/forms/AuthForm";
import AuthProvider from "@/context/AuthProvider";
import React from "react";

const SignIn = () => {
  return (
    <section className="flex-center size-full max-sm:px-6">
      <AuthProvider>
        <AuthForm type="sign-in" />
      </AuthProvider>
    </section>
  );
};

export default SignIn;
