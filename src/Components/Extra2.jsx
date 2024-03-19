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
//     <div>
//       {isLoading ? (
//         <CircularProgress />
//       ) : (
//         <Card style={{ width: '80%', maxWidth: '550px', height: '80vh', backgroundColor: 'blue', color: 'white', margin: '20px auto' }}>
//           <CardContent>
//             {!selectedCategory ? (
//               <div>
//                 <br /><Typography style={{ fontSize: '18px', marginBottom: '8px', marginLeft: '100px', marginRight: '100px' }}>Select Category:</Typography>
//                 <Select value={selectedCategory || ''} onChange={handleCategoryChange} style={{ width: '100%' }}
//                   MenuProps={{ PaperProps: { style: { zIndex: 10 } } }}>
//                   <MenuItem value="9">General Knowledge</MenuItem>
//                   <MenuItem value="19">Mathematics</MenuItem>
//                   <MenuItem value="18">Computer</MenuItem>
//                   <MenuItem value="21">Sports</MenuItem>
//                   <MenuItem value="17">Science & Nature</MenuItem>
//                   {/* Add more categories as needed */}
//                 </Select>
//               </div>
//             ) : isError ? (
//               <Typography>Error fetching questions</Typography>
//             ) : (
//               <div>
//                 {!quizCompleted ? (
//                   <div>
//                     <div style={{ display: 'flex', alignItems: 'center' }}>
//                       <AccessTime style={{ marginLeft: "auto", animation: 'pulse 1s infinite' }} />  {/* Clock Icon with Animation */}
//                       <Typography variant="body2" style={{ marginLeft: "10px" }}> {timer} seconds</Typography>
//                     </div><br />
//                     <Typography variant="h4" style={{ marginTop: '5px' }}>Question {currentQuestion + 1}</Typography><br />
//                     <Typography variant="body1">{questions[currentQuestion]?.question}</Typography><br />

//                     <div>
//                       {questions[currentQuestion]?.incorrect_answers.map((answer: any, index: any) => (
//                         <Button key={index} variant="contained" color="primary" onClick={() => handleAnswer(answer)} style={{ margin: '8px' }}>
//                           {answer}
//                         </Button>
//                       ))}
//                       <Button
//                         variant="contained"
//                         color="primary"
//                         onClick={() => handleAnswer(questions[currentQuestion]?.correct_answer)}
//                         style={{ margin: '8px' }}
//                       >
//                         {questions[currentQuestion]?.correct_answer}
//                       </Button>
//                     </div>
//                   </div>
//                 ) : (
//                   <div>
//                     <Typography variant="h5" style={{ marginBottom: '8px', marginLeft: '100px', marginRight: '100px', marginTop: '60px' }}>Quiz Completed!</Typography><br /><hr />
//                     <Typography>Your Score: {score}/{questions.length}</Typography><hr /><br />
//                     <Button variant="contained" color="inherit" onClick={() => restartQuiz()} style={{ color: 'black' }}>
//                       Restart Quiz
//                     </Button>
//                   </div>
//                 )}
//               </div>
//             )}
//           </CardContent>
//         </Card>
//       )}
//     </div>
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
//     <div>
//       {isLoading ? (
//         <CircularProgress />
//       ) : (
//         <Card style={{ width: '80%', maxWidth: '550px', height: '90vh',  background: linear-gradient(
//           to right,
//           pink 0%,
//           pink 50%,
//           paleturquoise 50%,
//           paleturquoise 100%
//         ); , color: 'white', margin: '20px auto' }}>
//           <CardContent>
//             {!selectedCategory ? (
//               <div>
//                 <br /><Typography style={{ fontSize: '18px', marginBottom: '8px', marginLeft: '100px', marginRight: '100px' }}>Select Category:</Typography>
//                 <Select value={selectedCategory || ''} onChange={handleCategoryChange} style={{ width: '100%' }}
//                   MenuProps={{ PaperProps: { style: { zIndex: 10 } } }}>
//                   <MenuItem value="9">General Knowledge</MenuItem>
//                   <MenuItem value="19">Mathematics</MenuItem>
//                   <MenuItem value="18">Computer</MenuItem>
//                   <MenuItem value="21">Sports</MenuItem>
//                   <MenuItem value="17">Science & Nature</MenuItem>
//                   {/* Add more categories as needed */}
//                 </Select>
//               </div>
//             ) : isError ? (
//               <Typography>Error fetching questions</Typography>
//             ) : (
//               <div>
//                 {!quizCompleted ? (
//                   <div>
//                     <div style={{ display: 'flex', alignItems: 'center' }}>
//                       <AccessTime style={{ marginLeft: "auto", animation: 'pulse 1s infinite' }} />  {/* Clock Icon with Animation */}
//                       <Typography variant="body2" style={{ marginLeft: "10px" }}> {timer} seconds</Typography>
//                     </div><br />
//                     <Card style={{ borderRadius: '20px', margin: '8px' }}>
//                       <CardContent>
//                         <Typography variant="h4" style={{ marginTop: '5px' }}>Question {currentQuestion + 1}</Typography><br />
//                         <Typography variant="body1">{questions[currentQuestion]?.question}</Typography><br />
//                       </CardContent>
//                     </Card><br/><br/>
                    
