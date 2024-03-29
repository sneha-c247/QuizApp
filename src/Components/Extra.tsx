



// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { useQuery } from 'react-query';
// import { Button, CircularProgress, Typography, Select, MenuItem } from '@mui/material';
// import { SelectChangeEvent } from '@mui/material/Select';

// const fetchQuestions = async (category: string) => {
//   const response = await axios.get(`https://opentdb.com/api.php?amount=5&type=multiple&category=${category}`);
//   return response.data.results;
// };

// const Quiz: React.FC = () => {
//   const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
//   const { data: questions = [], isError, isLoading, refetch } = useQuery(['questions', selectedCategory], () =>
//     fetchQuestions(selectedCategory || ''),
//     {
//       enabled: selectedCategory !== null,
//     }
//   );

//   const [currentQuestion, setCurrentQuestion] = useState(0);
//   const [score, setScore] = useState(0);
//   const [timer, setTimer] = useState(10);

//   useEffect(() => {
//     const intervalId = setInterval(() => {
//       setTimer((prevTimer) => (prevTimer > 0 ? prevTimer - 1 : 0));
//     }, 1000);

//     return () => clearInterval(intervalId);
//   }, [timer]);

//   useEffect(() => {
//     if (selectedCategory !== null && currentQuestion === 0) {
//       startQuiz();
//     }
//   }, [currentQuestion, selectedCategory]);

//   useEffect(() => {
//     if (selectedCategory !== null) {
//       refetch();
//     }
//   }, [selectedCategory, refetch]);

//   useEffect(() => {
//     if (timer === 0) {
//       handleAnswer('');
//     }
//   }, [timer]);

//   const startQuiz = () => {
//     setTimer(10);
//   };

//   const handleAnswer = (answer: string) => {
//     if (currentQuestion >= questions.length) {
//       return;
//     }

//     if (answer === questions[currentQuestion]?.correct_answer) {
//       setScore(score + 1);
//     }

//     if (currentQuestion < questions.length - 1) {
//       setCurrentQuestion(currentQuestion + 1);
//     } else {
//       alert(`Quiz Completed! Your Score: ${score}/${questions.length}`);
//     }

//     setTimer(10);
//   };

//   const handleCategoryChange = (event: SelectChangeEvent<string>) => {
//     setSelectedCategory(event.target.value);
//   };

//   if (!selectedCategory) {
//     return (
//       <div>
//         <Typography>Select Category:</Typography>
//         <Select value={selectedCategory || ''} onChange={handleCategoryChange}>
//           <MenuItem value="9">General Knowledge</MenuItem>
//           <MenuItem value="17">Science & Nature</MenuItem>
//           {/* Add more categories as needed */}
//         </Select>
//       </div>
//     );
//   }

//   if (isLoading) {
//     return <CircularProgress />;
//   }

//   if (isError) {
//     return <Typography>Error fetching questions</Typography>;
//   }

//   return (
//     <div>
//       <Typography variant="h4">Question {currentQuestion + 1}</Typography>
//       <Typography variant="body1">{questions[currentQuestion]?.question}</Typography>
//       <Typography variant="body2">Time Remaining: {timer} seconds</Typography>
//       <div>
//         {questions[currentQuestion]?.incorrect_answers.map((answer: any, index: any) => (
//           <Button key={index} variant="contained" color="primary" onClick={() => handleAnswer(answer)}>
//             {answer}
//           </Button>
//         ))}
//         <Button
//           variant="contained"
//           color="primary"
//           onClick={() => handleAnswer(questions[currentQuestion]?.correct_answer)}
//         >
//           {questions[currentQuestion]?.correct_answer}
//         </Button>
//       </div>
//     </div>
//   );
// };

// export default Quiz;

// Basic one above

// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { useQuery } from 'react-query';
// import { Button, CircularProgress, Typography, Select, MenuItem, Card, CardContent } from '@mui/material';
// import { SelectChangeEvent } from '@mui/material/Select';

