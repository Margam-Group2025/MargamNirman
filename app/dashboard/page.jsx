"use client";
import { useState } from "react";
import DashboardSidebar from "../../components/DashboardSidebar";
import { IndianRupee } from "lucide-react";
import {
  DollarSign,
  TrendingUp,
  Clock,
  CheckCircle,
  Building,
  Calendar,
} from "lucide-react";

export default function ClientDashboard() {
  const propertyInfo = {
    name: "Sai Annex",
    location: "Near Infocity 2 Haripur",
    size: "1,305 sq ft",
    type: "4.5 BHK",
    tower: "Bhubaneswar Odisha",
    possessionDate: "December 2024",
  };

  const financials = {
    totalPrice: 850000,
    paidAmount: 510000,
    remainingAmount: 340000,
    nextInstallment: 85000,
    nextDueDate: "March 15, 2026",
  };

  const constructionProgress = {
    overall: 65,
    foundation: 100,
    structure: 85,
    plumbing: 60,
    electrical: 55,
    finishing: 30,
  };

  const recentUpdates = [
    {
      id: 1,
      title: "12th Floor Plastering Completed",
      date: "Feb 10, 2026",
      type: "construction",
    },
    {
      id: 2,
      title: "Payment Received - $85,000",
      date: "Feb 5, 2026",
      type: "payment",
    },
    {
      id: 3,
      title: "New Progress Photos Uploaded", 
      date: "Feb 1, 2026",
      type: "media",
    },
    {
      id: 4,
      title: "Structural Work 85% Complete",
      date: "Jan 28, 2026",
      type: "construction",
    },
  ];

  return (
    <div className="flex min-h-screen bg-gray-50">
      <DashboardSidebar />

      <main className="flex-1 overflow-y-auto">
        <div className="p-4 lg:p-8">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-3xl text-[#1e3a8a] mb-2">Dashboard</h1>
            <p className="text-gray-600">Welcome back! Here's your property overview.</p>
          </div>

          {/* Property Info Card */}
          <div className="bg-gradient-to-r from-[#1e3a8a] to-[#1e3a8a]/90 text-white rounded-xl shadow-md p-6 mb-8">
            <div className="flex items-start justify-between mb-4">
              <div>
                <h2 className="text-2xl mb-2">{propertyInfo.name}</h2>
                <p className="text-blue-200">{propertyInfo.location}</p>
              </div>
              <div className="bg-white/20 p-3 rounded-lg">
                <Building className="h-8 w-8" />
              </div>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
              <div>
                <div className="text-blue-200 text-sm mb-1">Configuration</div>
                <div>{propertyInfo.type}</div>
              </div>
              <div>
                <div className="text-blue-200 text-sm mb-1">Area</div>
                <div>{propertyInfo.size}</div>
              </div>
              <div>
                <div className="text-blue-200 text-sm mb-1">Location</div>
                <div>{propertyInfo.tower}</div>
              </div>
              <div>
                <div className="text-blue-200 text-sm mb-1">Possession</div>
                <div>{propertyInfo.possessionDate}</div>
              </div>
            </div>
          </div>
 
          {/* Financial Stats */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <div className="bg-white rounded-xl shadow-md p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="bg-blue-100 p-3 rounded-lg">
                  <IndianRupee className="h-6 w-6 text-[#1e3a8a]" />
                </div>
              </div>
              <div className="text-2xl text-gray-900 mb-1">
                ${financials.totalPrice.toLocaleString()}
              </div>
              <div className="text-sm text-gray-600">Total Price</div>
            </div>

            <div className="bg-white rounded-xl shadow-md p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="bg-green-100 p-3 rounded-lg">
                  <CheckCircle className="h-6 w-6 text-[#10b981]" />
                </div>
              </div>
              <div className="text-2xl text-gray-900 mb-1">
                ${financials.paidAmount.toLocaleString()}
              </div>
              <div className="text-sm text-gray-600">Amount Paid</div>
            </div>

            <div className="bg-white rounded-xl shadow-md p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="bg-orange-100 p-3 rounded-lg">
                  <Clock className="h-6 w-6 text-orange-600" />
                </div>
              </div>
              <div className="text-2xl text-gray-900 mb-1">
                ${financials.remainingAmount.toLocaleString()}
              </div>
              <div className="text-sm text-gray-600">Remaining Amount</div>
            </div>

            <div className="bg-white rounded-xl shadow-md p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="bg-blue-100 p-3 rounded-lg">
                  <Calendar className="h-6 w-6 text-[#1e3a8a]" />
                </div>
              </div>
              <div className="text-2xl text-gray-900 mb-1">
                ${financials.nextInstallment.toLocaleString()}
              </div>
              <div className="text-sm text-gray-600">Next Installment</div>
              <div className="text-xs text-orange-600 mt-1">Due: {financials.nextDueDate}</div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Construction Progress */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-xl shadow-md p-6">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-xl text-[#1e3a8a]">Construction Progress</h3>
                  <span className="text-2xl text-[#10b981]">{constructionProgress.overall}%</span>
                </div>

                <div className="space-y-4">
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-gray-700">Overall Progress</span>
                      <span className="text-gray-900">{constructionProgress.overall}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-3">
                      <div
                        className="bg-[#10b981] h-3 rounded-full transition-all"
                        style={{ width: `${constructionProgress.overall}%` }}
                      />
                    </div>
                  </div>

                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-gray-700">Foundation</span>
                      <span className="text-gray-900">{constructionProgress.foundation}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className="bg-[#1e3a8a] h-2 rounded-full transition-all"
                        style={{ width: `${constructionProgress.foundation}%` }}
                      />
                    </div>
                  </div>

                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-gray-700">Structure</span>
                      <span className="text-gray-900">{constructionProgress.structure}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className="bg-[#1e3a8a] h-2 rounded-full transition-all"
                        style={{ width: `${constructionProgress.structure}%` }}
                      />
                    </div>
                  </div>

                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-gray-700">Plumbing</span>
                      <span className="text-gray-900">{constructionProgress.plumbing}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className="bg-[#1e3a8a] h-2 rounded-full transition-all"
                        style={{ width: `${constructionProgress.plumbing}%` }}
                      />
                    </div>
                  </div>

                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-gray-700">Electrical</span>
                      <span className="text-gray-900">{constructionProgress.electrical}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className="bg-[#1e3a8a] h-2 rounded-full transition-all"
                        style={{ width: `${constructionProgress.electrical}%` }}
                      />
                    </div>
                  </div>

                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-gray-700">Finishing</span>
                      <span className="text-gray-900">{constructionProgress.finishing}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className="bg-[#1e3a8a] h-2 rounded-full transition-all"
                        style={{ width: `${constructionProgress.finishing}%` }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Recent Updates */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-xl shadow-md p-6">
                <h3 className="text-xl text-[#1e3a8a] mb-6">Recent Updates</h3>
                <div className="space-y-4">
                  {recentUpdates.map((update) => (
                    <div key={update.id} className="flex items-start gap-3 pb-4 border-b border-gray-100 last:border-0">
                      <div
                        className={`p-2 rounded-lg flex-shrink-0 ${
                          update.type === "construction"
                            ? "bg-blue-100"
                            : update.type === "payment"
                            ? "bg-green-100"
                            : "bg-purple-100"
                        }`}
                      >
                        {update.type === "construction" ? (
                          <TrendingUp className="h-4 w-4 text-[#1e3a8a]" />
                        ) : update.type === "payment" ? (
                          <DollarSign className="h-4 w-4 text-[#10b981]" />
                        ) : (
                          <CheckCircle className="h-4 w-4 text-purple-600" />
                        )}
                      </div>
                      <div className="flex-1">
                        <div className="text-sm text-gray-900 mb-1">{update.title}</div>
                        <div className="text-xs text-gray-500">{update.date}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
