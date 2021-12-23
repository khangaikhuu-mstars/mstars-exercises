import React from "react"
import "../css/index.css"
export const Card = props => (
    <div className="card-container">
        <img src={`https://robohash.org/${props.robot.id}?set=set2&size=300x300`}/>
    <h2> {props.robot.name}</h2>
    <p> {props.robot.email}</p>
    </div>

)
