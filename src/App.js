import "./App.css";
import Dictionary from "./Dictionary.js";

export default function App() {
  return (
    <div className="App">
      <header className="App-header">Dictionary</header>
      <div className="container">
        <Dictionary />
        <div className="App-footer">
          <footer>
            <small>
              This project is coded by <a href="/">Ariana Ledezma </a>and
              open-sourced on&nbsp;<a href="/">GitHub</a>.
            </small>
          </footer>
        </div>
      </div>
    </div>
  );
}
