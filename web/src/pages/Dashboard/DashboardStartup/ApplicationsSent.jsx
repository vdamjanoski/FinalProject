import React from "react";
import "./ApplicationsSent.css";

const ApplicationsSent = () => {
  return (
    <div className="container">
      <h2 className="title">Applications sent</h2>
      <p className="subtitle">Jobs you have applied to</p>
      <div className="card">Revenue per rate </div>
      <div className="card">ARPU (Average revenue per use) </div>
      <div className="card">CAC (Custom Aquisition Cost) </div>
    </div>
  );
};

export default ApplicationsSent;