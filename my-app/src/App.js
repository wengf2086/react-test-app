import { useState } from 'react'
import logo from './logo.svg';
import './App.css';
import Header from './components/Header'
import Tasks from './components/Tasks'

function App() {
  const [tasks, setTasks] = useState([
    {
        id: 1,
        text: 'Friend 1',
        attribute: 'Smart',
        alive: true,
    },
    {
        id: 2,
        text: 'Friend 152',
        attribute: 'Funny',
        alive: true,
    },
    {   
        id: 3,
        text: 'Friend 1453',
        attribute: 'Mysterious',
        alive: true,
    }
])

const deleteTask = (id) => {
  console.log('delete ', id)
}

  const name = 'Cookie'
  const likeOstriches = true
  return (
    <div className='container'>
      <Header title = "Cookie Header"/>
      <Tasks tasks = {tasks} onDelete = {deleteTask} />
      <h1>Hello from {name}!</h1>
      <h2>Hello again. 1 + 1 = {1 + 1}.</h2>
      <h2>If you asked me whether I liked ostriches, I'd say {likeOstriches ? 'yes' : 'no'}.</h2>
    </div>
  );
}

export default App;
