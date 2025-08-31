// This file manages saving to and loading from localStorage.
import { taskList } from './dom.js';
import { addTask } from './ui.js';

/**
 * Saves the current list of tasks to localStorage.
 */
export function saveTasks() {
    const tasks = [];
    taskList.querySelectorAll('.task-item').forEach(function(taskItem) {
        const taskText = taskItem.querySelector('.task-text').textContent;
        const isCompleted = taskItem.classList.contains('completed');
        tasks.push({ text: taskText, completed: isCompleted });
    });
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

/**
 * Loads tasks from localStorage and displays them on the page.
 */
export function loadTasks() {
    const tasks = JSON.parse(localStorage.getItem('tasks'));
    if (tasks) {
        tasks.forEach(task => addTask(task.text, task.completed));
    }
}