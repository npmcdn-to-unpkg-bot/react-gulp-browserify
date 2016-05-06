
var Hello=React.createClass({displayName: "Hello",
    render:function(){
        return React.createElement("h1", null, "hello ", this.props.name);
    }
})
ReactDOM.render(React.createElement(Hello, {name: "world"}), document.getElementById('app'));