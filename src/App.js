// https://codesandbox.io/s/github/skurzynowski/game-reading-focus/tree/main/?file=/src/GameStore.js:58-64 
// tsc  --jsx react
import './App.css';
import {User} from "./User";
import {Controll} from "./Controll";

 
function App() {
  return (
    <div className="App">
      <header className="App-header">
          <User/>
          <Controll/>
      </header>
    </div>
  );
}

export default App;
