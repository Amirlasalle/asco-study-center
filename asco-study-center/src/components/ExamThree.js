import React, { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import examthreeData from './examthree.json';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';
import { Link } from 'react-router-dom';


function ExamThree() {
  const [timerCounter, setTimerCounter] = useState(1200);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [examElDisplay, setExamElDisplay] = useState(true);
  const [userInput, setUserInput] = useState('');
  const [userScores, setUserScores] = useState([]);
  const [evaluateText, setEvaluateText] = useState('');
  const [examData] = useState(examthreeData);
  const [examCompleted, setExamCompleted] = useState(false);
  const [summaryElDisplay, setSummaryElDisplay] = useState(false);


  useEffect(() => {
    if (!examCompleted) {
      const timerObj = setInterval(() => {
        setTimerCounter((prevCounter) => (prevCounter > 0 ? prevCounter - 1 : prevCounter));
      }, 1000);

      return () => clearInterval(timerObj);
    }
  }, [examCompleted]);


  const checkAnswer = (userAnswer) => {
    const correctAnswer = examData[currentQuestion].answer;
    if (userAnswer === correctAnswer) {
      setScore((prevScore) => prevScore + 1);
      setEvaluateText('You got it right!');
    } else {
      setTimerCounter((prevCounter) => prevCounter - 1);
      setEvaluateText('You got it wrong :(');
    }

    if (currentQuestion < examData.length - 1) {
      setCurrentQuestion((prevQuestion) => prevQuestion + 1);
    } else {
      endExam();
    }
  };



  const endExam = () => {
    setExamElDisplay(false);
    setSummaryElDisplay(true);
    const finalScore = timerCounter + score;
    setUserScores((prevScores) => [...prevScores, { user: userInput, finalScore }]);
    setExamCompleted(true);
  };




  const saveDetails = () => {
    const previousScore = JSON.parse(localStorage.getItem('codeexam')) || [];
    previousScore.push({ user: userInput, finalScore: timerCounter + score });
    localStorage.setItem('codeexam', JSON.stringify(previousScore));
    setSummaryElDisplay(false);
    setUserScores(previousScore);
  };


  const restartExam = () => {
    setTimerCounter(1200);
    setCurrentQuestion(0);
    setScore(0);
    setExamElDisplay(true);
    setUserInput('');
    setEvaluateText('');
    setExamCompleted(false);
    setSummaryElDisplay(false);
  };




  const displayQuestion = () => {
    const currentExam = examData[currentQuestion];
    return (
      <Container className="mb-5 mt-5">
        <h2 id="question">{currentExam.question}</h2>
        <div className="d-grid gap-2">
          <Button className="btn btn-primary" type="button" onClick={() => checkAnswer(currentExam.choiceA)}>{currentExam.choiceA}</Button>
          <Button className="btn btn-primary" type="button" onClick={() => checkAnswer(currentExam.choiceB)}>{currentExam.choiceB}</Button>
          <Button className="btn btn-primary" type="button" onClick={() => checkAnswer(currentExam.choiceC)}>{currentExam.choiceC}</Button>
          <Button className="btn btn-primary" type="button" onClick={() => checkAnswer(currentExam.choiceD)}>{currentExam.choiceD}</Button>
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

        {examElDisplay && displayQuestion()}


        <section id="summary" style={{ display: summaryElDisplay ? "block" : "none" }}>
          <h4>Your Final score (timeleft + score): <span id="score-result">{timerCounter + score}</span></h4>
          <label>Enter Username</label>
          <input type="text" id="user-name" value={userInput} onChange={(e) => setUserInput(e.target.value)} />
          <Button className="btn btn-secondary" id="save-userscore" onClick={saveDetails}>Save Score</Button>



          <section id="displayStorage" className='mt-4'>
            {userScores.map((userScore, index) => (
              <div key={index}>
                <h5>User: {userScore.user} {userScore.finalScore}</h5>
              </div>
            ))}
          </section>

        </section>

        <section className='mt-5'
          href="#examthree"
        ><Link to="/examthree" ><Button className="btn btn-danger" onClick={restartExam}>Retake Exam</Button></Link>
        </section>
      </div>
    </Container>
  );
}

export default ExamThree;