import React from 'react';
import { Container, Button, Form, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';



export default function LoginSection() {

  return (
    <>
      <Container>
        <Card>
          <Card.Body>
            <Form>
              <Form.Group>
                <Form.Label>Email</Form.Label>

                <Form.Control
                  type='email'
                  required
                  placeholder='Email address'
                ></Form.Control>

                <Form.Control.Feedback type="invalid">
                  Please choose a username.
                </Form.Control.Feedback>
              </Form.Group>
              
              <Form.Group>
                <Form.Label>Password</Form.Label>

                <Form.Control
                  type='password'
                  required
                  placeholder='Password'
                >

                </Form.Control>
              </Form.Group>

              <Button>
                Sign In
              </Button>

              <Form.Group>
                <Form.Label>Not a member?</Form.Label>
                <Link to='/SignUpUser'>Register</Link>
              </Form.Group>
            </Form>
          </Card.Body>
        </Card>
      </Container>
    </>
  )
}
