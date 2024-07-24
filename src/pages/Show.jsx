// src/pages/Show.jsx
import React, { useState, useEffect } from 'react';

const Show = () => {
  const [data, setData] = useState([]);
  const [selectedCompany, setSelectedCompany] = useState(null);

  useEffect(() => {
    fetch('/data.csv')
      .then(response => response.text())
      .then(text => {
        const lines = text.split('\n').map(line => line.split(','));
        setData(lines.slice(1)); // Skip header
      });
  }, []);

  return (
    <div className="flex m-4">
      <div className="w-1/3 bg-gray-100 p-4 border-r border-gray-300">
        <ul>
          {data.map((item, index) => (
            <li
              key={index}
              onClick={() => setSelectedCompany(item)}
              className="p-2 cursor-pointer hover:bg-gray-200"
            >
              {item[0]} - {item[1]}
            </li>
          ))}
        </ul>
      </div>
      <div className="w-2/3 p-4">
        {selectedCompany && (
          <div>
            <h2 className="text-2xl font-bold mb-4">
              {selectedCompany[1]} at {selectedCompany[0]}
            </h2>
            <p className="text-gray-700 mb-2">Location: {selectedCompany[2]}</p>
            <p className="text-gray-700 mb-2">Salary: {selectedCompany[3]}</p>
            <p className="text-gray-700">{selectedCompany[4]}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Show;
