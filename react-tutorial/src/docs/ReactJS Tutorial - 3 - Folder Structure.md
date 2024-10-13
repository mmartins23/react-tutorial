### ReactJS Tutorial - 3 - Folder Structure (Study Guide)

#### Overview:
- **Goal**: Understanding the folder structure and how control flows in a React app created using Create React App.
- In the previous video, we learned how to create a React app; now, we dive into its files and folders.

#### Key Files and Folders:

1. **`package.json`**:
   - Contains **dependencies** and **scripts** for the project.
   - Lists the React version (e.g., 16.5) and includes commands for running, building, and testing the app.
   - `yarn.lock` or `package-lock.json`: Ensures consistent dependency installations.

2. **Other Root Files**:
   - **`.gitignore`**: Specifies files to be ignored by Git.
   - **`README.md`**: Provides an overview of the project.

3. **Folders**:
   - **`node_modules`**: Stores all dependencies installed via NPM or Yarn.
   - **`public`**: Contains static files like `index.html`.
     - **`index.html`**:
       - The only HTML file in a React app (since it is a Single Page Application).
       - Contains a `<div>` with an `id="root"`. React will inject the application’s UI into this `div`.
     - **`favicon.ico`**: Icon displayed in the browser tab.
     - **`manifest.json`**: Related to Progressive Web Apps (can be ignored for beginners).

#### **Source Folder (`src`)**:
- This folder is where you spend most of your time during development.
  
1. **`index.js`**:
   - Entry point for the React app.
   - Renders the **App** component into the **root DOM node** (the `div` with `id="root"` in `index.html`).
   - **ReactDOM.render()** is responsible for this process.

2. **`App.js`**:
   - The root component of the app.
   - Contains the JSX (HTML-like syntax) that defines what gets displayed in the browser.
   - CSS and unit test files (`App.css` and `App.test.js`) are also provided.

3. **Other Source Files**:
   - **`index.css`**: Global styles that apply to the entire app.
   - **`logo.svg`**: React logo, used in the default `App.js` component.
   - **`serviceWorker.js`**: Manages Progressive Web App features (can be ignored by beginners).

#### Control Flow:
1. When the app runs (`npm start`):
   - **`index.html`** is served.
   - Control passes to **`index.js`**, which renders the **App** component inside the `root` DOM node.
   - The **App** component defines the visible content in the browser.

#### Next Steps:
- The next tutorial covers **React components**, which are fundamental building blocks of a React app.