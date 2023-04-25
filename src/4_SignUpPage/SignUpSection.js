import {React, useState} from 'react';
import { Container, Row, Col, Card, Button, Form } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { signUpUser, updateEmail, updateFirstName, updateLastName, updatePassword } from '../Redux/slices/userSlice';
import './SignUp.css';

export default function SignUpSection() {

  const [validated, setValidated] = useState(false);
  const dispatch = useDispatch();
  let navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.stopPropagation();
      setValidated(true);
      return;
    }

    let firstName = event.target.elements.firstname.value;
    let lastName = event.target.elements.lastname.value;
    let email = event.target.elements.email.value;
    let password = event.target.elements.password.value;
    
    dispatch(updateFirstName(firstName));
    dispatch(updateLastName(lastName));
    dispatch(updateEmail(email));
    dispatch(updatePassword(password));

    try {
      await dispatch(signUpUser({firstName, lastName, email, password}));
      // Sign-up was successful, redirect the user to the home page
      navigate('/settings');
    } catch (error) {
      // Sign-up failed, display an error message to the user
      console.log('Error signing up:', error.message);
    }
  };

  

  return (
    <>
      <div className='signup-background'>
        <Container>
          <Row> 
            <Col md={6} className='text-center text-md-start d-flex flex-column justify-content-center'>

              <h1 className="my-5 display-3 fw-bold ls-tight px-3">
                Sign Up for<br />
                <span className="text-primary"> Notifications!</span>
              </h1>
            </Col>

            <Col md={6}>
              <Card className='my-5'>
                <Card.Body className='p-5'>
                  <Form noValidate validated={validated} onSubmit={handleSubmit}>
                    <Row className="mb-3">
                      <Form.Group as={Col} lg='6' controlId="firstname">
                        <Form.Label>First name</Form.Label>
                        <Form.Control
                          required
                          type="text"
                          placeholder="First name"
                        />
                        <Form.Control.Feedback type='invalid'>Provide a valid First Name</Form.Control.Feedback>
                      </Form.Group>
                      <Form.Group as={Col} lg='6' controlId="lastname">
                        <Form.Label>Last name</Form.Label>
                        <Form.Control
                          required
                          type="text"
                          placeholder="Last name"
                        />
                        <Form.Control.Feedback type='invalid'>Provide a valid Last Name</Form.Control.Feedback>
                      </Form.Group>
                    </Row>

                    <div className="mb-3">
                      <Form.Group controlId="email">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" placeholder="Enter Email" required />
                        <Form.Control.Feedback type="invalid">
                          Please provide a valid email.
                        </Form.Control.Feedback>
                      </Form.Group>

                      <Form.Group controlId="password">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="Password" placeholder="Password" required />
                        <Form.Control.Feedback type="invalid">
                          Please provide a valid Password.
                        </Form.Control.Feedback>
                      </Form.Group>
                    </div>
                    <Form.Group className="mb-3">
                      <Form.Check
                        required
                        label="Agree to terms and conditions"
                        feedback="You must agree before submitting."
                        feedbackType="invalid"
                      />
                    </Form.Group>
                    <Button type="submit" className='mb-2'>Submit</Button>
                    
                    <Form.Group>
                      <Form.Label>Already a member?</Form.Label>
                      <Link to='/loginpage'>Click Here!</Link>
                    </Form.Group>
                    
                  </Form>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  )
}
