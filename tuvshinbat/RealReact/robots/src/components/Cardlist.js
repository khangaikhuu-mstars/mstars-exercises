import React from "react";
import {Card} from "./Card";
export const Cardlist = props =>(
    <div className="card-list">
        {props.robots.map(el =>(
                <Card key={el.id} robot={el}/>
              ))}
    </div>
)