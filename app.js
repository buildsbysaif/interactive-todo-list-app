// This is the main entry point of the application.
// It imports necessary modules and sets up event listeners.

import { taskForm, taskList, themeToggle, filterButtons } from './js/dom.js';
import { applyTheme } from './js/ui.js';
import { loadTasks } from './js/storage.js';
import {
    handleTaskFormSubmit,
    handleTaskListClick,
    handleThemeToggle,
    handleFilterClick
} from './js/handlers.js';


//INITIALIZE APP 

// Function to run when the document is fully loaded
function initializeApp() {
    // Set the theme based on user's preference
    const savedTheme = localStorage.getItem('theme') || 'light';
    applyTheme(savedTheme);

    // Load tasks from localStorage
    loadTasks();

    // Attach all event listeners
    taskForm.addEventListener('submit', handleTaskFormSubmit);
    taskList.addEventListener('click', handleTaskListClick);
    themeToggle.addEventListener('change', handleThemeToggle);
    filterButtons.addEventListener('click', handleFilterClick);
}

// Run the app initialization
initializeApp();