import React, { useEffect, useRef } from "react";
export default function VideoBackground({ children }) {
  return (
    <div>
      <video autoPlay loop muted className="w-full h-screen z-10">
        <source src="/assets/videobg.mp4" type="video/mp4" />
      </video>
      {children}
    </div>
  );
}
