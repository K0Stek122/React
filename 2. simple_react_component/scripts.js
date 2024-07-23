var HelloWorld = React.createClass({ //By itself it is just an empty object.
    render: function() { //This is a MANDATORY member of React Class.
        return (
            <p>Hello From a Component!</p>
        );
    }
});

//IMPORTANT! Here i am using an old version of React, since the function createClass is deprecated in newer versions. We'll get to that soon.

ReactDOM.render(
    <div>
        <HelloWorld/>
        <HelloWorld/>
        <HelloWorld/>
        <HelloWorld/>
        <HelloWorld/>
        <HelloWorld/>
    </div>,
    document.querySelector("#container")
);

function Test() {
    return 0;
}