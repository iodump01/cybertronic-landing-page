# Cybertronic Event Management System
Welcome to the Cybertronic Event Management System repository! This project provides a responsive homepage for the Cybertronic event, allowing users to register for various events and receive event tickets with QR codes via email. Additionally, users can search for their tickets using their email.

## Tech Stack:
![Express.js](https://img.shields.io/badge/Express.js-^4.17.1-blue)
![MongoDB](https://img.shields.io/badge/Mongoose-^5.13.5-green)
![React.js](https://img.shields.io/badge/React.js-^18.2.0-blue)
- Express.js: Used for building the backend server.
- MongoDB: Database for storing user and event information.
- React.js: Used for building the frontend user interface.


## Installation
Follow these steps to set up the Cybertronic Event Management System on your local machine:

### Backend
- Open the terminal in the root directory and run: 
```
npm i
```
- After the installation is complete, run the following command to start the backend server: 
```
 npm run dev 
 ```

### Frontend
- Navigate to the frontend folder in the terminal: 
``` 
cd frontend
```
- Run the following commands to install dependencies and start the frontend: 

```
npm i
npm run start 
```

## Configuration
Make sure to set up the configuration file (config.env) in the config folder. Here is an example of the configuration file:
```
BASE_URL=Enter_URL
PORT=4000
DB_URI=Enter_mongodb_url
JWT_SECRET=Secret_key
JWT_EXPIRE=5d
COOKIE_EXPIRE=15d
SMPT_SERVICE=
SMPT_MAIL=Enter_Email_address
SMPT_PASSWORD=Enter_email_password
SMPT_HOST=Enter_host_name
SMPT_PORT=465
CLOUDINARY_NAME=Enter_name
CLOUDINARY_API_KEY=Enter_api_key
CLOUDINARY_API_SECRET=Enter_secret_key
```

Fill in the appropriate values for your environment.

### Environment Variables
- BASE_URL: Base URL for the application.
- PORT: Port number for the server.
- DB_URI: MongoDB connection URL.
- JWT_SECRET: Secret key for JWT authentication.
- JWT_EXPIRE: JWT token expiration time.
- COOKIE_EXPIRE: Expiration time for cookies.
- SMTP_SERVICE: SMTP service for sending emails.
- SMTP_MAIL: Email address for sending emails.
- SMTP_PASSWORD: Email password for authentication.
- SMTP_HOST: SMTP server host name.
- SMTP_PORT: SMTP server port.
- CLOUDINARY_NAME: Cloudinary account name.
- CLOUDINARY_API_KEY: Cloudinary API key.
- CLOUDINARY_API_SECRET: Cloudinary API secret.

Feel free to adjust these variables based on your specific configuration.

## Support and Contribution
If you encounter any issues or have suggestions for improvement, please feel free to open an issue or contribute to the project. We appreciate your feedback and help in making the Cybertronic Event Management System even better!

## Screenshots
![Hero section]('https://github.com/iodump01/cybertronic-landing-page/blob/main/screenshots/1.png')
![Homepgae]('https://github.com/iodump01/cybertronic-landing-page/blob/main/screenshots/2.png')
![Homepgae]('https://github.com/iodump01/cybertronic-landing-page/blob/main/screenshots/3.png')
![Ticket]('https://github.com/iodump01/cybertronic-landing-page/blob/main/screenshots/4.png')


`Happy coding!`
