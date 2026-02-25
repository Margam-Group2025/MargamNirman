import DashboardSidebar from "@/components/DashboardSidebar";
import { Download, CheckCircle, Clock, AlertCircle } from "lucide-react";

export default function ClientPayments() {
  const paymentSummary = {
    totalPrice: 850000,
    paidAmount: 510000,
    remainingAmount: 340000,
    paymentPercentage: 60,
  };

  const installmentHistory = [
    {
      id: 1,
      installmentNo: 1,
      description: "Booking Amount",
      amount: 85000,
      dueDate: "Jan 15, 2025",
      paidDate: "Jan 10, 2025",
      status: "paid",
      receiptNo: "REC-2025-001",
    },
    {
      id: 2,
      installmentNo: 2,
      description: "Foundation Stage",
      amount: 85000,
      dueDate: "Apr 15, 2025",
      paidDate: "Apr 12, 2025",
      status: "paid",
      receiptNo: "REC-2025-002",
    },
    {
      id: 3,
      installmentNo: 3,
      description: "Structure Stage - Phase 1",
      amount: 85000,
      dueDate: "Jul 15, 2025",
      paidDate: "Jul 10, 2025",
      status: "paid",
      receiptNo: "REC-2025-003",
    },
    {
      id: 4,
      installmentNo: 4,
      description: "Structure Stage - Phase 2",
      amount: 85000,
      dueDate: "Oct 15, 2025",
      paidDate: "Oct 12, 2025",
      status: "paid",
      receiptNo: "REC-2025-004",
    },
    {
      id: 5,
      installmentNo: 5,
      description: "Plumbing & Electrical",
      amount: 85000,
      dueDate: "Jan 15, 2026",
      paidDate: "Jan 14, 2026",
      status: "paid",
      receiptNo: "REC-2026-001",
    },
    {
      id: 6,
      installmentNo: 6,
      description: "Finishing Work - Phase 1",
      amount: 85000,
      dueDate: "Mar 15, 2026",
      paidDate: "Feb 5, 2026",
      status: "paid",
      receiptNo: "REC-2026-002",
    },
    {
      id: 7,
      installmentNo: 7,
      description: "Finishing Work - Phase 2",
      amount: 85000,
      dueDate: "Jun 15, 2026",
      paidDate: null,
      status: "pending",
      receiptNo: null,
    },
    {
      id: 8,
      installmentNo: 8,
      description: "Final Payment",
      amount: 85000,
      dueDate: "Sep 15, 2026",
      paidDate: null,
      status: "upcoming",
      receiptNo: null,
    },
    {
      id: 9,
      installmentNo: 9,
      description: "Handover & Documentation",
      amount: 85000,
      dueDate: "Dec 15, 2026",
      paidDate: null,
      status: "upcoming",
      receiptNo: null,
    },
    {
      id: 10,
      installmentNo: 10,
      description: "Possession",
      amount: 85000,
      dueDate: "Dec 31, 2026",
      paidDate: null,
      status: "upcoming",
      receiptNo: null,
    },
  ];

  const getStatusBadge = (status) => {
    switch (status) {
      case "paid":
        return (
          <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-sm bg-green-100 text-green-800">
            <CheckCircle className="h-4 w-4" />
            Paid
          </span>
        );
      case "pending":
        return (
          <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-sm bg-orange-100 text-orange-800">
            <AlertCircle className="h-4 w-4" />
            Pending
          </span>
        );
      case "upcoming":
        return (
          <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-sm bg-gray-100 text-gray-800">
            <Clock className="h-4 w-4" />
            Upcoming
          </span>
        );
      default:
        return null;
    }
  };

  return (
    <div className="flex min-h-screen bg-gray-50">
      <DashboardSidebar />

      <main className="flex-1 overflow-y-auto">
        <div className="p-4 lg:p-8">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-3xl text-[#1e3a8a] mb-2">Payment History</h1>
            <p className="text-gray-600">Track all your payments and installments</p>
          </div>

          {/* Payment Summary Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-white rounded-xl shadow-md p-6">
              <div className="text-sm text-gray-600 mb-2">Total Price</div>
              <div className="text-3xl text-gray-900">
                ${paymentSummary.totalPrice.toLocaleString()}
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-md p-6">
              <div className="text-sm text-gray-600 mb-2">Amount Paid</div>
              <div className="text-3xl text-[#10b981]">
                ${paymentSummary.paidAmount.toLocaleString()}
              </div>
              <div className="mt-2">
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className="bg-[#10b981] h-2 rounded-full transition-all"
                    style={{ width: `${paymentSummary.paymentPercentage}%` }}
                  />
                </div>
                <div className="text-sm text-gray-600 mt-1">{paymentSummary.paymentPercentage}% Complete</div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-md p-6">
              <div className="text-sm text-gray-600 mb-2">Remaining Amount</div>
              <div className="text-3xl text-orange-600">
                ${paymentSummary.remainingAmount.toLocaleString()}
              </div>
            </div>
          </div>

          {/* Installment History Table */}
          <div className="bg-white rounded-xl shadow-md overflow-hidden">
            <div className="p-6 border-b border-gray-200">
              <h3 className="text-xl text-[#1e3a8a]">Installment History</h3>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-4 text-left text-sm text-gray-600">No.</th>
                    <th className="px-6 py-4 text-left text-sm text-gray-600">Description</th>
                    <th className="px-6 py-4 text-left text-sm text-gray-600">Amount</th>
                    <th className="px-6 py-4 text-left text-sm text-gray-600">Due Date</th>
                    <th className="px-6 py-4 text-left text-sm text-gray-600">Paid Date</th>
                    <th className="px-6 py-4 text-left text-sm text-gray-600">Status</th>
                    <th className="px-6 py-4 text-left text-sm text-gray-600">Action</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {installmentHistory.map((installment) => (
                    <tr key={installment.id} className="hover:bg-gray-50">
                      <td className="px-6 py-4 text-gray-900">#{installment.installmentNo}</td>
                      <td className="px-6 py-4 text-gray-900">{installment.description}</td>
                      <td className="px-6 py-4 text-gray-900">${installment.amount.toLocaleString()}</td>
                      <td className="px-6 py-4 text-gray-600">{installment.dueDate}</td>
                      <td className="px-6 py-4 text-gray-600">
                        {installment.paidDate || "-"}
                      </td>
                      <td className="px-6 py-4">{getStatusBadge(installment.status)}</td>
                      <td className="px-6 py-4">
                        {installment.status === "paid" && installment.receiptNo ? (
                          <button className="inline-flex items-center gap-2 text-[#1e3a8a] hover:text-[#1e3a8a]/80">
                            <Download className="h-4 w-4" />
                            Receipt
                          </button>
                        ) : installment.status === "pending" ? (
                          <button className="px-4 py-2 bg-[#10b981] text-white rounded-lg hover:bg-[#10b981]/90 text-sm">
                            Pay Now
                          </button>
                        ) : (
                          <span className="text-gray-400">-</span>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Next Payment Due */}
          <div className="mt-8 bg-orange-50 border border-orange-200 rounded-xl p-6">
            <div className="flex items-start gap-4">
              <div className="bg-orange-100 p-3 rounded-lg">
                <AlertCircle className="h-6 w-6 text-orange-600" />
              </div>
              <div className="flex-1">
                <h4 className="text-lg text-orange-900 mb-1">Next Payment Due</h4>
                <p className="text-orange-800 mb-4">
                  Installment #7 - Finishing Work - Phase 2 is due on <strong>June 15, 2026</strong>
                </p>
                <div className="flex flex-wrap gap-3">
                  <button className="bg-[#10b981] text-white px-6 py-2 rounded-lg hover:bg-[#10b981]/90">
                    Pay $85,000 Now
                  </button>
                  <button className="bg-white text-orange-800 px-6 py-2 rounded-lg border border-orange-300 hover:bg-orange-50">
                    Set Reminder
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
  