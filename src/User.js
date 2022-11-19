/// https://codesandbox.io/s/github/skurzynowski/game-reading-focus/tree/main/?file=/src/Controls.js
import "./App.css";
import { store } from "./stores/store";
import { observer } from "mobx-react-lite";

export const User = observer(() => {
  return (
    <section>
      <div>
        <span className="hiddenText">
          checkStatus: {store.checkStatus() ? "Правда" : "Ложь"}
        </span>
      </div>
      <div>
        <span className="hiddenText">add: {store.isFinished} </span>
      </div>
      <div>
        <span className="hiddenText"> name: {store.getIsFinished()}</span>
      </div>
    </section>
  );
});
