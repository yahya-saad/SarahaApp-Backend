<div align="center">
  <h1>SarahaApp Backend</h1>
  <p>Where you can send and receive anonymous or public messages as you like.</p>
      <img src="https://img.shields.io/badge/Node%20js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white" alt="nodejs" />
      <img src="https://img.shields.io/badge/Express%20js-000000?style=for-the-badge&logo=express&logoColor=white" alt="express" />
      <img src="https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white" alt="mongodb" />
      <img src="https://img.shields.io/badge/JWT-000000?style=for-the-badge&logo=JSON%20web%20tokens&logoColor=white" alt="jwt">
  </div>
<!-- Table of Contents -->

# Table of Contents

- [About the Project](#about-the-project)
  - [Tech Stack](#space_invader-tech-stack)
  - [Documentation](#notebook_with_decorative_cover-documentation)
  - [Environment Variables](#key-environment-variables)
- [Getting Started](#getting-started)
  - [Prerequisites](#bangbang-prerequisites)
  - [Run Locally](#running-run-locally)

<!-- About the Project -->

## About the Project

<!-- TechStack -->

### :space_invader: Tech Stack

  <ul>
    <li><a href="https://www.nodejs.org">Node.js</a></li>
    <li><a href="https://www.expressjs.com/">Express.js</a></li>
    <li><a href="https://www.mongodb.com/">MongoDB</a></li>

  </ul>

<!-- Documentation -->

### :notebook_with_decorative_cover: Documentation

- [Auth](./docs/auth/)
- [Messages](./docs/messages/)
- [Users](./docs/users/)

<!-- Environment Variables -->

### :key: Environment Variables

To run this project, you will need to add the following variables to your `.env` file

```
PORT = 3000

DB_CONNECTION_URL = mongodb://127.0.0.1:27017/saraha-backend

SALT =

#TOKEN
JWT_SECRET =
BEARER_TOKEN =


# Nodemailer
EMAIL =
PASS =


#Cloudnairy
CLOUDNAIRY_CLOUD_NAME =
CLOUDNAIRY_API_KEY =
CLOUDNAIRY_API_SECRET =
DEFAULT_PROFILE_PICTURE =
```

<!-- Getting Started -->

## Getting Started

<!-- Prerequisites -->

### :bangbang: Prerequisites

This project uses `MongoDB` as database and `NodeJS` , install them in your local environment.

<!-- Run Locally -->

### :running: Run Locally

Clone the project

```bash
  git clone https://github.com/yahya-saad/SarahaApp-Backend.git
```

Go to the project directory

```bash
  cd project-directory
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm start
```

or

```bash
node .
```

Setup completed , test endpoints using postman collection in repository and for more inf about API just read [documentation](#notebook_with_decorative_cover-documentation). 😁

[![linkedin](https://img.shields.io/badge/linkedin-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/yahya-saad-a98801187)