// const fetchQuestions = async (category: string) => {
//   const response = await axios.get(`https://opentdb.com/api.php?amount=5&type=multiple&category=${category}`);
//   return response.data.results;
// };

// const Quiz: React.FC = () => {
//   const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
//   const { data: questions = [], isError, isLoading, refetch } = useQuery(['questions', selectedCategory], () =>
//     fetchQuestions(selectedCategory || ''),
//     {
//       enabled: selectedCategory !== null,
//     }
//   );

//   const [currentQuestion, setCurrentQuestion] = useState(0);
//   const [score, setScore] = useState(0);
//   const [timer, setTimer] = useState(10);
//   const [quizCompleted, setQuizCompleted] = useState(false);

//   useEffect(() => {
//     const intervalId = setInterval(() => {
//       setTimer((prevTimer) => (prevTimer > 0 ? prevTimer - 1 : 0));
//     }, 1000);

//     return () => clearInterval(intervalId);
//   }, [timer]);

//   useEffect(() => {
//     if (selectedCategory !== null && currentQuestion === 0) {
//       startQuiz();
//     }
//   }, [currentQuestion, selectedCategory]);

//   useEffect(() => {
//     if (selectedCategory !== null) {
//       refetch();
//     }
//   }, [selectedCategory, refetch]);

//   useEffect(() => {
//     if (timer === 0) {
//       handleAnswer('');
//     }
//   }, [timer]);

//   const startQuiz = () => {
//     setTimer(10);
//   };

//   const handleAnswer = (answer: string) => {
//     if (currentQuestion >= questions.length || quizCompleted) {
//       return;
//     }

//     if (answer === questions[currentQuestion]?.correct_answer) {
//       setScore(score + 1);
//     }

//     if (currentQuestion < questions.length - 1) {
//       setCurrentQuestion(currentQuestion + 1);
//     } else {
//       setQuizCompleted(true);
//     }

//     setTimer(10);
//   };

//   const handleCategoryChange = (event: SelectChangeEvent<string>) => {
//     setSelectedCategory(event.target.value);
//   };

//   if (!selectedCategory) {
//     return (
//       <div>
//         <Typography>Select Category:</Typography>
//         <Select value={selectedCategory || ''} onChange={handleCategoryChange}>
//           <MenuItem value="9">General Knowledge</MenuItem>
//           <MenuItem value="17">Science & Nature</MenuItem>
//           {/* Add more categories as needed */}
//         </Select>
//       </div>
//     );
//   }

//   if (isLoading) {
//     return <CircularProgress />;
//   }

//   if (isError) {
//     return <Typography>Error fetching questions</Typography>;
//   }

//   return (
//     <div>
//       {!quizCompleted ? (
//         <div>
//           <Typography variant="h4">Question {currentQuestion + 1}</Typography>
//           <Typography variant="body1">{questions[currentQuestion]?.question}</Typography>
//           <Typography variant="body2">Time Remaining: {timer} seconds</Typography>
//           <div>
//             {questions[currentQuestion]?.incorrect_answers.map((answer: any, index: any) => (
//               <Button key={index} variant="contained" color="primary" onClick={() => handleAnswer(answer)}>
//                 {answer}
//               </Button>
//             ))}
//             <Button
//               variant="contained"
//               color="primary"
//               onClick={() => handleAnswer(questions[currentQuestion]?.correct_answer)}
//             >
//               {questions[currentQuestion]?.correct_answer}
//             </Button>
//           </div>
//         </div>
//       ) : (
//         <Card>
//           <CardContent>
//             <Typography variant="h5">Quiz Completed!</Typography>
//             <Typography>Your Score: {score}/{questions.length}</Typography>
//           </CardContent>
//         </Card>
//       )}
//     </div>
//   );
// };

