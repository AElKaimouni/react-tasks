import React from 'react';
import { BrowserRouter as Router, Route, Routes  } from 'react-router-dom';
import Dashboard from './pages/dashboard';
import TaskForm from './pages/task_form';
import AddAppointmentForm from './pages/add_appointment';
import PreferencesPage from './pages/prefernces';

const App = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route exact path="/" element={<Dashboard />} />
          <Route exact path="/add_task" element={<TaskForm />} />
          <Route exact path="/add_appointment" element={<AddAppointmentForm />} />
          <Route exact path="/prefernces" element={<PreferencesPage />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
