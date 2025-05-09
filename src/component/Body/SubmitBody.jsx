import React, { useState } from "react";
import "./SubmitBody.css"
import {useNavigate}  from "react-router-dom"

function SubmitBody() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();

    // try {

    // } catch (error) {

    // }

    setName("");
    setEmail("");
    setPassword("");

    navigate("/eventpage");
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="submitBody">
        <div className="submitBody-info">
          <input
            type="text"
            value={name}
            placeholder="Event Name"
            onChange={(e) => setName(e.target.value)}
          /><br/><br/>

          <input
            type="email"
            value={email}
            placeholder="your email"
            onChange={(e) => setEmail(e.target.value)}
          /><br/><br/>

          <input
            type="password"
            value={password}
            placeholder="your password"
            onChange={(e) => setPassword(e.target.value)}
          /><br/><br/>
        </div>

        <div className="submitBody-button">
          <button type="submit">Submit</button>
        </div>
      </div>
    </form>
  );
}

export default SubmitBody;
