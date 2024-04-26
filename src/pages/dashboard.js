import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import fakeAppointments from '../data/appointments';
import UpcomingAppointment from '../comps/UpcomingAppoitment';
import fakeTasks from '../data/tasks';
import TaskCard from '../comps/TaskCard';
import { Link } from 'react-router-dom';
import RecommendationCard from '../comps/RecommendationCard';
import AppNavbar from '../comps/AppNavbar';

const Dashboard = () => {
  const [recommendations, setRecommendations] = useState([]);

  // Simulated function to fetch contextual recommendations
  const fetchRecommendations = () => {
    // Simulated API call to fetch recommendations based on user's context
    // Replace this with your actual API call
    const mockRecommendations = [
      "Try the new Italian restaurant nearby!",
      "Visit the art exhibition at the museum today.",
      "It's a sunny day! How about a picnic in the park?"
    ];
    setRecommendations(mockRecommendations);
  };

  useEffect(() => {
    fetchRecommendations();
  }, []);


  return (
    <Container className="mt-4">
      <AppNavbar userName={"John Doe"} />
      <Row className="mb-4">
        <Col>
          <Card>
            <Card.Body>
              <Card.Title>Contextual AI-powerd Recommendations</Card.Title>
              {recommendations.map((recommendation, index) => (
                <RecommendationCard recommendation={recommendation} key={index}  />
              ))}
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row>
        <Col md={6}>
          <Card>
            <Card.Body>
              <Card.Title className="mb-4">
                <Row>
                  <Col xs={9}>Upcoming Appointments</Col>
                  <Col xs={3}>
                    <Button variant="primary" >
                      <Link to="/add_task">Add Task</Link>
                    </Button>
                  </Col>
                </Row>
              </Card.Title>
              {fakeAppointments.length === 0 && <Card.Text>
                No appointments scheduled for today.
              </Card.Text>}
              {fakeAppointments.length > 0 && fakeAppointments.map((appointment, index) => (
                <UpcomingAppointment appointment={appointment} key={index} />
              ))}
            </Card.Body>
          </Card>
        </Col>
        <Col md={6}>
          <Card>
            <Card.Body>
              <Card.Title className="mb-4">
                <Row>
                  <Col xs={8} className='flex-grow'>Tasks for Today</Col>
                  <Col xs={4}>
                    <Button variant="success" >
                      <Link to="add_appointment">Add Appointment</Link>
                    </Button>
                  </Col>
                </Row>
              </Card.Title>
              {fakeTasks.length === 0 && <Card.Text>
                No tasks due for today.
              </Card.Text>}
              {fakeTasks.length > 0 && fakeTasks.map((task,index) => (
                <TaskCard task={task} key={index} />
              ))}
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Dashboard;
