"use client";
import { useState } from "react";
import {
  Building2,
  Mail,
  Lock,
  Phone,
  User,
  ArrowLeft,
  Eye,
  EyeOff,
  CheckCircle2,
} from "lucide-react";
import Link from "next/link";

const emptyForm = { email: "", password: "", name: "", phone: "" };

export default function Login() {
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState(emptyForm);
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  // Handle form submission
  const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    // Basic validation
    if (!formData.email || !formData.password) {
      alert("Email and Password are required");
      return;
    }

    if (!isLogin && (!formData.name || !formData.phone)) {
      alert("All fields are required");
      return;
    }

    const url = isLogin
      ? "http://localhost:5000/api/auth/login"
      : "http://localhost:5000/api/auth/register";

    const res = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    const data = await res.json();

    if (!res.ok) {
      alert(data.message);
      return;
    }

    if (isLogin) {
      // Store token
      localStorage.setItem("token", data.token);

      setSubmitted(true);

      // Redirect after login
      window.location.href = "/dashboard";
    } else {
      alert("Registration successful. Please login.");
      switchTab(true);
    }

  } catch (error) {
    console.error(error);
    alert("Something went wrong");
  }
};

  const switchTab = (login) => {
    setIsLogin(login);
    setFormData(emptyForm);
    setSubmitted(false);
  };

  return (
    <div className="min-h-screen flex bg-gray-50">

      {/* LEFT PANEL */}
      <div
        className="hidden lg:flex lg:w-1/2 flex-col relative text-white bg-gradient-to-t from-blue-300 to-gray-200 p-12"
      >
        {/* Background image */}
        <div
          className="absolute inset-0 opacity-10 bg-cover bg-center"
          style={{ backgroundImage: "url('/image/loginbg.jpg')" }}
        />

        <div className="relative z-10 flex flex-col h-full p-12">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-white/20 backdrop-blur-md rounded-xl flex items-center justify-center">
              <Building2 className="w-6 h-6 text-blue-500" />
            </div>
            <span className="text-xl font-bold text-blue-600">Margam Nirman</span>
          </div>

          {/* Text */}
          <div className="mt-auto mb-auto">
            <h1 className="text-5xl font-bold leading-tight mb-6 text-black">
              Welcome to <br />
              <span className="text-blue-600 font-sans">Margam Nirman</span>
            </h1>

            <p className="text-black/80 text-lg font-sans">
              Streamline your business operations with our powerful corporate
              management platform.
            </p>

            <div className="mt-10 space-y-3 text-black/80 font-sans">
              {[
                "Enterprise-grade security",
                "Real-time collaboration",
                "Advanced analytics",
              ].map((feat) => (
                <div key={feat} className="flex items-center gap-3 text-sm">
                  <div className="w-2 h-2 bg-blue-700 rounded-full" />
                  {feat}
                </div>
              ))}
            </div>
            {/* Bottom quote */}
          <div
            className="mt-44 rounded-2xl p-5 bg-slate-200/70 backdrop-blur-sm"
          >
            <p className="text-sm italic text-black/80" >
              "The best platform we've used for managing our corporate teams. Couldn't be happier."
            </p>
            <p className="text-xs mt-2 font-medium text-black/80" >
              — Mr. Jena
            </p>
          </div>
          </div>
        </div>
      </div>

      {/* RIGHT PANEL */}
      <div className="flex-1 flex flex-col">

        {/* Top bar */}
        <div className="flex items-center justify-between px-8 py-6">
          <div className="hidden lg:block" />

          <Link
            href="/"
            className="flex items-center gap-2 text-sm font-medium text-gray-500 hover:text-gray-900 transition"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>
        </div>

        {/* FORM */}
        <div className="flex-1 flex items-center justify-center px-6">
          <div className="w-full max-w-md bg-white shadow-xl rounded-3xl p-8 border">

            {/* Tabs */}
            <div className="flex bg-gray-100 rounded-xl p-1 mb-8">
              <button
                onClick={() => switchTab(true)}
                className={`flex-1 py-2 rounded-lg text-sm font-semibold transition ₹{
                  isLogin
                    ? "bg-gradient-to-r from-blue-500 to-purple-600 text-white"
                    : "text-gray-500"
                }`}
              >
                Sign In
              </button>

              <button
                onClick={() => switchTab(false)}
                className={`flex-1 py-2 rounded-lg text-sm font-semibold transition ₹{
                  !isLogin
                    ? "bg-gradient-to-r from-blue-500 to-purple-600 text-white"
                    : "text-gray-500"
                }`}
              >
                Register
              </button>
            </div>

            {/* Heading */}
            <h2 className="text-2xl font-bold mb-2 text-gray-800">
              {isLogin ? "Welcome back" : "Create account"}
            </h2>

            <p className="text-sm text-gray-500 mb-6">
              {isLogin
                ? "Enter your credentials to access dashboard"
                : "Fill details to get started"}
            </p>

            {/* Success */}
            {submitted && (
              <div className="flex items-center gap-3 bg-green-100 text-green-700 p-3 rounded-lg mb-4 text-sm">
                <CheckCircle2 className="w-4 h-4" />
                {isLogin ? "Logging you in..." : "Account created!"}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">

              {!isLogin && (
                <InputField
                  icon={<User />}
                  type="text"
                  placeholder="Full Name"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                />
              )}

              <InputField
                icon={<Mail />}
                type="email"
                placeholder="Email"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
              />

              {!isLogin && (
                <InputField
                  icon={<Phone />}
                  type="tel"
                  placeholder="Phone"
                  value={formData.phone}
                  onChange={(e) =>
                    setFormData({ ...formData, phone: e.target.value })
                  }
                />
              )}

              {/* Password */}
              <div className="relative">
                <Lock className="absolute left-3 top-3 w-4 h-4 text-gray-400" />
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Password"
                  className="w-full pl-10 pr-10 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                  value={formData.password}
                  onChange={(e) =>
                    setFormData({ ...formData, password: e.target.value })
                  }
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-3 text-gray-400"
                >
                  {showPassword ? (
                    <EyeOff className="w-4 h-4" />
                  ) : (
                    <Eye className="w-4 h-4" />
                  )}
                </button>
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg font-semibold transition"
              >
                {isLogin ? "Sign In" : "Create Account"}
              </button>
            </form>
            {/* Footer note */}
            <p className="text-center text-xs mt-6" style={{ color: "hsl(var(--muted-foreground))" }}>
              By continuing, you agree to our{" "}
              <span className="underline cursor-pointer" style={{ color: "hsl(var(--primary))" }}>Terms of Service</span>
              {" "}and{" "}
              <span className="underline cursor-pointer" style={{ color: "hsl(var(--primary))" }}>Privacy Policy</span>
            </p>   
          </div>
        </div>
      </div>
    </div>
  );
}

/* Reusable Input */
function InputField({ icon, ...props }) {
  return (
    <div className="relative">
      <div className="absolute left-3 top-3 w-4 h-4 text-gray-400">
        {icon}
      </div>
      <input
        {...props}
        className="w-full pl-10 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
      />
    </div>
  );
}