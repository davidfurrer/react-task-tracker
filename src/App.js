import Header from './components/Header'
import Tasks from './components/Tasks'
import { useState } from 'react'


function App() {

  const [tasks, setTasks] = useState(
    [{id: 1,
      text: 'hi',
      day: '2021-10-10'
    },
    {id: 2,
    text: 'hi2',
    day: '2021-09-01'}
])

  return (
    <div className="container">
      <Header title='Hello'/>
      <Tasks tasks={tasks} />
    </div>
  );
}

export default App;
