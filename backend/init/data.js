const sampleListings = [
  {
    name: "Dr. Aditi Sharma",
    specialty: "Pediatrics",
    experience: 12,
    location: "Delhi, India",
    description: "Expert in pediatric care with a focus on child health.",
    availability: [
      { date: "2025-03-06", slots: [{ time: "10:00 AM", isBooked: false }, { time: "11:00 AM", isBooked: false }] },
      { date: "2025-03-07", slots: [{ time: "02:00 PM", isBooked: false }, { time: "03:00 PM", isBooked: false }] }
    ]
  },
  {
    name: "Dr. Rajesh Verma",
    specialty: "Cardiology",
    experience: 18,
    location: "Mumbai, India",
    description: "Senior cardiologist specializing in heart diseases and surgeries.",
    availability: [
      { date: "2025-03-06", slots: [{ time: "09:00 AM", isBooked: false }, { time: "10:30 AM", isBooked: false }] },
      { date: "2025-03-07", slots: [{ time: "01:00 PM", isBooked: false }, { time: "03:00 PM", isBooked: false }] }
    ]
  },
  {
    name: "Dr. Sneha Kapoor",
    specialty: "Endocrinology",
    experience: 10,
    location: "Bangalore, India",
    description: "Endocrinologist with a focus on diabetes and thyroid disorders.",
    availability: [
      { date: "2025-03-06", slots: [{ time: "11:00 AM", isBooked: false }, { time: "12:00 PM", isBooked: false }] },
      { date: "2025-03-07", slots: [{ time: "04:00 PM", isBooked: false }, { time: "05:00 PM", isBooked: false }] }
    ]
  },
  {
    name: "Dr. Anil Mehta",
    specialty: "Orthopedics",
    experience: 15,
    location: "Hyderabad, India",
    description: "Orthopedic specialist for joint pain and sports injuries.",
    availability: [
      { date: "2025-03-06", slots: [{ time: "08:00 AM", isBooked: false }, { time: "09:30 AM", isBooked: false }] },
      { date: "2025-03-07", slots: [{ time: "02:30 PM", isBooked: false }, { time: "03:30 PM", isBooked: false }] }
    ]
  },
  {
    name: "Dr. Priya Nair",
    specialty: "Gynecology",
    experience: 14,
    location: "Chennai, India",
    description: "Gynecologist and obstetrician specializing in women’s health.",
    availability: [
      { date: "2025-03-06", slots: [{ time: "10:30 AM", isBooked: false }, { time: "12:30 PM", isBooked: false }] },
      { date: "2025-03-07", slots: [{ time: "03:00 PM", isBooked: false }, { time: "05:00 PM", isBooked: false }] }
    ]
  },
  {
    name: "Dr. Rohan Malhotra",
    specialty: "Cardiology",
    experience: 20,
    location: "Kolkata, India",
    description: "Renowned cardiologist with expertise in heart diseases.",
    availability: [
      { date: "2025-03-06", slots: [{ time: "09:00 AM", isBooked: false }, { time: "10:00 AM", isBooked: false }] },
      { date: "2025-03-07", slots: [{ time: "02:00 PM", isBooked: false }, { time: "03:00 PM", isBooked: false }] }
    ]
  },
  {
    name: "Dr. Kavita Joshi",
    specialty: "Gynecology",
    experience: 11,
    location: "Ahmedabad, India",
    description: "Expert in women's reproductive health and maternity care.",
    availability: [
      { date: "2025-03-06", slots: [{ time: "08:30 AM", isBooked: false }, { time: "10:00 AM", isBooked: false }] },
      { date: "2025-03-07", slots: [{ time: "02:30 PM", isBooked: false }, { time: "04:00 PM", isBooked: false }] }
    ]
  },
  {
    name: "Dr. Sanjay Patel",
    specialty: "Orthopedics",
    experience: 21,
    location: "Kanpur, India",
    description: "Orthopedic doctor focused on spine and back problems.",
    availability: [
      { date: "2025-03-06", slots: [{ time: "09:00 AM", isBooked: false }, { time: "10:30 AM", isBooked: false }] },
      { date: "2025-03-07", slots: [{ time: "03:00 PM", isBooked: false }, { time: "04:30 PM", isBooked: false }] }
    ]
  },
  {
    name: "Dr. Vikram Yadav",
    specialty: "Cardiology",
    experience: 17,
    location: "Patna, India",
    description: "Cardiologist treating heart-related conditions and disorders.",
    availability: [
      { date: "2025-03-06", slots: [{ time: "08:00 AM", isBooked: false }, { time: "09:30 AM", isBooked: false }] },
      { date: "2025-03-07", slots: [{ time: "01:00 PM", isBooked: false }, { time: "02:30 PM", isBooked: false }] }
    ]
  },
  {
    name: "Dr. Arjun Nair",
    specialty: "Cardiology",
    experience: 15,
    location: "Ludhiana, India",
    description: "Experienced cardiologist treating heart rhythm disorders.",
    availability: [
      { date: "2025-03-06", slots: [{ time: "10:00 AM", isBooked: false }, { time: "11:30 AM", isBooked: false }] },
      { date: "2025-03-07", slots: [{ time: "02:00 PM", isBooked: false }, { time: "03:30 PM", isBooked: false }] }
    ]
  },
  {
    name: "Dr. Neha Agarwal",
    specialty: "Pediatrics",
    experience: 8,
    location: "Mysore, India",
    description: "Pediatrician providing general and preventive care for children.",
    availability: [
      { date: "2025-03-06", slots: [{ time: "09:30 AM", isBooked: false }, { time: "10:30 AM", isBooked: false }] },
      { date: "2025-03-07", slots: [{ time: "01:30 PM", isBooked: false }, { time: "02:30 PM", isBooked: false }] }
    ]
  }
];

module.exports = { sampleListings };
