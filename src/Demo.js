import React, { useState, useEffect } from "react";

const StateUpdateDemo = () => {
  const [errors, setErrors] = useState([]);
  const [trigger, setTrigger] = useState(0);

  // errors = []

  useEffect(() => {
    // errors = []
    setErrors((prev) => [...prev, "Error 1A - " + Date.now()]);
    setErrors((prev) => [...prev, "Error 2A - " + Date.now()]);


    // Simulating a second async operation
    const timeoutId = setTimeout(() => {
      setErrors((prev) => [...prev, "Error 1B - " + Date.now()]);
      setErrors((prev) => [...prev, "Error 2B - " + Date.now()]);
    }, 100);

    return () => clearTimeout(timeoutId);
  }, [trigger]);

  // errors = []

  // end

  const handleTrigger = () => {
    setTrigger((prev) => prev + 1);
  };

  return (
    <div>
      <div>
        <div>
          <h1>Error list demo</h1>
        </div>
        <div>
          <div>
            <button onClick={handleTrigger} className="w-full">
              Trigger Effects to Generate New Errors
            </button>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-4 border rounded-lg">
                <h3 className="font-semibold mb-2">Error list</h3>

                <div className="mt-4">
                  <h4 className="font-medium mb-2">Current Errors:</h4>
                  <ul
                    className="list-disc pl-4"
                    style={{ height: "400px", overflow: "scroll" }}
                  >
                    {errors.map((error, index) => (
                      <li key={index} className="text-sm">
                        {error}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StateUpdateDemo;
