import React, { useState } from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const PreferencesPage = () => {
  const [preferences, setPreferences] = useState({
    food: '',
    entertainment: '',
    travel: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPreferences(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can submit preferences to the server or update them locally
    console.log('Preferences submitted:', preferences);
  };

  return (
    <Container className="mt-4">
      <h2>Preferences</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-2" controlId="food">
          <Form.Label>Favorite Food</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter favorite food"
            name="food"
            value={preferences.food}
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group className="mb-2" controlId="entertainment">
          <Form.Label>Favorite Entertainment</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter favorite entertainment"
            name="entertainment"
            value={preferences.entertainment}
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group className="mb-4" controlId="travel">
          <Form.Label>Preferred Travel Destinations</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter preferred travel destinations"
            name="travel"
            value={preferences.travel}
            onChange={handleChange}
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          <Link to="/">
            Save Preferences
          </Link>
        </Button>
      </Form>
    </Container>
  );
};

export default PreferencesPage;
