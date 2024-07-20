//IMPORTANT! We are switching back to the newest (at the time) version of React. We cannot use createClass anymore.
//We will be using classes. The syntax is very similar, if not easier.
//Note that the CDN links have also changed in index.html

class Circle extends React.Component {
    render() {
        var style = {
            padding: 10,
            margin: 20,
            display: "inline-block",
            backgroundColor: this.props.bgColor,
            borderRadius: "50%",
            width: 100,
            height: 100,
        };

        return (
            <div style={style}>
            </div>
        );
    }
}

function createRandomCircles(circleNum) {
    var output = [];
    for (var i = 0; i < circleNum; i++) {
        var randomColor = "#" + (Math.floor(Math.random() * 16777215).toString())
        output.push(<Circle key={i} bgColor={randomColor}/>); //The "key" is there because of React requirement that an iterated list of items has this attribute.
    }
    return output
}

var circles = createRandomCircles(600);

const root = ReactDOM.createRoot(document.querySelector("#container"));
root.render(
    <div>
        {circles}
    </div>
);