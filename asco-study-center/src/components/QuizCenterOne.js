import React, { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import quizcenteroneData from './quizcenterone.json';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';

function QuizCenterOne() {
  const [timerCounter, setTimerCounter] = useState(60);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [quizElDisplay, setQuizElDisplay] = useState(true);
  const [summaryElDisplay, setSummaryElDisplay] = useState(false);
  const [userInput, setUserInput] = useState('');
  const [userScores, setUserScores] = useState([]);
  const [evaluateText, setEvaluateText] = useState('');
  const [quizData] = useState(quizcenteroneData);

  useEffect(() => {
    const timerObj = setInterval(() => {
      setTimerCounter((prevCounter) => prevCounter > 0 ? prevCounter - 1 : prevCounter);
    }, 1000);

    return () => clearInterval(timerObj);
  }, []);

  const checkAnswer = (userAnswer) => {
    const correctAnswer = quizData[currentQuestion].answer;
    if (userAnswer === correctAnswer) {
      setScore((prevScore) => prevScore + 10);
      setEvaluateText('You got it right!');
    } else {
      setTimerCounter((prevCounter) => prevCounter - 5);
      setEvaluateText('You got it wrong :(');
    }

    if (currentQuestion < quizData.length - 1) {
      setCurrentQuestion((prevQuestion) => prevQuestion + 1);
    } else {
      endQuiz();
    }
  };

  const endQuiz = () => {
    setQuizElDisplay(false);
    setSummaryElDisplay(true);
    const finalScore = timerCounter * score;
    setUserScores((prevScores) => [...prevScores, { user: userInput, finalScore }]);
  };



  const saveDetails = () => {
    const previousScore = JSON.parse(localStorage.getItem('codequiz')) || [];
    previousScore.push({
      user: userInput,
      finalScore: timerCounter * score,
    });
    localStorage.setItem('codequiz', JSON.stringify(previousScore));
    setSummaryElDisplay(false);
  };

  const restartQuiz = () => {
    // Reset all state variables to their initial values
    setTimerCounter(60);
    setCurrentQuestion(0);
    setScore(0);
    setQuizElDisplay(true);
    setSummaryElDisplay(false);
    setUserInput('');
    setEvaluateText('');
    // Any other state variables that need to be reset should be added here
  };

  const displayQuestion = () => {
    const currentQuiz = quizData[currentQuestion];
    return (
      <Container className="mb-5 mt-5">
        <h2 id="question">{currentQuiz.question}</h2>
        <div className="d-grid gap-2">
          <Button className="btn btn-primary" type="button" onClick={() => checkAnswer(currentQuiz.choiceA)}>{currentQuiz.choiceA}</Button>
          <Button className="btn btn-primary" type="button" onClick={() => checkAnswer(currentQuiz.choiceB)}>{currentQuiz.choiceB}</Button>
          <Button className="btn btn-primary" type="button" onClick={() => checkAnswer(currentQuiz.choiceC)}>{currentQuiz.choiceC}</Button>
          <Button className="btn btn-primary" type="button" onClick={() => checkAnswer(currentQuiz.choiceD)}>{currentQuiz.choiceD}</Button>
        </div>
        <h4 id="evaluate">{evaluateText}</h4>
      </Container>
    );
  };

  return (
    <Container className="mb-5 mt-5">
      <div className="d-flex flex-wrap justify-content-around">
        <section className="d-flex justify-content-evenly">
          <h3 className="timer">Time Left: {timerCounter}</h3><span className="mx-2"></span>
          <h3 className="grade">Score: {score}</h3>
        </section>

        {quizElDisplay && displayQuestion()}


        <section id="summary" style={{ display: summaryElDisplay ? "block" : "none" }}>
          <h4>Your Final score (timeleft * score): <span id="score-result">{timerCounter * score}</span></h4>
          <label>Enter Username</label>
          <input type="text" id="user-name" onChange={(e) => setUserInput(e.target.value)} />
          <Button className="btn btn-secondary" id="save-userscore" onClick={saveDetails}>Save Score</Button>

        </section>


        <section id="displayStorage" className='mt-4'>
          {userScores.map((userScore, index) => (
            <div key={index}>
              <h5>User: {userScore.user} ----- {userScore.finalScore}</h5>
            </div>
          ))}
        </section> <section className='mt-5'><Button className="btn btn-danger" onClick={restartQuiz}>Retake Quiz</Button></section>
      </div>
    </Container>
  );
}

export default QuizCenterOne;
