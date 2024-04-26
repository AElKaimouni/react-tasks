import React, { useState } from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const AddAppointmentForm = ({ onSubmit }) => {
  const navigate = useNavigate();
  const [title, setTitle] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [location, setLocation] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setTitle('');
    setDate('');
    setTime('');
    setLocation('');

    navigate("/");
  };

  return (
    <Container className="mt-4">
      <h2>Add New Appointment</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group className='mb-2' controlId="title">
          <Form.Label>Title</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </Form.Group>
        <Form.Group className='mb-2' controlId="date">
          <Form.Label>Date</Form.Label>
          <Form.Control
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            required
          />
        </Form.Group>
        <Form.Group className='mb-2' controlId="time">
          <Form.Label>Time</Form.Label>
          <Form.Control
            type="time"
            value={time}
            onChange={(e) => setTime(e.target.value)}
            required
          />
        </Form.Group>
        <Form.Group className='mb-2' controlId="location">
          <Form.Label>Location</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            required
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Add Appointment
        </Button>
      </Form>
    </Container>
  );
};

export default AddAppointmentForm;
