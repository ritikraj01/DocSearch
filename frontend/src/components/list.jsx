import React, { useEffect, useState } from "react";
import axios from "axios";
import { BACKEND_URL } from '../config';
import { useParams } from "react-router-dom";

const List = () => {
  const { userId } = useParams();
  const [doctors, setDoctors] = useState([]); // All doctors
  const [filteredDoctors, setFilteredDoctors] = useState([]); // Filtered doctors
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [specialty, setSpecialty] = useState(""); // Selected Specialty
  const [city, setCity] = useState(""); // Selected City
  const [searchQuery, setSearchQuery] = useState(""); // Search Query

  useEffect(() => {
    axios.get(`${BACKEND_URL}/listing`)
      .then((response) => {
        console.log("API Response:", response.data.data);
        if (Array.isArray(response.data.data)) {
          setDoctors(response.data.data);
          setFilteredDoctors(response.data.data);
        } else {
          throw new Error("Invalid data format");
        }
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setError("Failed to load doctors");
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  // Extract unique specialties and cities dynamically
  const specialties = ["All", ...new Set(doctors.map((doctor) => doctor.specialty))];
  const cities = ["All", ...new Set(doctors.map((doctor) => doctor.location))];

  // Filter function
  useEffect(() => {
    let filtered = doctors;

    if (specialty && specialty !== "All") {
      filtered = filtered.filter((doctor) => doctor.specialty === specialty);
    }

    if (city && city !== "All") {
      filtered = filtered.filter((doctor) => doctor.location === city);
    }

    if (searchQuery) {
      filtered = filtered.filter((doctor) =>
        doctor.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    setFilteredDoctors(filtered);
  }, [specialty, city, searchQuery, doctors]);

  if (loading) return <p className="text-center">Loading doctors...</p>;
  if (error) return <p className="text-center text-red-500">{error}</p>;

  return (
    <div className="container mx-auto p-6">
      {/* Filters */}
      <div className="flex flex-col md:flex-row gap-4 mb-6">
        {/* Search Bar */}
        <div className="w-full md:w-1/3">
          <label className="block text-lg font-semibold text-gray-700 mb-2">
            Search Doctor:
          </label>
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search by name..."
            className="border border-gray-300 p-2 rounded-md w-full"
          />
        </div>

        {/* Specialty Filter */}
        <div className="w-full md:w-1/3">
          <label className="block text-lg font-semibold text-gray-700 mb-2">
            Filter by Specialty:
          </label>
          <select
            value={specialty}
            onChange={(e) => setSpecialty(e.target.value)}
            className="border border-gray-300 p-2 rounded-md w-full"
          >
            {specialties.map((spec, index) => (
              <option key={index} value={spec}>
                {spec}
              </option>
            ))}
          </select>
        </div>

        {/* City Filter */}
        <div className="w-full md:w-1/3">
          <label className="block text-lg font-semibold text-gray-700 mb-2">
            Filter by City:
          </label>
          <select
            value={city}
            onChange={(e) => setCity(e.target.value)}
            className="border border-gray-300 p-2 rounded-md w-full"
          >
            {cities.map((city, index) => (
              <option key={index} value={city}>
                {city}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Doctor Listings */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {filteredDoctors.length > 0 ? (
          filteredDoctors.map((doctor) => (
            <div key={doctor._id} className="card-outer">
              <a
                href={`/${userId}/search/${doctor._id}`}
                className="block rounded-lg shadow-lg hover:shadow-xl transition duration-300"
              >
                <div className="bg-white rounded-lg overflow-hidden">
                  <div className="p-4">
                    <h5 className="text-lg font-semibold text-gray-800">
                      {doctor.name}
                    </h5>
                    <p className="text-gray-600">{doctor.specialty}</p>
                    <p className="text-gray-500">{doctor.location}</p>
                    <p className="text-sm text-gray-400">{doctor.experience} years experience</p>
                  </div>
                </div>
              </a>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-500 col-span-3">No doctors found</p>
        )}
      </div>
    </div>
  );
};

export default List;
