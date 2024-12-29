import React from "react";

const Home = () => {
  return (
    <div style={{ textAlign: "center",  }}>
      <h1>Welcome to the Home Page!</h1>
      <div style={{  backgroundColor: "#f0f0f0",  display: "inline-block", }}>
        <h2>Group Name: ABVP</h2>
        <ul>
          <b><li>Member 1: Ajay Patel</li><br /><br />
          <li>Member 2: Bhawna Vishwakarma</li></b>
        </ul>
      </div>
    </div>
  );
};

export default Home;