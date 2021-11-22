import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div>
      <div className="loading" >
        <h1>Not Found</h1>
        <Button className="btn btn-md ">
          <Link to="/" className="link">
            Back to Home
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
