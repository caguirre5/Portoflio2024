import { useEffect, useState } from "react";

// Implement a hook to get the dimensions of a ref element
export const useDimensions = (ref) => {
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  useEffect(() => {
    // Function to update dimensions
    const updateDimensions = () => {
      if (ref.current) {
        setDimensions({
          width: ref.current.offsetWidth,
          height: ref.current.offsetHeight,
        });
      }
    };

    // Update dimensions on mount
    updateDimensions();

    // Attach resize listener
    window.addEventListener("resize", updateDimensions);

    // Cleanup listener on unmount
    return () => {
      window.removeEventListener("resize", updateDimensions);
    };
  }, [ref]);

  return dimensions;
};
