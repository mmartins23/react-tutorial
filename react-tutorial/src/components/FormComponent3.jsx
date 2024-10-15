import { useState } from 'react';

function FormComponent3() {
    const [topic, setTopic] = useState('react');

    const handleTopicChange = (event) => {
        setTopic(event.target.value);
    };

    return (
        <form>
            <label>Topic:</label>
            <select value={topic} onChange={handleTopicChange}>
                <option value="react">React</option>
                <option value="angular">Angular</option>
                <option value="vue">Vue</option>
            </select>
        </form>
    );
}
export default FormComponent3;  