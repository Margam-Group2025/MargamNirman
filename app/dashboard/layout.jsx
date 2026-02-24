"use client";

import { useEffect } from "react";
// import DashboardSidebar from "@/components/DashboardSidebar";

export default function DashboardLayout({ children }) {

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      window.location.href = "/loginpage";
    }
  }, []);

  return (
    <div className="flex min-h-screen">
      
      {/* Sidebar
      <DashboardSidebar /> */}

      {/* Main Content */}
      <div className="flex-1 p-6 bg-gray-100">
        {children}
      </div>

    </div>
  );
}