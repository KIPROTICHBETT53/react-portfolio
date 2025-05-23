import React from "react";

const ComputersCanvas = () => {
  return (
    <div
      style={{
        position: "fixed", // Fixes the background so it stays put when scrolling
        top: 0,
        left: 0,
        width: "100vw", // Covers the full viewport width
        height: "100vh", // Covers the full viewport height
        zIndex: -1, // Puts it behind other content
        overflow: "hidden", // Hides any overflow if the image is scaled larger
        backgroundColor: "#0f0f0f", // Fallback background color
      }}
    >
      <img
        src="" // Your image path in the public folder
        alt="" // More descriptive alt text
        style={{
          width: "100%", // Ensures the image fills the width of its container
          height: "100%", // Ensures the image fills the height of its container
          objectFit: "cover", // Crops the image to cover the entire container while maintaining aspect ratio
          animation: "float 3s ease-in-out infinite", // Keep the float animation
          opacity: 0.7, // Add some transparency to make it less distracting and more of a background
          filter: "brightness(0.8) grayscale(0.2)", // Slightly darken and desaturate for a "cool" background feel
        }}
      />
      <style>
        {`
          @keyframes float {
            0% { transform: translateY(0); }
            50% { transform: translateY(-10px); }
            100% { transform: translateY(0); }
          }
        `}
      </style>
    </div>
  );
};

export default ComputersCanvas;