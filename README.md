# DocSearch - A Doctor Search & Appointment Booking System

## 🚀 Overview

DocSearch is a full-stack web application built using the MERN (MongoDB, Express.js, React.js, Node.js) stack. It is designed for **Arogo AI’s Clinic360 platform**, enabling:

- **Patients** to search for doctors and book appointments.
- **Doctors** to set their availability and manage their appointments.

## 🔑 Features

✅ User authentication & authorization using **Passport.js & Express-Session**  
✅ Patients can search for doctors by **specialty, location, and name (partial match search)**  
✅ Doctor profile pages displaying **name, specialty, experience, location, and availability slots**  
✅ Doctors can manage **availability (working hours & consultation locations)**  
✅ Patients can **book and cancel appointments**  
✅ Concurrency handling to **prevent double booking** (MongoDB transactions)  
✅ **Email notifications** for bookings & cancellations using Nodemailer  
✅ Secure user authentication with **session management**  
✅ Interactive & responsive UI built with **React.js & Tailwind CSS**

## 🏰 Tech Stack

- **Frontend**: React.js, React Router, Tailwind CSS
- **Backend**: Node.js, Express.js, MongoDB
- **Authentication**: Passport.js, Express-Session
- **Database**: MongoDB & Mongoose ORM
- **State Management**: React Context API
- **Email Service**: Nodemailer
- **Deployment**: TBD

## 📂 Project Structure

```
/backend   → Express.js server, API routes, authentication
/frontend  → React.js UI, pages, and components
/config    → Environment variables & backend configurations
/models    → Mongoose schemas for Users, Doctors, and Appointments
/routes    → API endpoints for authentication & booking
```

## 🛠️ Installation & Setup

1️⃣ **Clone the repository**

```sh
git clone https://github.com/ritikraj01/DocSearch.git
cd DocSearch
```

2️⃣ **Install dependencies**

```sh
cd backend
npm install
cd ../frontend
npm install
```

3️⃣ **Set up environment variables**  
Create a `.env` file in `/backend` and add:

```ini
MONGO_URI=your-mongodb-connection-string
EMAIL_USER=your-email@example.com
EMAIL_PASS=your-email-password
```

4️⃣ **Run the backend server**

```sh
cd backend
npm start
```

5️⃣ **Run the frontend**

```sh
cd frontend
npm start
```

## 🌐 Deployment

🔗 **Live Link:** [DocSearch Deployed App](https://doc-search-cuiz.vercel.app/)

## 📌 API Endpoints

| Method | Route                         | Description                   |
| ------ | ----------------------------- | ----------------------------- |
| POST   | `/user/signup`                | Register a new user           |
| POST   | `/user/login`                 | Login user & create session   |
| GET    | `/listing`                    | Get list of available doctors |
| GET    | `/listing/:id/slots`          | Get doctor profile details    |
| POST   | `/book`                       | Book an appointment           |
| PATCH  | `/book/cancel/:appointmentId` | Cancel an appointment         |

## 🛠️ Future Enhancements

🔹 Integration of **video consultations** for remote patients  
🔹 Doctor **ratings & reviews system**

---

**💚 Contributors:**  
👨‍💻 Developed by Ritik Rajvanshi

🚀 Happy coding!