// export default Quiz;
// no Restart func above
//Restart functionality
// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { useQuery } from 'react-query';
// import { Button, CircularProgress, Typography, Select, MenuItem, Card, CardContent } from '@mui/material';
// import { SelectChangeEvent } from '@mui/material/Select';

// const fetchQuestions = async (category: string) => {
//   const response = await axios.get(`https://opentdb.com/api.php?amount=5&type=multiple&category=${category}`);
//   return response.data.results;
// };

// const Quiz: React.FC = () => {
//   const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
//   const { data: questions = [], isError, isLoading, refetch } = useQuery(['questions', selectedCategory], () =>
//     fetchQuestions(selectedCategory || ''),
//     {
//       enabled: selectedCategory !== null,
//     }
//   );

//   const [currentQuestion, setCurrentQuestion] = useState(0);
//   const [score, setScore] = useState(0);
//   const [timer, setTimer] = useState(10);
//   const [quizCompleted, setQuizCompleted] = useState(false);

//   useEffect(() => {
//     const intervalId = setInterval(() => {
//       setTimer((prevTimer) => (prevTimer > 0 ? prevTimer - 1 : 0));
//     }, 1000);

//     return () => clearInterval(intervalId);
//   }, [timer]);

//   useEffect(() => {
//     if (selectedCategory !== null && currentQuestion === 0) {
//       startQuiz();
//     }
//   }, [currentQuestion, selectedCategory]);

//   useEffect(() => {
//     if (selectedCategory !== null) {
//       refetch();
//     }
//   }, [selectedCategory, refetch]);

//   useEffect(() => {
//     if (timer === 0) {
//       handleAnswer('');
//     }
//   }, [timer]);

//   const startQuiz = () => {
//     setTimer(10);
//   };

//   const handleAnswer = (answer: string) => {
//     if (currentQuestion >= questions.length || quizCompleted) {
//       return;
//     }

//     if (answer === questions[currentQuestion]?.correct_answer) {
//       setScore(score + 1);
//     }

//     if (currentQuestion < questions.length - 1) {
//       setCurrentQuestion(currentQuestion + 1);
//     } else {
//       setQuizCompleted(true);
//     }

//     setTimer(10);
//   };

//   const handleCategoryChange = (event: SelectChangeEvent<string>) => {
//     setSelectedCategory(event.target.value);
//   };

//   const restartQuiz = () => {
//     setQuizCompleted(false);
//     setCurrentQuestion(0);
//     setScore(0);
//     startQuiz();
//   };

//   if (!selectedCategory) {
//     return (
//       <div>
//         <Typography style={{ fontSize: '18px', marginBottom: '8px' }}>Select Category:</Typography>
//         <Select value={selectedCategory || ''} onChange={handleCategoryChange} style={{ width: 300 }}>
//           <MenuItem value="9">General Knowledge</MenuItem>
//           <MenuItem value="17">Science & Nature</MenuItem>
//           {/* Add more categories as needed */}
//         </Select>
//       </div>
//     );
//   }

//   if (isLoading) {
//     return <CircularProgress />;
//   }

//   if (isError) {
//     return <Typography>Error fetching questions</Typography>;
//   }

//   return (
//     <div>
//       {!quizCompleted ? (
//         <div>
//           <Typography variant="h4">Question {currentQuestion + 1}</Typography><br/>
//           <Typography variant="body1">{questions[currentQuestion]?.question}</Typography><br/>
//           <Typography variant="body2">Time Remaining: {timer} seconds</Typography><br/>
//           <div>
//   {questions[currentQuestion]?.incorrect_answers.map((answer: any, index: any) => (
//     <Button key={index} variant="contained" color="primary" onClick={() => handleAnswer(answer)} style={{ margin: '8px' }}>
//       {answer}
//     </Button>
//   ))}
//   <Button
//     variant="contained"
//     color="primary"
//     onClick={() => handleAnswer(questions[currentQuestion]?.correct_answer)}
//     style={{ margin: '8px' }}
//   >
//     {questions[currentQuestion]?.correct_answer}
//   </Button>
// </div>

