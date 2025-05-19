import React, { useState } from "react";

const Maxdistance = () => {
  const [seats, setSeats] = useState([1, 0, 0, 0, 1, 0, 1]);
  const [result, setResult] = useState(null);

  const handleCalculate = () => {
    const distance = maxdistToClosest(seats);

setResult(distance);
  };

  return (
    <div>
      <h2>person distance</h2>
      <p>Seats: {JSON.stringify(seats)}</p>
      <button onClick={handleCalculate}> Distance</button>
      {result !== null && <p> Distance: {result}</p>}
    </div>
  );
};

// Paste the function above here too
function maxdistToClosest(seats) {
  let maxdistance = 0;
  let lastPerson = -1;
  const n = seats.length;

  for (let i = 0; i < n; i++) {
    if (seats[i] === 1) {
      if (lastPerson === -1) {
        maxdistance = i;
      } else {
        maxdistance = Math.max(maxdistance, Math.floor((i - lastPerson) / 2));
      }
      lastPerson = i;
    }
  }

  if (seats[n - 1] === 0) {
    maxdistance = Math.max(maxdistance, n - 1 - lastPerson);
  }

  return maxdistance;
}
export default Maxdistance