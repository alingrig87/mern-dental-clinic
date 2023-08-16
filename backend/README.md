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

## Deploy on render

### Prerequisites:

Basic familiarity with Node.js, Express, and Git.
An account on render.com.
A Node.js and Express web service codebase ready for deployment.

### Step 1: Sign Up on render.com

If you haven't already, sign up for an account on render.com.

### Step 2: Create a New Service

Log in to your render.com account.
Click the "Create New" button and select "Web Service."
Choose the appropriate Git repository where your Node.js and Express web service code is hosted.

### Step 3: Configure Build Settings

After selecting your repository, render.com will detect your application's build settings automatically. If not, you can manually specify the build settings(configure backend folder if needed).
For Node.js applications, the default build command is usually npm install && npm start.

### Step 4: Add Environment Variables

If your application relies on environment variables, you can add them under the "Environment Variables" section. This is where you would set configurations such as database URLs, API keys, etc. (e.g. mongoURL)

### Step 5: Configure Ports

Under the "Ports" section, specify the port your Express app is listening on. The default port for Express is usually 3000.

### Step 6: Deploy Your Service

Once your configuration is set up, click the "Create Service" button.
render.com will begin building and deploying your Node.js and Express web service.
You can view the deployment progress in real-time on the render.com dashboard.

### Step 7: Domain and HTTPS

By default, render.com provides a subdomain for your application (e.g., your-app.onrender.com). You can also add your custom domain under the "Custom Domains" section.
render.com provides free automatic SSL certificates, ensuring your application is served over HTTPS.

### Step 8: Scaling and Settings

Depending on your application's needs, you can adjust scaling settings to handle more traffic.
Explore other settings and features on the render.com dashboard, such as environment variables, background workers, and database integrations.

### Step 9: Monitoring and Logs

render.com provides monitoring and logging features to help you track the health and performance of your deployed application.
Congratulations! You've successfully deployed your Node.js and Express web service on render.com. Your application is now live and accessible to users. Remember to check the render.com documentation for any updates or additional features that may have been introduced since this guide was written.
