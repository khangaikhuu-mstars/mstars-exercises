// const title = "My first react element"

// const description = "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Pariatur, quisquam?"

// const header = (
//     <header>
//         <h1>{title}</h1>
//         <p>{description}</p>
//     </header>
// )

// const desc = 'This is my first react app.'
// const myTitleId = 'main-title'
// const userName = 'Namuun'

const Header = () => {
    return(
        <header>
            <h1 id={myTitleId}>Scoreboard</h1>
            <span className="stats">Points</span>
        </header>
    )
}

const Player = () => {
    return(
        <div className="player">
            <span className="player-name">
                Namuun
            </span>

            <Counter />
        </div>
    )
}

const Counter = () => {
    return (
        <div className="counter">
            <button className="counter-action decrement">-</button>
            <span className="counter-score">35</span>
            <button className="counter-action increment">+</button>
        </div>
    )
}

const App = () => {
    return(
        <div className="scoreboard">
            <Header />

            <Player />
        </div>
    )
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
);
