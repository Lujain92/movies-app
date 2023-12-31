# Movie App

### Author: Lujain Al-Jarrah

### Version: 1.0.0

This project is a Movie App that allows users to browse and filter movies based on various criteria.

## Table of Contents

- [Features](#features)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Running the App](#running-the-app)
- [Testing](#testing)

## Features

- View a list of movies
- Sort movies based on different criteria
- Filter movies based on release dates and other options

## Getting Started

### Prerequisites

- Node.js and npm (Node Package Manager) should be installed on your machine.

### Installation

1. Clone the repository:

   ```bash
   git clone git@github.com:Lujain92/movies-app.git
   ```

2. Navigate to the project directory:

   ```bash
   cd movies-app
   ```

3. Install the project dependencies:

   ```bash
   npm install
   ```
4. create .env file

   ```
   REACT_APP_API_KEY = 4db3b4ee5893cead9657d41699ec4c26
   REACT_APP_BASE_URL = https://api.themoviedb.org/3/

   ```

### Running the App

To run the application locally, use the following command:

```bash
npm start
```

This will start the development server and you can access the app at `http://localhost:3000`.

## Testing

The project includes unit tests for components. To run the tests, use the following command:

```bash
npm test
```

This will launch the test runner and execute the defined unit tests.
