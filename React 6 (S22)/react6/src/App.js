import React from 'react';
import Person from './Person';

const App = (props) => {
  const { persons } = props;

  const defaultPersons = [
    <Person name="Person 1" eyeColor="blue" age="23" />,
    <Person name="Person 2" eyeColor="blue" />,
    <Person name="Person 3" age="23" />,
    <Person eyeColor="green" age="23" />,
  ];

  const allPersons = persons || defaultPersons;

  return (
    <div>
      {allPersons.map((person, index) => (
        <React.Fragment key={index}>
          {person}
          {index !== allPersons.length - 1 && <hr />} 
        </React.Fragment>
      ))}
    </div>
  );
};

export default App;
