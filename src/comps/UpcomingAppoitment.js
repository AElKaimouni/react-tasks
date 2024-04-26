import React from 'react';
import { Card } from 'react-bootstrap';

const UpcomingAppointment = ({ appointment }) => {
  const { title, date, time, location } = appointment;

  return (
    <Card className="mb-4">
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>Date: {date}</Card.Text>
        <Card.Text>Time: {time}</Card.Text>
        <Card.Text>Location: {location}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default UpcomingAppointment;
