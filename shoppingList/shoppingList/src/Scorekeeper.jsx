import { useState } from "react";

export default function ScoreKeeper({ numPlayers = 3, target = 5 }) {
  const [scores, setScores] = useState(new Array(numPlayers).fill(0));
  const [hasWinner, setHasWinner] = useState(false);

  const incrementScore = (idx) => {
    if (hasWinner) return;

    setScores((prevScores) => {
      const newScores = prevScores.map((score, i) => {
        if (i === idx) return score + 1;
        return score;
      });

      if (newScores.some(score => score >= target)) {
        setHasWinner(true);
      }

      return newScores;
    });
  };

  const reset = () => {
    setScores(new Array(numPlayers).fill(0));
    setHasWinner(false);
  };

  return (
    <div>
      <h1>Score Keeper</h1>
      <ul>
        {scores.map((score, idx) => (
          <li key={idx}>
            Player {idx + 1}: {score}
            <button onClick={() => incrementScore(idx)}>+1</button>
            {score >= target && "WINNER!"}
          </li>
        ))}
      </ul>
      <button onClick={reset}>Reset</button>
    </div>
  );
}
