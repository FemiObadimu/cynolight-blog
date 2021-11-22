import React from "react";
import { Container, Col, Row } from "react-bootstrap";
import BlogList from "./BlogList";
import useFetch from "./custom-hook/useFetch";
import { BallTriangle } from "@agney/react-loading";

const Blogs = () => {
  const { blogs, loading, error } = useFetch("http://localhost:1001/blogs");
  return (
    <Container style={{ padding: "40px 20px" }}>
      <Row>
        <Col>Blogs</Col>
      </Row>
      <Row>
        <Col md={12}>{error && <div className="loading">{error}</div>}</Col>

        <Col md={12}>
          {loading && (
            <div className="loading">
              <BallTriangle width="70" className="ball-triangle" />
              <p> Loading...</p>
            </div>
          )}
        </Col>
        <Col md={12}>
          {blogs && <BlogList blogs={blogs} title="All Blogs" />}
        </Col>
      </Row>
    </Container>
  );
};

export default Blogs;
