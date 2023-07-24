import React from 'react';

const Person = ({ name, eyeColor, age }) => {
  return (
    <div>
      <p>Name: {name}</p>
      <p>Eye Color: {eyeColor}</p>
      <p>Age: {age}</p>
      <hr />
    </div>
  );
};

Person.defaultProps = {
  name: 'Zeyad',
  eyeColor: 'deepblue',
  age: 35,
};

export default Person;
