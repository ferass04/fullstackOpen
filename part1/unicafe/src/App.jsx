import { useState } from 'react'

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)


  const goodIncrease = () => {
    console.log('clicked good')
    setGood(good + 1)
  }

  const neturalIncrease = () => {
    console.log('clicked netural')
    setNeutral(neutral + 1)
  }

  const badIncrease = () => {
    console.log('clicked bad')
    setBad(bad + 1)
  }

  return (
    <div>
      <h1>give feedback</h1>
      <button onClick={goodIncrease}>good</button>
      <button onClick={neturalIncrease}>netural</button>
      <button onClick={badIncrease}>bad</button>

      <h1>statistics</h1>
      <div>good {good}</div>
      <div>neutral {neutral}</div>
      <div>bad {bad}</div>
      <div>all {good+neutral+bad}</div>
      <div>average {(good-bad)/100}</div>
      <div>positive {good/(good+neutral+bad)/100} %</div>

    </div>
  )
}

export default App