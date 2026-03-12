import React from 'react';
import { 
  LayoutDashboard, 
  Users, 
  CalendarCheck, 
  CreditCard, 
  BellRing, 
  UserCircle,
  ArrowRight 
} from 'lucide-react';

const FeatureCard = ({ title, description, icon, emoji }) => {
  return (
    /* The individual Card following the original template geometry */
    <div className="relative w-full h-[280px] bg-white shadow-lg overflow-hidden flex font-sans select-none border border-gray-100 group">
      
      {/* LEFT CONTENT SECTION */}
      <div className="flex-1 flex flex-col justify-between py-6 pl-8 z-10">
        <div>
          <div className="flex items-center gap-3 mb-4">
            <div className="bg-[#AD46FF] p-1.5 rounded-full text-white">
              {React.cloneElement(icon, { size: 20 })}
            </div>
            <h3 className="text-sm font-bold text-[#2d2d2d] uppercase tracking-wider">
              {title}
            </h3>
          </div>
          
          <p className="text-[15px]  text-black pr-12 w-60">
            {description}
          </p>
        </div>


      </div>

      {/* BOTTOM BLUE BAR (Original Address Bar Style) */}
      <div className="absolute bottom-6 left-0 w-full z-20">
        <div className="bg-[#AD46FF] h-6 flex items-center pl-8 transition-all group-hover:pl-10">
          <span className="text-white text-[13px] font-bold tracking-[0.1em] uppercase">
            Institutional Management System
          </span>
        </div>
      </div>

      {/* RIGHT GEOMETRIC SECTION */}
      <div className="absolute right-0 top-0 h-full w-[40%] pointer-events-none">
        {/* Blue Shape */}
        <div 
          className="absolute inset-0 bg-[#AD46FF]" 
          style={{ clipPath: 'polygon(30% 0%, 100% 0%, 100% 100%, 60% 100%)' }}
        ></div>
        
        {/* Dark Grey Top Shape */}
        <div 
          className="absolute inset-0 bg-[#AD46FF]" 
          style={{ clipPath: 'polygon(45% 0%, 100% 0%, 100% 65%, 75% 35%)' }}
        ></div>

        {/* Dark Grey Bottom Shape */}
        <div 
          className="absolute inset-0 bg-[#AD46FF]" 
          style={{ clipPath: 'polygon(75% 65%, 100% 35%, 100% 100%, 60% 100%)' }}
        ></div>

        {/* Central Diamond (Original Logo Style) */}
        <div className="absolute top-1/2 left-[10%] -translate-y-1/2">
          <div className="w-20 h-20 bg-[#2d2d2d] border-[3px] border-[#AD46FF] rotate-45 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
             <div className="-rotate-45 text-2xl">
                {emoji}
             </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const FeatureGrid = () => {
const features = [
  {
    title: "Easy Student Attendance Tracking",
    description:
      "One-click daily attendance with real-time updates for parents and detailed monthly attendance reports.",
    icon: <CalendarCheck />,
    emoji: "📲"
  },
  {
    title: "Smart Fee Management",
    description:
      "Automated fee reminders, online & offline payment tracking, and instant pending dues reports.",
    icon: <CreditCard />,
    emoji: "💰"
  },
  {
    title: "Performance Monitoring",
    description:
      "Record test marks, track individual student progress, and generate academic performance reports effortlessly.",
    icon: <BarChart3 />,
    emoji: "📊"
  },
  {
    title: "Class & Batch Management",
    description:
      "Manage multiple batches, schedule classes easily, and track subject-wise sessions with full visibility.",
    icon: <LayoutDashboard />,
    emoji: "📅"
  },
  {
    title: "Instant Parent Communication",
    description:
      "Broadcast announcements, share homework updates, and strengthen parent engagement instantly.",
    icon: <BellRing />,
    emoji: "🔔"
  },
  {
    title: "Complete Tuition Dashboard",
    description:
      "Access all institute data in one place including income overview, expenses, and growth insights.",
    icon: <PieChart />,
    emoji: "📈"
  },
  {
    title: "Mobile-Friendly & Easy to Use",
    description:
      "Simple interface, no technical knowledge required, and works smoothly on smartphones and tablets.",
    icon: <Smartphone />,
    emoji: "📱"
  }
];

  return (
    <div className="bg-gray-100 py-16 px-4 min-h-screen">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-5xl font-bold text-[#2d2d2d]">Key <span className="text-[#AD46FF]">Features</span></h2>
          <p className="text-black  text-[15px]  mt-2">Everything you need to run your center</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {features.map((f, i) => (
            <FeatureCard key={i} {...f} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeatureGrid;