# Library Management System API

A RESTful API for managing books and borrowing operations in a digital library management system.

---
## Technologies Used
- Node.js
- Express.js
- TypeScript
- MongoDB
- Mongoose
- Dotenv
---
## Features
-> Follows clean project structure
-> Add, update, get, and delete books
-> Book availability check
-> Filtering and sorting books
-> Borrow books with quantity and due date
-> Validation and error handling
-> Status update using instance method.
---
## Project Structure
```
library-management-api/
│
├── src/
│   ├── controllers/       # Business logic
│   ├── interfaces/        # TypeScript interfaces
│   ├── middlewares/       # Error handling
│   ├── models/            # Mongoose schemas
│   ├── routes/            # API route definitions
│   ├── app.ts             # Express app setup
│   └── server.ts          # MongoDB connection and server run
│
├── .env                   # Environment variables
├── tsconfig.json          # TypeScript config
├── package.json           # Dependencies
└── README.md              # Project documentation

---

### Getting Started

### 1. Clone the Repository

```bash
git clone 
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Set Up Environment Variables

Create a `.env` file in the root directory:

```
PORT=5000
MONGODB_URI= Use your MongoDB URI
```
### 4. Run the Project

#### For Development:

```bash
npm run dev
```
#### For Production Build:

```bash
npm run build
npm start
---
Live Link: https://library-management-b5-a3-mongoose.vercel.app/api/books
and
https://library-management-b5-a3-mongoose.vercel.app/api/borrow