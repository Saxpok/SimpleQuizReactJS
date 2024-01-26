import { useState } from 'react';
import './App.css';
import { CustomRange } from './ui/customRange/CustomRange';
import { Test } from './ui/test/Test';
import { ModalButton } from './ui/modalButton/ModalButton';
import { MyInput } from './ui/myInput/MyInput';
import { MainStep } from './ui/steps/mainStep/MainStep';
import { SecondStep } from './ui/steps/secondStep/SecondStep';
import { Levels } from './constants';
import { levelData } from './constants';

function App() {
  
  const [settings, setSettings] = useState({name: '', level: Levels[0]})
  const [step, setStep] = useState(0)

  const nextStep = () => {
    setStep(step + 1)

  }

  const checkState = () => {
    switch(step) {
      case 0: 
        return <MainStep setSettings={setSettings} settings={settings} nextStep={nextStep}/>
      case 1:
        return <SecondStep data={levelData[settings.level.toUpperCase()]}/>
    }
  }

  return (
    <div className="App">
      {checkState()}
    </div>
  );
}

export default App;
