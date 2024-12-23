import React, { useState, useEffect } from "react";
import { FaPlus, FaTrashAlt, FaCalendarAlt, FaEdit } from "react-icons/fa";
import "../assets/css/CreateTodo.css";

export default function CreateTodo() {
    const [showForm, setShowForm] = useState(false);
    const [todos, setTodos] = useState(
        JSON.parse(localStorage.getItem("todos")) || []
    );
    const [formData, setFormData] = useState({
        name: "",
        endDate: "",
        tasks: [],
    });
    const [task, setTask] = useState("");

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleAddTask = () => {
        if (task.trim()) {
            setFormData({ ...formData, tasks: [...formData.tasks, task] });
            setTask("");
        }
    };

    const handleEditTask = (index) => {
        const updatedTasks = formData.tasks.map((t, i) =>
            i === index ? prompt("Edit task:", t) : t
        );
        setFormData({ ...formData, tasks: updatedTasks });
    };

    const handleDeleteTask = (index) => {
        const updatedTasks = formData.tasks.filter((_, i) => i !== index);
        setFormData({ ...formData, tasks: updatedTasks });
    };

    const handleCreateTodo = () => {
        const newTodos = [
            ...todos,
            { ...formData, createdAt: new Date().toLocaleString() },
        ];
        setTodos(newTodos);
        localStorage.setItem("todos", JSON.stringify(newTodos));
        setShowForm(false);
        setFormData({ name: "", endDate: "", tasks: [] });
    };

    const handleDeleteTodo = (index) => {
        const updatedTodos = todos.filter((_, i) => i !== index);
        setTodos(updatedTodos);
        localStorage.setItem("todos", JSON.stringify(updatedTodos));
    };

    return (
        <div className="create-todo-container">
            <div className="header">
                <h2>Your Todos</h2>
                <button
                    className="create-schedule-btn"
                    onClick={() => setShowForm(!showForm)}
                    title="Create Todo"
                >
                    <FaPlus />
                </button>
            </div>

            {showForm && (
                <div className="schedule-form">
                    <h3>Create New Todo</h3>
                    <div className="form-group">
                        <label>Todo Name:</label>
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label>End Date:</label>
                        <input
                            type="date"
                            name="endDate"
                            value={formData.endDate}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label>Add Tasks:</label>
                        <div className="task-input">
                            <input
                                type="text"
                                value={task}
                                onChange={(e) => setTask(e.target.value)}
                            />
                            <button className="add-task-btn" onClick={handleAddTask}>
                                <FaPlus />
                            </button>
                        </div>
                    </div>
                    <ul className="task-list">
                        {formData.tasks.map((t, index) => (
                            <li key={index}>
                                {t}
                                <button
                                    className="edit-task-btn"
                                    onClick={() => handleEditTask(index)}
                                    title="Edit Task"
                                >
                                    <FaEdit />
                                </button>
                                <button
                                    className="delete-task-btn"
                                    onClick={() => handleDeleteTask(index)}
                                    title="Delete Task"
                                >
                                    <FaTrashAlt />
                                </button>
                            </li>
                        ))}
                    </ul>
                    <button className="add-todo-btn" onClick={handleCreateTodo}>
                        <FaCalendarAlt size={20} /> Save Todo
                    </button>
                </div>
            )}

            <div className="schedule-list">
                {todos.length > 0 ? (
                    <ul>
                        {todos.map((todo, index) => (
                            <li key={index} className="schedule-item">
                                <div>
                                    <strong>{todo.name}</strong>
                                </div>
                                <div>
                                    <strong>End Date:</strong> {todo.endDate}
                                </div>
                                <strong>Tasks:</strong>
                                <ul>
                                    {todo.tasks.map((task, taskIndex) => (
                                        <li key={taskIndex}>
                                            {taskIndex + 1}. {task}
                                        </li>
                                    ))}
                                </ul>
                                <button
                                    className="delete-btn"
                                    onClick={() => handleDeleteTodo(index)}
                                    title="Delete Todo"
                                >
                                    <FaTrashAlt />
                                </button>
                            </li>
                        ))}
                    </ul>
                ) : (
                    <p className="no-schedules">No todos available. Create one now!</p>
                )}
            </div>
        </div>
    );
}
