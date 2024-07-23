var LightningCounter = React.createClass({
    getInitialState: function() { //This is a built-in function that is called right BEFORE the component is displayed on-screen.
        return {
            strikes: 0 //Think of this like kind of setting a member variable.
        };
    },
    
    timerTick: function() { //This is our user-defined function.
        this.setState({ //setState is a built-in function that allows for changing the states that are initially set in getInitialState function.
            strikes: this.state.strikes + 100
        });
    },

    componentDidMount: function() { //This is a built-in function that is called right AFTER the component is displayed on-screen.
        setInterval(this.timerTick, 1000);
    },

    render: function() {
        var style = {
            color: "#66FFFF",
            fontSize: 50
        };

        return (
            <h1 style={style}>{this.state.strikes}</h1> //Notice we are not using "props", but "state" this time
        );
    }
});

var LightningCounterDisplay = React.createClass({
    render: function() {
        var commonStyle = {
            margin: 0,
            padding: 0
        };

        var divStyle = {
            width: 250,
            textAlign: "center",
            backgroundColor: "black",
            padding: 40,
            fontFamily: "sans-serif",
            color: "#999",
            borderRadius: 10
        };

        var textStyle = {
            emphasis: {
                fontSize: 38,
                ...commonStyle
            },
            smallEmphasis: {
                ...commonStyle
            },
            smal: {
                fontSize: 17,
                opacity: 0.5,
                ...commonStyle
            }
        };

        return (
            <div style={divStyle}>
                <LightningCounter/>
                <h2 style={textStyle.smallEmphasis}>LIGHTNING STRIKES</h2>
                <h2 style={textStyle.emphasis}>WORLDWIDE</h2>
                <p style={textStyle.small}>(since you loaded this example)</p>
            </div>
        );
    }
});

ReactDOM.render(
    <LightningCounterDisplay/>,
    document.querySelector("#container")
);