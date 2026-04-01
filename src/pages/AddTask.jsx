import React, { useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { TaskContext } from '../context/TaskContext';

const AddTask = () => {
  const [title, setTitle] = useState('');
  const [desc, setDesc] = useState('');
  const { addTask } = useContext(TaskContext);
  const history = useHistory();

  const handleSave = (e) => {
    e.preventDefault();
    if (!title.trim()) return alert("O título é obrigatório!");

    addTask({ id: Date.now(), title, desc });
    history.push('/');
  };

  return (
    <div className="container">
      <h2>Nova Tarefa</h2>
      <form onSubmit={handleSave} className="form-container">
        <input 
          className="input-field"
          type="text"
          placeholder="Qual tarefa será cadastrada?" 
          value={title} 
          onChange={e => setTitle(e.target.value)} 
        />
        <textarea 
          className="input-field"
          rows="4"
          placeholder="Descrição detalhada da tarefa(opcional)" 
          value={desc} 
          onChange={e => setDesc(e.target.value)} 
        />
        <div className="btn-group">
          <button type="submit" className="btn btn-primary">Salvar</button>
          <button 
            type="button" 
            className="btn btn-danger" 
            onClick={() => history.push('/')}
          >
            Cancelar
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddTask;