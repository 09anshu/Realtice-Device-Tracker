Project Overview
This project demonstrates a real-time device tracking web application built with Node.js, Express, Socket.IO, and Leaflet.js.
It functions similarly to live tracking features seen in apps like Zomato, Swiggy, or Uber, where the device location updates in real-time and is displayed on a dynamic map interface.
Through real-time communication powered by Socket.IO, the server broadcasts the location data of connected devices to all clients, ensuring instant updates and smooth marker transitions on the map.

Tech Stack

| Technology                  | Purpose                                             |
| --------------------------- | --------------------------------------------------- |
| **Node.js**                 | Backend runtime environment                         |
| **Express.js**              | Server framework for routing and API handling       |
| **Socket.IO**               | Enables real-time, bidirectional communication      |
| **EJS**                     | Templating engine for rendering frontend pages      |
| **Leaflet.js**              | Open-source JavaScript library for interactive maps |
| **HTML/CSS/JS**             | Frontend structure and styling                      |
| **Browser Geolocation API** | Fetches the user’s current device location          |


Features

✅ Real-time device location tracking
✅ Interactive map powered by Leaflet
✅ Dynamic marker updates on movement
✅ Auto-centering and zoom control for active devices
✅ Real-time socket-based communication
✅ Marker removal when a user disconnects
✅ Beginner-friendly, yet scalable backend structure

Structure

realtime-device-tracker/
│
├── public/
│   ├── css/
│   │   └── style.css
│   └── js/
│       └── main.js
│
├── views/
│   └── index.ejs
│
├── server.js
├── package.json
└── README.md
Installation and Setup 

# 1. Clone the repository
git clone https://github.com/your-username/realtime-device-tracker.git

# 2. Navigate into the project directory
cd realtime-device-tracker

# 3. Initialize dependencies
npm install 

# 4. Start the server
npm start

# 5. Open in browser
http://localhost:3000

