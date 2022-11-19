 
/// https://codesandbox.io/s/github/skurzynowski/game-reading-focus/tree/main/?file=/src/Controls.js

import { observable,autorun, makeObservable, computed, action }  from "mobx"
 
 
import { makeAutoObservable } from "mobx";
import _ from "lodash";

class GameStore {
  
  constructor() {
    makeAutoObservable(this);
 }
  isFinished = 0; 
  addStore = (item) => {
    console.log('click',this.isFinished);
    this.isFinished = this.isFinished + item;
  };


  checkStatus = () => {
    console.log('click',this.isFinished);
    return this.isFinished%3===0;
  };


  start = () => {
    console.log('click', this.isFinished, this.isFinished%3===0);
    this.isFinished = this.isFinished+1;
  };

  minuse = () => { 
    this.isFinished = this.isFinished-1;
  };

   getIsFinished () { 
    return this.isFinished
  }

}

export { GameStore };

export const store = new GameStore();
