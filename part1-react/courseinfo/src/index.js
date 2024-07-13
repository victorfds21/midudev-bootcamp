import React from 'react'
import ReactDOM from 'react-dom'

/** Funciona igualmente y es mas corta
 const Header = ({course}) => <h1>{course}</h1>
 */
const Header = (props) =>{
  return <h1>{props.course}</h1>
}

// Funciona igualmente y es mas corta
 const Content = ({part,exercises}) => <p> {part} {exercises} </p>
 
// const Content = (props) => {
// return <p> {props.part} {props.exercises} </p>
// }

const Total = (props) => {
 return <p>{props.text} {props.total}</p>
}


const App = () => {
  
  return (
    <div>
      < Header course='Half Stack application development'/>
      < Content part = 'Fundamentals of React' exercises = '10'/>
      < Content part = 'Using props to pass data' exercises = '7'/>
      < Content part = 'State of a component' exercises = '14'/>
      < Total text = 'Number of exercises ' total = {10+7+14}/>
     
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))