🛒 eCommerce Web Application
An end-to-end eCommerce web application that allows users to browse products, add items to a shopping cart, and make secure purchases. Admins can manage products, users, and orders from a dedicated dashboard.

🔗 Demo
Live Demo – Add your deployed link here
Frontend Repo
Backend Repo

✨ Features
🛍️ User Side:
User registration and login (JWT-based authentication)

Browse products by categories

Product details page with images, price, description, and reviews

Add to Cart & Wishlist

Checkout flow with address and payment integration

Order history and order details

Responsive design (mobile-first)

🔧 Admin Panel:
Dashboard with sales overview

Add, edit, and delete products

Manage users and orders

Inventory tracking

🛠️ Tech Stack
Layer	Tech
Frontend	React.js, Tailwind CSS / Bootstrap, Redux Toolkit
Backend	Node.js, Express.js
Database	MongoDB (Mongoose ODM)
Authentication	JWT, bcrypt.js
Payments	Stripe / Razorpay API
Hosting	Vercel / Netlify (Frontend), Render / Heroku / Railway (Backend)

🧪 Installation
1. Clone the repository
bash
Copy
Edit
git clone https://github.com/your-username/ecommerce-app.git
cd ecommerce-app
2. Install dependencies
Frontend:
bash
Copy
Edit
cd client
npm install
Backend:
bash
Copy
Edit
cd server
npm install
3. Set up Environment Variables
Create a .env file in the server/ folder with the following:

env
Copy
Edit
PORT=5000
MONGO_URI=your_mongo_connection_string
JWT_SECRET=your_jwt_secret
STRIPE_SECRET=your_stripe_key (or RAZORPAY_KEY, etc.)
4. Run the app
Backend:
bash
Copy
Edit
npm run dev
Frontend:
bash
Copy
Edit
npm start
📸 Screenshots
Home Page

Product Page

Admin Dashboard

📁 Project Structure
csharp
Copy
Edit
ecommerce-app/
│
├── client/                # React frontend
│   ├── public/
│   └── src/
│       ├── components/
│       ├── pages/
│       └── redux/
│
├── server/                # Node.js backend
│   ├── controllers/
│   ├── routes/
│   ├── models/
│   └── middleware/
│
└── README.md
🧑‍💻 Author
Gaurav Rathi
LinkedIn | Portfolio | Email

📝 License
This project is licensed under the MIT License – see the LICENSE file for details.

Let me know if you'd like a version for Next.js, MERN Stack, or a mobile app (e.g., React Native / Flutter).
