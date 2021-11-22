import React, { useState } from "react";
import { Container, Col, Row, Form, Button } from "react-bootstrap";
import { useHistory } from "react-router";
import { BallTriangle } from "@agney/react-loading";
import { faLightbulb } from "@fortawesome/free-regular-svg-icons";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";

const Contact = () => {
  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState(false);
  const [cont, setCont] = useState(true);
  const [sent, setSent] = useState(false);

  // const history = useHistory();

  const [contact, setContact] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
    town: "",
    country: "",
  });

  const { name, email, phone, subject, message, country, town } = contact;
  const onChange = (e) => {
    setContact({ ...contact, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();

  

    JSON.stringify(contact);

    const output = `
  Hi There, Femi Obadimu (The Crtitcal Thinker)
  My Name is ${contact.name}, I'm a/an ${contact.subject}.
  Main Purpose for Message: ${contact.message}.
  Here's my Mail-Address : ${contact.email}.
  I,d Love to hear from you, i can always be reached : ${contact.phone}.
  
  Best Regards Developer!!
  `;

    setCont(false);
    setLoading(true);

    var options = {
      method: "POST",
      url: "https://rapidprod-sendgrid-v1.p.rapidapi.com/mail/send",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Credentials": false,
        "x-rapidapi-host": "rapidprod-sendgrid-v1.p.rapidapi.com",
        "x-rapidapi-key": "f991ed1c46msh019b92894e21f98p1e7d2fjsn14c6cfa771bb",
      },
      data: {
        personalizations: [
          {
            to: [{ email: "ficazzosam@gmail.com" }],
            subject: "New Portfolio Message",
          },
        ],
        from: { email: "Portfolio__@outlook.com" },
        content: [{ type: "text/plain", value: `${output}` }],
      },
    };

    axios
      .request(options)
      .then(function (res) {
        if (res.status === 200) {
          setLoading(false);
          setErr(false);
          setSent(true);
        }
      })
      .catch(function (error) {
        if (error) {
          setLoading(false);
          setErr(true);
        }
      });
  };

  return (
    <Container style={{ padding: "40px 20px " }}>
      {loading && (
        <div className="loading">
          <BallTriangle width="70" className="ball-triangle" />
          <p>Loading...</p>
        </div>
      )}

      {sent && (
        <div className="loading">
          <p>
            <FontAwesomeIcon icon={faLightbulb} />
          </p>
          <h1 className="text-center">Message / Email Sent</h1>
          <h2 className="text-center">
            <NavLink to="/" className="link">
              Go Back Home
            </NavLink>
          </h2>
        </div>
      )}

      {err && (
        <div className="loading">
          <h1 className="text-center">Error</h1>
          <h2 className="text-center">
            Check your Connection Settings
            <NavLink to="/" className="link">
              <p>Go Back Home</p>
            </NavLink>
          </h2>
        </div>
      )}
      {cont && (
        <Row>
          <Col md={12}>
            <h2 className="heading">Contact Cynolight</h2>
          </Col>
          <Col md={12}>
            <Form autoComplete="off" onSubmit={onSubmit} className="form">
              <Row>
                <Col md={12}>
                  <p>Full Name</p>
                  <input
                    autoComplete="off"
                    type="text"
                    placeholder="Full Name"
                    name="name"
                    required
                    value={name}
                    onChange={onChange}
                    className="my-3 form-control "
                  />
                </Col>
                <Col md={12}>
                  <p>Email Address</p>
                  <input
                    autoComplete="off"
                    type="email"
                    placeholder="Email Address"
                    name="email"
                    value={email}
                    required
                    onChange={onChange}
                    className="my-3 form-control"
                  />
                </Col>

                <Col md={12} className="block">
                  <p>Phone Number</p>
                  <input
                    type="number"
                    autoComplete="off"
                    placeholder="Phone Number"
                    name="phone"
                    value={phone}
                    required
                    onChange={onChange}
                    className="my-3 form-control"
                  />
                </Col>
                <Col md={12}>
                  <p>Company</p>
                  <input
                    type="text"
                    autoComplete="off"
                    placeholder="Your Company's Name"
                    required
                    name="subject"
                    value={subject}
                    onChange={onChange}
                    className="my-3 form-control"
                  />
                </Col>

                <Col md={12}>
                  <p> Town/City</p>
                  <input
                    type="text"
                    autoComplete="off"
                    placeholder=""
                    required
                    name="town"
                    value={town}
                    onChange={onChange}
                    className="my-3 form-control"
                  />
                </Col>

                <Col md={12}>
                  <p>Country</p>
                  <input
                    type="text"
                    autoComplete="off"
                    placeholder="Your Country"
                    required
                    name="country"
                    value={country}
                    onChange={onChange}
                    className="my-3 form-control"
                  />
                </Col>

                <Col md={12}>
                  <p>Message</p>
                  <textarea
                    type="text"
                    autoComplete="off"
                    placeholder="Your Message"
                    required
                    name="message"
                    value={message}
                    onChange={onChange}
                    className="my-3 form-control"
                  ></textarea>
                </Col>
              </Row>
              <Col md={12} className="text-center">
                <Button type="submit" variant="dark" className="btn-md m-2 btn">
                  Send
                </Button>
              </Col>
            </Form>
          </Col>
        </Row>
      )}
    </Container>
  );
};

export default Contact;
