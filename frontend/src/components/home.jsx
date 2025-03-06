import React from "react";

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 px-4">
      {/* Hero Section */}
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Your Health, Our Priority.
        </h1>
        <p className="text-lg text-gray-600">
          Find expert doctors, schedule appointments, and get personalized healthcare—all in one place.
        </p>
      </div>

      {/* Image Section */}
      <div className="max-w-3xl flex justify-center">
        <img
            src="/DocSearch.jpg"
            alt="Doctor Consultation"
            className="rounded-full shadow-xl w-64 h-64 object-cover border-4 border-blue-500"
        />
    </div>
    </div>
  );
};

export default Home;
