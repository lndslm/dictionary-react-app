import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <div className="hero">
            <h1>Dictionary</h1>
          </div>
        </header>
        <main>
          <Dictionary />
        </main>
        <footer className="App-footer">Open-sourced code by Linda Salim</footer>
      </div>
    </div>
  );
}
