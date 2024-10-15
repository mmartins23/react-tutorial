import { useMemo } from "react";

// A functional component that calculates the square of a number
const SquareCalculator = ({ number }) => {
    // Memoize the square calculation
    const squaredValue = useMemo(() => {
      console.log("Calculating square...");
      return number * number;
    }, [number]); // Recalculate only if 'number' changes
  
    return <p>Square of {number} is {squaredValue}</p>;
  };

export default SquareCalculator;