import React from 'react';
import { Card } from 'react-bootstrap';

const TaskCard = ({ task }) => {
  const { title, description, deadline } = task;

  return (
    <Card className="mb-4">
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{description}</Card.Text>
        <Card.Text>Deadline: {deadline}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default TaskCard;
