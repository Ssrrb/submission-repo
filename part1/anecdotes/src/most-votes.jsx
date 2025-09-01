/*
  MostVotes component: finds the anecdote with the most votes using
  a bubble-style sort (manual comparisons/swaps). Avoids built-ins
  to match the requested approach.
*/

const MostVotes = ({ anecdotes = [], votes = [] }) => {
  //Validates
  if (!anecdotes.length || !votes.length) return null
  //Create array from the votes
  const order = Array.from({ length: votes.length }, (_, i) => i)

  // Bubble sort descending by vote count
  for (let i = 0; i < order.length - 1; i++) {
    let swapped = false
    for (let j = 0; j < order.length - 1 - i; j++) {
      const a = order[j]
      const b = order[j + 1]
      if (votes[a] < votes[b]) {
        order[j] = b
        order[j + 1] = a
        swapped = true
      }
    }
    if (!swapped) break
  }

  const topIndex = order[0]

  return (
    <div>
      <h1>Anecdote with most votes</h1>
      <div>{anecdotes[topIndex]}</div>
      <div>has {votes[topIndex]} votes</div>
    </div>
  )
}

export default MostVotes
