import React from "react";
const Stats = (props) => {
    const totalPlayers = props.players.length
    const totalScore = props.players.reduce((total, player) => {
        return total + player.score
    }, 0);
    return(
        <table className="stats">

            <tbody>
                <tr>
                    <td> Total Players :</td>
                    <td>{totalPlayers}</td>
                </tr>
                <tr>
                    <td> Total Score :</td>
                    <td>{totalScore}</td>
                </tr>
                
            </tbody>
        </table>
    )
}
export default Stats