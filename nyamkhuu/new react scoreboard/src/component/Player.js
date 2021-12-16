import React, {
    PureComponent
} from 'react';
import Counter from './Counter';

import Crown from './Crown';
import Crown2 from './Crown2';

class Player extends PureComponent {






    render() {



        let icon = this.props.score === this.props.highScore ? <Crown /> : <Crown2 />


        return (
            <div className="player" >


                <span className="player-name " >


                    < button className="remove-player"
                        onClick={
                            () => this.props.removePlayer(this.props.id)
                        } > x </button>


                    {icon}

                    {this.props.playerName}
                </span>

                <Counter changeScore={
                    this.props.changeScore
                }

                    score={
                        this.props.score
                    }

                    index={
                        this.props.index
                    }
                /> </div>
        )
    }
}

export default Player;