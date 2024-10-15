import Person from './Person'; // Ensure the correct path to Person.js

// Step 1: Define the data
const persons = [
  { name: 'Bruce', age: 30, skill: 'React' },
  { name: 'Clark', age: 25, skill: 'Angular' },
  { name: 'Diana', age: 28, skill: 'Vue' }
];

const PersonList = () => {
  const personList = persons.map(person => <Person key={person.name} person={person} />);

  return (
    <div>{personList}</div>
  );
};

export default PersonList;
