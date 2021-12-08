// const title = React.createElement(
//     "h1", {
//         id: "thisisid"
//     }, "hellow morroonnn"
// );
// const text = React.createElement(
//     "p", {
//         id: "aamedkue"
//     }, "lorem50"
// );
// const header = React.createElement(
//     "header", {
//         id: "aamedkue"
//     }, title, text,
// );
// ReactDOM.render(
//     title,
//     document.getElementById("root")
// );

// // const content = React.createElement("header", { id: "hhe" }, title, text);

// const concent = (
//   <header>
//     <h1>{title}</h1>
//     <p>{text}</p>
//   </header>
// );
const text = "bla...";
const userName = "Bayanbat";
const myInputId = "inpt";
const Header = () => (
  <header>
    <h1>Scoreboard</h1>
    <span className="stats">Player : 1</span>
  </header>
);

const Counter = () => (
  <div className="counter">
    <button className="counter-action decrement">+</button>
    <span className="counter-score">35</span>
    <button className="counter-action increment">-</button>
  </div>
);
const Player = () => (
  <div className="player">
    <span className="player-name">{userName}</span>

    <Counter />
  </div>
);

const App = () => (
  <div className="scoreboard">
    <Header />
    <Player />
  </div>
);

ReactDOM.render(<App />, document.getElementById("root"));