//         </div>
//       ) : (
//         <Card>
//           <CardContent>
//             <Typography variant="h5">Quiz Completed!</Typography><br/><hr/>
//             <Typography>Your Score: {score}/{questions.length}</Typography><hr/><br/>
//             <Button variant="contained" color="inherit" onClick={() => restartQuiz()}>
//               Restart Quiz
//             </Button>
//           </CardContent>
//         </Card>
//       )}
//     </div>
//   );
// };

// export default Quiz;




// User
// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { useQuery } from 'react-query';
// import { Button, CircularProgress, Typography, Select, MenuItem, Card, CardContent } from '@mui/material';
// import { SelectChangeEvent } from '@mui/material/Select';

// const fetchQuestions = async (category: string) => {
//   const response = await axios.get(`https://opentdb.com/api.php?amount=5&type=multiple&category=${category}`);
//   return response.data.results;
// };

// const Quiz: React.FC = () => {
//   const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
//   const { data: questions = [], isError, isLoading, refetch } = useQuery(['questions', selectedCategory], () =>
//     fetchQuestions(selectedCategory || ''),
//     {
//       enabled: selectedCategory !== null,
//     }
//   );

//   const [currentQuestion, setCurrentQuestion] = useState(0);
//   const [score, setScore] = useState(0);
//   const [timer, setTimer] = useState(10);
//   const [quizCompleted, setQuizCompleted] = useState(false);

//   useEffect(() => {
//     const intervalId = setInterval(() => {
//       setTimer((prevTimer) => (prevTimer > 0 ? prevTimer - 1 : 0));
//     }, 1000);

//     return () => clearInterval(intervalId);
//   }, [timer]);

//   useEffect(() => {
//     if (selectedCategory !== null && currentQuestion === 0) {
//       startQuiz();
//     }
//   }, [currentQuestion, selectedCategory]);

//   useEffect(() => {
//     if (selectedCategory !== null) {
//       refetch();
//     }
//   }, [selectedCategory, refetch]);

//   useEffect(() => {
//     if (timer === 0) {
//       handleAnswer('');
//     }
//   }, [timer]);

//   const startQuiz = () => {
//     setTimer(10);
//   };

//   const handleAnswer = (answer: string) => {
//     if (currentQuestion >= questions.length || quizCompleted) {
//       return;
//     }

//     if (answer === questions[currentQuestion]?.correct_answer) {
//       setScore(score + 1);
//     }

//     if (currentQuestion < questions.length - 1) {
//       setCurrentQuestion(currentQuestion + 1);
//     } else {
//       setQuizCompleted(true);
//     }

//     setTimer(10);
//   };

//   const handleCategoryChange = (event: SelectChangeEvent<string>) => {
//     setSelectedCategory(event.target.value);
//   };

//   const restartQuiz = () => {
//     setQuizCompleted(false);
//     setCurrentQuestion(0);
//     setScore(0);
//     startQuiz();
//   };

//   if (!selectedCategory) {
//     return (
//       <div>
//         <Typography style={{ fontSize: '18px', marginBottom: '8px' }}>Select Category:</Typography>
//         <Select value={selectedCategory || ''} onChange={handleCategoryChange} style={{ width: 300 }}>
//           <MenuItem value="9">General Knowledge</MenuItem>
//           <MenuItem value="17">Science & Nature</MenuItem>
//           {/* Add more categories as needed */}
//         </Select>
//       </div>
//     );
//   }

//   if (isLoading) {
//     return <CircularProgress />;
//   }

//   if (isError) {
//     return <Typography>Error fetching questions</Typography>;
//   }

