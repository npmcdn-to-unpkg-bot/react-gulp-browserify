"use strict";

var Hello = React.createClass({ displayName: "Hello",
    render: function render() {
        return React.createElement("h1", null, "hello ", this.props.name);
    }
});
ReactDOM.render(React.createElement(Hello, { name: "world" }), document.getElementById('app'));