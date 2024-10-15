import { useState } from 'react';

function FormComponent2() {
    const [comments, setComments] = useState('');

    const handleCommentsChange = (event) => {
        setComments(event.target.value);
    };

    return (
        <form>
            <label>Comments:</label>
            <textarea
                value={comments}
                onChange={handleCommentsChange}
            />
        </form>
    );
}

export default FormComponent2;