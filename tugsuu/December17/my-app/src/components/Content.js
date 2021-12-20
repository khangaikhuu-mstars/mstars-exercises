import React from "react"
import "react-bootstrap"
import { ButtonGroup , Button} from "react-bootstrap"

class Content extends React.Component {
    render() {
        return (
            <ButtonGroup aria-label="Basic example">
                <Button variant="secondary">Left</Button>
                <Button variant="secondary">Middle</Button>
                <Button variant="secondary">Right</Button>
            </ButtonGroup>
        )
    }
}

export default Content