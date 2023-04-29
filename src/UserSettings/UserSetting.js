import React from 'react';
import { Card, Container, Form, Button } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import {
  updateAllergies,
  toggleAppNoti,
  updateNotificationType,
  updateAgeCheckbox,
} from '../Redux/slices/settingsSlice';
import './UserSettings.css';

export default function UserSetting() {
  const firstName = useSelector((state) => state.user.firstName);
  const ageRange = useSelector((state) => state.settings.ageRange);
  const allergies = useSelector((state) => state.settings.allergies);
  const notificationType = useSelector((state) => state.settings.notificationType);

  const dispatch = useDispatch();

  const handleAllergiesChange = (value) => {
    dispatch(updateAllergies(value));
  };

  const handleAppNotiToggle = (value) => {
    dispatch(toggleAppNoti(value));
  };

  const handleNotificationTypeChange = (id, checked) => {
    const updatedNotificationType = notificationType.map((type) => {
      if (type.id === id) {
        return { ...type, checked };
      }
      return type;
    });
    dispatch(updateNotificationType(updatedNotificationType));
  };
  
  const handleCheckboxChange = (name, checked) => {
    const updatedAgeRange = ageRange.map((age) => {
      if (age.title === name) {
        return { ...age, checked };
      }
      return age;
    });
    console.log(updatedAgeRange);
    dispatch(updateAgeCheckbox(updatedAgeRange));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Do something with the updated state here
  };

  return (
    <>
      <div className='setting-background'>
        <Container>
          <h1>Welcome {firstName}!</h1>

          <Card body>
            <Card.Title>User Settings</Card.Title>

            <Form onSubmit={handleSubmit}>
              <Form.Group>
                <Form.Label>
                  What age group best fits your needs? (Can pick multiple)
                </Form.Label>

                <div className='d-flex'>
                  {ageRange.map((age, i) => (
                    <div key={age.id}>
                      <Form.Check
                        type='checkbox'
                        className='m-1'
                        id={age.id}
                        label={age.title}
                        checked={age.checked}
                        onChange={(e) => handleCheckboxChange(age.title, e.target.checked)}
                        name={age.title}
                      />
                    </div>
                  ))}
                </div>
              </Form.Group>
              <Form.Group>
                <Form.Label htmlFor='allergies'>Do you have allergies?</Form.Label>
                <Form.Control
                  type='text'
                  placeholder='Enter allergies (If you have any)'
                  id='allergies'
                  value={allergies}
                  onChange={(e) => handleAllergiesChange(e.target.value)}
                />
              </Form.Group>

              <Form.Group>
                <Form.Label>Would you like to get app notifications?</Form.Label>
                <Form.Select size='sm' onChange={(e) => handleAppNotiToggle(e.target.value === 'Yes')}>
                  <option value='Yes'>Yes</option>
                  <option value='No'>No</option>
                </Form.Select>
              </Form.Group>

              <Form.Group>
                <Form.Label>Would you like to get notifications of these types?</Form.Label>
                <div className='d-flex'>
                  {notificationType.map((type) => (
                    <div key={type.id}>
                      <Form.Check
                        type='checkbox'
                        className='m-1'
                        id={type.id}
                        label={type.title}
                        onChange={(e) => handleNotificationTypeChange(type.id, e.target.checked)}
                      />
                    </div>
                  ))}
                </div>
              </Form.Group>

              <Button type="submit" className='mb-2'>Save Changes</Button>

            </Form>
            
          </Card>
        </Container>
      </div>
    </>
  )
}
