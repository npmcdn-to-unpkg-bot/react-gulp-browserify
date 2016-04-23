'use strict';

var React = require('react');

var TestClickComponent = React.createClass({
    displayName: 'TestClickComponent',
    render: function render() {
        return React.createElement("div", null, React.createElement("button", { type: "button", className: "btn btn-default", onClick: this.handleClick }, "显示|隐藏"), React.createElement("span", { ref: "tip" }, "测试点击"));
    },
    handleClick: function handleClick(e) {
        alert('clicked');
        // var tipElement=ReactDOM.findDOMNode(this.refs.tip);
        //
        var tipElement = this.refs.tip.getDOMNOdes();
        console.log(tipElement);
        if (this.style.display === 'none') {
            alert(1);
            tipElement.style.display = 'inline';
        } else {
            alert(2);
            tipElement.style.display = 'none';
        }
    }
});

var React = require('react');

var TestInputComponent = React.createClass({
    displayName: 'TestInputComponent',
    render: function render() {
        return React.createElement("div", null, React.createElement("input", { type: "text", value: this.state.inputContent, onInput: this.changeHandler }), React.createElement("br", null), React.createElement("br", null), React.createElement("br", null), React.createElement("span", { ref: "showBox" }, this.state.inputContent));
    },
    getInitialState: function getInitialState() {
        return {
            inputContent: ''
        };
    },
    changeHandler: function changeHandler(e) {
        alert('changed');
    }
});

ReactDOM.render(React.createElement("div", null, React.createElement(TestClickComponent, null), React.createElement("br", null), React.createElement("br", null), React.createElement("br", null), React.createElement(TestInputComponent, null)), document.getElementById('test'));

// module.exports = TestInputComponent;

// module.exports = TestClickComponent;