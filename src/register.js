import React, { useState } from "react";
import { Card, Button, Form } from "react-bootstrap";

const initialForm = {
  name: "",
  email: "",
  password: "",
};
const Register = () => {
  const [values, setValues] = useState(initialForm);

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (values.name !== "" && values.email !== "" && values.password !== "") {
      var data = JSON.parse(localStorage.getItem("data"));
      if (!data) data = [];
      data.push(values);
      localStorage.setItem("data", JSON.stringify(data));
      window.alert("User Registered");
      return;
    }
    window.alert("user not registered");
  };
  return (
    <div className="text-center">
      <Card className="sign-in-card">
        <Card.Body>
          <Form className="sign-in-form" onSubmit={(e) => handleSubmit(e)}>
            <Form.Group>
              <input
                className="form-control"
                type="text"
                id="name"
                placeholder="Username"
                onChange={handleChange("name")}
              />
            </Form.Group>
            <Form.Group>
              <input
                className="form-control"
                type="email"
                id="email"
                placeholder="Email or Phone Number"
                onChange={handleChange("email")}
              />
            </Form.Group>
            <Form.Group>
              <input
                className="form-control"
                type="password"
                id="password"
                placeholder="Password"
                onChange={handleChange("password")}
              />
            </Form.Group>
            <Form.Group>
              <Button
                variant="primary"
                type="submit"
                className="bg-fb-blue"
                size="lg"
              >
                Sign Up
              </Button>
            </Form.Group>
            <hr />
            <Button
              variant="success"
              className="btn btn-lg bg-fb-green"
              href="/#/"
            >
              Already have an Account
            </Button>
          </Form>
        </Card.Body>
      </Card>
      <p className="celebrity-prompt">
        <a href="#">
          <strong>Create a Page</strong>
        </a>{" "}
        for a celebrity, band or business.
      </p>
    </div>
  );
};

export default Register;
