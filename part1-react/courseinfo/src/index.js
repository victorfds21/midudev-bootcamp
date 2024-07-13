import React from 'react'
import ReactDOM from 'react-dom'

/** Funciona igualmente y es mas corta
 const Title = ({course}) => <h1>{course}</h1>
 */
const Title = (props) =>{
  return <h1>{props.course}</h1>
}

// Funciona igualmente y es mas corta
 const Parraf = ({part,exercises}) => <p> {part} {exercises} </p>
 
// const Parraf = (props) => {
// return <p> {props.part} {props.exercises} </p>
// }


const App = () => {
  
  return (
    <div>
      < Title course='Half Stack application development'/>
      < Parraf part = 'Fundamentals of React' exercises = '10'/>
      < Parraf part = 'Using props to pass data' exercises = '7'/>
      < Parraf part = 'State of a component' exercises = '14'/>
      < Parraf part = 'Number of exercises ' exercises = {10+7+14}/>
     
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))