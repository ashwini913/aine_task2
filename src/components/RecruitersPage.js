import React, { useState } from "react";
import "../CSS/RecruitersPage.css";

function RecruitersPage() {
  let [name, setName] = useState("");
  let [contactNo, setContactNo] = useState("");
  let [companyName, setCompanyName] = useState("");
  let [emailId, setEmailId] = useState("");
  let [address, setAddress] = useState("");
  let [experience, setExperience] = useState("");
  let [skills, setSkills] = useState("");
  let [qualification, setQualification] = useState("");
  let [salaryRange, setSalaryRange] = useState("");
  let [description, setDescription] = useState("");
  const onInputChange = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    switch (name) {
      case "name":
        setName(value);
        break;
      case "contact":
        setContactNo(value);
        break;
      case "companyName":
        setCompanyName(value);
        break;
      case "emailId":
        setEmailId(value);
        break;
      case "address":
        setAddress(value);
        break;
      case "experience":
        setExperience(value);
        break;
      case "qualification":
        setQualification(value);
        break;
      case "skills":
        setSkills(value);
        break;
      case "salaryRange":
        setSalaryRange(value);
        break;
      case "description":
        setDescription(value);
        break;
      default:
        return "";
    }
  };
  const onInputSubmit = (e) => {
    let dataArray = localStorage.getItem("data");
    let data = {
      name: name,
      contactNo: contactNo,
      companyName: companyName,
      emailId: emailId,
      address: address,
      experience: experience,
      qualification: qualification,
      skills: skills,
      salaryRange: salaryRange,
      description: description,
    };
    if (!dataArray) {
      let array = [];
      array.push(data);
      localStorage.setItem("data", JSON.stringify(array));
    } else {
      let array = JSON.parse(dataArray);
      array.push({ ...data });
      localStorage.setItem("data", JSON.stringify(array));
    }
  };
  return (
    <div className="formContainer">
      <h1>Enter job details</h1>
      <form className="form" onSubmit={onInputSubmit} autoComplete="off">
        <input
          id="name"
          type="text"
          name="name"
          placeholder="Name"
          className="input-text"
          value={name}
          onChange={onInputChange}
        ></input>
        <input
          type="text"
          name="contact"
          placeholder="Contact No"
          id="contact"
          className="input-text"
          value={contactNo}
          onChange={onInputChange}
        ></input>
        <input
          type="text"
          id="companyName"
          name="companyName"
          className="input-text"
          value={companyName}
          placeholder="Company Name"
          onChange={onInputChange}
        ></input>
        <input
          type="text"
          id="emailId"
          name="emailId"
          value={emailId}
          placeholder="Email Id"
          className="input-text"
          onChange={onInputChange}
        ></input>
        <input
          type="text"
          id="address"
          name="address"
          value={address}
          placeholder="Address"
          className="input-text"
          onChange={onInputChange}
        ></input>
        <input
          type="text"
          id="experience"
          name="experience"
          value={experience}
          placeholder="Experience"
          className="input-text"
          onChange={onInputChange}
        ></input>
        <input
          type="text"
          id="qualification"
          name="qualification"
          value={qualification}
          className="input-text"
          placeholder="Qualification"
          onChange={onInputChange}
        ></input>
        <input
          type="text"
          id="name"
          name="skills"
          value={skills}
          placeholder="Skills"
          className="input-text"
          onChange={onInputChange}
        ></input>
        <input
          type="text"
          id="salaryRange"
          name="salaryRange"
          value={salaryRange}
          placeholder="Salary Range"
          className="input-text"
          onChange={onInputChange}
        ></input>
        <textarea
          type="text"
          id="description"
          name="description"
          value={description}
          placeholder="Description"
          className="input-text"
          onChange={onInputChange}
        ></textarea>
        <button className="submit">Submit</button>
      </form>
    </div>
  );
}
export default RecruitersPage;
