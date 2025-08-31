// This file contains all the event handler functions.
import { taskInput, taskList, themeToggle } from './dom.js';
import { addTask, applyTheme } from './ui.js';
import { saveTasks } from './storage.js';

export function handleTaskFormSubmit(event) {
    event.preventDefault();
    const taskText = taskInput.value.trim();
    if (taskText !== '') {
        addTask(taskText);
        saveTasks();
        taskInput.value = '';
        taskInput.focus();
    } else {
        taskInput.classList.add('shake');
        setTimeout(() => taskInput.classList.remove('shake'), 500);
    }
}

export function handleTaskListClick(event) {
    const clickedElement = event.target;
    const taskItem = clickedElement.closest('.task-item');
    if (!taskItem) return;

    if (clickedElement.classList.contains('delete-btn')) {
        taskItem.remove();
        saveTasks();
    } else if (clickedElement.type === 'checkbox') {
        taskItem.classList.toggle('completed');
        saveTasks();
    } else if (clickedElement.classList.contains('edit-btn')) {
        taskItem.classList.add('editing');
        const editInput = taskItem.querySelector('.edit-input');
        editInput.focus();
        editInput.select();
    } else if (clickedElement.classList.contains('save-btn')) {
        const editInput = taskItem.querySelector('.edit-input');
        const newText = editInput.value.trim();
        if (newText) {
            taskItem.querySelector('.task-text').textContent = newText;
            taskItem.classList.remove('editing');
            saveTasks();
        } else {
            editInput.classList.add('shake');
            setTimeout(() => editInput.classList.remove('shake'), 500);
        }
    }
}

export function handleThemeToggle() {
    const theme = themeToggle.checked ? 'dark' : 'light';
    localStorage.setItem('theme', theme);
    applyTheme(theme);
}

export function handleFilterClick(event) {
    const clickedButton = event.target;
    if (clickedButton.classList.contains('filter-btn')) {
        document.querySelector('.filter-btn.active').classList.remove('active');
        clickedButton.classList.add('active');

        const filter = clickedButton.dataset.filter;
        const tasks = taskList.querySelectorAll('.task-item');

        tasks.forEach(task => {
            switch (filter) {
                case 'active':
                    task.style.display = task.classList.contains('completed') ? 'none' : 'flex';
                    break;
                case 'completed':
                    task.style.display = task.classList.contains('completed') ? 'flex' : 'none';
                    break;
                default:
                    task.style.display = 'flex';
                    break;
            }
        });
    }
}