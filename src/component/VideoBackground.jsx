import video from "../assets/neon1.mp4";

export default function VideoBackground() {
  return (
    <video
      autoPlay
      loop
      muted
      playsInline
      className="absolute top-0 left-0 w-full h-full object-cover -z-10   brightness-90"
    >
      <source src={video} type="video/mp4" />
    </video>
  );
}