### ReactJS Tutorial - 2 - Hello World (Study Guide)

#### Setting up the Development Environment:
1. **Node.js**:
   - Download and install Node.js from the official website [nodejs.org](https://nodejs.org/).
   - Ensure you have the **latest stable release** installed or update your existing version.

2. **Text Editor**:
   - Recommended editor: **VS Code**.
   - Download it from [code.visualstudio.com](https://code.visualstudio.com/).

#### Creating a New React Application:
1. **Folder Setup**:
   - Create a folder for your React project (e.g., "react").
   - Open this folder in VS Code.

2. **Create React App**:
   - Use **Create React App** to quickly create and run React applications with no configuration required.
   - Open the **integrated terminal** in VS Code and run the following command:
     ```bash
     npx create-react-app hello-world
     ```
   - This will create a new folder called `hello-world` with all the required files for a React project.

3. **Running the Application**:
   - Navigate into the project folder:
     ```bash
     cd hello-world
     ```
   - Start the application:
     ```bash
     npm start
     ```
   - This will open the app in your default browser on **localhost:3000**, displaying the default React page.

#### Editing the React App:
1. **Editing the App**:
   - In VS Code, expand the `hello-world` folder and navigate to `src` > `App.js`.
   - Replace the text inside the component with "Hello World".
   
2. **Live Reload**:
   - Save the changes, and the browser will automatically refresh, displaying the updated "Hello World" message.

#### Alternative Approach to Creating React Apps:
- Two methods for creating a React app:
  1. **Using NPX** (recommended):
     - The command `npx create-react-app` is used directly without installing the package globally.
     - NPX is a package runner installed along with Node.js and allows you to run packages without global installation.

  2. **Using NPM**:
     - You can also globally install the Create React App package:
       ```bash
       npm install create-react-app -g
       ```
     - Then run:
       ```bash
       create-react-app hello-world
       ```
     - This method requires maintaining the global package, which can be tedious with updates.

#### Summary:
- **NPX method** is preferred for its simplicity and not requiring global installation.