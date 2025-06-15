import React, { useState } from "react";
import axios from "axios"; // axios import karna mat bhoolna
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import { Checkbox } from "../components/ui/checkbox";
import { Separator } from "../components/ui/separator";
import { Eye, EyeOff } from "lucide-react";
import { FormCard, FormCardContent } from "../components/ui/cardd";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "../components/ui/Navbar";
import Footer from "../components/ui/Footer";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const LoginForm = () => {
  const [success, setSuccess] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const API_URL = "http://localhost:5000/auth/login"; 

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
  
    try {
      const response = await axios.post(API_URL, { email, password });
  
      // ✅ Login successful toast
      toast.success("✅ Login successful!", {
        position: "top-right",
        autoClose: 3000,
        theme: "colored",
      });
  
      // Local storage mein token save karo
      localStorage.setItem("token", response.data.token);
      setSuccess(true);
  
      // ✅ Redirect after delay
      setTimeout(() => {
        navigate("/"); // desired route pe bhej do
      }, 3000);
  
    } catch (err) {
      setSuccess(false);
  
      const errorMsg = err.response?.data?.message || "Server error. Please try again later.";
      setError(errorMsg);
  
      // ❌ Error toast
      toast.error(`❌ ${errorMsg}`, {
        position: "top-right",
        autoClose: 4000,
        theme: "colored",
      });
    }
  };
  return (
    <>
      <Navbar />
      <div className="min-h bg-gray-50 flex items-center justify-center  px-4 py-12">
        <FormCard className="w-full max-w-md bg-white shadow-lg border-0 pt-6">
          <FormCardContent className="p-8">
            <div className="text-center mb-6">
              <h1 className="text-2xl font-semibold text-gray-900 mb-2">
                Welcome Back!
              </h1>
              <p className="text-gray-600 text-sm">
                Sign in to continue your job search
              </p>
            </div>

            <form className="space-y-4" onSubmit={handleSubmit}>
              <div className="space-y-2">
                <Label
                  htmlFor="email"
                  className="text-sm font-medium text-gray-700"
                >
                  Email Address
                </Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="Enter your email"
                  className="border border-gray-300 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>

              <div className="space-y-2">
                <Label
                  htmlFor="password"
                  className="text-sm font-medium text-gray-700"
                >
                  Password
                </Label>
                <div className="relative">
                  <Input
                    id="password"
                    name="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="Enter your password"
                    className="border border-gray-300 rounded-lg px-3 py-2 pr-10 text-sm focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                  >
                    {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                  </button>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <Checkbox id="remember" />
                  <Label htmlFor="remember" className="text-sm text-gray-700">
                    Remember me
                  </Label>
                </div>
                <a
                  href="#"
                  className="text-sm text-purple-600 hover:text-purple-700 font-medium"
                >
                  Forget password?
                </a>
              </div>

              {/* {error && (
                <p className="text-red-600 text-sm font-medium text-center">
                  {error}
                </p>
              )} */}
              {/* {success && (
                <div className="fixed top-5 left-1/2 transform -translate-x-1/2 bg-green-100 text-green-800 border border-green-400 px-6 py-3 rounded-lg shadow-lg z-50 transition-all duration-300">
                  Login successful! Redirecting...
                </div>
              )}
 */}
              <Button
                type="submit"
                className="w-full bg-purple-600 hover:bg-purple-700 text-white font-medium py-3 rounded-lg text-sm mt-2 transition-colors"
              >
                Sign In
              </Button>
            </form>

            <div className="relative my-6">
              <Separator />
              <span className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white px-3 text-xs text-gray-500">
                Or continue with
              </span>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <Button
                type="button"
                variant="outline"
                className="flex items-center justify-center gap-2 py-2.5 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
              >
                <svg width="18" height="18" viewBox="0 0 24 24">
                  <path
                    fill="#4285F4"
                    d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                  />
                  <path
                    fill="#34A853"
                    d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                  />
                  <path
                    fill="#FBBC05"
                    d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                  />
                  <path
                    fill="#EA4335"
                    d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                  />
                </svg>
                <span className="text-sm font-medium text-gray-700">
                  Google
                </span>
              </Button>
              <Button
                type="button"
                variant="outline"
                className="flex items-center justify-center gap-2 py-2.5 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="#0A66C2">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.23.792 24 1.771 24h20.451c.98 0 1.778-.77 1.778-1.729V1.729C24 .774 23.205 0 22.225 0z" />
                </svg>
                <span className="text-sm font-medium text-gray-700">
                  LinkedIn
                </span>
              </Button>
            </div>

            <p className="text-center mt-6 text-sm text-gray-600">
              Don't have an account?{" "}
              <Link to="/signup" className="text-purple-600 hover:underline">
                Register here
              </Link>
            </p>
          </FormCardContent>
        </FormCard>
        {/* 🔔 Toast message container */}
        <ToastContainer />
      </div>
      <Footer />
    </>
  );
};

export default LoginForm;
