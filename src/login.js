import React from "react";
import { Card, Button, Form } from "react-bootstrap";

const initialForm = { email: "", password: "" };
const Login = () => {
  const [values, setValues] = React.useState(initialForm);

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (values.email !== "" && values.password !== "") {
      var data = JSON.parse(localStorage.getItem("data"));
      if (data) {
        let obj = data.find((o) => o.email === values.email);
        if (obj) {
          if (obj.password === values.password) {
            window.alert("User Logged in");
          } else {
            window.alert("Wrong Password");
          }
        } else window.alert("User not registered");
      } else window.alert("User not registered");
    }
    setValues(initialForm);
  };
  return (
    <div className="text-center">
      <Card className="sign-in-card">
        <Card.Body>
          <Form className="sign-in-form" onSubmit={(e) => handleSubmit(e)}>
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
                Log In
              </Button>
            </Form.Group>
            <hr />
            <Button
              variant="success"
              className="btn btn-lg bg-fb-green"
              href="/#/register"
            >
              Create Account
            </Button>
          </Form>
        </Card.Body>
      </Card>
      <p className="celebrity-prompt">
        <a href="/#">
          <strong>Create a Page</strong>
        </a>{" "}
        for a celebrity, band or business.
      </p>
    </div>
  );
};

export default Login;

