import React, { useContext } from "react";
import styles from "./styles.module.scss";
import { StatsCard } from "../StatsCard/StatsCard";
import { TasksContext } from "../../context/TasksContext";

export const Header: React.FC = () => {
  const { tasks } = useContext(TasksContext);

  const totalTasks = tasks.length;
  const totalPeding = tasks.reduce((total, task) => {
    if (!task.done) return total + 1;
    return total;
  }, 0);

  const totalDone = totalTasks - totalPeding;

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div>
          <h1>MyTodo</h1>
          <span>Bem-Vindo, Emmanuel</span>
        </div>
        <div>
          <StatsCard title="Total de Tarefas" value={totalTasks} />
          <StatsCard title="Tarefas Pendentes" value={totalPeding} />
          <StatsCard title="Tarefas Concluídas" value={totalDone} />
        </div>
      </div>
    </header>
  );
};
