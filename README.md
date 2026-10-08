# Pahiya 🚗

### Multi-Partner Vehicle Booking & Real-Time Ride Tracking Platform

Pahiya is a full-stack multi-partner vehicle booking platform that connects users with verified vehicle partners for convenient, secure, and real-time transportation.

The platform provides separate experiences for **Users, Partners/Drivers, and Administrators**, covering the complete ride lifecycle from vehicle discovery and booking to payment, live tracking, OTP verification, ride completion, ratings, and revenue distribution.

---

## 🚀 Features

- 🔐 Email & Password Authentication
- 🔑 Email OTP Verification
- 🔵 Google Authentication
- 🚗 Multi-Partner Vehicle Booking
- 🏍️ Bike, Auto, Car & Loading Vehicle Categories
- 📍 Pickup & Drop Location Selection
- 🔎 Location Autocomplete Suggestions
- 🗺️ Route Visualization
- 📏 Distance & ETA Calculation
- ⚡ Real-Time Ride Requests using Socket.IO
- 💳 Online Payment using Razorpay
- 💵 Cash Payment
- 📍 Live Driver Location Tracking
- 🔄 Automatic Route Recalculation
- 🔐 Pickup OTP Verification
- 🔐 Drop OTP Verification
- 🎥 Video KYC using ZEGOCLOUD
- 📞 In-Ride Calling
- 💬 In-App Chat
- 🤖 AI Reply Suggestions
- ⭐ Ride Rating System
- 💰 Automatic Revenue Distribution
- 👤 Partner Dashboard
- 👨‍💼 Admin Dashboard
- 📊 Earnings Analytics
- 📋 Partner & Vehicle Approval Workflow
- 🎨 Fully Animated Responsive UI

---

# 👥 User Roles

Pahiya is designed around three major roles.

## 👤 User

Users can:

- Register and login
- Verify their account using Email OTP
- Login using Google
- Search for available vehicles
- Select vehicle categories
- Select pickup and drop locations
- View route, distance and ETA
- View available vehicles near pickup
- Compare vehicle pricing
- Request a ride
- Pay using Cash or Online Payment
- Track the driver in real time
- Communicate with the driver
- Verify pickup and drop using OTP
- Rate completed rides
- View booking history

---

## 🚗 Partner / Driver

Partners can:

- Become a vehicle partner
- Complete partner onboarding
- Submit legal details
- Upload documents
- Submit bank details
- Complete Video KYC
- Add vehicles
- Upload vehicle images
- Configure vehicle pricing
- Receive ride requests
- Accept ride requests
- Manage active rides
- View assigned bookings
- Track earnings
- Complete rides using OTP verification
- View booking history

---

## 🛠️ Admin

The admin can:

- View platform statistics
- Manage partners
- Review partner documents
- Approve partners
- Reject partners with a reason
- Review resubmitted documents
- Conduct Video KYC
- Approve or reject vehicles
- Review vehicle pricing
- Monitor platform earnings
- Monitor reviews and ratings

The admin role is controlled from the database.

---

# 🏠 Landing Page

The Pahiya landing page contains a fully animated interface designed around the vehicle booking experience.

The landing page includes:

- Animated navigation
- Pahiya branding
- Hero section
- Vehicle category options
- Book Now CTA
- 24/7 availability section
- Scroll animations
- Footer

Users can explore the platform without logging in.

Authentication is required when the user attempts to book a vehicle.

### Landing Page

![Pahiya Home Page](./screenshots/home.png)

---

# 🔐 Authentication

Pahiya supports multiple authentication methods:

- Email & Password
- Google Login
- Email OTP Verification

During registration, an OTP is sent to the user's email and must be verified before account creation.

---

# 🚗 Partner Onboarding

Users can become partners through the **Become a Partner** workflow.

The partner onboarding process covers:

```text
Legal Details
     ↓
Documents
     ↓
Bank Details
     ↓
Admin Review
     ↓
Video KYC
     ↓
Vehicle Pricing
     ↓
Final Review
     ↓
Vehicle Goes Live
```

### Partner Onboarding Dashboard

The onboarding progress is represented through multiple stages including:

- Vehicle
- Documents
- Bank
- Review
- Video KYC
- Pricing
- Final Review
- Live

![Partner Onboarding](./screenshots/partner-onboarding.png)

