import React from 'react';
import Footer from './Footer'; 
import { useNavigate } from "react-router-dom";
import "./moreInfo.css";


  function Graffiti() {
  const navigate = useNavigate() ;
  return (
    <div className="graffiti">
      <h1>The Ante-Chapel</h1>
      <p>The Antechapel today provides space to remember those connected to the University who gave their lives in support of freedom during the Great Wars, also known as World War I and II. The window, across from the door which you entered, is a testament to honour these students and staff member along with their individual names around the room.

The overall structure of the Antechapel has not changed throughout its long history, but it has become much smaller find the Rood Screen link to find out more about why this is.

Today the antechapel acts in a role to welcome all visitors into the Chapel with the doors to the rood Screen kept open. Services and events are still regularly held in the chapel and a schedule can be accessed (via this link).</p>
      <button className="backButton" onClick={() => navigate(-1)}>
        Back to Tour
      </button>
      <Footer />
    </div>
  );
}



export default Graffiti;


