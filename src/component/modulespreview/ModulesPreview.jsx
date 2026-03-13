import React from "react";

// const newsItems = [
//   {
//     id: 1,
//     title: "Easy Student Attendance Tracking",
//     image: "https://images.unsplash.com/photo-1588072432836-e10032774350?w=800",
//     description:
//       "One-click daily attendance with real-time updates for parents and detailed monthly attendance reports."
//   },
//   {
//     id: 2,
//     title: "Smart Fee Management",
//     image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800",
//     description:
//       "Automated fee reminders, online & offline payment tracking, and instant pending dues reports."
//   },
//   {
//     id: 3,
//     title: "Performance Monitoring",
//     image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800",
//     description:
//       "Record test marks, track student progress individually, and generate performance reports effortlessly."
//   },
//   {
//     id: 4,
//     title: "Class & Batch Management",
//     image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800",
//     description:
//       "Manage multiple batches, schedule classes smoothly, and track subject-wise sessions in one place."
//   },
//   {
//     id: 5,
//     title: "Instant Parent Communication",
//     image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800",
//     description:
//       "Broadcast announcements, share homework updates, and improve parent engagement instantly."
//   },

//   {
//     id: 7,
//     title: "Mobile-Friendly & Easy to Use",
//     image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=800",
//     description:
//       "Simple interface, no technical knowledge required, and works smoothly on smartphones and tablets."
//   }
// ];

const newsItems = [
  {
    id: 1,
    title: "Student Management",
    image: "https://images.unsplash.com/photo-1588072432836-e10032774350?w=800",
    description:
      "Maintain detailed student records, course enrollments, and profiles."
  },
  {
    id: 2,
    title: "Batch & Course Management",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800",
    description:
      "Create batches, assign teachers, and manage class schedules efficiently."
  },
  {
    id: 3,
    title: "Attendance Tracking",
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800",
    description:
      "Track student attendance and generate attendance reports instantly."
  },
  {
    id: 4,
    title: "Fee Management",
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800",
    description:
      "Monitor fee payments, pending balances, and generate receipts automatically."
  },
  {
    id: 5,
    title: "Performance Tracking",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800",
    description:
      "Analyze student progress with detailed reports and analytics."
  },
  {
    id: 7,
    title: "Notification System",
    image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=800",
    description:
      "Send important announcements, reminders, and updates."
  }
];

export default function GlassNewsGrid() {
  return (
    <section className="py-24 bg-white  px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
 
                {/* <h2 className="text-4xl  lg:text-5xl  mb-16 text-gray-800 text-center tracking-tight">
                       
                          Everything You Need to<span
                            
                              className="bg-clip-text text-transparent bg-gradient-to-r from-[#AD46FF] to-[#7C3AED]"
                            > Run Your Institute </span> Tuvido
                      </h2> */}


                              <h2 className="text-4xl lg:text-5xl font-black mb-16 text-gray-900 text-center leading-[1.1] tracking-tight">
                       
                          Everything  <span
                            
                              className="bg-clip-text text-transparent bg-gradient-to-r from-[#AD46FF] to-[#7C3AED]"
                            >You Need to  </span> Run Your Institute Tuvido
                      </h2>


        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {newsItems.map((item) => (
            <div
              key={item.id}
              className="group relative h-[250px] w-full rounded-2xl overflow-hidden shadow-xl border border-gray-100 "
            >
              {/* Background Image */}
              <img
                src={item.image}
                alt={item.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
              />

              {/* Initial Shadow for Title Readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent z-10" />

              {/* Glassmorphism Hover Panel */}
              <div className="absolute inset-x-0 bottom-0 rounded-t-2xl h-24 group-hover:h-full transition-all duration-500 ease-in-out z-30 
                            bg-black/20 group-hover:bg-purple-900/40 backdrop-blur-md group-hover:backdrop-blur-xl 
                            flex flex-col justify-end p-8 overflow-hidden">
                
                <div className="relative z-40 h-full flex flex-col justify-end">
                  {/* Title: Always visible, moves slightly on hover */}
                  <h3 className="text-lg font-bold text-white leading-tight drop-shadow-lg mb-2 transform transition-transform duration-500 group-hover:-translate-y-2">
                    {item.title}
                  </h3>
                  
                  {/* Description: Hidden by default, fades/slides in on hover */}
                  <div className="max-h-0 opacity-0 group-hover:max-h-40 group-hover:opacity-100 transition-all duration-700 ease-in-out">
                    <p className="text-white text-[18px] leading-relaxed mb-6 border-l-2 border-[#8B5CF6] pl-4">
                      {item.description}
                    </p>
                    
           
                  </div>
                </div>
              </div>

              {/* Purple Glow Tint on Hover */}
              <div className="absolute inset-0 bg-[#8B5CF6]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-20" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}