//                       <div>
//                       {questions[currentQuestion]?.incorrect_answers.map((answer: any, index: any) => (
//   <Button 
//     key={index} 
//     variant="contained" 
//     color="primary" 
//     onClick={() => handleAnswer(answer)} 
//     style={{ 
//       margin: '8px', 
//       minWidth: '200px', // Set a minimum width for the button
//       maxWidth: '400px', // Optionally set a maximum width
//       backgroundColor: '#4ae54a', // Set the background color
//       color: 'black', // Set text color to black
//       border: '4px solid white', // Add a white border
//       borderRadius: '20px' // Set border radius
//     }}
//   >
//     {answer}
//   </Button>
// ))}

// <Button
//   variant="contained"
//   style={{
//     margin: '8px',
//     minWidth: '200px', // Set a minimum width for the button
//     maxWidth: '400px', // Optionally set a maximum width
//     backgroundColor: '#4ae54a', // Set the background color
//     color: 'black', // Set text color to black
//     border: '4px solid white', // Add a white border
//     borderRadius: '20px'
//   }}
//   onClick={() => handleAnswer(questions[currentQuestion]?.correct_answer)}
// >
//   {questions[currentQuestion]?.correct_answer}
// </Button>


// </div>
                      
//                   </div>
//                 ) : (
//                   <div>
//                     <Typography variant="h5" style={{ marginBottom: '8px', marginLeft: '100px', marginRight: '100px', marginTop: '60px' }}>Quiz Completed!</Typography><br /><hr />
//                     <Typography>Your Score: {score}/{questions.length}</Typography><hr /><br />
//                     <Button variant="contained" color="inherit" onClick={() => restartQuiz()} style={{ color: 'black' }}>
//                       Restart Quiz
//                     </Button>
//                   </div>
//                 )}
//               </div>
//             )}
//           </CardContent>
//         </Card>
//       )}
//     </div>
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
//     <div>
//       {isLoading ? (
//         <CircularProgress />
//       ) : (
//         <Card style={{ width: '80%', maxWidth: '550px', height: '95vh',  background: 'linear-gradient(to bottom right, #4ae54a  , white)', color: 'white', margin: '20px auto' }}>
//           <CardContent>
//             {!selectedCategory ? (
//               <div>
//                 <br /><Typography style={{ fontSize: '18px', marginBottom: '8px', marginLeft: '100px', marginRight: '100px' }}>Select Category:</Typography>
//                 <Select value={selectedCategory || ''} onChange={handleCategoryChange} style={{ width: '100%' }}
//                   MenuProps={{ PaperProps: { style: { zIndex: 10 } } }}>
//                   <MenuItem value="9">General Knowledge</MenuItem>
//                   <MenuItem value="19">Mathematics</MenuItem>
//                   <MenuItem value="18">Computer</MenuItem>
//                   <MenuItem value="21">Sports</MenuItem>
//                   <MenuItem value="17">Science & Nature</MenuItem>
//                   {/* Add more categories as needed */}
//                 </Select>
//               </div>
//             ) : isError ? (
//               <Typography>Error fetching questions</Typography>
//             ) : (
//               <div>
//                 {!quizCompleted ? (
//                   <div>
//                     <div style={{ display: 'flex', alignItems: 'center' }}>
//                       <AccessTime style={{ marginLeft: "auto", animation: 'pulse 1s infinite',color:'#3F00FF' }} />  {/* Clock Icon with Animation */}
//                       <Typography variant="body2" style={{ marginLeft: "10px", color:'#3F00FF' }}> {timer} sec</Typography>
//                     </div><br />
//                     <Card style={{ borderRadius: '20px', margin: '8px' }}>
//                       <CardContent>
//                         <Typography variant="h4" style={{ marginTop: '5px' }}>Question {currentQuestion + 1}</Typography><br />
//                         <Typography variant="body1">{questions[currentQuestion]?.question}</Typography><br />
//                       </CardContent>
//                     </Card><br/><br/>
                    
