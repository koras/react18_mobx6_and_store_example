 
/// https://codesandbox.io/s/github/skurzynowski/game-reading-focus/tree/main/?file=/src/Controls.js

import './App.css';
import { action, extendObservable } from 'mobx';
import { observer } from "mobx-react-lite";
  
import {store} from './stores/store'

export const  Controll = observer(() =>{

  const  pushStore = () => {
        store.addStore(5)
    }

 return  <div>
 <button onClick={ pushStore}>add store</button>
    <button onClick={ store.start}>Start</button>
     <button onClick={ store.minuse}>Minuse</button>
 </div>
});
 
