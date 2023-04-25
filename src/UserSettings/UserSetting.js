import React from 'react';
import { Card, Container, Form } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import './UserSettings.css'

export default function UserSetting() {
  const firstName = useSelector(state => state.user.firstName);

  return (
    <>
      <div className='setting-background'>
        <Container>
          <h1>Welcome {firstName}!</h1>

          <Card body>
            <Card.Title>User Settings</Card.Title>

            <Form>
              <Form.Group>
                <Form.Label>What age group best fits your needs? (Can pick multiple)</Form.Label>

                <div className='d-flex'>
                  <Form.Check
                    type='checkbox'
                    id='18-24'
                    label='18-24'
                    className='m-1'
                  />
                  <Form.Check
                    type='checkbox'
                    id='25-34'
                    label='25-34'
                    className='m-1'
                  />
                  <Form.Check
                    type='checkbox'
                    id='35-44'
                    label='35-44'
                    className='m-1'
                  />
                  <Form.Check
                    type='checkbox'
                    id='44-55'
                    label='44-55'
                    className='m-1'
                  />
                  <Form.Check
                    type='checkbox'
                    id='55+'
                    label='55+'
                    className='m-1'
                  />
                </div>
              </Form.Group>

              <Form.Group>
                <Form.Label>Do you have allergies?</Form.Label>

                <Form.Control
                  type='text'
                  placeholder='Enter allergies (If you have any)'
                  id='allergies'
                ></Form.Control>
              </Form.Group>

              <Form.Group>  
                <Form.Label>Would you like to get app notifications?</Form.Label>

                <Form.Select size='sm'>
                  <option>Yes</option>
                  <option>No</option>
                </Form.Select>
              </Form.Group>

              <Form.Group>
                <Form.Label>Would you like to get notifications of these types?</Form.Label>

                <div className='d-flex'>
                  <Form.Check
                    type='checkbox'
                    id='ExtremeWeather'
                    label='ExtremeWeather'
                    className='m-1'
                  />
                  <Form.Check
                    type='checkbox'
                    id='Forecast'
                    label='Forecast'
                    className='m-1'
                  />
                  <Form.Check
                    type='checkbox'
                    id='AllergyWarnings'
                    label='AllergyWarnings'
                    className='m-1'
                  />
                </div>
              </Form.Group>
            </Form>
            
          </Card>
        </Container>
      </div>
    </>
  )
}
