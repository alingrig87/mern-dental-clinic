### Frontend App - React + Vite

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh

## Deploy on render

### Prerequisites:

Basic understanding of React, Git, and static site deployment.
An account on render.com.
A static React site codebase ready for deployment.

### Step 1: Sign Up on render.com

If you don't already have one, create an account on render.com.

### Step 2: Create a New Service

Log in to your render.com account.
Click the "New" button and select "Static site."
Choose the appropriate Git repository where your static React site code is hosted.

### Step 3: Configure Build Settings

render.com will automatically detect the build settings for a static React site. The build command is typically npm install && npm run build if you're using the default React setup.

### Step 4: Specify the Static Site Directory

Under the "Static Directory" section, specify the directory where your built React files are located. This is often build or dist.

### Step 5: Deploy Your Service

Once your configuration is set up, click the "Create Service" button.
render.com will start building and deploying your static React site.
Monitor the deployment progress in real-time on the render.com dashboard.

### Step 6: Domain and HTTPS

render.com provides a default subdomain for your deployed site (e.g., your-app.onrender.com), but you can add your custom domain under the "Custom Domains" section.
Automatic SSL certificates are included, ensuring your site is served securely over HTTPS.

### Step 7: Scaling and Settings

Adjust the scaling settings based on your traffic requirements.
Explore additional settings on the render.com dashboard, such as environment variables and caching options.

### Step 8: Monitoring and Logs

Use render.com's monitoring and logging features to keep track of your site's performance.
Congratulations! Your static React site is now live on render.com. Users can access your site through the provided subdomain or your custom domain. Remember to consult render.com's documentation for any updates or new features that may have been introduced since this guide was written.
