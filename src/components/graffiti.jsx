import React from 'react';
import Footer from './Footer'; 
import { useNavigate } from "react-router-dom";
import "./moreInfo.css";


  function Graffiti() {
  const navigate = useNavigate() ;
  return (
    <div className="graffiti">
      <h1>Ancient Graffiti Within The Chapel</h1>
      <p>If you explore the choir seats you will notice that students have certainly left their mark. Over the centuries starting from the early 1600s. These are an amazing testament to the disciplines that the students studied. Scribal work played a large role in their studies and penmanship was greatly important. This interestingly comes into focus even in their graffiti. On many of the names etched into the seats you may notice faint tracing lines which acted as guides to ensure that their mark was left in as proper a fashion as they could carve it in.</p>
      <button className="backButton" onClick={() => navigate(-1)}>
        Back to Tour
      </button>
      <Footer />
    </div>
  );
}



export default Graffiti;