//                     <div>
//                       {questions[currentQuestion]?.incorrect_answers.map((answer: any, index: any) => (
//                         <Button 
//                           key={index} 
//                           variant="contained" 
//                           color="primary" 
//                           onClick={() => handleAnswer(answer)} 
//                           style={{ 
//                             margin: '8px', 
//                             minWidth: '200px', 
//                             maxWidth: '400px', 
//                             backgroundColor: '#4ae54a', 
//                             color: 'black', 
//                             border: '4px solid white', 
//                             borderRadius: '20px',
//                           // Add word wrap for long answers
//                           }}
//                         >
//                           {answer}
//                         </Button>
//                       ))}
//                       <Button
//                         variant="contained"
//                         style={{
//                           margin: '8px',
//                           minWidth: '200px',
//                           maxWidth: '400px',
//                           backgroundColor: '#4ae54a',
//                           color: 'black',
//                           border: '4px solid white',
//                           borderRadius: '20px',
                      
//                         }}
//                         onClick={() => handleAnswer(questions[currentQuestion]?.correct_answer)}
//                       >
//                         {questions[currentQuestion]?.correct_answer}
//                       </Button>
//                     </div>
//                   </div>
//                 ) : (
//                   <div>
                    
//                     <Typography variant="h5" style={{ marginBottom: '8px', marginLeft: '100px', marginRight: '100px', marginTop: '60px' , color:'black'}}>Quiz Completed!</Typography><br /><hr />
//                     <Typography style={{color:'black'}}>Your Score: {score}/{questions.length}</Typography><hr /><br />
                    
//                     <Button variant="contained" color="inherit" onClick={() => restartQuiz()} style={{ color: 'black' }}>
//                       Restart Quiz
//                     </Button>
//                   </div>
//                 )}
//               </div>
//             )}
//           </CardContent>
//         </Card>
//       )}
//     </div>
//   );
// };

// export default Quiz;

// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { useQuery } from 'react-query';
// import { Button, CircularProgress, Typography, Select, MenuItem, Card, CardContent } from '@mui/material';
// import { AccessTime } from '@mui/icons-material';
// import { SelectChangeEvent } from '@mui/material/Select';
// import './Quiz.module.css';

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
//     <div>
//       {isLoading ? (
//         <CircularProgress />
//       ) : (
//         <Card style={{ width: '80%', maxWidth: '550px', height: '95vh', backgroundImage: 'url(/oo.jpg)',  backgroundRepeat: 'no-repeat',backgroundSize: 'cover',color: 'white', margin: '20px auto' }}>
//           <CardContent>
//             {!selectedCategory ? (
//               <div>
//                 <br /><Typography style={{ fontSize: '18px', marginBottom: '8px', marginLeft: '100px', marginRight: '100px' }}>Select Category:</Typography>
//                 <Select value={selectedCategory || ''} onChange={handleCategoryChange} style={{ width: '100%' }}
//                   MenuProps={{ PaperProps: { style: { zIndex: 10 } } }}>
//                   <MenuItem value="9">General Knowledge</MenuItem>
//                   <MenuItem value="19">Mathematics</MenuItem>
//                   <MenuItem value="18">Computer</MenuItem>
//                   <MenuItem value="21">Sports</MenuItem>
//                   <MenuItem value="17">Science & Nature</MenuItem>
//                   {/* Add more categories as needed */}
//                 </Select>
//               </div>
//             ) : isError ? (
//               <Typography>Error fetching questions</Typography>
//             ) : (
//               <div>
//                 {!quizCompleted ? (
//                   <div>
//                     <div style={{ display: 'flex', alignItems: 'center' }}>
//                       <AccessTime style={{ marginLeft: "auto", animation: 'pulse 1s infinite',color:'white' }} />  {/* Clock Icon with Animation */}
//                       <Typography variant="body2" style={{ marginLeft: "10px", color:'white' }}> {timer} sec</Typography>
//                     </div><br />
                    
//                         <Typography variant="h4" style={{ marginTop: '5px' , fontWeight: 'bold', }}>Question {currentQuestion + 1}</Typography><br />
//                         <Typography variant="body1" style={{fontWeight: 'bold', fontSize: '16px'}}>{questions[currentQuestion]?.question}</Typography><br />
                     
//                     <div>
//                       {questions[currentQuestion]?.incorrect_answers.map((answer: any, index: any) => (
//                         <Button 
//                           key={index} 
//                           variant="contained" 
//                           color="primary" 
//                           onClick={() => handleAnswer(answer)} 
//                           style={{ 
//                             margin: '8px', 
//                             minWidth: '200px', 
//                             maxWidth: '400px', 
//                             backgroundColor: 'white', 
//                             color: 'black', 
//                             border: '4px solid white', 
//                             borderRadius: '20px',
//                           // Add word wrap for long answers
//                           }}
//                         >
//                           {answer}
//                         </Button>
//                       ))}
//                       <Button
//                         variant="contained"
//                         style={{
//                           margin: '8px',
//                           minWidth: '200px',
//                           maxWidth: '400px',
//                           backgroundColor: 'white',
//                           color: 'black',
//                           border: '4px solid white',
//                           borderRadius: '20px',
                      
//                         }}
//                         onClick={() => handleAnswer(questions[currentQuestion]?.correct_answer)}
//                       >
//                         {questions[currentQuestion]?.correct_answer}
//                       </Button>
//                     </div>
//                   </div>
//                 ) : (
//                   <div>
                    
//                     <Typography variant="h5" style={{ marginBottom: '8px', marginLeft: '100px', marginRight: '100px', marginTop: '60px' , color:'white'}}>Quiz Completed!</Typography><br /><hr />
//                     <Typography style={{color:'white'}}>Your Score: {score}/{questions.length}</Typography><hr /><br />
                    
//                     <Button variant="contained" color="inherit" onClick={() => restartQuiz()} style={{ color: 'black' }}>
//                       Restart Quiz
//                     </Button>
//                   </div>
//                 )}
//               </div>
//             )}
//           </CardContent>
//         </Card>
//       )}
//     </div>
//   );
// };

// export default Quiz;



// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { useQuery } from 'react-query';
// import { Button, CircularProgress, Typography, Select, MenuItem, Card, CardContent } from '@mui/material';
// import { AccessTime } from '@mui/icons-material';
// import { SelectChangeEvent } from '@mui/material/Select';
// import './Quiz.module.css';



// const fetchQuestions = async (category: string) => {
//   const response = await axios.get(`https://opentdb.com/api.php?amount=10&type=multiple&category=${category}`);
//   return response.data.results;
// };

// const Quiz: React.FC = () => {
//   const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

//   const { data: questions = [], isError, isLoading, refetch, invalidate } = useQuery(['questions', selectedCategory], () =>
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
//     invalidate();
//   };

