import './App.css';
import React, {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Col, Form, Row, Button, InputGroup } from 'react-bootstrap';
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
let schema = yup.object().shape({
  username: yup.string()
      .required("Required !!"),
  email: yup.string()
      .email("It has to be a valid Email")
      .required("Required !!"),
});
function App() {
  const [validated, setValidated] = useState(false);

  const { register, handleSubmit, formState:{ errors } } = useForm({
      resolver: yupResolver(schema)
  });
  const onSubmit = data => {
    console.log(data)
    // data.preventDefault();
    // const form = data.currentTarget;
    // console.log(form)
    // if (form.checkValidity() === false) {
    //     data.preventDefault();
    //     data.stopPropagation();
    // }

    setValidated(true);
};

  return (
    <div className="App">
      <Container>
        <Row>
          <Col>
              <Form noValidate validated={validated} onSubmit={handleSubmit(onSubmit)}>
              <Form.Group className="mb-3">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                {...register("email")}  
                type="email" 
                // className={`${errors.email ? 'is-invalid' : 'was-validated'}`}
                placeholder="name@example.com" 
                wasValidated={!!errors.email}
                isInvalid={!!errors.email}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.email?.message}
                </Form.Control.Feedback>
              </Form.Group>  
              <Form.Group className="mb-3">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                {...register("username")}  
                type="text" 
                placeholder="User Name" 
                // className={`${errors.username ? 'is-invalid' : 'was-validated'}`}
                wasValidated={!!errors.username}
                isInvalid={!!errors.username}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.username?.message}
                </Form.Control.Feedback>
              </Form.Group>
              <Button className="mt-3" type="submit" variant="success">Submit</Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
