import { createContext, useEffect, useState } from "react";
import { toast } from "sonner";
import { sign } from "@/apis/auth";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [isLoading, setLoading] = useState(false);
  useEffect(() => {
    console.log(import.meta.env.VITE_BACKEND_URL);
  }, []);
  const SignIn = async (data) => {
    try {
      setLoading(true);
      const response = await sign(data);

      if (!response?.data) {
        toast.error(response?.message || "Login failed");
        return false;
      }
      if (!response?.data || !response.data.data) {
        toast.error(response?.message || "Login failed");
        return false;
      }
      const { token } = response.data.data;
      if (!token) {
        toast.error("Invalid Login response");
        return false;
      }

      localStorage.setItem("token", token);

      toast.success("Login Success");
      return true;
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
      return false;
    } finally {
      setLoading(false);
    }
  };

  return (
    <AuthContext.Provider value={{ SignIn, isLoading }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
