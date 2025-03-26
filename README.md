# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh


## **How to Run This Project**  

### **1️⃣ Clone the Repository**  
To get started, clone the repository to your local machine using the following command:  
```sh
git clone <repo-link-here>
```

---

### **2️⃣ Install Dependencies**  
Navigate to the project folder and install the required dependencies:  
```sh
npm install
```
This will install all necessary **packages and development dependencies** for the project.

---

### **3️⃣ Start the Frontend**  
Run the following command to start the frontend:  
```sh
npm run dev
```
This will launch the frontend on your local machine.

---

### **4️⃣ Start JSON Server**  
Simultaneously, in another terminal window, run the JSON Server to serve data from `db.json`:  
```sh
npx json-server --watch src/db.json --port 3000
```
✅ **Important:** This step is required to fetch all data from the server.

---

### **5️⃣ View the Project in Your Browser**  
Once both the frontend and JSON Server are running:  
- Open your browser and visit `http://localhost:5173/` (or the port specified by Vite).  
- You should now see the project running with data from the JSON Server.  

---

### **Notes:**  
- Make sure **Node.js** is installed on your machine.  
- If you face issues with `json-server`, try installing it globally:  
  ```sh
  npm install -g json-server
  ```  
- If `npx json-server` doesn't work, try running it without `npx`:  
  ```sh
  json-server --watch src/db.json --port 3000
  ```  

Now you're all set! 🚀


