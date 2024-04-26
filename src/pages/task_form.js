import React, { useState } from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const TaskForm = ({ onSubmit }) => {
  const navigate = useNavigate();
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [deadline, setDeadline] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    setTitle('');
    setDescription('');
    setDeadline('');

    navigate("/");
  };

  return (
    <Container className="mt-4">
      <h2>Add New Task</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-2" controlId="title">
          <Form.Label>Title</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </Form.Group>
        <Form.Group className="mb-2"  controlId="description">
          <Form.Label>Description</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            placeholder="Enter description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </Form.Group>
        <Form.Group className="mb-2"  controlId="deadline">
          <Form.Label>Deadline</Form.Label>
          <Form.Control
            type="date"
            value={deadline}
            onChange={(e) => setDeadline(e.target.value)}
            required
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Add Task
        </Button>
      </Form>
    </Container>
  );
};

export default TaskForm;
