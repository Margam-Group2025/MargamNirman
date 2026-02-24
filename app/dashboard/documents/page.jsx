"use client";
import DashboardSidebar from "@/components/DashboardSidebar";
import { FileText, Download, Eye, Calendar } from "lucide-react";

export default function ClientDocuments() {
  const documents = [
    {
      id: 1,
      name: "Sale Agreement", 
      type: "Legal",
      uploadDate: "Jan 15, 2025",
      size: "2.4 MB",
      format: "PDF",
      icon: FileText,
    },
    {
      id: 2,
      name: "Payment Receipt - Booking",
      type: "Financial",
      uploadDate: "Jan 10, 2025",
      size: "156 KB",
      format: "PDF",
      icon: FileText,
    },
    {
      id: 3,
      name: "Property Registration Certificate",
      type: "Legal",
      uploadDate: "Jan 20, 2025",
      size: "1.8 MB",
      format: "PDF",
      icon: FileText,
    },
    {
      id: 4,
      name: "Floor Plan - Unit 1204",
      type: "Technical",
      uploadDate: "Feb 1, 2025",
      size: "3.2 MB",
      format: "PDF",
      icon: FileText,
    },
    {
      id: 5,
      name: "Payment Receipt - Installment 2",
      type: "Financial",
      uploadDate: "Apr 12, 2025",
      size: "145 KB",
      format: "PDF",
      icon: FileText,
    },
    {
      id: 6,
      name: "Payment Receipt - Installment 3",
      type: "Financial",
      uploadDate: "Jul 10, 2025",
      size: "148 KB",
      format: "PDF",
      icon: FileText,
    },
    {
      id: 7,
      name: "Payment Receipt - Installment 4",
      type: "Financial",
      uploadDate: "Oct 12, 2025",
      size: "152 KB",
      format: "PDF",
      icon: FileText,
    },
    {
      id: 8,
      name: "RERA Approval Certificate",
      type: "Legal",
      uploadDate: "Jan 15, 2025",
      size: "980 KB",
      format: "PDF",
      icon: FileText,
    },
    {
      id: 9,
      name: "Building Specifications",
      type: "Technical",
      uploadDate: "Jan 15, 2025",
      size: "4.5 MB",
      format: "PDF",
      icon: FileText,
    },
    {
      id: 10,
      name: "Payment Receipt - Installment 5",
      type: "Financial",
      uploadDate: "Jan 14, 2026",
      size: "149 KB",
      format: "PDF",
      icon: FileText,
    },
    {
      id: 11,
      name: "Payment Receipt - Installment 6",
      type: "Financial",
      uploadDate: "Feb 5, 2026",
      size: "151 KB",
      format: "PDF",
      icon: FileText,
    },
    {
      id: 12,
      name: "Amenities Specifications",
      type: "Technical",
      uploadDate: "Feb 8, 2026",
      size: "2.1 MB",
      format: "PDF",
      icon: FileText,
    },
  ];

  const documentTypes = ["All", "Legal", "Financial", "Technical"];
  const [activeType, setActiveType] = React.useState("All");

  const filteredDocuments = activeType === "All"
    ? documents
    : documents.filter((doc) => doc.type === activeType);

  return (
    <div className="flex min-h-screen bg-gray-50">
      <DashboardSidebar />

      <main className="flex-1 overflow-y-auto">
        <div className="p-4 lg:p-8">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-3xl text-[#1e3a8a] mb-2">Documents</h1>
            <p className="text-gray-600">Access and download all your property documents</p>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
            <div className="bg-white rounded-xl shadow-md p-6">
              <div className="text-sm text-gray-600 mb-2">Total Documents</div>
              <div className="text-3xl text-gray-900">{documents.length}</div>
            </div>
            <div className="bg-white rounded-xl shadow-md p-6">
              <div className="text-sm text-gray-600 mb-2">Legal Documents</div>
              <div className="text-3xl text-[#1e3a8a]">
                {documents.filter((d) => d.type === "Legal").length}
              </div>
            </div>
            <div className="bg-white rounded-xl shadow-md p-6">
              <div className="text-sm text-gray-600 mb-2">Financial Records</div>
              <div className="text-3xl text-[#10b981]">
                {documents.filter((d) => d.type === "Financial").length}
              </div>
            </div>
            <div className="bg-white rounded-xl shadow-md p-6">
              <div className="text-sm text-gray-600 mb-2">Technical Docs</div>
              <div className="text-3xl text-purple-600">
                {documents.filter((d) => d.type === "Technical").length}
              </div>
            </div>
          </div>

          {/* Filter Tabs */}
          <div className="bg-white rounded-xl shadow-md p-4 mb-6">
            <div className="flex flex-wrap gap-3">
              {documentTypes.map((type) => (
                <button
                  key={type}
                  onClick={() => setActiveType(type)}
                  className={`px-6 py-2 rounded-lg transition-colors ₹{
                    activeType === type
                      ? "bg-[#1e3a8a] text-white"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }`}
                >
                  {type}
                </button>
              ))}
            </div>
          </div>

          {/* Documents Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredDocuments.map((doc) => {
              const Icon = doc.icon;
              return (
                <div
                  key={doc.id}
                  className="bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow overflow-hidden"
                >
                  <div className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div
                        className={`p-3 rounded-lg ₹{
                          doc.type === "Legal"
                            ? "bg-blue-100"
                            : doc.type === "Financial"
                            ? "bg-green-100"
                            : "bg-purple-100"
                        }`}
                      >
                        <Icon
                          className={`h-6 w-6 ₹{
                            doc.type === "Legal"
                              ? "text-[#1e3a8a]"
                              : doc.type === "Financial"
                              ? "text-[#10b981]"
                              : "text-purple-600"
                          }`}
                        />
                      </div>
                      <span
                        className={`px-3 py-1 rounded-full text-xs ₹{
                          doc.type === "Legal"
                            ? "bg-blue-100 text-blue-800"
                            : doc.type === "Financial"
                            ? "bg-green-100 text-green-800"
                            : "bg-purple-100 text-purple-800"
                        }`}
                      >
                        {doc.type}
                      </span>
                    </div>

                    <h3 className="text-lg text-gray-900 mb-2 line-clamp-2">{doc.name}</h3>

                    <div className="space-y-2 mb-4">
                      <div className="flex items-center gap-2 text-sm text-gray-600">
                        <Calendar className="h-4 w-4" />
                        <span>{doc.uploadDate}</span>
                      </div>
                      <div className="flex items-center justify-between text-sm text-gray-600">
                        <span>{doc.format}</span>
                        <span>{doc.size}</span>
                      </div>
                    </div>

                    <div className="flex gap-2 pt-4 border-t border-gray-200">
                      <button className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-[#1e3a8a] text-white rounded-lg hover:bg-[#1e3a8a]/90 transition-colors">
                        <Download className="h-4 w-4" />
                        Download
                      </button>
                      <button className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors">
                        <Eye className="h-4 w-4" />
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {filteredDocuments.length === 0 && (
            <div className="text-center py-16">
              <p className="text-gray-500 text-lg">No documents found in this category.</p>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}

// Add React import for useState
import React from "react";
