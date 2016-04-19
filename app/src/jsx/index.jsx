
var names=['11','22','33','44'];
var Hello=React.createClass({
    render:function(){
        return <h1>hello {this.props.name}</h1>;
    }
})
ReactDOM.render(<Hello name="world"/>, document.getElementById('app'));