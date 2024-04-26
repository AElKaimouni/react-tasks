import React from 'react';
import { Card, Button } from 'react-bootstrap';

const RecommendationCard = ({ recommendation }) => {
  return (
    <Card className='mb-4'>
      <Card.Body>
        <Card.Text>{recommendation}</Card.Text>
        <Button variant="primary" >Add to Tasks</Button>
        <Button variant="success" className="m-2" >Schedule</Button>
      </Card.Body>
    </Card>
  );
};

export default RecommendationCard;
