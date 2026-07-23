import React, { useState } from "react";
import "./Sidebar.css";

// Logo
import logo from "../assets/RecruiterDashboard/logor.png";

// Icons
import dashboard from "../assets/RecruiterDashboard/dashboard.png";
import candidates from "../assets/RecruiterDashboard/candidates.png";
import screening from "../assets/RecruiterDashboard/screening.png";
import jobs from "../assets/RecruiterDashboard/jobs1.png";
import ranking from "../assets/RecruiterDashboard/ranking.png";
import interview from "../assets/RecruiterDashboard/interview.png";
import analytics from "../assets/RecruiterDashboard/analytics.png";
import reports from "../assets/RecruiterDashboard/reports.png";
import inbox from "../assets/RecruiterDashboard/inbox.png";
import settings from "../assets/RecruiterDashboard/settings.png";
import assistant from "../assets/RecruiterDashboard/assistant.png";

const Sidebar = () => {
  const [active, setActive] = useState("Dashboard");
  const [open, setOpen] = useState(false);

  const menuItems = [
    { name: "Dashboard", icon: dashboard },
    { name: "Candidates", icon: candidates },
    { name: "Resume Screening", icon: screening },
    { name: "Job Posts", icon: jobs },
    { name: "Candidate Ranking", icon: ranking },
    { name: "Interviews", icon: interview },
    { name: "Hiring Analytics", icon: analytics },
    { name: "Recruitment Reports", icon: reports },
    { name: "Inbox", icon: inbox },
    { name: "Settings", icon: settings },
  ];

  return (
    <>
      {/* Mobile Menu Button */}
      <button
        className="mobile-toggle"
        onClick={() => setOpen(!open)}
      >
        ☰
      </button>

      {/* Overlay */}
      {open && (
        <div
          className="sidebar-overlay"
          onClick={() => setOpen(false)}
        ></div>
      )}

      {/* Sidebar */}
      <aside className={`sidebar ${open ? "show" : ""}`}>

        <div className="sidebar-top">

          <div className="logo-section">
            <img src={logo} alt="logo" />

            <div>
              <h3>AI Resume Builder</h3>
              <p>& Screening System</p>
            </div>
          </div>

          <ul className="sidebar-menu">
            {menuItems.map((item) => (
              <li
                key={item.name}
                className={active === item.name ? "active" : ""}
                onClick={() => {
                  setActive(item.name);
                  setOpen(false);
                }}
              >
                <img src={item.icon} alt={item.name} />
                <span>{item.name}</span>
              </li>
            ))}
          </ul>

        </div>

        <div className="assistant-card">

          <img src={assistant} alt="assistant" />

          <p>
            Get AI insights and smart recommendations.
          </p>

          <button>Ask AI Assistant</button>

        </div>

      </aside>
    </>
  );
};

export default Sidebar;
