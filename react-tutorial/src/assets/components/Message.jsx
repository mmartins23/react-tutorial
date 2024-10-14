import { useState } from 'react';

function Message() {
    // Declare a state variable called message, with an initial value of "Welcome, visitor"
    const [message, setMessage] = useState('Welcome, visitor');

    return (
        <div>
            <h1>{message}</h1>
            <button onClick={() => setMessage('Thank you for subscribing')}>
                Subscribe
            </button>
        </div>
    );
}

export default Message;