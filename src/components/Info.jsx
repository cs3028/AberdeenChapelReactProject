import React, { useState, useEffect } from 'react';
import Carousel from '../Carousel';
import "../info.css";
import Footer from './Footer';

function Info() {
  const images = [
    "/images/chapel_1.jpg",
    "/images/inside.jpg",
    "/images/right.jpg",
  ];
  
  const services = [
    {
      title: "Alter",
      content: "The altar is a sacred table used for worship or sacrifice, typically serving as the focal point during religious rites such as the Eucharist.",
      icon: "/images/alter.jpg" 
    },
    {
      title: "Cross",
      content: "The cross stands as a central symbol of Christianity, representing the sacrificial death and resurrection of Jesus Christ.",
      icon: "/images/cross.jpg"
    },
    {
      title: "Chapel",
      content: "A chapel is a smaller place of worship intended for private prayer, reflection, or more intimate religious gatherings.",
      icon: "/images/chapel_icon.jpg"
    },
    {
      title: "Bible",
      content: "The Bible is the holy scripture of Christianity, encompassing sacred texts that guide believers in faith, doctrine, and morality.",
      icon: "/images/bible.jpg"
    },
    {
      title: "Chalice", 
      content: "The chalice is a consecrated cup used in Christian liturgy to hold wine, symbolizing the blood of Christ.",
      icon: "/images/challace.jpg"
    }
  ];

  // State to store the carousel's opacity
  const [carouselOpacity, setCarouselOpacity] = useState(1);

  useEffect(() => {
    const handleScroll = () => {
      const maxScroll = 800;
      const scrolled = window.scrollY;
      let newOpacity = 1 - scrolled / maxScroll;

      if (newOpacity < 0.2) {
        newOpacity = 0.2;
      }
      setCarouselOpacity(newOpacity);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="info-container" style={{ minHeight: '150vh' }}>
      {/* Top Carousel */}
      <div
        className="carousel-container"
        style={{
          opacity: carouselOpacity,
          transition: 'opacity 0.2s ease-out'
        }}
      >
        <Carousel images={images} interval={3200} />
      </div>

      {/* New Two-Column Section */}
      <div className="two-column-section">
        <div className="column">
          <h2>KING'S COLLAGE DESIGN</h2>
          <p>
            The Chapel sanctuary which sits beneath the Tower is a space of beauty, tranquillity, and peace.
            Worship services are held every Wednesday during the academic term in King's College Chapel. This service starts at 5.15pm unless otherwise indicated. There are also daily services and important annual services such as Remembrance and Founders' Day held in the Chapel throughout the year.
            Find out all you need to know about our Worship services as well as occasional services, recitals, tours and other events. Please contact us should you be planning a significant service for yourself or someone you love. 
          </p>
          <p>
            Aberdeen’s King’s College, founded in 1495 by William Elphinstone, is at the heart of the University of Aberdeen—one of Scotland’s oldest and most distinguished universities. Often cited for its striking medieval architecture, the campus is centered on the famous Crown Tower, a unique feature said to symbolize the unity of church and state in Scotland. 
            Over the centuries, King’s College has served as a hub of scholarship and religious study, eventually merging with nearby Marischal College in 1860 to form the modern University of Aberdeen.
            Today, the historic King’s College Chapel stands as a living testament to early Scottish Gothic design. Its intricate carved choir stalls and commemorative plaques tell the story of generations of students, faculty, and alumni who passed through its halls. 
            Beyond the chapel, the idyllic cobblestone streets and manicured courtyards of Old Aberdeen offer a window into the past, inviting visitors to explore centuries of academic tradition. From theological pursuits to groundbreaking scientific research, King’s College has consistently embraced innovation while honoring its medieval roots, making it both an architectural landmark and a respected center of learning on the global stage
            The chaplaincy at King’s College provides a warm and inclusive space for students, staff, and visitors seeking solace, spiritual guidance, or simply a quiet place to reflect. 
            Situated near the historic chapel, the chaplaincy’s dedicated team offers pastoral care, organizes community events, and fosters interfaith dialogue. 
            Whether offering a listening ear to those wrestling with academic pressures, leading prayer services, or hosting social gatherings to strengthen bonds between diverse faith groups, the chaplaincy remains an important pillar of support on campus. 
            Through its blend of tradition and open-minded engagement, the chaplaincy serves as a vibrant reminder of King’s College’s commitment to nurturing both the intellectual and spiritual well-being of everyone who walks its centuries-old corridors.
          </p>
        </div>

        <div className="column">
          <h2>KING'S COLLAGE EVENTS</h2>
          <p>
            King's College Chapel is a beautiful place to be married and holds great significance for many people. And contrary to urban myth, there is no waiting list!
            The Chapel is an ancient and beautiful building, the perfect setting for your ceremony. It is a private Chapel of the University and remains a place of worship in daily use.
            The Chapel is available for weddings to:
            University of Aberdeen staff and students
            University of Aberdeen graduates
            The Robert Gordon University staff, students, and graduates
            Children, grandchildren, parents or grandparents of above or resident of Aberdeen City and Aberdeenshire
          </p>
          <img className = "priest" src ="/images/priest.jpg" alt = "priest" />
        </div>
      </div>  

       {/* New services section */}
       <div className="services-container">
        {services.map((service, i) => (
          <div key={i} className="service-item">
            <img
              src={service.icon}
              alt={service.title}
              className="service-icon"
            />
            <h3>{service.title}</h3>
            <p>{service.content}</p>
          </div>
        ))}
      </div> 

      <Footer /> 

       
     
    </div>
  );
}

export default Info;














