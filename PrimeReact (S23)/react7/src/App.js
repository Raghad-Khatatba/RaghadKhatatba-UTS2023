import React, { useState, useRef } from 'react';
import { InputText } from 'primereact/inputtext';
import { Dropdown } from 'primereact/dropdown';
import { Button } from 'primereact/button';
import { Toast } from 'primereact/toast';
import './App.css';

const options = [
  { label: 'C#', value: 'C#' },
  { label: 'ReactJs', value: 'ReactJs' },
  { label: 'Java', value: 'Java' },
  { label: 'C++', value: 'C++' },
  { label: 'Python', value: 'Python' },
];

const App = () => {
  const [name, setName] = useState('');
  const [course, setCourse] = useState(options[0].value);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [telephone, setTelephone] = useState('');
  const [address, setAddress] = useState('');
  const [notes, setNotes] = useState('');

  const toast = useRef(null);

  const handleSubmit = () => {
    if (!name || !course || !email || !password || !telephone || !address || !notes) {
      showToast('error', 'Please fill in all fields.');
    }  else if (!/^[A-Za-z ]+$/.test(name)) {
      showToast('error', 'Name should only contain characters.');
    } else if (!validateEmail(email)) {
      showToast('error', 'Invalid email format.');
    } else if (password.length < 6) {
      showToast('error', 'Password must be at least 6 characters long.');
    } else if (!/^\d+$/.test(telephone)) {
      showToast('error', 'Telephone must contain only numbers.');
    } else {
      showToast('success', 'Form submitted successfully!');
      
    }
  };

  const handleReset = () => {
    setName('');
    setCourse(options[0].value);
    setEmail('');
    setPassword('');
    setTelephone('');
    setAddress('');
    setNotes('');
  };

  const showToast = (severity, message) => {
    toast.current.show({ severity, summary: message });
  };

  const validateEmail = (email) => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
  };

  return (
    <div className="container">
      <h1>Form Validation</h1>
      <div className="form-group">
        <label htmlFor="name">Name</label>
        <InputText id="name" value={name} onChange={(e) => setName(e.target.value)} />
      </div>
      <div className="form-group">
        <label htmlFor="email">Email</label>
        <InputText id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
      </div>
      <div className="form-group">
        <label htmlFor="password">Password</label>
        <InputText
          id="password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label htmlFor="telephone">Telephone</label>
        <InputText id="telephone" value={telephone} onChange={(e) => setTelephone(e.target.value)} />
      </div>
      <div className="form-group">
        <label htmlFor="address">Address</label>
        <InputText id="address" value={address} onChange={(e) => setAddress(e.target.value)} />
      </div>
      <div className="form-group">
        <label htmlFor="course">Course</label>
        <Dropdown
          id="course"
          value={course}
          options={options}
          onChange={(e) => setCourse(e.value)}
          placeholder="Select a course"
        />
      </div>
      <div className="form-group">
        <label htmlFor="notes">Notes</label>
        <textarea id="notes" rows="4" value={notes} onChange={(e) => setNotes(e.target.value)} />
      </div>
      <Button label="Submit" onClick={handleSubmit} />
      <Button label="Reset" className="p-button-secondary" onClick={handleReset} />
      <Toast ref={toast} />
    </div>
  );
};

export default App;