---

# 📄 Partner Document Verification

After submitting the required documents, the partner enters the review process.

The admin can:

### ✅ Approve

The partner moves to the next verification stage.

### ❌ Reject

The admin must provide a rejection reason.

The partner can then edit the documents and resubmit them.

```text
Rejected
   ↓
Reason Displayed
   ↓
Edit Documents
   ↓
Resubmit
   ↓
Pending Review
```

---

# 🎥 Video KYC

After document approval, the partner completes Video KYC.

Pahiya uses **ZEGOCLOUD** for real-time video communication.

### Video KYC Features

- Admin initiates the call
- Partner joins the call
- Camera controls
- Microphone controls
- Real-time video communication
- Admin approval/rejection during the call
- Verification status synchronization

---

# 🚘 Vehicle Registration & Pricing

Partners can add their vehicles after completing the required verification steps.

Vehicle information includes:

- Vehicle category
- Vehicle model
- Vehicle number
- Vehicle image
- Base fare
- Per KM charge
- Waiting charge per minute

### Supported Vehicle Categories

- 🏍️ Bike
- 🛺 Auto
- 🚗 Car
- 🚚 Loading
- 🚛 Truck

Multiple partners can operate vehicles under the same category.

---

# 🔎 Vehicle Booking Flow

The booking workflow starts with:

```text
Book Now
   ↓
Choose Vehicle Category
   ↓
Enter Mobile Number
   ↓
Select Pickup
   ↓
Select Drop
   ↓
View Route
   ↓
Find Nearby Vehicles
   ↓
Select Vehicle
   ↓
Checkout
   ↓
Request Ride
```

### Booking Interface

Users first select the type of vehicle they want.

![Booking Flow](./screenshots/booking-flow.png)

---

# 📍 Pickup & Drop Locations

Users can select:

- Pickup location
- Drop location
- Current location
- Locations through autocomplete suggestions

The application displays the selected locations on the map along with the calculated route.

The route interface displays:

- Pickup marker
- Drop marker
- Route
- Distance
- Estimated travel time

![Route Map](./screenshots/route-map.png)

---

# 🚗 Available Vehicles

After selecting pickup and drop locations, Pahiya searches for available vehicles near the pickup location.

Each vehicle card can display:

- Vehicle image
- Vehicle category
- Vehicle number
- Vehicle model
- Partner rating
- Per KM price
- Waiting charge
- Estimated fare
- Booking option

![Available Vehicle](./screenshots/vehicle-selection.png)

---

# 💰 Fare Calculation

The estimated ride fare is calculated based on the configured vehicle pricing and ride distance.

Pricing can include:

```text
Base Fare
+
Distance Charge
+
Waiting Charge
=
Total Fare
```

For example:

```text
Base Fare       → ₹40
Per KM          → ₹10
Waiting Charge  → ₹2/min
```

The final estimated fare is displayed before requesting the ride.

---

# 💳 Checkout & Payment

After selecting a vehicle, the user reaches the checkout page.

The checkout displays:

- Selected vehicle
- Pickup location
- Drop location
- Total fare
- Ride information
- Request Ride button

The partner is expected to respond within the configured response window.

![Checkout](./screenshots/checkout.png)

---

# ⚡ Real-Time Ride Requests

Pahiya uses **Socket.IO** for real-time communication between users and partners.

When a user requests a ride:

```text
User
  │
  │ Ride Request
  ▼
Socket.IO
  │
  │ Real-Time Event
  ▼
Partner
  │
  │ Accept / Reject
  ▼
User
```

The partner receives the booking request without requiring the page to be manually refreshed.

The partner has a **2-minute response window** to respond to the ride request.

---

# 💳 Payment Methods

Pahiya supports two payment methods.

## 💵 Cash

The user pays the partner after completing the ride.

## 💳 Online Payment

The user can complete the payment online through **Razorpay**.

Payment status is maintained throughout the ride lifecycle.

```text
Awaiting Payment
       ↓
Payment
       ↓
Payment Verification
       ↓
Paid
```

---

# 🗺️ Live Ride Tracking

Live ride tracking is one of the core features of Pahiya.

The tracking system operates in two phases.

## Phase 1 — Driver → Pickup

Before the ride starts, the user can see the driver's live location while the driver travels toward the pickup point.

