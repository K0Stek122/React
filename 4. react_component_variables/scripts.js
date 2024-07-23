var HelloWorld = React.createClass({
    render: function() {
        return (
            <p>Hello, {this.props.greetTarget}!</p> //* IMPORTANT! Every component has access to props. This is the parameter that can be later specified.
        );
    }
});

//IMPORTANT! Here i am using an old version of React, since the function createClass is deprecated in newer versions. We'll get to that soon.

ReactDOM.render( //This syntax is insane.
    <div>
        <HelloWorld greetTarget="Target1"/>
        <HelloWorld greetTarget="Target2"/>
        <HelloWorld greetTarget="Target3"/>
        <HelloWorld greetTarget="Target4"/>
        <HelloWorld greetTarget="Target5"/>
        <HelloWorld greetTarget="Target6"/>
    </div>,
    document.querySelector("#container")
);