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
          
            <img src="/aa.png" alt="Quizy" className="responsive-image"/>
            

           <h4>Welcome to the Quiz app, where learning meets excitement! <br/> Get ready to challenge your intellect and have fun along the way.</h4>
           
              <Button variant="contained" color="secondary" onClick={startQuiz}>Start Quiz</Button>
            
        </div>
      ) : (
        <Quiz />
      )}
    </div>
  );
};

export default App;
