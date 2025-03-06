import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { BACKEND_URL } from "../config";

const AppointmentsList = () => {
    const { userId } = useParams();
    const [appointments, setAppointments] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
        const fetchAppointments = async () => {
            try {
                const response = await axios.get(`https://docsearch-1.onrender.com/book/${userId}/appointments`);
                setAppointments(response.data);
            } catch (err) {
                setError("Failed to fetch appointments.");
            } finally {
                setLoading(false);
            }
        };

        fetchAppointments();
    }, [userId]);

    const handleCancel = async (appointmentId) => {
        try {
            await axios.patch(`${BACKEND_URL}/book/cancel/${appointmentId}`);
            setAppointments((prevAppointments) =>
                prevAppointments.map((appt) =>
                    appt._id === appointmentId ? { ...appt, status: "Cancelled" } : appt
                )
            );
        } catch (err) {
            alert("Failed to cancel appointment.");
        }
    };

    if (loading) return <p className="text-center text-gray-600">Loading...</p>;
    if (error) return <p className="text-center text-red-500">{error}</p>;

    return (
        <div className="max-w-xl mx-auto p-6 bg-white shadow-md rounded-lg">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Your Appointments</h2>
            {appointments.length === 0 ? (
                <p className="text-gray-600">No appointments found.</p>
            ) : (
                <ul className="divide-y divide-gray-300">
                    {appointments.map((appt) => (
                        <li key={appt._id} className="py-4">
                            <p className="text-lg font-medium text-gray-700">
                                <span className="font-semibold">Doctor:</span> {appt.doctorId.name}
                            </p>
                            <p className="text-gray-600">
                                <span className="font-semibold">Date:</span> {appt.date}
                            </p>
                            <p className="text-gray-600">
                                <span className="font-semibold">Time:</span> {appt.time}
                            </p>
                            <p className="text-gray-600">
                                <span className="font-semibold">Status:</span>{" "}
                                <span className={`font-bold ${appt.status === "Booked" ? "text-green-500" : "text-red-500"}`}>
                                    {appt.status}
                                </span>
                            </p>
                            {appt.status === "Booked" && (
                                <button
                                    onClick={() => handleCancel(appt._id)}
                                    className="mt-3 px-4 py-2 bg-red-500 text-white rounded-md shadow hover:bg-red-600 transition duration-200"
                                >
                                    Cancel
                                </button>
                            )}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default AppointmentsList;
