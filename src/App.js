import './App.css';
import { TodoList } from './components/TodoList';
import { CreateTodoForm } from './components/CreateTodoForm';

function App() {
  return (
    <div className='app'>
      <CreateTodoForm />
      <TodoList />
    </div>
  );
}

export default App;
