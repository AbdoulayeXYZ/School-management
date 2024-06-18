# Lycée d'Excellence de Dakar Management System

## Overview
The Lycée d'Excellence de Dakar Management System is a comprehensive educational management application designed to streamline the administrative and educational processes of the Lycée d'Excellence de Dakar, the leading high school in Senegal. This system allows for efficient management of student enrollments, class assignments, and provides a clear visibility for both parents and the school administration.

## Features

### Class Management
- **Add Classes**: Administrators can add new classes to the system.
- **Modify Classes**: Modify details of existing classes.
- **Delete Classes**: Remove classes from the system.

### Student Management
- **Add Students**: Enroll new students into the school.
- **Assign Students to Classes**: Place students in specific classes.
- **List Students**: View all students enrolled in the school.

### Reporting
- **List Classes**: View all the classes offered by the school.

## Technologies Used
- **Frontend**: Angular
- **Backend**: Node.js with Express
- **Database**: MongoDB
- **Version Control**: Git and GitHub

## Project Structure

### Frontend
The frontend is developed using Angular, providing a dynamic and responsive user interface. It communicates with the backend via RESTful APIs.

### Backend
The backend is built with Node.js and Express, handling all the business logic, database operations, and API responses.

### Database
MongoDB is used for storing all the data related to classes and students, allowing for efficient data retrieval and manipulation.

## Setup and Installation
1. Clone the repository from GitHub.
2. Navigate to the project directory and install dependencies:
   ```
   npm install
   ```
3. Start the backend server:
   ```
   node server.js
   ```
4. Launch the frontend application:
   ```
   ng serve
   ```
5. Open your browser and go to `http://localhost:4200`.

## Documentation
For more detailed information about the system, its setup, and usage, refer to the documentation available in the repository.


## Usage

1. **Add Classes**:
   - Navigate to the "Classes" section.
   - Use the form to add new classes.

2. **Enroll Students**:
   - Navigate to the "Students" section.
   - Use the form to add new students and assign them to classes.

3. **View Listings**:
   - Navigate to the "Listings" section to view all students and classes.

## API Endpoints

- **Classes**:
  - `GET /api/classes`: List all classes.
  - `POST /api/classes`: Add a new class.
  - `PUT /api/classes/:id`: Update a class.
  - `DELETE /api/classes/:id`: Delete a class.

- **Students**:
  - `GET /api/students`: List all students.
  - `POST /api/students`: Add a new student.
  - `PUT /api/students/:id`: Update a student.
  - `DELETE /api/students/:id`: Delete a student.

## Contributing

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Make your changes.
4. Commit your changes (`git commit -m 'Add some feature'`).
5. Push to the branch (`git push origin feature-branch`).
6. Open a pull request.

## License

This project is licensed under the MIT License.

## Contact

Abdoulaye NIASSE - niasseabdoulaye64@gmail.com - 77 314 70 59 

---

**Note**: This project is part of an assignment for the Lycée d'Excellence de Dakar. The application is designed to be a prototype and may require further enhancements for production use.

## Contribution
Contributions to the project are welcome. Please fork the repository, make your changes, and submit a pull request.

## License
This project is licensed under the MIT License - see the LICENSE file for details.
