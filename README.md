# FinDocs - Financial Software Application

Findocs is a financial platform where you can see the information of all the US stocks in detail. This project consists of a .NET backend API and a React frontend. Follow the instructions below to set up and run the application locally.

## Prerequisites

Before you begin, ensure you have the following installed on your system:

- [.NET SDK](https://dotnet.microsoft.com/download) (version 5.0 or later)
- [Node.js](https://nodejs.org/) (version 12 or later)
- [npm](https://www.npmjs.com/) (usually comes with Node.js)
- [SQL Server](https://www.microsoft.com/en-us/sql-server/sql-server-downloads)

## Setup

1. Clone the repository to your local machine.

2. Configure the database connection:
   - In the `api` folder, locate the `appsettings.json` file.
   - Update the connection string to match your SQL Server configuration.

3. Set up the frontend environment:
   - Navigate to the `frontend` folder.
   - Create a `.env` file if it doesn't exist.
   - Add any necessary environment variables to the `.env` file.

## Running the Application

### Backend (API)

1. Open a terminal or command prompt.
2. Navigate to the `api` folder.
3. Run the following command to start the backend server:

   ```
   dotnet watch run
   ```

   This command will start the API server and watch for any changes in the code.

### Frontend

1. Open a new terminal or command prompt.
2. Navigate to the `frontend` folder.
3. Install the required npm packages:

   ```
   npm install
   ```

4. Start the React development server:

   ```
   npm start
   ```

   This command will start the frontend application, typically on `http://localhost:3000`.

## Accessing the Application

Once both the backend and frontend servers are running, you can access the application by opening a web browser and navigating to `http://localhost:3000` (or the port specified by your React application).

## Troubleshooting

- If you encounter any database-related issues, ensure that SQL Server is installed and running correctly on your machine.
- Double-check that the connection string in `appsettings.json` is correct and matches your SQL Server configuration.
- Verify that all required environment variables are set correctly in the `.env` file in the frontend folder.

## Additional Information
The API is currently limited to US stocks only. Thanks to https://www.youtube.com/@TeddySmithDev for the reference and guidance.