//   const restartQuiz = () => {
//     setQuizCompleted(false);
//     setCurrentQuestion(0);
//     setScore(0);
//     startQuiz();
//   };

//   return (
//     <div>
//       {isLoading ? (
//         <CircularProgress />
//       ) : (
//         <Card style={{ width: '80%', maxWidth: '550px', height: '95vh', backgroundImage: 'url(/oo.jpg)',  backgroundRepeat: 'no-repeat',backgroundSize: 'cover',color: 'white', margin: '20px auto' }}>
//           <CardContent>
//             {!selectedCategory ? (
//               <div>
//                 <br /><Typography style={{ fontSize: '18px', marginBottom: '8px', marginLeft: '100px', marginRight: '100px' }}>Select Category:</Typography>
//                 <Select value={selectedCategory || ''} onChange={handleCategoryChange} style={{ width: '100%' }}
//                   MenuProps={{ PaperProps: { style: { zIndex: 10 } } }}>
//                   <MenuItem value="9">General Knowledge</MenuItem>
//                   <MenuItem value="19">Mathematics</MenuItem>
//                   <MenuItem value="18">Computer</MenuItem>
//                   <MenuItem value="21">Sports</MenuItem>
//                   <MenuItem value="17">Science & Nature</MenuItem>
//                   {/* Add more categories as needed */}
//                 </Select>
//               </div>
//             ) : isError ? (
//               <Typography>Error fetching questions</Typography>
//             ) : (
//               <div>
//                 {!quizCompleted ? (
//                   <div>
//                     <div style={{ display: 'flex', alignItems: 'center' }}>
//                       <AccessTime style={{ marginLeft: "auto", animation: 'pulse 1s infinite',color:'white' }} />  {/* Clock Icon with Animation */}
//                       <Typography variant="body2" style={{ marginLeft: "10px", color:'white' }}> {timer} sec</Typography>
//                     </div><br />
                    
//                         <Typography variant="h4" style={{ marginTop: '5px' , fontWeight: 'bold', }}>Question {currentQuestion + 1}</Typography><br />
//                         <Typography variant="body1" style={{fontWeight: 'bold', fontSize: '16px'}}>{questions[currentQuestion]?.question}</Typography><br />
                     
//                     <div>
//                       {questions[currentQuestion]?.incorrect_answers.map((answer: any, index: any) => (
//                         <Button 
//                           key={index} 
//                           variant="contained" 
//                           color="primary" 
//                           onClick={() => handleAnswer(answer)} 
//                           style={{ 
//                             margin: '8px', 
//                             minWidth: '200px', 
//                             maxWidth: '400px', 
//                             backgroundColor: 'white', 
//                             color: 'black', 
//                             border: '4px solid white', 
//                             borderRadius: '20px',
//                           // Add word wrap for long answers
//                           }}
//                         >
//                           {answer}
//                         </Button>
//                       ))}
//                       <Button
//                         variant="contained"
//                         style={{
//                           margin: '8px',
//                           minWidth: '200px',
//                           maxWidth: '400px',
//                           backgroundColor: 'white',
//                           color: 'black',
//                           border: '4px solid white',
//                           borderRadius: '20px',
//                         }}
//                         onClick={() => handleAnswer(questions[currentQuestion]?.correct_answer)}
//                       >
//                         {questions[currentQuestion]?.correct_answer}
//                       </Button>
//                     </div>
//                   </div>
//                 ) : (
//                   <div>
                    
//                     <Typography variant="h5" style={{ marginBottom: '8px', marginLeft: '100px', marginRight: '100px', marginTop: '60px' , color:'white'}}>Quiz Completed!</Typography><br /><hr />
//                     <Typography style={{color:'white'}}>Your Score: {score}/{questions.length}</Typography><hr /><br />
                    
//                     <Button variant="contained" color="inherit" onClick={() => restartQuiz()} style={{ color: 'black' }}>
//                       Restart Quiz
//                     </Button>
//                   </div>
//                 )}
//               </div>
//             )}
//           </CardContent>
//         </Card>
//       )}
//     </div>
//   );
// };


