"use strict";

var World = React.createClass({ displayName: "World",
	render: function render() {
		return React.createElement("h1", null, this.props.name);
	}
});

ReactDOM.render(React.createElement(World, { name: "world" }), document.getElementById('world'));