```text
Driver
   ↓
Pickup
```

The driver's latitude and longitude are continuously updated.

---

## Phase 2 — Pickup → Drop

After pickup OTP verification, the ride changes to the active ride phase.

```text
Pickup
   ↓
Driver
   ↓
Drop
```

The map automatically switches to the active ride route.

When the driver's location changes:

- Driver marker updates
- Route recalculates
- ETA updates
- User receives the latest driver position

This provides real-time ride tracking throughout the journey.

---

# 🔐 Dual OTP Ride Security

Pahiya uses separate OTP verification for pickup and drop.

## 📍 Pickup OTP

When the driver reaches the pickup location:

```text
Driver Arrives
      ↓
I Have Arrived
      ↓
Pickup OTP Generated
      ↓
User Receives OTP
      ↓
Driver Verifies OTP
      ↓
Ride Starts
```

The pickup OTP is sent to the user's email.

---

## 📍 Drop OTP

When the driver reaches the destination:

```text
Driver Reaches Drop
      ↓
Mark Drop
      ↓
Drop OTP Generated
      ↓
User Receives OTP
      ↓
Driver Verifies OTP
      ↓
Ride Completed
```

This provides an additional security layer for both the beginning and end of the ride.

---

# 📞 In-Ride Communication

Pahiya provides communication functionality between users and drivers.

### 📱 Calling

The call button opens the device's phone dialer.

### 💬 In-App Chat

Users and drivers can communicate through an in-app chat interface.

The chat system also provides **AI-powered reply suggestions** for common situations.

Example:

> "I'm stuck in traffic, I will be 10 minutes late."

---

# ⭐ Ride Rating

After completing a ride, the user can rate the partner.

Ratings help maintain service quality and provide feedback about the ride experience.

---

# 💰 Revenue Distribution

Pahiya supports automatic revenue splitting between partners and the platform.

### Revenue Split

```text
Partner → 90%
Admin   → 10%
```

For example, for a ₹63 ride:

```text
Partner → ₹56.70
Admin   → ₹6.30
```

The revenue split is calculated automatically after ride completion.

---

# 📊 Partner Dashboard

The partner dashboard provides an overview of the partner's activity.

It includes:

- Pending ride requests
- Active rides
- Bookings
- Daily earnings
- Weekly earnings
- Booking status
- Vehicle information

### Partner Bookings

Partners can view their assigned bookings along with:

- Customer information
- Pickup location
- Drop location
- Vehicle
- Booking status
- Payment status
- Fare

![Partner Bookings](./screenshots/partner-bookings.png)

---

# 💵 Partner Earnings

Partners can view their earnings through the earnings dashboard.

The dashboard provides:

- Daily earnings
- Daily average
- Best earning day
- Current day earnings
- Weekly total
- Earnings chart

![Partner Earnings](./screenshots/partner-earnings.png)

---

# 👨‍💼 Admin Dashboard

The admin dashboard provides a centralized overview of the platform.

It includes:

- Total partners
- Approved partners
- Pending partners
- Rejected partners
- Pending partner reviews
- Pending Video KYC
- Pending vehicle reviews
- Platform earnings

![Admin Dashboard](./screenshots/admin-dashboard.png)

---

# 💰 Admin Earnings

The admin can monitor the platform's earnings through the admin earnings dashboard.

The dashboard provides:

- Weekly total
- Best day
- Daily average
- Today's earnings
- Earnings chart

![Admin Earnings](./screenshots/admin-earnings.png)

---

# 🛠️ Tech Stack

## Frontend & Framework

- Next.js
- React
- TypeScript
- Tailwind CSS
- Axios
- Motion
- Lucide React
- React Icons

## Backend

- Next.js API Routes
- Node.js
- Socket.IO

## Database

- MongoDB
- Mongoose

## Authentication

- NextAuth
- Google Authentication
- Email & Password
- Email OTP Verification

## Maps & Routing

- Leaflet
- React Leaflet
- OSRM
- Browser Geolocation API
- Location autocomplete

## Real-Time Communication

- Socket.IO

## Video KYC

- ZEGOCLOUD
- WebRTC

## Payment

- Razorpay
- Cash Payment

## Media Storage

- Cloudinary

---

# 📁 Project Structure

