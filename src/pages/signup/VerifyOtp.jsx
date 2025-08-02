import React, { useState, useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { Loader2 } from "lucide-react";
import API from "@/lib/axios";
import { saveToken } from "@/lib/authHelpers";
import Logo from "@/components/Logo";

const VerifyOtp = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const email = searchParams.get("email");

  const [otp, setOtp] = useState("");
  const [loading, setLoading] = useState(false);
  const [resending, setResending] = useState(false);

  useEffect(() => {
    if (!email) {
      toast.error("Missing email. Redirecting...");
      navigate("/signIn");
    }
  }, [email, navigate]);

  const handleVerify = async () => {
    if (!email) {
      toast.error("Missing email.");
      return;
    }

    if (!otp || otp.length !== 6) {
      toast.error("Enter a valid 6-digit OTP.");
      return;
    }

    setLoading(true);
    try {
      const res = await API.post("/users/verify-otp", {
        email,
        otp: otp.trim(),
      });

      const token = res.data?.token;
      if (token) {
        saveToken(token);
      } else {
        toast.error("Token missing from server response.");
        return;
      }

      toast.success("Email verified successfully!");
      localStorage.setItem("verifiedEmail", email);
      navigate("/onboardingFlow");
    } catch (err) {
      const message = err.response?.data?.message || "OTP verification failed";
      toast.error(message);
    } finally {
      setLoading(false);
    }
  };

  const handleResendOtp = async () => {
    if (!email) {
      toast.error("Missing email.");
      return;
    }

    setResending(true);
    try {
      await API.post("/users/resend-otp", { email });
      toast.success("OTP resent successfully!");
    } catch (err) {
      const message = err.response?.data?.message || "Resend failed";
      toast.error(message);
    } finally {
      setResending(false);
    }
  };

  return (
    <section className="h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900 overflow-hidden relative">
      {/* Background Gradients */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-secondaryGreen-light to-gray-50 dark:from-[#0D0D0D] dark:via-secondaryGreen-dark dark:to-[#0D0D0D] opacity-80 -z-10"></div>
      <div className="absolute inset-0 bg-[url('/pattern-dots-light.png')] dark:bg-[url('/pattern-dots-dark.png')] bg-repeat opacity-5 -z-10"></div>

      <div className="relative glass-card max-w-lg w-full p-8 text-center my-8 mx-4">
        {/* Logo */}
        <Logo />

        {/* Heading */}
        <h2 className="font-montserrat font-bold text-2xl text-textColor-light dark:text-textColor-dark mb-4">
          Verify Your Email
        </h2>

        {/* Subtext */}
        <p className="font-ubuntu text-xs text-textColor-light dark:text-textColor-dark mb-6 max-w-md mx-auto">
          We've sent a 6-digit OTP to{" "}
          <span className="font-semibold">{email}</span>
        </p>

        {/* OTP Input */}
        <div className="mb-4">
          <input
            type="text"
            placeholder="Enter OTP"
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
            maxLength={6}
            className="w-full placeholder:text-xs text-center tracking-widest font-mono text-lg p-2 pl-4 rounded-xl bg-gray-100 dark:bg-gray-700 text-textColor-light dark:text-textColor-dark border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-1 focus:ring-primaryGreen-light dark:focus:ring-primaryGreen-dark"
          />
        </div>

        {/* Verify Button */}
        <button
          onClick={handleVerify}
          disabled={loading}
          className="primary-button text-sm w-full py-3 mb-4"
        >
          {loading ? (
            <Loader2 className="h-5 w-5 animate-spin mx-auto" />
          ) : (
            "Verify OTP"
          )}
        </button>

        {/* Resend OTP */}
        <div className="text-xs text-muted-foreground text-center mt-2">
          Didn’t get it?{" "}
          <button
            onClick={handleResendOtp}
            disabled={resending}
            className="text-primary font-medium hover:underline transition"
          >
            {resending ? "Resending..." : "Resend OTP"}
          </button>
        </div>
      </div>
    </section>
  );
};

export default VerifyOtp;
