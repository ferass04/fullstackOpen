const App = () => {
  const course = {
    name: 'Half stack application devlopment',
    parts: [
      {
        name: 'Fundamentals of React',
        execrises: 10
      },
      {
        name: 'Using props to pass data',
        execrises: 7
      },
      {
        name: 'State of component',
        execrises: 14
      }
    ]
  }

  const Header = ({name}) => {
    return (
      <h1>{name}</h1>
    )
  }

  const Content = ({ parts }) => {
    return (
      <div>
        <Part part={parts[0].name} execrises={parts[0].execrises} />
        <Part part={parts[1].name} execrises={parts[1].execrises} />
        <Part part={parts[2].name} execrises={parts[2].execrises} />
      </div>
    )
  }

  const Part = ({ part, execrises }) => {

    return (
      <p>{part} {execrises}</p>
    )
  }

  const Total = ({ parts }) => {
    return (
      <p>Number of execrises {parts[0].execrises + parts[1].execrises + parts[2].execrises}</p>
    )
  }

  return (
    <div>
      <Header course={course.name} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </div>
  )
}

export default App
