// import React, { useEffect } from 'react';
// import studycenterData from './studycenter.json';
// import Container from 'react-bootstrap/Container';
// import Button from 'react-bootstrap/Button';
// import '../App.css';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import Card from 'react-bootstrap/Card';


// function StudyCenter() {
//   useEffect(() => {
//     // Move these variable declarations outside of the useEffect.
//     const flCardEl = document.querySelector('.flip-card');
//     const qEl = document.getElementById('studyQuestion');
//     const aEl = document.getElementById('studyAnswer');
//     let Qno = 0;

//     function displayCard() {
//       Qno = Math.floor(Math.random() * studycenterData.length); // Correct variable name.
//       qEl.innerText = studycenterData[Qno].studyQuestion;
//       aEl.innerText = studycenterData[Qno].studyAnswer;
//     }

//     // Add an event listener to the button element, not the cards container.
//     document.getElementById('cardsButton').addEventListener('click', function () {
//       flCardEl.style.display = 'block'; // Change to 'block' to show the card.
//       displayCard();
//     });

//     // Initial card display.
//     displayCard();
//   }, []);

//   return (
//     <Container className='mb-5 mt-5'>
//       <div className="d-flex flex-wrap justify-content-around">
//         <Card className="m-2 p-2 flip-card" style={{ width: '18rem' }}>

//           <Card className="flip-card-inner">
//             <Card className="flip-card-front">
//               <p id="studyQuestion"></p>
//             </Card>
//             <Card className="flip-card-back">
//               <p id="studyAnswer"></p>
//             </Card>
//           </Card>
//         </Card>
//       </div >
//       <div className='flex-wrap justify-content-around align-items-center cardsButton'>
//         <Button id="cardsButton" variant='info'>Next Flash Card</Button>
//       </div>
//     </Container >
//   );
// }

// export default StudyCenter;

import React, { useEffect } from 'react';
import studycenterData from './studycenter.json';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function StudyCenter() {
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
      <div className="d-flex flex-wrap justify-content-around">
        <div className="m-2 p-2 flip-card" style={{ width: '18rem'}}>
          <div className="flip-card-inner">
            <div className="flip-card-front" style={{ backgroundColor: '#fff', color: '#000' }}>
              <p id="studyQuestion"></p>
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

export default StudyCenter;
