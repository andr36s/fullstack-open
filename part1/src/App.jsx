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
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]
  
  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState(Array(anecdotes.length).fill(0));
  let maxVotesIndex = votes.indexOf(Math.max(...votes));

  const handleGoodClick = () => setCounter({ ...counter, good: counter.good + 1 })
  const handleNeutralClick = () => setCounter({ ...counter, neutral: counter.neutral + 1 })
  const handleBadClick = () => setCounter({...counter, bad: counter.bad + 1})
  const handleNextAnecdoteClick = () => {
    const randomIndex = Math.floor(Math.random() * anecdotes.length);
    setSelected(randomIndex);
  }
  const handleVoteClick = () => {
    const newVote = [...votes]
    newVote[selected] += 1;
    setVotes(newVote);
  }

  return (
    <div>
      <h1>De la tarea 1.1 a 1.5</h1>
      <Header course={course} />
      <Content course={course} />
      <Total course={course} />

      <h1>De la tarea 1.6 a 1.11</h1>
      <h2>Danos un comentario</h2>
      <Button onClick={handleGoodClick} text='Good' />
      <Button onClick={handleNeutralClick} text='Neutral' />
      <Button onClick={handleBadClick} text='Bad' />
      <History stadistics={stadistics} counter={counter} />

      <h1>De la tarea 1.12 a 1.14</h1>
      <p>{anecdotes[selected]}</p>
      <p>Has votado {votes[selected]} veces</p>
      <p>La anecdotas con mas votos es "{anecdotes[maxVotesIndex]}" con {votes[maxVotesIndex]}</p>
      <button onClick={handleVoteClick}>Votes</button>
      <button onClick={handleNextAnecdoteClick}>Siguiente anecdota</button>
    </div>
  )
}

export default App