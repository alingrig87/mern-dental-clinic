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
