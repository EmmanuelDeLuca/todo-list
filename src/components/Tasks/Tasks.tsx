import React, { FormEvent, useState } from "react";
import styles from "./styles.module.scss";

interface Task {
  title: string;
  done: boolean;
  id: number;
}

export const Tasks: React.FC = () => {
  const [taskTitle, setTaskTitle] = useState("");
  const [tasks, setTask] = useState([] as Task[]);

  function handleSubmitAddTask(event: FormEvent) {
    event.preventDefault();

    if (taskTitle.length < 3) {
      alert("Não é possivel adicionar uma tarefa  com menos de 3 letras");
      return;
    }

    setTask([
      ...tasks,
      {
        id: new Date().getTime(),
        title: taskTitle,
        done: false,
      },
    ]);
    setTaskTitle("");
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
              <input type="checkbox" id={`task ${task.id}`} />
              <label htmlFor={`task ${task.id}`}>{task.title}</label>
            </li>
          );
        })}
      </ul>
    </section>
  );
};
