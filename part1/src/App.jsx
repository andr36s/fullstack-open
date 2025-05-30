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

const History = ({counter, stadistics }) => {
  if (stadistics.total === 0) {
    return (
      <div>
        <p>Para interactuar con la aplicación da click en los botones</p>
      </div>
    )
  } else {
    return (
      <div>
        <table>
          <thead>
            <tr>
              <th><h2>Estadísticas</h2></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Good</td>
              <td>{counter.good}</td>
            </tr>
            <tr>
              <td>Neutral</td>
              <td>{counter.neutral}</td>
            </tr>
            <tr>
              <td>Bad</td>
              <td>{counter.bad}</td>
            </tr>
            <tr>
              <td>Total</td>
              <td>{stadistics.total}</td>
            </tr>
            <tr>
              <td>Promedio</td>
              <td>{stadistics.promedio}</td>
            </tr>
            <tr>
              <td>Positivas</td>
              <td>{stadistics.porcentajePositivo} %</td>
            </tr>
          </tbody>
        </table>
      </div>
    )
  }
}

const Button = ({onClick , text}) => {
  return (
    <button onClick={onClick }>{text}</button>
    
  )
}

// La peticion del ejercio 1.8 ya se encuentre bajo esta línea
const calculateStadistics = (counter) => {
  const total = counter.good + counter.neutral + counter.bad;
  const promedio = (counter.good - counter.bad) / total || 0;
  const porcentajePositivo = (counter.good / total) * 100 || 0;

  return {
    total,
    promedio,
    porcentajePositivo
  };
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

  const stadistics = calculateStadistics(counter)

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
      <Button onClick={handleGoodClick} text='Good' />
      <Button onClick={handleNeutralClick} text='Neutral' />
      <Button onClick={handleBadClick} text='Bad' />
      <History stadistics={stadistics} counter={counter} />
    </div>
  )
}

export default App