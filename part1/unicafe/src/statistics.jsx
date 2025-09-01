const Statistics = ({ good, neutral, bad }) => {
    if (good === 0 && neutral === 0 && bad === 0) {
      return (
        <div>
          <h1>Statistics</h1>
          <p>No feedback given</p>
        </div>
      )
    }
  
    return (
      <div>
        <h1>Statistics</h1>
        <table>
          <tbody>
            <tr>
              <td>Good</td>
              <td>{good}</td>
            </tr>
            <tr>
              <td>Neutral</td>
              <td>{neutral}</td>
            </tr>
            <tr>
              <td>Bad</td>
              <td>{bad}</td>
            </tr>
            <tr>
              <td>all</td>
              <td>{good + neutral + bad}</td>
            </tr>
            <tr>
              <td>average</td>
              <td>{(good - bad) / (good + neutral + bad)}</td>
            </tr>
            <tr>
              <td>positive</td>
              <td>{(good / (good + neutral + bad) * 100).toFixed(1)} %</td>
            </tr>
          </tbody>
        </table>
      </div>
    )
  }
  
  export default Statistics