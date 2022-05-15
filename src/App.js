import './App.css';
// import { StateTutorial } from './components/StateTutorial/StateTutorial';
import { UseEffectTutorial } from './components/';
// import { AxiosUseEffectCatchError } from './boilerplate/';

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <p>React Hooks Course</p>
        {/* <StateTutorial /> */}
        {/* <ReducerTutorial /> */}
        {/* <AxiosUseEffectCatchError /> */}
        <UseEffectTutorial />
      </header>
    </div>
  );
}

export default App;
