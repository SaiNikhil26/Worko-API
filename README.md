# Worko.ai API for User Management System

## Overview

This API is designed to manage users in a system. It provides endpoints for creating, reading, updating and deleting users

## Features

- User registration and login
- User profile management (update, delete)
- User authentication and authorization
- CRUD operation for user management

## Getting Started

### Pre-requisites

- Node.js
- npm
- MongoDB
- Postman or any other API testing tool

### Installation

1. Clone the repository:

```bash
git clone
```

2. Install the required dependencies

```bash
npm install
```

3. Create a new .env file
   Store the PORT,MONGODB_URL,JWT_SECRET.

4. Running the Application

```bash
npm start
```

### API Endpoints

1. Authentication

- POST /register - Register a new user

2. Login

- POST /login - Login a user

#### User Management

1. Register a User

- POST worko/register - Register a new user

2. Get all User

- GET worko/users - Gets all users

3. Get a specific User

- GET worko/users/{id} - Gets a specific user

4. Update a User

- PUT worko/users/{id}/edit - Updates a specific user
- PATCH worko/users/{id}/edit - Updates a specific user

5. Delete a User

- DELETE worko/users/{id}/delete - Deletes a specific user

## Validation Middleware

1. `validateEmail`: Validates the email format
2. `validateZipCode`: Validates the employee ID parameter
3. `checkValidationResult`: Checks the results of the validations and sends a 400 error if any validation fails
