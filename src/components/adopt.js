

import React, { useState, useEffect } from "react";
import axios from "axios";

export default function Adopt() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get("http://localhost:8000/api/pet");
        setData(response.data);
        setLoading(false);
        console.log(response.data);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    }

    fetchData();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <>
      <div>
        <h1 className="text-center text-6xl mt-10 mb-10 font-semibold">
          ADOPT PETS
        </h1>
      </div>
      <div className="bg-gradient-to-bl from-orange-50 to-orange-50 flex flex-wrap items-center justify-center lg:h-screen ">
        {data.map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-lg border p-4 m-2 flex flex-col items-center"
            style={{ width: "300px" }} // Adjust width as needed
          >
            <img
              src={item.image || "https://placehold.co/300x200/d1d4ff/352cb5.png"}
              alt={item.name || "Placeholder Image"}
              className="w-full h-48 rounded-md object-cover mb-4"
            />
            <div className="px-1 py-4 text-center">
              <div className="font-bold text-xl mb-2">{item.name}</div>
              <p className="text-base">{item.discription || 'No description available.'}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

