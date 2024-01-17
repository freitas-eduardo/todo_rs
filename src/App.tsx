import { PlusCircle } from "@phosphor-icons/react";
import styles from "./App.module.scss";
import { Button } from "./components/button";
import { Header } from "./components/header";
import { Input } from "./components/input";
import { useTodo } from "./hooks";
import { Task } from "./components/task";
import { Empty } from "./components/empty";
import { FormEvent } from "react";
import { v4 as uuidv4 } from 'uuid';

function App() {
  const { tasks, removeTask, toggleTask, getInfoTasks, addTask } = useTodo();
  const { checkedTask, totalOfTask } = getInfoTasks();

  const handleRemoveTask = (id: string) => {
    removeTask(id)
  }

  const handleUpdateToggle = (id: string) => {
    toggleTask(id)
  }

  const handleSubmitForm = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget)
    const form = Object.fromEntries(data)
    return !form.task ? null : addTask({ id: uuidv4(), content: form.task.toString(), isDone: false })
  };

  return (
    <main>
      <Header />
      <section className={styles.todo}>
        <form onSubmit={handleSubmitForm} className={styles.form}>
          <Input placeholder={"Adicione uma nova tarefa"} />
          <Button buttonType="primary">
            <span>Criar</span>
            <PlusCircle size={16} color="#f2f2f2" weight="bold" />
          </Button>
        </form>
        <div className={styles.info}>
          <div>
            <strong className={styles['info-title--blue']} > Tarefas criadas </strong>
            <span className={styles['info-value']}> {totalOfTask}</span>
          </div>
          <div>
            <strong className={styles['info-title--purple']}> Concluídas </strong>
            <span className={styles['info-value']}>
              {totalOfTask === 0
                ? totalOfTask
                : `${checkedTask} de ${totalOfTask}`}
            </span>
          </div>
        </div>
        <div >
          {tasks.length > 0 ? (
            <div className={styles.list}>
              {tasks.map((task) => (
                <Task
                  key={task.id}
                  content={task.content}
                  isDone={task.isDone}
                  removeTask={() => handleRemoveTask(task.id)}
                  toggleUpdateTask={() => handleUpdateToggle(task.id)}
                />
              ))}
            </div>
          ) : (
            <Empty />
          )}

        </div>
      </section>
    </main>
  );
}

export default App;
