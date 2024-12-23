import React, { useState, useEffect } from "react";
import { FaPlus, FaTrash, FaCalendarAlt } from "react-icons/fa";
import '../assets/css/Schedule.css'
const Schedule = () => {
  const [showForm, setShowForm] = useState(false);
  const [schedules, setSchedules] = useState(
    JSON.parse(localStorage.getItem("schedules")) || []
  );
  const [task, setTask] = useState("");
  const [time, setTime] = useState("");

  // Save schedules to localStorage whenever they are updated
  useEffect(() => {
    localStorage.setItem("schedules", JSON.stringify(schedules));
  }, [schedules]);

  const handleAddSchedule = () => {
    if (task && time) {
      setSchedules([...schedules, { id: Date.now(), task, time }]);
      setTask("");
      setTime("");
      setShowForm(false);
    }
  };

  const handleDeleteSchedule = (id) => {
    const updatedSchedules = schedules.filter((schedule) => schedule.id !== id);
    setSchedules(updatedSchedules);
  };

  return (
    <div className="schedule-container">
      <div className="header">
        <h2>Your Schedule</h2>
        <button
          className="create-schedule-btn"
          onClick={() => setShowForm(!showForm)}
          title="Create Schedule"
        >
          &#10010;
        </button>
      </div>

      {showForm && (
        <div className="schedule-form">
          <h3>Create a New Schedule</h3>
          <div className="form-group">
            <label htmlFor="task">Task</label>
            <input
              type="text"
              id="task"
              placeholder="Enter your task"
              value={task}
              onChange={(e) => setTask(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="time">Time</label>
            <input
              type="time"
              id="time"
              value={time}
              onChange={(e) => setTime(e.target.value)}
            />
          </div>
          <button className="add-schedule-btn" onClick={handleAddSchedule}>
            <FaCalendarAlt size={20} /> Save Schedule
          </button>
        </div>
      )}

      <div className="schedule-list">
        {schedules.length > 0 ? (
          <ul>
            {schedules.map((schedule) => (
              <li key={schedule.id} className="schedule-item">
                <div>
                  <strong>{schedule.task}</strong> at {schedule.time}
                </div>
                <button
                  className="delete-btn"
                  onClick={() => handleDeleteSchedule(schedule.id)}
                  title="Delete Schedule"
                >
                 &#10006;
                </button>
              </li>
            ))}
          </ul>
        ) : (
          <p className="no-schedules">No schedules available. Start adding!</p>
        )}
      </div>
    </div>
  );
};

export default Schedule;
