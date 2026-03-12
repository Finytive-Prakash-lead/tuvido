import React, { useState } from "react";

const VideoResource = () => {
  const [open, setOpen] = useState(false);

  // 👉 Replace this later with your real video
  const videoUrl = "https://www.youtube.com/embed/dQw4w9WgXcQ";

  return (
    <section className="w-full py-24 bg-[#F3E8FF]">
      <div className="max-w-6xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-16">
          <p className="text-[#2563EB] font-semibold tracking-wider uppercase">
            Watch
          </p>

          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-3">
            Our Video Resource
          </h2>

          <p className="text-gray-500 mt-4 max-w-xl mx-auto">
            See how Tuvido simplifies workflows, automates tasks and helps
            teams work smarter with AI powered tools.
          </p>
        </div>

        {/* Video Thumbnail */}
        <div className="relative rounded-3xl overflow-hidden shadow-2xl group cursor-pointer">

          <img
            src="https://images.unsplash.com/photo-1574717024453-354056a23f5c"
            alt="Tuvido Demo"
            className="w-full h-auto object-cover group-hover:scale-105 transition duration-500"
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-black/30 flex items-center justify-center">

            {/* Play Button */}
            <button
              onClick={() => setOpen(true)}
              className="w-24 h-24 bg-white rounded-full flex items-center justify-center shadow-xl hover:scale-110 transition"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-10 h-10 text-[#2563EB] ml-1"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M8 5v14l11-7z" />
              </svg>
            </button>

          </div>
        </div>
      </div>

      {/* Video Modal */}
      {open && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 px-6">

          <div className="relative w-full max-w-5xl">

            {/* Close */}
            <button
              onClick={() => setOpen(false)}
              className="absolute -top-12 right-0 text-white text-4xl"
            >
              ×
            </button>

            {/* Video Frame */}
            <div className="relative pt-[56.25%] rounded-xl overflow-hidden shadow-2xl">

              <iframe
                src={videoUrl}
                title="Tuvido Demo Video"
                className="absolute top-0 left-0 w-full h-full"
                allow="autoplay; encrypted-media"
                allowFullScreen
              />

            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default VideoResource;