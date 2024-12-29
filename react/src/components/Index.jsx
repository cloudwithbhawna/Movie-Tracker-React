import React from "react";

import { Link } from "react-router-dom";

const Index = () => {
  return (
    <>
      <div>
        <div>
          <h3><Link to="/category">Manage Genre</Link></h3>
          <h3><Link to="/movie">Manage Movies</Link></h3>
           <h3><Link to="/manage">Manage Review</Link></h3>
        </div>
      </div>
    </>
  );
};

export default Index;