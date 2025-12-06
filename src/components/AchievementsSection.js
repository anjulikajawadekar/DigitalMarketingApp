import React from "react";
import { FaAward, FaUsers, FaProjectDiagram, FaBullhorn } from "react-icons/fa";

export default function AchievementsSection() {
  return (
    <div className="achieve-wrapper">
      <h2 className="achieve-title">Our Achievements & Milestones</h2>
      <p className="achieve-subtitle">
        We are proud to deliver measurable results that help businesses grow faster.
      </p>

      {/* Counter Section */}
      <div className="achieve-counters">
        <div className="counter-box">
          <h3>150+</h3>
          <p>Successful Campaigns</p>
        </div>

        <div className="counter-box">
          <h3>75+</h3>
          <p>Happy Clients</p>
        </div>

        <div className="counter-box">
          <h3>120%</h3>
          <p>Average ROI Growth</p>
        </div>

        <div className="counter-box">
          <h3>5+ Years</h3>
          <p>Industry Experience</p>
        </div>
      </div>

      {/* Achievement Cards */}
      <div className="achieve-grid">
        <div className="achieve-card">
          <FaAward className="achieve-icon" />
          <h4>Best Digital Marketing Agency 2024</h4>
          <p>Recognized for creativity, results, and customer satisfaction.</p>
        </div>

        <div className="achieve-card">
          <FaUsers className="achieve-icon" />
          <h4>Client Retention: 98%</h4>
          <p>We build relationships based on trust and strong results.</p>
        </div>

        <div className="achieve-card">
          <FaProjectDiagram className="achieve-icon" />
          <h4>200+ Brand Designs Delivered</h4>
          <p>Logos, brand identities, social creatives and more.</p>
        </div>

        <div className="achieve-card">
          <FaBullhorn className="achieve-icon" />
          <h4>Top Performing Google Ads Campaigns</h4>
          <p>Optimized campaigns with top conversions and low CPC.</p>
        </div>
      </div>
    </div>
  );
}
