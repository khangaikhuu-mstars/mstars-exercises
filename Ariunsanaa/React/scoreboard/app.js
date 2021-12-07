// React
// const title = React.createElement(
//     "h1",
//     {id: "main-title", title: "This is a title"},
//     "My first react element"
// )

// const desc = React.createElement(
//     "p",
//     null,
//     "I just learnt how to create a React node and ..."
// )

// const header = React.createElement(
//     "header",
//     null,
//     title,
//     desc
// )

// ReactDOM.render(
//     header,
//     document.getElementById('root')
// )








// const title = <h1 id="main-title">This is heading</h1>
// const description = <p>This is my text</p>
// const header = React.createElement(
//     "header",
//     null,
//     title,
//     description
// )
// ReactDOM.render(
//     header,
//     document.getElementById("root")
// );
// console.log(title)








// Embed JS Expressions in JSX
// const title = <h1 id="main-title">This is heading</h1>
// const description = <p>This is my text</p>
// const header = (
//     <header>
//         <h1>{title}</h1>
//         <p>{description}</p>
//     </header>
// )

// ReactDOM.render(
//     header,
//     document.getElementById("root")
// )








// function Header(){
//     return(
//         <header>
//             <h1>Scoreboard</h1>
//             <span className = "stats"></span>
//         </header>
//     )
// }

// ReactDOM.render(
//     <Header></Header>,
//     document.getElementById("root"))








const desc = "This is my first reac app"
const myTitleID = "main-title";
const username = "Ariunsanaa"

// function Header(){
//     return(
//         <header>
//             <h1 id={myTitleID}> {username}'s first react app</h1>
//             <span className = "stats">{desc}</span>
//         </header>
//     )
// }

// ReactDOM.render(
//     <Header></Header>,
//     document.getElementById("root"))



// arrow function
const Header = () => {
    return (
        <header>
            <h1>Scoreboard</h1>
            <span className="stats">Player: 1</span>
        </header>
    )
}

ReactDOM.render(
    <Header></Header>,
    document.getElementById("root"))


const Player = () => {
    return(
        <div className="player">
            <span className="player-name">Ariunsanaa
            </span>

            <div className="counter">
                <button className="counter-action decrement">-</button>
                <span className="counter-score">35</span>
                <button className="counter-action increment">+</button>
            </div>
        </div>
    )
}


const Counter = () => {
    return(
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
            <Header/>
            <Player/>
            
        </div>
    )
}

ReactDOM.render(
    <App/>,

    document.getElementById("root")
)


