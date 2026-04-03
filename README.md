# 🎓 SENG 204 Final Project

<p align="center">
  <img src="assets/lunexia-demo.gif" alt="Lunexia Demo" width="800">
  <kbd>✨ You can view it live by clicking on the image.</kbd>
</p>
---

## 🔗 Quick Access

| 🌐 Live website | 📂 Source Codes |
| :--- | :--- |
| [project-lunexia.onrender.com](https://project-lunexia.onrender.com) | [GitHub Repository](https://github.com/Lunexia-Team/lunexia) |

---

## ⚡ About the Project

**Lunexia** is a modern **indie game distribution platform** designed to bridge the gap between independent developers and gamers. Developed as a final project for SENG 204, this platform allows users to discover new titles and manage their favorite indie games through a seamless interface. 

> 🎮 **Beyond the Platform:** To demonstrate the platform's capabilities, we also developed **two original games** included in the library, showcasing a complete end-to-end integration of game development and distribution.

---

## ✨ Key Features

*   **Original Game Content:** Includes two custom-developed indie games to provide a ready-to-play experience.
*   **User Authentication:** Secure login and registration system.
*   **Game Discovery:** Browse and search for various indie games.
*   **Responsive Design:** Fully compatible with both desktop and mobile devices.
*   **Database Integration:** Dynamic content management using MongoDB.

## 📸 Screenshots

### Home Page
![Home](assets/Home.png)

### Game Library
![Library](assets/Games.png)

### Upload Page
![Upload](assets/Profile.png)

## 🛠 Technologies Used

| Category | Technologies |
| :--- | :--- |
| **Backend** | ![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white) ![Express.js](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white) |
| **Frontend** | ![Vue.js](https://img.shields.io/badge/Vue.js-4FC08D?style=for-the-badge&logo=vue.js&logoColor=white) ![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white) ![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white) ![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black) |
| **Database** | ![MongoDB](https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white) |
| **Package Management** | ![NPM](https://img.shields.io/badge/npm-CB3837?style=for-the-badge&logo=npm&logoColor=white) |
| **Distribution** | ![Render](https://img.shields.io/badge/Render-46E3B7?style=for-the-badge&logo=render&logoColor=white) |

---

## 🧠 System Architecture

The system follows a client-server architecture:

- **Frontend:** Vue.js (Single Page Application)
- **Backend:** Node.js + Express (REST API)
- **Database:** MongoDB
- **Communication:** HTTP (RESTful APIs)


## 🗂 Project Structure

```bash
lunexia/
├── assets/                # Media files and screenshots used in documentation
├── client/                # Frontend source code built with Vue.js
├── server/                # Backend API and database logic built with Node.js & Express
├── .env.example           # Template for environment variables (Port, MongoDB URI, etc.)
├── .gitignore             # Files and directories to be ignored by Git
├── LICENSE                # Project license information
├── README.md              # Project documentation and setup guide
├── package-lock.json      # Locked versions of project dependencies
└── package.json           # Project metadata, scripts, and dependency list
```
---

## 🚀 Installation and Setup

1. Clone the repository:
   
   ```bash
   git clone https://github.com/Lunexia-Team/lunexia.git
   
2. Enter the project directory:
   
   ```bash
   cd lunexia

3. Install the necessary dependencies:
   
   ```bash
   npm install

4. Start the server:
   
   ```bash
   npm start

5. View the project in your browser:
   
   ```bash
   http://localhost:3000

## 🗄 Database Configuration

MongoDB is used in this project.

Before running the project:

1. Create a `.env` file in the project root directory.
2. Define this file by referencing the `.env.example` file.
3. Ensure that the MongoDB service is running.

Note: The `.env` file has not been added to the repository for security reasons.

## 👥 Contributors

- [Güray Topağaç](https://github.com/guraytopagac)
- [Mehmet Emin Yıldırım](https://github.com/MehmetEmin61)
