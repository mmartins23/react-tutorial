import { useState, useEffect } from 'react';

function MyComponent() {
  const [count, setCount] = useState(0);

  // componentDidMount
  useEffect(() => {
    console.log('Component mounted'); 

    return () => {
      console.log('Cleaning up...'); 
      // componentWillUnmount (cleanup function)
    };
  }, []); // Empty dependency array for componentDidMount

  // componentDidUpdate (for count changes only) 
  useEffect(() => {
    console.log('count has changed:', count);
  }, [count]); 

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}

export default MyComponent;