

// const title = React.createElement (
//     "h1",
//     {id: "thisIsID", title :"This is a title"},
//     "My first react element."
// );


// const desc = React.createElement(
    //     "p",
    //     null,
    //     "I just learned to create HTML by React"
    //     );
    // const header = React.createElement(
    //     "header",
    //     null,
    //     title, 
    //     desc
    //     ) 

// //JSX    
// const title = <h1> This is title </h1>;
// const desc = <p> I just learned to create HTML by React</p>;


//Embed Javascript Expression in JSX
// const title = " This is title ";
// const desc = " I just learned to create HTML by React ";

// const header = (
//     <header>
//         <h1> { title } </h1>
//         <p> { desc }</p>
//     </header>
// );

// ReactDOM.render(
//             header,
//             document.getElementById("root")
// );

const desc = "This is my first react App";
const myTitle = "My title"
const username  = "Temuulen"

const Player = () =>{
    return (
        <div className ="player">
            <span className ="player-name">
                Temuulen
            </span>
            <Counter />
        </div>

    )
}

const Counter = () =>{
    return(
        <div className="counter">
                <button className="counter-action decrement">-</button>
                <span className="counter-score">35</span>
                <button className="counter-action increment">+</button>
                
        </div>
    )
}

const Header = () =>{
    return (
        <header>
            <h1>Scoreboard</h1>
            <span className = "stats">Player: 1</span>
        </header>
    )
}


const App =() =>{
    return (
        <div className = "scoreboard">
            <Header />
            <Player />
        </div>
    )
}



ReactDOM.render(
    <App />,
    document.getElementById('root')
)