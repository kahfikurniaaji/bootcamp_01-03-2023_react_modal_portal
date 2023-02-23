// Import complonent yang dibutuhkan
import React, { useEffect, useState } from "react";

// Function Clock untuk merender waktu per 1 detik
const Clock = () => {
  // Deklarasi date, setDate
  const [date, setDate] = useState(new Date());

  // Function useEffect untuk melakukan interval per 1 detik
  useEffect(() => {
    setInterval(() => tick(), 1000);
  });

  // Function tick untuk merubah state dengan new Date()
  const tick = () => {
    setDate(new Date());
  };

  // Return date
  return <h1>{date.toLocaleTimeString()}</h1>;
};

// Export complonent yang dibutuhkan
export default Clock;
