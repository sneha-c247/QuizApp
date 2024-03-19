import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useQuery, useQueryClient } from 'react-query';
import { Button, CircularProgress, Typography, Select, MenuItem, Card, CardContent } from '@mui/material';
import { AccessTime } from '@mui/icons-material';
import { SelectChangeEvent } from '@mui/material/Select';
import styles from './Quiz.module.css'; 

const categoryNames: { [key: string]: string } = {
  "9": "General Knowledge",
  "19": "Mathematics",
  "18": "Computer",
  "21": "Sports",
  "17": "Science & Nature",
  // Add more categories as needed
};

const fetchQuestions = async (category: string) => {
  const api = import.meta.env.VITE_REACT_APP_API_URL;
  const response = await axios.get(`${api}&category=${category}`);
  return response.data.results;
};

const Quiz: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [incorrectscore, incorrectsetScore] = useState(0);
  const [timer, setTimer] = useState(10);
  const [quizCompleted, setQuizCompleted] = useState(false);

  const queryClient = useQueryClient();

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
    if (timer === 0 && !quizCompleted) {
      handleAnswer('');
    }

    return () => clearInterval(intervalId);
  }, [timer, quizCompleted]);

  useEffect(() => {
    if (selectedCategory !== null && currentQuestion === 0) {
      startQuiz();
    }
  }, [currentQuestion, selectedCategory]);

  const startQuiz = () => {
    setScore(0);
    incorrectsetScore(0);
    setCurrentQuestion(0);
    setQuizCompleted(false);
    setTimer(10);
  };

  
  const handleSkip = () => {
    if (currentQuestion < questions.length - 1 && !quizCompleted) {
      setCurrentQuestion(currentQuestion + 1);
      setTimer(10); // Reset the timer when skipping a question
      incorrectsetScore(incorrectscore + 1); // Increment incorrect score
    } else if (currentQuestion === 9) {
      setQuizCompleted(true);
    }
  
    if (questions[currentQuestion]?.correct_answer === '') {
      setScore(score + 1); // Increment score if the correct answer is skipped
    }else{
      incorrectsetScore(incorrectscore + 1);
    }
  };
  
  
  const handleAnswer = (answer: string) => {
    if (currentQuestion >= questions.length || quizCompleted) {
      return;
    }
  
    if (answer === questions[currentQuestion]?.correct_answer) {
      setScore(score + 1);
    } else if (answer === '') { // Check if the answer is empty (indicating a skip)
      handleSkip();
      return;
    } else {
      incorrectsetScore(incorrectscore + 1);
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
    queryClient.invalidateQueries(['questions', event.target.value]);
  };

  const restartQuiz = () => {
    setSelectedCategory(null);
    startQuiz();
    refetch();
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
                <Select
                  value={selectedCategory || ''}
                  onChange={handleCategoryChange}
                  style={{ width: '100%', background: 'white', color: selectedCategory ? 'inherit' : '#aaa' }}
                  MenuProps={{ PaperProps: { style: { zIndex: 10 } } }}
                  displayEmpty
                  inputProps={{ 'aria-label': 'Select category' }}
                >
                  <MenuItem value="" disabled>Select a category</MenuItem>
                  <MenuItem value="9">General Knowledge</MenuItem>
                  <MenuItem value="19">Mathematics</MenuItem>
                  <MenuItem value="18">Computer</MenuItem>
                  <MenuItem value="21">Sports</MenuItem>
                  <MenuItem value="17">Science & Nature</MenuItem>
                </Select>
              </div>
            ) : isError ? (
              <Typography>Error fetching questions</Typography>
            ) : (
              <div>
                {!quizCompleted ? (
                  <div>
                    <div className={styles.flexContainer}>
                      <AccessTime className={styles.autoMargin} />
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
                    </div><br/>

                    {/* Skip button */}
                   < button onClick={handleSkip} className={styles.button3}>Skip</button>
                  </div>
                ) : (
                  <div>
                    <h2 className={styles.customMargin }>Congratulations on completing the {categoryNames[selectedCategory]} quiz!</h2><br/><hr/>
                    <h4 className={styles.showScore}>Your Score: {score}/{questions.length}</h4>
                    <h4 className={styles.showScore}>Correct Answer: {score}/{questions.length}</h4>
                    <h4 className={styles.showScore}>Incorrect Answer: {incorrectscore}/{questions.length}</h4><hr/><br/>
                    <Button variant="contained" color="inherit" onClick={restartQuiz}>
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