//   return (
//     <div>
//       {!quizCompleted ? (
//         <div>
//           <Typography variant="h4">Question {currentQuestion + 1}</Typography><br/>
//           <Typography variant="body1">{questions[currentQuestion]?.question}</Typography><br/>
//           <Typography variant="body2">Time Remaining: {timer} seconds</Typography><br/>
//           <div>
//   {questions[currentQuestion]?.incorrect_answers.map((answer: any, index: any) => (
//     <Button key={index} variant="contained" color="primary" onClick={() => handleAnswer(answer)} style={{ margin: '8px' }}>
//       {answer}
//     </Button>
//   ))}
//   <Button
//     variant="contained"
//     color="primary"
//     onClick={() => handleAnswer(questions[currentQuestion]?.correct_answer)}
//     style={{ margin: '8px' }}
//   >
//     {questions[currentQuestion]?.correct_answer}
//   </Button>
// </div>

//         </div>
//       ) : (
//         <Card>
//           <CardContent>
//             <Typography variant="h5">Quiz Completed!</Typography><br/><hr/>
//             <Typography>Your Score: {score}/{questions.length}</Typography><hr/><br/>
//             <Button variant="contained" color="inherit" onClick={() => restartQuiz()}>
//               Restart Quiz
//             </Button>
//           </CardContent>
//         </Card>
//       )}
//     </div>
//   );
// };

//export default Quiz;


// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { useQuery } from 'react-query';
// import { Button, CircularProgress, Typography, Select, MenuItem, Card, CardContent } from '@mui/material';
// import { SelectChangeEvent } from '@mui/material/Select';

// const fetchQuestions = async (category: string) => {
//   const response = await axios.get(`https://opentdb.com/api.php?amount=5&type=multiple&category=${category}`);
//   return response.data.results;
// };

// const Quiz: React.FC = () => {
//   const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
//   const { data: questions = [], isError, isLoading, refetch } = useQuery(['questions', selectedCategory], () =>
//     fetchQuestions(selectedCategory || ''),
//     {
//       enabled: selectedCategory !== null,
//     }
//   );

//   const [currentQuestion, setCurrentQuestion] = useState(0);
//   const [score, setScore] = useState(0);
//   const [timer, setTimer] = useState(10);
//   const [quizCompleted, setQuizCompleted] = useState(false);

//   useEffect(() => {
//     const intervalId = setInterval(() => {
//       setTimer((prevTimer) => (prevTimer > 0 ? prevTimer - 1 : 0));
//     }, 1000);

//     return () => clearInterval(intervalId);
//   }, [timer]);

//   useEffect(() => {
//     if (selectedCategory !== null && currentQuestion === 0) {
//       startQuiz();
//     }
//   }, [currentQuestion, selectedCategory]);

//   useEffect(() => {
//     if (selectedCategory !== null) {
//       refetch();
//     }
//   }, [selectedCategory, refetch]);

//   useEffect(() => {
//     if (timer === 0) {
//       handleAnswer('');
//     }
//   }, [timer]);

//   const startQuiz = () => {
//     setTimer(10);
//   };

//   const handleAnswer = (answer: string) => {
//     if (currentQuestion >= questions.length || quizCompleted) {
//       return;
//     }

//     if (answer === questions[currentQuestion]?.correct_answer) {
//       setScore(score + 1);
//     }

//     if (currentQuestion < questions.length - 1) {
//       setCurrentQuestion(currentQuestion + 1);
//     } else {
//       setQuizCompleted(true);
//     }

//     setTimer(10);
//   };

//   const handleCategoryChange = (event: SelectChangeEvent<string>) => {
//     setSelectedCategory(event.target.value);
//   };

//   const restartQuiz = () => {
//     setQuizCompleted(false);
//     setCurrentQuestion(0);
//     setScore(0);
//     startQuiz();
//   };

