
var React = require('react');
var React = require('react');

var NodeList = React.createClass({
    displayName: 'NodeList',
    getInitialState() {
    	alert('init')
        return {
            opacity:1.0,
            fontSize:'20px'  
        };
    },
    render() {
        return (
            <div style={this.state}>NodeList</div>
        );
    },
    componentWillMount() {
        alert('will')  
    },
    componentDidMount() {
        alert('did')  ;
         // var _self=this;

    setTimeout(function(){
    	this.setState({
    		opacity:0.8,
    		color:'blue',
    		fontWeight:'blod',
    		fontSize:'80px'
    	})
   	 }.bind(this),1000)
    },
    
});

// module.exports = NodeList;
var List = React.createClass({
    displayName: 'List',
    render() {
        return (
            <div><span className="box">{this.props.date}</span><NodeList></NodeList></div>
        );
    }
});
ReactDOM.render(<List date="2016-04-22"></List>,document.getElementById('List'))
module.exports = List;