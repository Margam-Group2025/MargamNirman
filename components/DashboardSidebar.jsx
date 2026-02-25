"use client";
import Link from "next/link";
import {usePathname} from "next/navigation";
import {
  LayoutDashboard,
  CreditCard,
  TrendingUp,
  FileText,
  User,
  LogOut,
  Building2,
  Menu,
  X,
} from "lucide-react";
import { useState } from "react";

const clientLinks = [
  { to: "/dashboard", icon: LayoutDashboard, label: "Dashboard" },
  { to: "/dashboard/payments", icon: CreditCard, label: "Payments" },
  { to: "/dashboard/progress", icon: TrendingUp, label: "Progress" },
  { to: "/dashboard/documents", icon: FileText, label: "Documents" },
  { to: "/dashboard/profile", icon: User, label: "Profile" },
];

export default function DashboardSidebar() {
  const location = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      {/* Mobile Menu Button */}
      <button
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        className="lg:hidden fixed top-4 left-4 z-50 bg-[#1e3a8a] text-white p-2 rounded-lg shadow-lg"
      >
        {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
      </button>

      {/* Sidebar */}
      <aside
        className={`
          fixed lg:sticky top-0 h-screen bg-[#f9fafb] border-r border-gray-200 w-64 flex flex-col
          transition-transform duration-300 z-40
          ${isMobileMenuOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"}
        `}
      >
        {/* Logo */}
        <div className="p-6 border-b border-gray-200">
          <Link href="/" className="flex items-center gap-2">
            <div className="bg-[#1e3a8a] p-2 rounded-lg">
              <Building2 className="text-white h-6 w-6" />
            </div>
            <span className="text-xl text-[#1e3a8a]">Margam Nirman</span>
          </Link>
        </div>

        {/* Navigation */}
        <nav className="flex-1 p-4 overflow-y-auto" >
          <div className="space-y-2 ">
            {clientLinks.map((link) => {
              const Icon = link.icon;
              const isActive = location.pathname === link.to;

              return (
                <Link
                  key={link.to}
                  href={link.to}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`
                    flex items-center gap-3 px-4 py-3 rounded-lg transition-colors
                    ${
                      isActive
                        ? "bg-[#1e3a8a] text-white"
                        : "text-blue-900 hover:bg-blue-900 hover:text-white"
                    }
                  `}
                >
                  <Icon className="h-5 w-5" />
                  <span>{link.label}</span>
                </Link>
              );
            })}
          </div>
        </nav>

        {/* Logout */}
        <div className="p-4 border-t border-gray-200">
          <Link
            href="/loginpage"
            className="flex items-center gap-3 px-4 py-3 rounded-lg text-red-600 hover:bg-red-50 transition-colors"
          >
            <LogOut className="h-5 w-5" />
            <span>Logout</span>
          </Link>
        </div>
      </aside>

      {/* Mobile Overlay */}
      {isMobileMenuOpen && (
        <div
          className="lg:hidden fixed inset-0 bg-black/50 z-30"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}
    </>
  );
}
