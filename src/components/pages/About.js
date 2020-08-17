import React from "react";

function About() {
  return (
    <div style={aboutStyle}>
      <h1>About</h1>
      <p>This is an about page of my very simple app made with react!</p>
    </div>
  );
}

const aboutStyle = {
  textAlign: "center",
  paddingTop: "250px",
  paddingBottom: "650px",
  background: "tomato",
  color: "white",
  fontSize: "25px"
};

export default About;
