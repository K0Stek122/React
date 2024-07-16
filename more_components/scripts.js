var Square = React.createClass({
    render: function() {
        var style = {
            height: 150,
            backgroundColor: this.props.color
        };

        return (
            <div style={style}>

            </div>
        );
    }
});

var Label = React.createClass({
    render : function() {
        var style = {
            fontFamily: "Monospace",
            fontWeight: "bold",
            fontSize: 16,
            padding: 13,
            margin: 0,
            textAlign: "center"
        };

        return (
            <p style={style}>{this.props.color}</p>
        );
    }
});

var Card = React.createClass({
    render: function() {
        var style = {
            height: 200,
            width: 150,
            padding: 0,
            margin: 5,
            backgroundColor: "#eee",
            WebkitFilter: "drop-shadow(0px 0px 5px #666)",
            filter: "drop-shadow(0px 0px 5px #666)"
        };

        return (
            <div style={style}>
                <Square color={this.props.color}/>
                <Label color={this.props.color}/>
            </div>
        );
    }
});

ReactDOM.render(
    <div>
        <Card color="#ff6663"/>
        <Card color="#89ff21"/>
        <Card color="#9054ef"/>
    </div>,
    document.querySelector("#container")
);