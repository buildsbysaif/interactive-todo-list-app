<div align="center">
  <img src="assets/logo.png" alt="ProTask Logo" width="100" />

  <h1>✨ ProTask: Modern To-Do Application ✨</h1>
  <p><em>A sleek, interactive, and fully responsive task management web app.</em></p>

  [![Live Demo](https://img.shields.io/badge/Live_Demo-View_Project-success?style=for-the-badge&logo=vercel)](https://buildsbysaif.github.io/interactive-todo-list-app/)
  [![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)]()
  [![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)]()
  [![JavaScript](https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E)]()
</div>

<br />

> **💡 Note for Recruiters:** This project was developed to showcase core front-end fundamentals. Instead of relying on a framework like React, it demonstrates a deep understanding of **Vanilla JavaScript (ES6+)**, **DOM Manipulation**, and **Modular Architecture**.

---

## 🚀 Core Features

- **Full CRUD Operations:** Seamlessly add, edit, delete, and mark tasks as completed.
- **Local Storage Persistence:** Task data and user theme preferences are saved securely in the browser's local storage. The app remembers your tasks even after closing the tab.
- **Dark / Light Mode:** A fully integrated theme switcher utilizing CSS Variables for a smooth, accessible user experience.
- **Dynamic Task Filtering:** Instantly sort tasks by "All," "Active," and "Completed" states.
- **Graceful Validation:** Replaced jarring default browser alerts with smooth, custom CSS shake animations for empty inputs.
- **Fully Responsive:** Mobile-first CSS ensures a flawless UI across desktops, tablets, and smartphones.

---

## 🧠 Under the Hood (Architecture)

To ensure scalability and maintainability, the codebase was strictly organized using **ES6 Modules**. 

- `app.js` - The main orchestrator connecting modules and initializing the app.
- `dom.js` - Centralized cache for all DOM element selections.
- `handlers.js` - Contains all event listener logic and user interaction handlers.
- `storage.js` - Manages serialization and deserialization of data via the Local Storage API.
- `ui.js` - Handles dynamic rendering and DOM painting.

*Key Concepts Demonstrated: Event Delegation, ES6 Import/Export, State Management (Vanilla), CSS Variables, and CSS Flexbox.*

---

## How to Run Locally

If you'd like to test the code on your local machine:

1.  Clone the repository: `git clone https://github.com/buildsbysaif/interactive-todo-list-app.git`
2.  Navigate to the project directory.
3.  Start a local development server (e.g., using the "Live Server" extension in VS Code) or simply open the `index.html` file in any modern web browser.

