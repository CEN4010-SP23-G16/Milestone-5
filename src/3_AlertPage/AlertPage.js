import React from 'react'
import { Container, Row, Button, Col } from 'react-bootstrap'
import addNotification from 'react-push-notification'
import './AlertPage.css'
import logo from './favicon.ico';

export default function AlertPage() {

  const sendNotification = (age) => {
    if (age >= 18 && age <= 24) {
      addNotification({
        title: "Climate Smart",
        message: "Make sure you stay hydrated! Wear the recommended clothing when you go outside.",
        duration: 4000,
        icon: logo,
        native: true,
      })
    } else if (age >= 25 && age <= 34) {
      addNotification({
        title: "Climate Smart",
        message: "Looks very chilly! Wear layers of clothing.",
        duration: 4000,
        icon: logo,
        native: true,
      })
    } else if (age >= 35 && age <= 44) {
      addNotification({
        title: "Climate Smart",
        message: "It looks like it's too hot outside. Wear the proper clothing!",
        duration: 4000,
        icon: logo,
        native: true,
      })
    } else if (age >= 45 && age <= 54) {
      addNotification({
        title: "Climate Smart",
        message: "Enjoy yourself at the beach today!",
        duration: 4000,
        icon: logo,
        native: true,
      })
    } else if (age >= 55) {
      addNotification({
        title: "Climate Smart",
        message: "Take it easy! It's raining outside!",
        duration: 4000,
        icon: logo,
        native: true,
      })
    }
  }

  return (
    <>
      <div className='alert-background'>
        <Container>
          <h2>Alerts</h2>
          <Row>
              <Col>
                <Button onClick={() => sendNotification(21)}>18-24</Button>
              </Col>
              <Col>
                <Button onClick={() => sendNotification(30)}>25-34</Button>
              </Col>
              <Col>
                <Button onClick={() => sendNotification(40)}>35-44</Button>
              </Col>
              <Col>
                <Button onClick={() => sendNotification(50)}>45-54</Button>
              </Col>
              <Col>
                <Button onClick={() => sendNotification(60)}>55+</Button>
              </Col>
          </Row>
        </Container>
      </div>
    </>
  )
}