//   return (
//      <Card style={{ width: '80%', maxWidth: '550px', height: '80vh', backgroundColor: 'blue', color: 'white', margin: '20px auto' }}>
//       <CardContent>
//         {!selectedCategory ? (
//           <div>
//           <br/>  <Typography style={{ fontSize: '18px', marginBottom: '8px',marginLeft:'100px',marginRight:'100px' }}>Select Category:</Typography>
//             <Select value={selectedCategory || ''} onChange={handleCategoryChange} style={{ width: '100%' }}
//               MenuProps={{ PaperProps: { style: { zIndex: 10 } } }}>
//               <MenuItem value="9">General Knowledge</MenuItem>
//               <MenuItem value="17">Science & Nature</MenuItem>
//               {/* Add more categories as needed */}
//             </Select>
//           </div>
//         ) : isLoading ? (
//           <CircularProgress />
//         ) : isError ? (
//           <Typography>Error fetching questions</Typography>
//         ) : (
//           <div>
//             {!quizCompleted ? (
//               <div>
//                 <Typography variant="h4" style={{marginTop:'5px'}}>Question {currentQuestion + 1}</Typography><br/>
//                 <Typography variant="body1">{questions[currentQuestion]?.question}</Typography><br/>
//                 <Typography variant="body2">Time Remaining: {timer} seconds</Typography><br/>
//                 <div>
//                   {questions[currentQuestion]?.incorrect_answers.map((answer: any, index: any) => (
//                     <Button key={index} variant="contained" color="primary" onClick={() => handleAnswer(answer)} style={{ margin: '8px' }}>
//                       {answer}
//                     </Button>
//                   ))}
//                   <Button
//                     variant="contained"
//                     color="primary"
//                     onClick={() => handleAnswer(questions[currentQuestion]?.correct_answer)}
//                     style={{ margin: '8px' }}
//                   >
//                     {questions[currentQuestion]?.correct_answer}
//                   </Button>
//                 </div>
//               </div>
//             ) : (
//               <div>
//                 <Typography variant="h5" style={{  marginBottom: '8px',marginLeft:'100px',marginRight:'100px' ,marginTop:'60px'}}>Quiz Completed!</Typography><br/><hr/>
//                 <Typography>Your Score: {score}/{questions.length}</Typography><hr/><br/>
//                 <Button variant="contained" color="inherit" onClick={() => restartQuiz()} style={{ color: 'black' }}>
//                   Restart Quiz
//                 </Button>
//               </div>
//             )}
//           </div>
//         )}
//       </CardContent>
//     </Card>
//   );
// };

// export default Quiz;



// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { useQuery } from 'react-query';
// import { Button, CircularProgress, Typography, Select, MenuItem, Card, CardContent } from '@mui/material';
// import { AccessTime } from '@mui/icons-material';
// import { SelectChangeEvent } from '@mui/material/Select';
// import './Quiz.css';

// const fetchQuestions = async (category: string) => {
//   const response = await axios.get(`https://opentdb.com/api.php?amount=10&type=multiple&category=${category}`);
//   return response.data.results;
// };

// const Quiz: React.FC = () => {
//   const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
//   const { data: questions = [], isError, isLoading, refetch } = useQuery(['questions', selectedCategory], () =>
//     fetchQuestions(selectedCategory || ''),
//     {
//       enabled: selectedCategory !== null,
//     }
//   );

//   const [currentQuestion, setCurrentQuestion] = useState(0);
//   const [score, setScore] = useState(0);
//   const [timer, setTimer] = useState(10);
//   const [quizCompleted, setQuizCompleted] = useState(false);

//   useEffect(() => {
//     const intervalId = setInterval(() => {
//       setTimer((prevTimer) => (prevTimer > 0 ? prevTimer - 1 : 0));
//     }, 1000);

//     return () => clearInterval(intervalId);
//   }, [timer]);

//   useEffect(() => {
//     if (selectedCategory !== null && currentQuestion === 0) {
//       startQuiz();
//     }
//   }, [currentQuestion, selectedCategory]);

//   useEffect(() => {
//     if (selectedCategory !== null) {
//       refetch();
//     }
//   }, [selectedCategory, refetch]);

//   useEffect(() => {
//     if (timer === 0) {
//       handleAnswer('');
//     }
//   }, [timer]);

