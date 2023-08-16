## Backend - MongoDB | Express | Node

1. Create node project using npm (details --> [here](https://nodesource.com/blog/an-absolute-beginners-guide-to-using-npm/))

```bash
npm init
```

2. Install intial packages

```bash
npm install express express-validator mongoose nodemon request
```

Note: This project utilizes "type: module" in its package.json to leverage ECMAScript Modules (ESM) for organized and modern module management. ESM syntax, including "import" and "export", offers a standardized approach for structuring code dependencies. This choice enhances code modularity and supports a more modern JavaScript development workflow.

### Start the app in dev mode

To get started with this project, follow the steps below:

1. Clone this repository to your local machine.
2. Navigate to the project directory in your terminal.

### Installation

Before you begin, make sure you have Node.js and npm (Node Package Manager) installed on your machine. You can download them from [here](https://nodejs.org/).

To install the project dependencies, run the following command:

```bash
npm install
```

### Running the Server

The following scripts are defined in the `package.json` file:

- `dev`: Starts the server using `nodemon`, which automatically restarts the server whenever you make changes to the code. Run this during development for a smoother workflow.
- `start`: Starts the server using `node`. Use this script to start the server in a production environment.

To start the server in development mode, use:

```bash
npm run dev
```

To start the server in production mode, use:

```bash
npm run start
```

The server will be accessible at `http://localhost:5500` by default. You can change the port number in the `index.js` file if needed.

### Browser Verification

Open a web browser and enter the address http://localhost:5500 to access the server. If everything is set up correctly, you should see the message "My first response" displayed on the page.

### Stopping the Server

To stop the server, return to the terminal and press Ctrl + C.

### Connecting to MongoDB from a Node.js and Express Application

Follow these steps to create a connection to a MongoDB database from a Node.js and Express application, including creating an account on MongoDB Atlas:

1. **Create an Account on MongoDB Atlas:**

   - Go to [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) website.
   - Click on the "Get started free" button or sign in if you already have an account.
   - Follow the instructions to set up your account and create a new project.

2. **Create a Cluster:**

   - Inside your project on MongoDB Atlas, click "Build a Cluster."
   - Choose your preferred cloud provider and region, then proceed with the default settings or customize as needed.
   - Click "Create Cluster" and wait for it to deploy.

3. **Database User:**

   - In the cluster's "Database Access" section, click "Database User" and create a new user with a username and password. Remember these credentials.

4. **IP Whitelist:**

   - Go to the "Network Access" section and add your current IP address to the IP Whitelist. This will allow your Node.js application to connect to the database.

5. **Connect to Your Application:**

   - In the cluster's "Overview" section, click "Connect."
   - Choose "Connect Your Application" and select the appropriate driver (Node.js in this case).
   - Copy the connection string provided. It will look something like:
     ```
     mongodb+srv://<username>:<password>@cluster0.mongodb.net/<database>?retryWrites=true&w=majority
     ```
   - this connection string should be part of your local/server configuration via config file or environment variables on the server
   - copy this in default.json file in your config( replace <username> and <password with your credendial>, please note this file must not be versioned and commited on github)

   ```javascript
   {
   	"mongoURL": "<username>:<password>@cluster0.mongodb.net/<database>?retryWrites=true&w=majority"
   }

   ```
