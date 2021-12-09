// const players = [
//     {
//         name: "Baatarkhuu",
//         score: 0,
//         id:1
//     },
//     {
//         name: "Enkhtuvshin",
//         score: 0,
//         id:2
//     },
//     {
//         name: "Baatarkhuu",
//         score: 0,
//         id:3
//     },
//     {
//         name: "Enkhtuvshin",
//         score: 0,
//         id:4
//     }
// ]



// const Header = (props) => {
//     return (
//         <div>
//             <header>
//                 <h1>{props.title}</h1>
//                 <span className="stats">Player: {props.totalPlayers}</span>
//             </header>
//             </div>
//     )
// }


// const Player = (props) => {
//     return(
//         <div className="player">
//             <span className="player-name">{props.playerName}</span>
//             <Counter score={props.score}/>
//         </div>
//     )
// } 

// const Counter = (props) => {
//     return(
//     <div className="counter">
//         <button className="counter-action decrement">-</button>
//         <span className="counter-score">{props.score}</span>
//         <button className="counter-action increment">+</button>
//     </div>
//     )
// } 

// const App = (props) => {
//     return(
//         <div className="scoreboard">
//             <Header 
//                 title="Scoreboard" 
//                 totalPlayers={1}/>
//                 {props.initialPlayers.map((player) => (
//             <Player playerName={player.name}
//                     score={player.score} 
//                     key={player.id.toString()} />
//                     ))}
//         </div>
//     )
// }

// ReactDOM.render(
//     <App initialPlayers = {players}/>,
//     document.getElementById("root")
// )