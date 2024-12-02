import React from "react";
import NavBar from "./Navbar"
import { useLocation, useNavigate } from "react-router-dom";

const MoreInfo = () => {
  const location = useLocation();
  const navigate = useNavigate();

  // Extract the section from the URL query
  const queryParams = new URLSearchParams(location.search);
  const section = queryParams.get("section");

  return (
    <div style={{ padding: "20px", textAlign: "center" }}>
      <h1>More Information</h1>
      <p>
        {section === "c" && "This is detailed information about section 'C'."}
        {section === "j" && "This is detailed information about section 'J'."}
        {!section && "Please select a valid section from the map."}
      </p>

      {/* Return to Map Button */}
      <button
        onClick={() => navigate("/")}
        style={{
          marginTop: "20px",
          padding: "10px 20px",
          backgroundColor: "#007bff",
          color: "#fff",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
        }}
      >
        Return to Map
      </button>
    </div>
  );
};

export default MoreInfo;
