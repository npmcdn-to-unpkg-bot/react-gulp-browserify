
var React = require('react');

var TestClickComponent = React.createClass({
    displayName: 'TestClickComponent',
    render() {
        return (
            <div><button type="button" className="btn btn-default" onClick={this.handleClick}>显示|隐藏</button><span  ref="tip">测试点击</span></div>
        );
    },
    handleClick(e){
    	alert('clicked')
    	var tipElement=ReactDOM.findDOMNode(this.refs.tip);
    	if(this.style.display==='node'){	
    		tipElement.style.display='inline'
    	}else{
    		tipElement.style.display='block'
    	}
    }
});

var React = require('react');

var TestInputComponent = React.createClass({
    displayName: 'TestInputComponent',
    render() {
        return (
            <div><input type="text" value={this.state.inputContent} onChange={this.handleChange}/></div>
        );
    },
    getInitialState() {
        return {
            inputContent:''  
        };
    },
    handleChange(e){
    	alert('changed')
    }
});

ReactDOM.render(<div><TestClickComponent/><br/><br/><br/><TestInputComponent/></div>,document.getElementById('test'))

// module.exports = TestInputComponent;

// module.exports = TestClickComponent;