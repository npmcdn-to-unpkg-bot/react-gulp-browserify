
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
    	// var tipElement=ReactDOM.findDOMNode(this.refs.tip);
        //
        var  tipElement=this.refs.tip.getDOMNode();
        console.log(tipElement)
    	if(this.style.display==='none'){
        alert(1)	
    		tipElement.style.display='inline'
    	}else{
            alert(2)
    		tipElement.style.display='none'
    	}
    }
});

var React = require('react');

var TestInputComponent = React.createClass({
    displayName: 'TestInputComponent',
    render() {
        return (
            <div><input type="text" value={this.state.inputContent} onInput={this.changeHandler}/><br/><br/><br/><span ref="showBox">{this.state.inputContent}</span></div>
        );
    },
    getInitialState() {
        return {
            inputContent:''  
        };
    },
    changeHandler(e){
    	alert('changed')
    }
});

ReactDOM.render(<div><TestClickComponent/><br/><br/><br/><TestInputComponent/></div>,document.getElementById('test'))

// module.exports = TestInputComponent;

// module.exports = TestClickComponent;