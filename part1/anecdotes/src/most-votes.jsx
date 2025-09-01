/*
  MostVotes component: finds the anecdote with the most votes using
  a bubble-style sort (manual comparisons/swaps). Avoids built-ins
  to match the requested approach.
*/

const MostVotes = ({ anecdotes = [], votes = [] }) => {
  //Validates
  if (!anecdotes.length || !votes.length) return null
  //Start at the beginning
  let topIndex = 0
  for (let i = 1; i < votes.length; i++) {
    if (votes[i] > votes[topIndex]) {
      topIndex = i
    }
  }

  return (
    <div>
      <h1>Anecdote with most votes</h1>
      <div>{anecdotes[topIndex]}</div>
      <div>has {votes[topIndex]} votes</div>
    </div>
  )
}

export default MostVotes
