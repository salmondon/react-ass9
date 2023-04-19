import { useState } from 'react'
import Card from './components/Card';
import List from './components/List';
import TypeMe from './components/TypeMe';



const users = [
  {
    name: 'Seichia',
    job: 'Frontend Developer',
    hobby: 'Hiking',
  },
  {
    name: 'Rania',
    job: 'Backend Developer',
    hobby: 'Reading',
  },
  {
    name: 'Cherra',
    job: 'Full Stack Developer',
    hobby: 'Cooking',
  },
];

function App() {
  const [count, setCount] = useState(0)

  const handleClick = () => {
    alert('You clicked the button!');
  };

  return (
    <div className="App">
       <button onClick={handleClick}>Click me</button>
      <List users={users} />
      <TypeMe></TypeMe>
    </div>
  )
}

export default App
