// This file handles functions that update the User Interface.
import { taskList, body, themeToggle } from './dom.js';

/**
 * Creates and adds a new task element to the DOM.
 * @param {string} taskText - The text content of the task.
 * @param {boolean} [isCompleted=false] - The completion status of the task.
 */
export function addTask(taskText, isCompleted = false) {
    const li = document.createElement('li');
    li.className = 'task-item';
    if (isCompleted) {
        li.classList.add('completed');
    }
    li.innerHTML = `
        <input type="checkbox" class="task-checkbox" ${isCompleted ? 'checked' : ''}>
        <span class="task-text">${taskText}</span>
        <input type="text" class="edit-input" value="${taskText}">
        <div class="task-buttons">
            <button class="edit-btn" title="Edit task"><i class="fas fa-pencil-alt"></i></button>
            <button class="save-btn" title="Save task"><i class="fas fa-save"></i></button>
            <button class="delete-btn" title="Delete task"><i class="fas fa-trash"></i></button>
        </div>
    `;
    taskList.appendChild(li);
}

/**
 * Applies the selected theme (light/dark) to the application.
 * @param {string} theme - The theme to apply ('light' or 'dark').
 */
export function applyTheme(theme) {
    if (theme === 'dark') {
        body.classList.add('dark-mode');
        themeToggle.checked = true;
    } else {
        body.classList.remove('dark-mode');
        themeToggle.checked = false;
    }
}