import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { BACKEND_URL } from "../config";
import { useNavigate } from "react-router-dom";

const DoctorProfile = () => {
    const navigate = useNavigate();
    const { userId , id } = useParams();
    const [doctor, setDoctor] = useState(null);
    const [slots, setSlots] = useState([]);
    const [selectedSlot, setSelectedSlot] = useState(null);

    useEffect(() => {
        axios.get(`${BACKEND_URL}/listing/${id}/slots`)
            .then(res => {
                //console.log(res.data.data);
                setDoctor(res.data.data);
                setSlots(res.data.data.availability);
            })
            .catch(err => console.error(err));
    }, [id]);

    const handleBooking = async () => {
        try {
            const response = await axios.post(`${BACKEND_URL}/book`, { 
            patientId :userId,   
            doctorId: id, 
            date: selectedSlot.date,
            time: selectedSlot.time
        });
        
        console.log('Response:', response.data);
        navigate(`/${userId}/appointments`); 

    }
    catch(err){alert("Booking failed!");}
    };

    return (
        <div className="container mx-auto p-6">
            {doctor ? (
                <div className="bg-white p-6 shadow-lg rounded-lg">
                    <h2 className="text-2xl font-bold">{doctor.name}</h2>
                    <p className="text-gray-600">{doctor.specialty}</p>
                    <p className="text-gray-500">{doctor.location}</p>
                    <p className="text-gray-500">{doctor.description}</p>

                    <h3 className="mt-4 text-lg font-semibold">Available Slots:</h3>
                    {slots.map((day, index) => (
                        <div key={index} className="border p-4 rounded-md">
                            <p className="text-gray-700">{day.date}</p>
                            {day.slots.map((slot, idx) => (
                                !slot.isBooked && (
                                    <button
                                        key={idx}
                                        onClick={() => setSelectedSlot({ date: day.date, time: slot.time })}
                                        className="mr-2 mt-2 px-4 py-2 bg-teal-500 text-white rounded-md hover:bg-teal-700"
                                    >
                                        {slot.time}
                                    </button>
                                )
                            ))}
                        </div>
                    ))}

                    {selectedSlot && (
                        <div className="mt-4">
                            <h3 className="text-lg font-semibold">Confirm Booking:</h3>
                            <button
                                onClick={handleBooking}
                                className="mt-4 px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-800"
                            >
                                Book Appointment
                            </button>
                        </div>
                    )}
                </div>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
};

export default DoctorProfile;
