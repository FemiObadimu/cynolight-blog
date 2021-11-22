import React, { useState } from "react";
import { Container, Col, Row, Form, Button } from "react-bootstrap";
import { BallTriangle } from "@agney/react-loading";
import { useHistory } from "react-router";

const Create = () => {
  const history = useHistory();
  const [create, setCreate] = useState({
    title: "",
    blog: "",
    author: "",
    time: "",
    date: "",
  });

  const [loading, setLoading] = useState(false);

  const { title, blog, author, time, date } = create;

  const onChange = (e) => setCreate({ ...create, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();

    setLoading(true);

    setTimeout(() => {
      fetch(" http://localhost:1001/blogs", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(create),
      }).then(() => {
        setLoading(false);
        history.push("/");
      });
    }, 1000);

    setCreate({
      title: "",
      blog: "",
      author: "",
    });
  };
  return (
    <Container style={{ padding: "40px 20px " }}>
      <Row>
        {loading ? (
          <div className="loading">
            <BallTriangle width="70" className="ball-triangle" />
            <p> Adding...</p>
          </div>
        ) : (
          <div>
            <Col md={12} className="heading">
              <h2>Create a New Blog</h2>
            </Col>
            <Col md={12}>
              <Form autoComplete="off" onSubmit={onSubmit} className="form">
                <Row>
                  <Col md={12}>
                    <p>Blogs Title</p>
                    <input
                      autoComplete="off"
                      type="text"
                      placeholder="Title"
                      name="title"
                      required
                      value={title}
                      onChange={onChange}
                      className="my-3 form-control "
                    />
                  </Col>

                  <Col md={12}>
                    <p>Blogs Author</p>
                    <input
                      autoComplete="off"
                      type="text"
                      placeholder="Author"
                      name="author"
                      value={author}
                      required
                      onChange={onChange}
                      className="my-3 form-control"
                    />
                  </Col>
                  <Row>
                    <Col md={6}>
                      <input
                        autoComplete="off"
                        type="time"
                        placeholder=""
                        name="time"
                        value={time}
                        required
                        onChange={onChange}
                        className="my-3 form-control"
                      />
                    </Col>
                    <Col md={6}>
                      <input
                        autoComplete="off"
                        type="date"
                        placeholder="Date"
                        name="date"
                        value={date}
                        required
                        onChange={onChange}
                        className="my-3 form-control"
                      />
                    </Col>
                  </Row>
                  <Col md={12}>
                    <p>Blog</p>
                    <textarea
                      type="text"
                      autoComplete="off"
                      placeholder="Your Blog"
                      required
                      name="blog"
                      value={blog}
                      onChange={onChange}
                      className="my-3 form-control"
                    ></textarea>
                  </Col>
                </Row>
                <Col md={12} className="text-center">
                  <Button
                    type="submit"
                    variant="dark"
                    className="btn-md m-2 btn"
                  >
                    Add Blog
                  </Button>
                </Col>
              </Form>
            </Col>
          </div>
        )}
      </Row>
    </Container>
  );
};

export default Create;
