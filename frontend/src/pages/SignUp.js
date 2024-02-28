import React, { useState } from "react";
import Layout from "../components/Layout";
import axios from "axios";

function SignUp() {
  const [name, setName] = useState("");
  const [studentID, setStudentID] = useState(0);
  const [EmailID, setEmailID] = useState("");
  const [Contact, setContact] = useState(0);
  const [Password, setPassword] = useState("");

  const handleSubmit = (event) => {
    const obj = { name, studentID, EmailID, Contact, Password };
    let url = "http://localhost:8080/students/createStudent";
    axios
      .post(url, obj)
      .then((res) => {
        if (res.status === 200) {
          alert("student created");
        }
      })
      .catch((error) => {
        console.log(error);
      });

    event.preventDefault();
  };

  return (
    <Layout>
      <h1>Signup page</h1>
      <form onSubmit={handleSubmit}>
        <label for="name">Student name</label>
        <input
          type="text"
          placeholder="Enter student name"
          className="form-control"
          id="name"
          onChange={(e) => {
            setName(e.target.value);
          }}
        ></input>
        <label for="number">Student id</label>
        <input
          type="number"
          placeholder="Enter student Id"
          className="form-control"
          id="std_id"
          onChange={(e) => {
            setStudentID(e.target.value);
          }}
        ></input>
        <label for="email">Student Email Id</label>
        <input
          type="email"
          placeholder="Enter student email"
          className="form-control"
          id="email"
          onChange={(e) => {
            setEmailID(e.target.value);
          }}
        ></input>
        <label for="name">Student contact Number</label>
        <input
          type="number"
          placeholder="Enter student Number"
          className="form-control"
          id="Contact"
          onChange={(e) => {
            setContact(e.target.value);
          }}
        ></input>
        <label for="name">Student Password</label>
        <input
          type="password"
          placeholder="Enter student Password"
          className="form-control"
          id="password"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        ></input>
        <input type="submit" value="Submit" className="btn btn-primary" />
      </form>
    </Layout>
  );
}

export default SignUp;
