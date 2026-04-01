import React, { useState, useContext, useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { TaskContext } from '../context/TaskContext';

const EditTask = () => {
  const { id } = useParams();
  const history = useHistory();
  const { getTaskById, editTask } = useContext(TaskContext);

  const [title, setTitle] = useState('');
  const [desc, setDesc] = useState('');

  useEffect(() => {
    const task = getTaskById(id);
    if (task) {
      setTitle(task.title);
      setDesc(task.desc);
    }
  }, [id, getTaskById]);

  const handleSave = (e) => {
    e.preventDefault();
    editTask({ id: Number(id), title, desc });
    history.push('/');
  };

  return (
    <div className="container">
      <h2>Editar Tarefa</h2>
      <form onSubmit={handleSave} className="form-container">
        <input 
          className="input-field"
          value={title} 
          onChange={e => setTitle(e.target.value)} 
        />
        <textarea 
          className="input-field"
          rows="4"
          value={desc} 
          onChange={e => setDesc(e.target.value)} 
        />
        <div className="btn-group">
          <button type="submit" className="btn btn-primary">Salvar Alterações</button>
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

export default EditTask;