import React from "react";
import "../CSS/Applications.css";
function Applications() {
  const renderedList = () => {
    const jobList = localStorage.getItem("data");
    if (!jobList) {
      return (
        <div className="postJobs">
          Jobs must be posted to view here as localStorage is being used as
          database
        </div>
      );
    }
    return JSON.parse(jobList).map((each) => {
      return (
        <div className="container">
          <h5 className="jobHeader">{each.companyName}</h5>
          <ul type="none" className="applicationContainer">
            <li>Name:{each.name}</li>
            <li>Contact No:{each.contactNo}</li>
            <li>Company Name:{each.companyName}</li>
            <li>EmailId:{each.emailId}</li>
            <li>Address:{each.city}</li>
            <li>Experience:{each.experience}</li>
            <li>Skills required:{each.skills}</li>
            <li>expected Salary:{each.salaryRange}</li>
            <li>Description:{each.description}</li>
          </ul>
        </div>
      );
    });
  };
  return (
    <div className="listContainer">
      <h5 className="heading">Jobs </h5>
      {renderedList()}
    </div>
  );
}
export default Applications;
