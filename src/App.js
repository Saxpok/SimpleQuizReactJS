import { useState } from 'react';
import './App.css';
import { MainStep } from './ui/steps/mainStep/MainStep';
import { SecondStep } from './ui/steps/secondStep/SecondStep';
import { Levels } from './constants';
import { levelData } from './constants';
import { ThirdStep } from './ui/steps/thirdStep/ThirdStep';

function App() {
  
  const [settings, setSettings] = useState({name: '', level: Levels[0]})
  const [step, setStep] = useState(0)
  const [answeredQuestions, setAnsweredQuestions] = useState([])

  const captureAnswers = (question, answer) => {
    setAnsweredQuestions ([...answeredQuestions, {question , answer}]) 
  }

  const nextStep = () => {
    setStep(step + 1)
  }

  const checkState = () => {
    switch(step) {
      case 0: 
        return <MainStep 
        setSettings={setSettings} 
        settings={settings} 
        nextStep={nextStep}
        />
      case 1:
        return <SecondStep 
        data={levelData[settings.level.toUpperCase()]}
        changeStepHandler={nextStep}
        answeredQuestionsReader={captureAnswers}
        />
      case 2: 
        return <ThirdStep
        userInfo={settings}
        userResult={answeredQuestions}
        />
    }
  }

  return (
    <div className="App">
      {checkState()}
    </div>
  );
}

export default App;
