import { useState } from 'react';
import { Card, Divider } from 'antd';
import bgPicture from 'C:/Users/bayan/vuedale_training/frontend_mentor_projects/faq-accordion-main/assets/images/background-pattern-desktop.svg';
import iconStar from 'C:/Users/bayan/vuedale_training/frontend_mentor_projects/faq-accordion-main/assets/images/icon-star.svg';
import iconPlus from 'C:/Users/bayan/vuedale_training/frontend_mentor_projects/faq-accordion-main/assets/images/icon-plus.svg';
import iconMinus from 'C:/Users/bayan/vuedale_training/frontend_mentor_projects/faq-accordion-main/assets/images/icon-minus.svg'

/*
const displayContent = (index) => {
  const answer = "answer-" + index;
  const answerContent = document.getElementsByClassName({answer});
  answerContent.innerHTML = "Frontend Mentor offers realistic coding challenges to help developers improve their frontend coding skills with projects in HTML, CSS, and JAvascript. It's suitable for all leveles and ideal for portfolio building."
};

const hideContent = (index) => {
  const answer = "answer-" + index;
  const answerContent = document.getElementsByClassName({answer});
}
*/

const displayContent = (index) => {
  const answer = "answer-" + index;
  const answerElement = document.getElementById(answer);
  answerElement.classList.toggle('hidden');

  const icon = "icon-" + index;
  const iconElement = document.getElementById(icon);
  const currentSrc = iconElement.getAttribute('src');

  iconElement.src = currentSrc === iconPlus ? iconMinus : iconPlus;
}

function App() {

  return (
    <>
      <div className="card-container">
        <img className="bg-picture" alt="bg-picture" src={bgPicture} />
        <Card className="card">

          <div className='title'>
            <img className="icon-star" src={iconStar}/> <span>FAQs</span>
          </div>
    
          <p className='question'>
            What is Frontend Mentor, and how will it help me? 
            <img className="icon" id="icon-1" src={iconPlus} onClick={() => displayContent(1)}></img>
          </p>

          <p className='hidden answer' id="answer-1">
            Frontend Mentor offers realistic coding challenges to help developers improve their frontend coding skills with projects in HTML, CSS, and JAvascript. It's suitable for all leveles and ideal for portfolio building.
          </p>

          <Divider/>

          <p className='question'>
           Is Frontend Mentor free?
            <img className="icon" id="icon-2" src={iconPlus} onClick={() => displayContent(2)}></img>
          </p>

          <p className='hidden answer' id="answer-2">
            Second answer
          </p>

          <Divider/>

          <p className='question'>
            Can I use Frontend Mentor projects in my portfolio?
            <img className="icon" id="icon-3" src={iconPlus} onClick={() => displayContent(3)}></img>
          </p>

          <p className='hidden answer' id="answer-3">
            Third answer
          </p>

          <Divider/>

          <p className='question'>
            How can I get help if I'm stuck on a challenge?
            <img className="icon" id="icon-4" src={iconPlus} onClick={() => displayContent(4)}></img>
          </p>

          <p className='hidden answer' id="answer-4">
            Fourth answer
          </p>

        </Card>
      </div>
    </>
  );
}

export default App
