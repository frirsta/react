import React from "react";

export default class StatefulGreeting extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0
        };
    }

    setCount = () => {
        this.setState(prevState => {
            return {count: prevState.count + 1}

        })
    }
    render() {
        return (
            <div>
                <h1>StatefulGreeting {this.props.name}</h1>
                <h2>{this.state.count} times</h2>
                <button onClick={this.setCount}>+ 1</button>
            </div>
        )
    }
}