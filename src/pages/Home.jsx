import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { TaskContext } from '../context/TaskContext';

const Home = () => {
  const { tasks, removeTask } = useContext(TaskContext);

  return (
    <div className="container">
      <div className="task-header">
        <h1>Minhas Tarefas</h1>
        <Link to="/add-task" className="btn btn-primary">
          + Adicionar Tarefa
        </Link>
      </div>
      
      {tasks.length === 0 ? (
        <p className="mensagem-vazia">Nenhuma tarefa cadastrada.</p>
      ) : (
        <div className="lista-tarefas">
          {tasks.map(task => (
            <div key={task.id} className="tarefa-item">
              <div className="tarefa-info">
                <h3>{task.title}</h3>
                <p>{task.desc || "Sem descrição"}</p>
              </div>
              
              <div className="btn-group">
                <Link to={`/edit/${task.id}`} className="btn btn-edit">
                  Editar
                </Link>
                <button 
                  className="btn btn-danger" 
                  onClick={() => removeTask(task.id)}
                >
                  Excluir
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Home;