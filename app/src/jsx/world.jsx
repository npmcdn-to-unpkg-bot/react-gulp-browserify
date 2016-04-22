

var World = React.createClass({
	render:function () {
		return  <h1>{this.props.name}</h1>;
	}
})

ReactDOM.render(<World name="world"></World>,document.getElementById('world'))