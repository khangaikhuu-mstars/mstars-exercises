

import React, {Component} from 'react'


class AddPlayerForm extends Component{
    // state = {
    //     value : ''
    // }
    playerInput = React.createRef()

    // handleValueChange = (e)=>{
    //     this.setState({value: e.target.value})    
        
    // }

    // handleSubmit = (e)=>{
    //     e.preventDefault()
    //     this.props.addPlayer(this.state.value)
    //     this.setState({value: ""}) 
    // }    

    //by ref
    handleSubmit = (e)=>{
        e.preventDefault()
        this.props.addPlayer(this.playerInput.current.value)
        e.currentTarget.reset()
    }    
render(){
    console.log(this.playerInput)
    return (
        <form onSubmit = {this.handleSubmit}>
            <input type="text"
                    ref = {this.playerInput}
                    // onChange  = {this.handleValueChange}
                    >    
                    </input>
            <input type="submit" 
                    value ="add player">
            </input>        
        </form>
    )
}
}


export default AddPlayerForm;