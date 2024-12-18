import React, { FormEvent, useContext, useState } from "react";
import styles from "./styles.module.scss";
import { TasksContext } from "../../context/TasksContext";

export const Tasks: React.FC = () => {
  const [taskTitle, setTaskTitle] = useState("");
  const { tasks, setTask } = useContext(TasksContext);

  function handleSubmitAddTask(event: FormEvent) {
    event.preventDefault();

    if (taskTitle.length < 3) {
      alert("Não é possivel adicionar uma tarefa  com menos de 3 letras");
      return;
    }

    const newTasks = [
      ...tasks,
      {
        id: new Date().getTime(),
        title: taskTitle,
        done: false,
      },
    ];

    setTask(newTasks);
    localStorage.setItem("tasks", JSON.stringify(newTasks));

    setTaskTitle("");
  }

  function handleToggleTaskStatus(taskId: number) {
    const newTasks = tasks.map((task) => {
      if (taskId === task.id) {
        return {
          ...task,
          done: !task.done,
        };
      }

      return task;
    });

    setTask(newTasks);
  }

  function handleRemoveTask(taskId: number) {
    const newTasks = tasks.filter((task) => task.id !== taskId)

    setTask(newTasks);
  }

  return (
    <section className={styles.container}>
      <form onSubmit={handleSubmitAddTask}>
        <div>
          <label htmlFor="task-title">Adicionar Tarefas</label>
          <input
            value={taskTitle}
            type="text"
            id="task-title"
            placeholder="Título da Tarefa"
            onChange={(event) => setTaskTitle(event.target.value)}
          />
        </div>
        <button type="submit">Adicionar Tarefa</button>
      </form>
      <ul>
        {tasks.map((task) => {
          return (
            <li key={task.id}>
              <input
                type="checkbox"
                id={`task ${task.id}`}
                onChange={() => {
                  handleToggleTaskStatus(task.id);
                }}
              />
              <label
                htmlFor={`task ${task.id}`}
                className={task.done ? styles.done : ""}
              >
                {task.title}
              </label>

              <div>
                <button onClick={() => {handleRemoveTask(task.id)}} className={styles.remover}>Remover</button>
              </div>
              
            </li>
          );
        })}
      </ul>
    </section>
  );
};
