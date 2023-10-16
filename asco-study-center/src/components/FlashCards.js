import React, { useEffect } from 'react';
import studycenterData from './studycenter.json';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function FlashCards() {
  useEffect(() => {
    const flCardEl = document.querySelector('.flip-card');
    const qEl = document.getElementById('studyQuestion');
    const aEl = document.getElementById('studyAnswer');
    let Qno = 0;

    function displayCard() {
      Qno = Math.floor(Math.random() * studycenterData.length);
      qEl.innerText = studycenterData[Qno].studyQuestion;
      aEl.innerText = studycenterData[Qno].studyAnswer;
    }

    document.getElementById('cardsButton').addEventListener('click', function () {
      flCardEl.style.display = 'block';
      displayCard();
    });

    displayCard();
  }, []);

  return (
    <Container className='mb-5 mt-5'>
      <h5 className="mt-3 mb-2 pl-5 pr-5 justify-content-center text-center about-asco-text-smaller">Hover over the flash card to reveal the answer
      </h5>
      <div className="d-flex flex-wrap justify-content-around">
        <div className="m-2 p-2 flip-card" style={{ width: '25rem' }}>
          <div className="flip-card-inner">
            <div className="flip-card-front" style={{ backgroundColor: '#fff', color: '#000' }}>
              <p id="studyQuestion" className='pl-3 pr-3'></p>
            </div>
            <div className="flip-card-back" style={{ backgroundColor: '#3dcd58', color: 'white' }}>
              <p id="studyAnswer"></p>
            </div>
          </div>
        </div>
      </div>
      <div className='flex-wrap justify-content-around align-items-center cardsButton'>
        <Button id="cardsButton" variant='info'>Next Flash Card</Button>
      </div>
    </Container>
  );
}

export default FlashCards;