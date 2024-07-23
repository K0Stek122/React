var Display = React.createClass({
    render: function() {
        return (
            <div>
                <p>{this.props.color}</p>
                <p>{this.props.num}</p>
                <p>{this.props.size}</p>
            </div>
        );
    }
});

var Label = React.createClass({
    render: function() {
        return (
            <Display {...this.props}/>
        );
    }
});

var Shirt = React.createClass({
    render: function() {
        return (
            <Label {...this.props}/> //Think of this like it's grabbing the child component straight away, rather than having to pass through every component.
        );
    }
});

ReactDOM.render(
    <div>
        <Shirt color="Blue" num="12" size="medium"/>
    </div>,
    document.querySelector("#container")
);