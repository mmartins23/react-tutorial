import { useState } from 'react';

function FormComponent4() {
    const [username, setUsername] = useState('');
    const [comments, setComments] = useState('');
    const [topic, setTopic] = useState('react');

    const handleSubmit = (event) => {
        event.preventDefault();
        alert(`Username: ${username}\nComments: ${comments}\nTopic: ${topic}`);
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>Username:</label>
            <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
            />

            <label>Comments:</label>
            <textarea
                value={comments}
                onChange={(e) => setComments(e.target.value)}
            />

            <label>Topic:</label>
            <select value={topic} onChange={(e) => setTopic(e.target.value)}>
                <option value="react">React</option>
                <option value="angular">Angular</option>
                <option value="vue">Vue</option>
            </select>

            <button type="submit">Submit</button>
        </form>
    );
}

export default FormComponent4;  