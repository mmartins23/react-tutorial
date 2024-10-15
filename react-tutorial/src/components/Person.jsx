const Person = ({ person }) => {
    return (
      <h2>
        I am {person.name}, {person.age} years old, skilled in {person.skill}
      </h2>
    );
  };
  
  export default Person;
  