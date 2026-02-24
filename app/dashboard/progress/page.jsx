import DashboardSidebar from "@/components/DashboardSidebar";
import { Calendar, Image, Video, Download } from "lucide-react";

export default function ClientProgress() {
  const progressUpdates = [
    {
      id: 1,
      date: "Feb 10, 2026",
      title: "1st Floor Plastering Completed",
      description: "Interior plastering work on 12th floor has been completed. Quality inspection passed.",
      progress: 65,
      photos: [
        "https://images.unsplash.com/photo-1634586657092-438d8f1560ae?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb25zdHJ1Y3Rpb24lMjBzaXRlJTIwYnVpbGRpbmclMjBwcm9ncmVzc3xlbnwxfHx8fDE3NzA4OTk2OTl8MA&ixlib=rb-4.1.0&q=80&w=1080",
        "https://images.unsplash.com/photo-1621293980277-d9969186cd72?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidWlsZGluZyUyMHVuZGVyJTIwY29uc3RydWN0aW9uJTIwY3JhbmV8ZW58MXx8fHwxNzcwOTg3NDQyfDA&ixlib=rb-4.1.0&q=80&w=1080",
      ],
      videos: ["construction_feb10.mp4"],
    },
    {
      id: 2,
      date: "Jan 28, 2026",
      title: "Structural Work Progress Update",
      description: "Main structural work is now 85% complete. All concrete pouring work completed for Tower A.",
      progress: 60,
      photos: [
        "https://images.unsplash.com/photo-1621293980277-d9969186cd72?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidWlsZGluZyUyMHVuZGVyJTIwY29uc3RydWN0aW9uJTIwY3JhbmV8ZW58MXx8fHwxNzcwOTg3NDQyfDA&ixlib=rb-4.1.0&q=80&w=1080",
      ],
      videos: [],
    },
    {
      id: 3,
      date: "Jan 15, 2026",
      title: "Electrical & Plumbing Installation",
      description: "Started electrical wiring and plumbing pipe installation on floors 10-15.",
      progress: 55,
      photos: [
        "https://images.unsplash.com/photo-1634586657092-438d8f1560ae?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb25zdHJ1Y3Rpb24lMjBzaXRlJTIwYnVpbGRpbmclMjBwcm9ncmVzc3xlbnwxfHx8fDE3NzA4OTk2OTl8MA&ixlib=rb-4.1.0&q=80&w=1080",
      ],
      videos: ["electrical_jan15.mp4"],
    },
    {
      id: 4,
      date: "Dec 20, 2025",
      title: "2nd Floor Completed",
      description: "Concrete slab work for 15th floor completed. Moving to 16th floor construction.",
      progress: 50,
      photos: [
        "https://images.unsplash.com/photo-1621293980277-d9969186cd72?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidWlsZGluZyUyMHVuZGVyJTIwY29uc3RydWN0aW9uJTIwY3JhbmV8ZW58MXx8fHwxNzcwOTg3NDQyfDA&ixlib=rb-4.1.0&q=80&w=1080",
        "https://images.unsplash.com/photo-1634586657092-438d8f1560ae?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb25zdHJ1Y3Rpb24lMjBzaXRlJTIwYnVpbGRpbmclMjBwcm9ncmVzc3xlbnwxfHx8fDE3NzA4OTk2OTl8MA&ixlib=rb-4.1.0&q=80&w=1080",
      ],
      videos: [],
    },
  ];

  return (
    <div className="flex min-h-screen bg-gray-50">
      <DashboardSidebar />

      <main className="flex-1 overflow-y-auto">
        <div className="p-4 lg:p-8">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-3xl text-[#1e3a8a] mb-2">Construction Progress</h1>
            <p className="text-gray-600">Track the construction progress with photos and videos</p>
          </div>

          {/* Overall Progress Card */}
          <div className="bg-gradient-to-r from-[#1e3a8a] to-[#1e3a8a]/90 text-white rounded-xl shadow-md p-6 mb-8">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h3 className="text-2xl mb-2">Overall Progress</h3>
                <p className="text-blue-200">Skyline Towers - Tower A</p>
              </div>
              <div className="text-4xl">65%</div>
            </div>
            <div className="w-full bg-white/20 rounded-full h-4">
              <div
                className="bg-[#10b981] h-4 rounded-full transition-all"
                style={{ width: "65%" }}
              />
            </div>
            <div className="grid grid-cols-3 gap-4 mt-6">
              <div>
                <div className="text-blue-200 text-sm mb-1">Started</div>
                <div>Jan 2025</div>
              </div>
              <div>
                <div className="text-blue-200 text-sm mb-1">Expected Completion</div>
                <div>Dec 2026</div>
              </div>
              <div>
                <div className="text-blue-200 text-sm mb-1">Status</div>
                <div>On Schedule</div>
              </div>
            </div>
          </div>

          {/* Progress Updates Timeline */}
          <div className="space-y-6">
            {progressUpdates.map((update, index) => (
              <div key={update.id} className="bg-white rounded-xl shadow-md overflow-hidden">
                <div className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-start gap-4">
                      <div className="bg-[#1e3a8a] text-white p-3 rounded-lg">
                        <Calendar className="h-6 w-6" />
                      </div>
                      <div>
                        <h3 className="text-xl text-gray-900 mb-1">{update.title}</h3>
                        <p className="text-sm text-gray-600">{update.date}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-sm text-gray-600 mb-1">Progress</div>
                      <div className="text-2xl text-[#10b981]">{update.progress}%</div>
                    </div>
                  </div>

                  <p className="text-gray-600 mb-6">{update.description}</p>

                  {/* Photos */}
                  {update.photos.length > 0 && (
                    <div className="mb-6">
                      <div className="flex items-center gap-2 mb-3">
                        <Image className="h-5 w-5 text-[#1e3a8a]" />
                        <span className="text-gray-900">Photos ({update.photos.length})</span>
                      </div>
                      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                        {update.photos.map((photo, photoIndex) => (
                          <div key={photoIndex} className="group relative aspect-video rounded-lg overflow-hidden cursor-pointer">
                            <img
                              src={photo}
                              alt={`Progress ${photoIndex + 1}`}
                              className="w-full h-full object-cover group-hover:scale-110 transition-transform"
                            />
                            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors flex items-center justify-center">
                              <Download className="h-6 w-6 text-white opacity-0 group-hover:opacity-100 transition-opacity" />
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Videos */}
                  {update.videos.length > 0 && (
                    <div>
                      <div className="flex items-center gap-2 mb-3">
                        <Video className="h-5 w-5 text-[#1e3a8a]" />
                        <span className="text-gray-900">Videos ({update.videos.length})</span>
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {update.videos.map((video, videoIndex) => (
                          <div key={videoIndex} className="bg-gray-100 rounded-lg p-4 flex items-center justify-between">
                            <div className="flex items-center gap-3">
                              <div className="bg-[#1e3a8a] p-2 rounded">
                                <Video className="h-5 w-5 text-white" />
                              </div>
                              <span className="text-gray-900">{video}</span>
                            </div>
                            <button className="text-[#1e3a8a] hover:text-[#1e3a8a]/80">
                              <Download className="h-5 w-5" />
                            </button>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                {index !== progressUpdates.length - 1 && (
                  <div className="border-t border-gray-200" />
                )}
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
