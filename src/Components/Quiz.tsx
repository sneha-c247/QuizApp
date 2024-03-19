
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useQuery, useQueryClient } from 'react-query'; // Import useQueryClient from react-query
import { Button, CircularProgress, Typography, Select, MenuItem, Card, CardContent } from '@mui/material';
import { AccessTime } from '@mui/icons-material';
import { SelectChangeEvent } from '@mui/material/Select';
import styles from './Quiz.module.css'; 

const fetchQuestions = async (category: string) => {
  const api= import.meta.env.VITE_REACT_APP_API_URL
  const response = await axios.get(`${api}&category=${category}`);
  return response.data.results;
};

const Quiz: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [timer, setTimer] = useState(10);
  const [quizCompleted, setQuizCompleted] = useState(false);

  const queryClient = useQueryClient(); // Move useQueryClient hook inside the component

  const { data: questions = [], isError, isLoading, refetch } = useQuery(['questions', selectedCategory], () =>
    fetchQuestions(selectedCategory || ''),
    {
      enabled: selectedCategory !== null,
    }
  );

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTimer((prevTimer) => (prevTimer > 0 ? prevTimer - 1 : 0));
    }, 1000);
    if (timer === 0) {
      handleAnswer('');
    }

    return () => clearInterval(intervalId);

  }, [timer]);

  useEffect(() => {
    if (selectedCategory !== null && currentQuestion === 0) {
      startQuiz();
    }
  }, [currentQuestion, selectedCategory]);


  const startQuiz = () => {
    setScore(0);
    setCurrentQuestion(0);
    setQuizCompleted(false);
    setTimer(10);
  };

  const handleAnswer = (answer: string) => {
    if (currentQuestion >= questions.length || quizCompleted) {
      return;
    }

    if (answer === questions[currentQuestion]?.correct_answer) {
      setScore(score + 1);
    }

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setQuizCompleted(true);
    }

    setTimer(10);
  };

  const handleCategoryChange = (event: SelectChangeEvent<string>) => {
    setSelectedCategory(event.target.value);
    queryClient.invalidateQueries(['questions', event.target.value]); // Invalidate the query when category changes
  };

  const restartQuiz = () => {
    startQuiz();
    refetch(); // Refetch questions
  };

  return (
    <div>
      {isLoading ? (
        <CircularProgress />
      ) : (
        <Card className={styles.customClass}> 
          <CardContent>
            {!selectedCategory ? (
              <div>
                <br /><h3 className={styles.customTypographySelect}>Select Category:</h3>
                <Select value={selectedCategory || ''} onChange={handleCategoryChange} style={{ width: '100%' }}
                  MenuProps={{ PaperProps: { style: { zIndex: 10 } } }}>
                  <MenuItem value="9">General Knowledge</MenuItem>
                  <MenuItem value="19">Mathematics</MenuItem>
                  <MenuItem value="18">Computer</MenuItem>
                  <MenuItem value="21">Sports</MenuItem>
                  <MenuItem value="17">Science & Nature</MenuItem>
                  {/* Add more categories as needed */}
                </Select>
              </div>
            ) : isError ? (
              <Typography>Error fetching questions</Typography>
            ) : (
              <div>
                {!quizCompleted ? (
                  <div>
                    <div className={styles.flexContainer}>
                    <AccessTime className={styles.autoMargin} />{/* Clock Icon with Animation */}
                      <p className={styles.timerText}> {timer} sec</p>
                    </div><br />
                    
                    <h2 className={styles.heading}>Question {currentQuestion + 1}</h2>
                    <p className={styles.questiontext}>{questions[currentQuestion]?.question}</p>
                     
                    <div>
                      {questions[currentQuestion]?.incorrect_answers.map((answer: any, index: any) => (
                        <button
                          key={index} 
                          color="primary" 
                          onClick={() => handleAnswer(answer)} 
                          className={styles.btn}
                        >
                          {answer}
                        </button>
                      ))}
                      <button
                        className={styles.btn}
                        onClick={() => handleAnswer(questions[currentQuestion]?.correct_answer)}
                      >
                        {questions[currentQuestion]?.correct_answer}
                      </button>
                    </div>
                  </div>
                ) : (
                  <div>
                    <h2 className={styles.customMargin }>Quiz Completed</h2><hr/>
                 <h4 className={styles.showScore}>Your Score: {score}/{questions.length}</h4><hr/><br/>
               <Button variant="contained" color="inherit" onClick={() => restartQuiz()} >
                Restart Quiz
                </Button>
             </div>
                )}
              </div>
            )}
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default Quiz;
