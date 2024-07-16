var Buttonify = React.createClass({
    render: function() {
        return (
            <div>
                <button type={this.props.behaviour}>{this.props.children}</button>
            </div>
        );
    }
});

ReactDOM.render(
    <div>
        <Buttonify behaviour="Submit">Send Data</Buttonify>
        <Buttonify behaviour="Submit">Send Photos</Buttonify>
        <Buttonify behaviour="Submit">Send Something Else</Buttonify>
    </div>,
    document.querySelector("#container")
);