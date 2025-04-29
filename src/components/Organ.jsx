import React from 'react';
import Footer from './Footer';
import { useNavigate } from "react-router-dom";
import "../info.css";

function Organ() {
  const navigate = useNavigate() ;
  return (
    <div className="Organ">
      <h1>Organ</h1>
      <p> The organ's design and traditional craftsmanship harmonize with the chapel's medieval architecture, fulfilling Bishop Elphinstone's original vision for the space. Its presence not only enhances the chapel's musical capabilities but also serves as a valuable resource for both the University and the wider Aberdeen community. The organ has been featured in various recordings, including a CD compilation by Dr. Roger Williams, the University's Director of Music, and Professor Nigel Allcoat, showcasing its unique sound across a range of musical pieces. ​

The installation of the Aubertin organ was made possible through a successful fundraising campaign, which raised £275,000, including a £65,000 contribution from the Lillie Bequest. This effort reflects the University's commitment to enhancing its musical heritage and providing a world-class instrument for both educational and community use.</p>
      <button className="backButton" onClick={() => navigate(-1)}>
        Back to Tour
      </button>
      <Footer />
    </div>
  );
}

export default Organ;
