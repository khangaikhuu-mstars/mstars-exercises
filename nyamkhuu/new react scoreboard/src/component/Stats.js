import React from "react";


const Stats = (props) => {
    
    const totalPlayers = props.players.length


    // let totalScore = props.players.reduce((total, player) => {
    //     return total +player.score
    // }, 0);

    let totalScore = 0;

    for (let i = 0; i < props.players.length; i++) {
        totalScore += props.players[i].score
    }


    return(
        <table className = "stats">
            <tbody>
                <tr>
                    <td>
                        Total Players:
                    </td>
                    <td>
                        {totalPlayers}
                    </td>

                </tr>
                <tr>
                    <td>
                        Total Score:
                    </td>
                    <td>
                        {totalScore}
                    </td>
                </tr>
                <tr>
                    <td>
                        High Score:
                    </td>
                    <td>
                        {props.highScore}
                    </td>
                </tr>
            </tbody>
        </table>
    )
}

export default Stats;