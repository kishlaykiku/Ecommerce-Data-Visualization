# E-commerce Analytics Dashboard

## Overview

The **E-commerce Analytics Dashboard** is a full-stack application designed to visualize key metrics related to sales, customer behavior, and other crucial data points for an e-commerce platform. The project is divided into two main parts: the backend API service and the frontend React application.

## Features

- **Total Sales Over Time**
- **Sales Growth Rate**
- **New Customers Over Time**
- **Repeat Customers**
- **Geographical Distribution of Customers**
- **Customer Lifetime Value**

## Technologies Used

### Backend

- **Node.js**: JavaScript runtime used to build the backend server.
- **Express.js**: Web framework for Node.js, used to build the API.
- **Mongoose**: ODM (Object Data Modeling) library for MongoDB and Node.js, providing a schema-based solution.

### Frontend

- **React.js**: JavaScript library for building user interfaces.
- **Tailwind CSS**: Utility-first CSS framework used for styling the application.
- **Axios**: Promise-based HTTP client for making API requests to the backend.
- **React Select**: A flexible, customizable dropdown component for React.
- **Chart.js**: JavaScript library for data visualization, used to create responsive and interactive charts.

## Project Structure

### Backend

The backend is built using Node.js, Express.js, and MongoDB. It provides a RESTful API for the frontend.

- **Routes:** Define the API endpoints.
- **Controllers:** Handle the business logic for each route.

### Frontend

The frontend is a React application styled with Tailwind CSS. It consumes the backend API and displays data using Chart.js for visualization.

- **Components:** Reusable UI elements like charts and dropdowns.
- **Pages:** Main views of the application, including the Dashboard.
- **Services:** Handle API requests to the backend.

---