import React from "react";
// import "./TeamSection.css";

const teamMembers = [
  {
    name: "Rohit Patil",
    designation: "Founder & CEO",
    image: "/DigitalMarketingApp/images/office1.jpg",
    info: "Leading the company with a vision to deliver high-quality marketing solutions."
  },
  {
    name: "Sneha Kulkarni",
    designation: "Creative Head",
    image: "/DigitalMarketingApp/images/office2.jpeg",
    info: "Expert in branding, designing, and visual storytelling."
  },
  {
    name: "Aditi Joshi",
    designation: "SEO Specialist",
    image: "/DigitalMarketingApp/images/office3.jpg",
    info: "Drives organic growth through data-driven SEO strategies."
  },
];

const officeImages = [
  "/DigitalMarketingApp/images/off1.jpg",
  "/DigitalMarketingApp/images/off2.jpg",
  "/DigitalMarketingApp/images/off3.jpg",
  "/DigitalMarketingApp/images/off2.jpg",
];

export default function TeamSection() {
  return (
    <div className="team-container">

      {/* TEAM HEADING */}
      <h2 className="section-title">Meet Our Team</h2>
      <p className="section-subtext">
        Our creative and dedicated team members who make everything possible.
      </p>

      {/* TEAM CARDS */}
      <div className="team-grid">
        {teamMembers.map((member, index) => (
          <div className="team-card" key={index}>
            <img src={member.image} alt={member.name} className="team-photo" />

            <h3 className="team-name">{member.name}</h3>
            <p className="team-designation">{member.designation}</p>
            <p className="team-info">{member.info}</p>
          </div>
        ))}
      </div>

      {/* WORK CULTURE */}
      <div className="culture-section">
        <h2 className="section-title">Our Work Culture</h2>
        <p className="culture-text">
          We believe in creativity, collaboration, and constant learning.  
          Our team follows a friendly, positive, and productive environment  
          where ideas are welcomed, and quality comes first.  
          We work closely with clients to deliver impactful digital marketing results.
        </p>
      </div>

      {/* OFFICE PHOTOS GALLERY */}
      <h2 className="section-title mt-4">Our Office Space</h2>
      <div className="office-grid">
        {officeImages.map((img, idx) => (
          <img key={idx} src={img} alt="office" className="office-photo" />
        ))}
      </div>

    </div>
  );
}
