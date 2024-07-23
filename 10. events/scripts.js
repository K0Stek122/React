class Counter extends React.Component { //This is the text counter
    render() {
        var textStyle = {
            fontSize: 72,
            color: "#333",
            fontWeight: "bold",
            fontFamily: "sans-serif",
        };

        return (
            <div style={textStyle}>
                {this.props.display}
            </div>
        );
    }
}

class CounterParent extends React.Component {
    constructor() { //This is the modern way to initialise state in a React Component.
        super(); //This has to be called in order to call the original constructor that we are overloading.
        this.state = {
            count: 0
        };

        this.increase = this.increase.bind(this); //Bind the method to the component instance. All user-functions need to be bound like so.
    }

    increase(e) { //the "e" is not a regular event, but a React-specific event called SyntheticEvent. They are wrapped around MouseEvent and KeyboardEvent.
        var currentCount = this.state.count;

        if (e.shiftKey) {
            currentCount += 10;
        } else {
            currentCount += 1
        }
        this.setState({
            count: currentCount
        });
    }
    
    render() {
        var backgroundStyle = {
            padding: 50,
            backgroundColor: "#ffc53a",
            width: 250,
            height: 100,
            borderRadius: 10,
            textAlign: "center"
        };

        var buttonStyle = {
            fontSize: "1em",
            width: 30,
            height: 30,
            fontFamily: "sans-serif",
            color: "#333",
            fontWeight: "bold",
            lineHeight: "3px"
        };

        return (
            <div style={backgroundStyle}>
                <Counter display={this.state.count}/>
                <button onClick={this.increase} style={buttonStyle}>+</button>
            </div>
        );
    }
}

const root = ReactDOM.createRoot(document.querySelector("#container"));
root.render(
    <div>
        <CounterParent/>
    </div>
);