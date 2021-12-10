import React, {Component} from "react"

class AddPlayer extends Component {
    state = {
        value: ""
    }

    handleValueChange=(e)=> {
        this.setState( {
                value: e.target.value
            }
        )
    }

    handleSubmit=(e)=> {
        e.preventDefault();
        this.props.addPlayer(this.state.value)
    }

    render() {
        return(

        <form onSubmit= { this.handleSubmit  } > 
            <input type="text"

            value= {
                this.state.value
            }

            onChange= {
                this.handleValueChange
            }

            placeholder="enter a player name"> </input> 
            <input type="submit"
            value="add player"> </input> 
            </form>
            
            )
    }
}

export default AddPlayer