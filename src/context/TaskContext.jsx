import React, { createContext, useState, useEffect } from 'react';

export const TaskContext = createContext();

export const TaskProvider = ({ children }) => {
  const [tasks, setTasks] = useState([]);

  // Carrega do LocalStorage ao iniciar
  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
    setTasks(storedTasks);
  }, []);

  // Salva no LocalStorage sempre que 'tasks' mudar
  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (task) => setTasks([...tasks, task]);

  const removeTask = (id) => setTasks(tasks.filter(t => t.id !== id));

  const editTask = (updatedTask) => {
    setTasks(tasks.map(t => (t.id === updatedTask.id ? updatedTask : t)));
  };

  // Função auxiliar para encontrar uma tarefa específica
  const getTaskById = (id) => tasks.find(t => t.id === Number(id));

  return (
    <TaskContext.Provider value={{ tasks, addTask, removeTask, editTask, getTaskById }}>
      {children}
    </TaskContext.Provider>
  );
};