import React from "react";
import { useNavigate } from "react-router-dom";

const FloorPlanDisplay = () => {
  const navigate = useNavigate(); // React Router navigation hook

  return (
    <div
      style={{
        position: "relative",
        padding: "0 15%",
        textAlign: "center",
      }}
    >
      {/* Floorplan image */}
      <img
        src="/images/floorplan.jpeg"
        alt="Floorplan"
        style={{
          width: "100%",
          height: "auto",
        }}
      />

      {/* Button for 'C' */}
      <button
        onClick={() => navigate("/info?section=c")} // Navigate to info page with query
        style={{
          position: "absolute",
          top: "32%",
          left: "79%",
          backgroundColor: "rgba(255, 255, 255, 0.8)",
          border: "1px solid #ccc",
          borderRadius: "5px",
          padding: "5px 10px",
          cursor: "pointer",
        }}
      >
        C
      </button>

      {/* Button for 'J' */}
      <button
        onClick={() => navigate("/info?section=j")}
        style={{
          position: "absolute",
          top: "32%",
          left: "26%",
          backgroundColor: "rgba(255, 255, 255, 0.8)",
          border: "1px solid #ccc",
          borderRadius: "5px",
          padding: "5px 10px",
          cursor: "pointer",
        }}
      >
        J
      </button>
    </div>
  );
};

export default FloorPlanDisplay;