//   const startQuiz = () => {
//     setTimer(10);
//   };

//   const handleAnswer = (answer: string) => {
//     if (currentQuestion >= questions.length || quizCompleted) {
//       return;
//     }

//     if (answer === questions[currentQuestion]?.correct_answer) {
//       setScore(score + 1);
//     }

//     if (currentQuestion < questions.length - 1) {
//       setCurrentQuestion(currentQuestion + 1);
//     } else {
//       setQuizCompleted(true);
//     }

//     setTimer(10);
//   };

//   const handleCategoryChange = (event: SelectChangeEvent<string>) => {
//     setSelectedCategory(event.target.value);
//   };

//   const restartQuiz = () => {
//     setQuizCompleted(false);
//     setCurrentQuestion(0);
//     setScore(0);
//     startQuiz();
//   };

//   return (
//     <Card style={{ width: '80%', maxWidth: '550px', height: '80vh', backgroundColor: 'blue', color: 'white', margin: '20px auto' }}>
//       <CardContent>
//         {!selectedCategory ? (
//           <div>
//             <br/><Typography style={{ fontSize: '18px', marginBottom: '8px', marginLeft: '100px', marginRight: '100px' }}>Select Category:</Typography>
//             <Select value={selectedCategory || ''} onChange={handleCategoryChange} style={{ width: '100%' }}
//               MenuProps={{ PaperProps: { style: { zIndex: 10 } } }}>
//               <MenuItem value="9">General Knowledge</MenuItem>
//               <MenuItem value="19">Mathematics</MenuItem>
//               <MenuItem value="18">Computer</MenuItem>
//               <MenuItem value="21">Sports</MenuItem>
//               <MenuItem value="17">Science & Nature</MenuItem>
//               {/* Add more categories as needed */}
//             </Select>
//           </div>
//         ) : isLoading ? (
//           <CircularProgress />
//         ) : isError ? (
//           <Typography>Error fetching questions</Typography>
//         ) : (
//           <div>
//             {!quizCompleted ? (
//               <div>
//                 <div style={{ display: 'flex', alignItems: 'center' }}>
//                 <AccessTime style={{ marginLeft: "auto", animation: 'pulse 1s infinite' }} />  {/* Clock Icon with Animation */}
//                  <Typography variant="body2" style={{marginLeft:"10px"}}> {timer} seconds</Typography>
//                 </div><br/>
//                 <Typography variant="h4" style={{ marginTop: '5px' }}>Question {currentQuestion + 1}</Typography><br/>
//                 <Typography variant="body1">{questions[currentQuestion]?.question}</Typography><br/>
                
//                 <div>
//                   {questions[currentQuestion]?.incorrect_answers.map((answer: any, index: any) => (
//                     <Button key={index} variant="contained" color="primary" onClick={() => handleAnswer(answer)} style={{ margin: '8px' }}>
//                       {answer}
//                     </Button>
//                   ))}
//                   <Button
//                     variant="contained"
//                     color="primary"
//                     onClick={() => handleAnswer(questions[currentQuestion]?.correct_answer)}
//                     style={{ margin: '8px' }}
//                   >
//                     {questions[currentQuestion]?.correct_answer}
//                   </Button>
//                 </div>
//               </div>
//             ) : (
//               <div>
//                 <Typography variant="h5" style={{ marginBottom: '8px', marginLeft: '100px', marginRight: '100px', marginTop: '60px' }}>Quiz Completed!</Typography><br/><hr/>
//                 <Typography>Your Score: {score}/{questions.length}</Typography><hr/><br/>
//                 <Button variant="contained" color="inherit" onClick={() => restartQuiz()} style={{ color: 'black' }}>
//                   Restart Quiz
//                 </Button>
//               </div>
//             )}
//           </div>
//         )}
//       </CardContent>
//     </Card>
//   );
// };

// export default Quiz; (Circularprogress inside card)