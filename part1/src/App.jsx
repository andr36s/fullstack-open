// De las tareas de la 1 a 1.5
const Header = ({ course }) => {
  return (
    <h1>{course.name}</h1>
  )
}

const Part = ({ name, exercises }) => {
  return (
    <p>{name} {exercises}</p>
  )
}

const Content = ({course}) => {
  return (
    course.parts.map(part => <Part key={part.id} name={part.name} exercises={part.exercises} />)
  )
}

const Total = ({course}) => {
  return (
    <p>Number of exercises {course.parts.reduce((acc, value) => acc + value.exercises, 0)}</p>
  )
}

// De la tarea 1.6 a 1.14
import { useState } from 'react'

const Button = ({counter, text}) => {
  return (
    <button onClick={counter}>{text}</button>
    
  )
}

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
    {
      id: 1,  
      name: 'Fundamentals of React',
      exercises: 10
    },
      {
      id: 2, 
      name: 'Using props to pass data',
      exercises: 7
    },
    {
      id: 3, 
      name: 'State of a component',
      exercises: 14
    }
  ] 
  }

  const [counter, setCounter] = useState({
    good: 0,
    neutral: 0,
    bad: 0
  })

  const handleGoodClick = () => setCounter({ ...counter, good: counter.good + 1 })
  const handleNeutralClick = () => setCounter({ ...counter, neutral: counter.neutral + 1 })
  const handleBadClick = () => setCounter({...counter, bad: counter.bad + 1})

  return (
    <div>
      <h1>De la tarea 1.1 a 1.5</h1>
      <Header course={course} />
      <Content course={course} />
      <Total course={course} />

      <h1>De la tarea 1.6 a 1.14</h1>
      <h2>Danos un comentario</h2>
      <Button counter={handleGoodClick} text='Good' />
      <Button counter={handleNeutralClick} text='Neutral' />
      <Button counter={handleBadClick} text='Bad' />
      <h2>Estadísticas</h2>
      <p>Good {counter.good} <br />Neutral {counter.neutral} <br />Bad {counter.bad}</p>
    </div>
  )
}

export default App