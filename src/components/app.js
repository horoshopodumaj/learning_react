import {PureComponent} from 'react'

export default class App extends PureComponent {
    state = {
        value: 0
    }

    handleButtonClick = () => {
        this.setState({value: this.state.value + 1})
    }
    
    render() {
        return (
            <div>
                <h1>Hello from App</h1>
                <p>{this.state.value}</p>
                <button onClick={this.handleButtonClick}>+</button>
            </div>
        )
    }
}