import React from "react";
import { useParams, useHistory } from "react-router";
import { Container, Col, Row, Button } from "react-bootstrap";
import useFetch from "./custom-hook/useFetch";
import { BallTriangle } from "@agney/react-loading";

const Blogdetails = () => {
  const history = useHistory();
  const { id } = useParams();

  const { blogs, loading, error } = useFetch(
    "http://localhost:1001/blogs/" + id
  );

  const onDelete = () => {
    fetch(" http://localhost:1001/blogs/" + blogs.id, {
      method: "DELETE",
    }).then(() => {
      history.push("/");
    });
  };
  return (
    <Container>
      <Row>
        <Col md={12}>
          {loading && (
            <div className="loading">
              <BallTriangle width="70" className="ball-triangle" />
              <p>Loading...</p>
            </div>
          )}
        </Col>
        <Col md={12}>{error && <div className="loading">{error}</div>}</Col>

        <Col md={12}>
          {blogs && (
            <div className="details" key={blogs.id}>
              <h2 className="title">{blogs.title}</h2>
              <p className="author">{blogs.author}</p>
              <p>{blogs.blog}</p>
              <div className="col-md-12 m-4 text-center">
                <Button className="btn-block btn title" onClick={onDelete}>
                  Delete Blog
                </Button>
              </div>
            </div>
          )}
        </Col>
      </Row>
    </Container>
  );
};

export default Blogdetails;
