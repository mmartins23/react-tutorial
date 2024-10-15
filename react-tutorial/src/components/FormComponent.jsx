import { useState } from 'react';

function FormComponent() {
  const [username, setUsername] = useState('');

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  return (
    <form>
      <label>Username:</label>
      <input
        type="text"
        value={username}
        onChange={handleUsernameChange}
      />
    </form>
  );
}

export default FormComponent;
