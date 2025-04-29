import React from 'react';
import Footer from './Footer'; 
import { useNavigate } from "react-router-dom";
import "../info.css";


function StainedGlass() {
  const navigate = useNavigate() ;
  return (
    <div className="stainedGlass">
      <h1>The Universities' History Told by Stained Glass Art</h1>
      <p>Panel one:

This Panel depicts the Bishop Elphinstone journey to Rome to meet with Pope Alexander the VI and receive permissions to establish the King’s College which was granted in 1495.


Panel two:

The mid-section panel shows Elphinstones return and the beginning of construction of the King’s College. The original construction on the structures did not begin until 1500. This was due to a need to sink large cut trees to secure the foundation and keep it from sinking. The chapel was complete sometime before 1506, taking approximately six years to build.


Panel three:

The last panel is the dedication of the King’s College to James IV of Scotland and to the Trinity and the Virgin Mary. In the depiction you can see the Bishop Elphinstone greeting King James IV and honouring him with the naming of the College for his instrumental help in its establishment.</p>
      <button className="backButton" onClick={() => navigate(-1)}>
        Back to Tour
      </button>
      <Footer />
    </div>
  );
}

export default StainedGlass;
