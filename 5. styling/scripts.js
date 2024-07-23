var Letter = React.createClass({
    render: function() {
        var styles = { //Notice that properties which had a dash (-) in the middle are now CamelCase.
            padding: "10em", //em suffix is in commas.
            margin: 10, //px suffix is ommited and is added automatically.
            backgroundColor: this.props.bgcolor ? this.props.bgcolor : "#ff0000", //if bgcolor is set, set it to bgcolor, otherwise, set it to red.
            color: "#333",
            display: "inline-block",
            fontFamily: "Monospace",
            fontSize: 32,
            textAlign: "center"
        };

        return (
            <div style={styles}>
                {this.props.children}
            </div>
        );
    }
});

//IMPORTANT! Here i am using an old version of React, since the function createClass is deprecated in newer versions. We'll get to that soon.

ReactDOM.render(
    <div>
        <Letter bgcolor="#00ff00">A</Letter>
        <Letter>E</Letter>
        <Letter>I</Letter>
        <Letter>O</Letter>
        <Letter>U</Letter>
    </div>,
    document.querySelector("#container")
);

function Test() {
    return 0;
}