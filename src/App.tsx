// src/App.tsx
import React, { useState } from 'react';
import Quiz from './Components/Quiz';
import './App.css';
import { Button } from '@mui/material';
const App: React.FC = () => {
  const [quizStarted, setQuizStarted] = useState(false);

  const startQuiz = () => {
    setQuizStarted(true);
  };

  return (
    <div id='root'>
      {!quizStarted ? (
        <div>
          <h1>Quiz App</h1>
          <Button variant="contained"  color="secondary"  onClick={startQuiz}>Start Quiz</Button>
        </div>
      ) : (
        <Quiz />
      )}
    </div>
  );
};

export default App;