```text
PahiyaOg/
│
├── pahiya/
│   ├── public/
│   ├── src/
│   │   ├── app/
│   │   ├── components/
│   │   ├── lib/
│   │   └── models/
│   ├── package.json
│   ├── package-lock.json
│   └── .gitignore
│
├── socketServer/
│   ├── models/
│   ├── index.js
│   ├── package.json
│   ├── package-lock.json
│   └── .gitignore
│
├── screenshots/
│   ├── home.png
│   ├── booking-flow.png
│   ├── route-map.png
│   ├── vehicle-selection.png
│   ├── checkout.png
│   ├── partner-onboarding.png
│   ├── partner-bookings.png
│   ├── partner-earnings.png
│   ├── admin-dashboard.png
│   └── admin-earnings.png
│
└── README.md
```

---

# ⚙️ Installation

## 1. Clone Repository

```bash
git clone https://github.com/Aviijoshi/Pahiya-Project.git
```

```bash
cd Pahiya-Project
```

---

# 🖥️ Run Pahiya

Navigate to the Next.js application:

```bash
cd pahiya
```

Install dependencies:

```bash
npm install
```

Create:

```text
.env.local
```

Add your required environment variables.

Example:

```env
MONGODB_URI=your_mongodb_connection_string

AUTH_SECRET=your_auth_secret

GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret

RAZORPAY_KEY_ID=your_razorpay_key
RAZORPAY_KEY_SECRET=your_razorpay_secret

CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_API_SECRET=your_cloudinary_api_secret

NEXT_PUBLIC_CARTO_API_KEY=your_carto_api_key
```

> Use the exact environment variable names required by your local project configuration.

Start the application:

```bash
npm run dev
```

The Next.js application will run at:

```text
http://localhost:3000
```

---

# ⚡ Run Socket Server

Open another terminal.

```bash
cd socketServer
```

Install dependencies:

```bash
npm install
```

Create:

```text
.env
```

Add the required Socket.IO server environment variables.

Example:

```env
PORT=8000
MONGO_URI=your_mongodb_connection_string
```

Start the server:

```bash
node index.js
```

The Socket.IO server runs separately from the Next.js application.

---

# 🔒 Environment & Security

Sensitive environment files are intentionally excluded from this repository.

The following files must **never be committed**:

```text
pahiya/.env.local
socketServer/.env
```

The project also ignores:

```text
node_modules/
.next/
.env*
```

Never expose:

- Database credentials
- Authentication secrets
- Google OAuth credentials
- Razorpay secret keys
- Cloudinary secrets
- API keys

---

# 🔄 Complete Ride Workflow

```text
User Registration
       ↓
Email OTP Verification
       ↓
Search Vehicle
       ↓
Select Pickup & Drop
       ↓
View Route & Fare
       ↓
Request Ride
       ↓
Socket.IO Notification
       ↓
Partner Accepts Ride
       ↓
Payment
       ↓
Driver Travels to Pickup
       ↓
Pickup OTP Verification
       ↓
Ride Starts
       ↓
Live Ride Tracking
       ↓
Driver Reaches Drop
       ↓
Drop OTP Verification
       ↓
Ride Completed
       ↓
Rating
       ↓
Revenue Distribution
```

---

# 🎯 Project Objective

The objective of Pahiya is to build a complete vehicle booking ecosystem that connects users, vehicle partners, and administrators through a single platform.

The system combines:

```text
Vehicle Booking
       +
Real-Time Communication
       +
Live GPS Tracking
       +
Secure OTP Verification
       +
Online Payments
       +
Video KYC
       +
Partner Management
       +
Admin Management
```

to provide a complete ride-booking experience.

---

# 🔮 Future Scope

Possible future improvements include:

- 📱 Dedicated Android & iOS applications
- 🔔 Push notifications
- 🤖 Advanced AI ride assistance
- 🧭 Improved route optimization
- 📊 Advanced analytics
- 🛡️ Advanced fraud detection
- 🚗 Intelligent driver matching
- 🌐 Multi-city expansion
- 💳 Additional payment methods
- 📈 Advanced partner analytics

---

# 👨‍💻 Developer

## Aviral Joshi

**B.Tech — Computer Science & Engineering**

GitHub:

https://github.com/Aviijoshi

---

# 📄 License

This project is developed as an academic and portfolio project.