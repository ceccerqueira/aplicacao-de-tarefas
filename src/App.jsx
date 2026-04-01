import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { TaskProvider } from './context/TaskContext';
import Home from './pages/Home';
import AddTask from './pages/AddTask';
import EditTask from './pages/EditTask'; // editar a tarefa
import './App.css'; // arquivo de style

function App() {
  return (
    <TaskProvider>
      <Router>
        <Switch>
          {/*Lista de Tarefas */}
          <Route exact path="/" component={Home} />
          
          {/*Criar a tarefa - Formulário vazio */}
          <Route path="/add-task" component={AddTask} />
          
          {/*Editar a tarefa, recebe o ID da tarefa como parâmetro */}
          <Route path="/edit/:id" component={EditTask} />
        </Switch>
      </Router>
    </TaskProvider>
  );
}

export default App;