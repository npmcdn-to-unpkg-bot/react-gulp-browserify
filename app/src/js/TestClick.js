'use strict';

var React = require('react');

var TestClickComponent = React.createClass({
    displayName: 'TestClickComponent',
    render: function render() {
        return React.createElement("div", null, React.createElement("button", { type: "button", className: "btn btn-default", onClick: this.handleClick }, "显示|隐藏"), React.createElement("span", { ref: "tip" }, "测试点击"));
    },
    handleClick: function handleClick(e) {
        alert('clicked');
        var tipElement = ReactDOM.findDOMNode(this.refs.tip);
        if (this.style.display === 'node') {
            tipElement.style.display = 'inline';
        } else {
            tipElement.style.display = 'block';
        }
    }
});

var React = require('react');

var TestInputComponent = React.createClass({
    displayName: 'TestInputComponent',
    render: function render() {
        return React.createElement("div", null, React.createElement("input", { type: "text", value: this.state.inputContent, onChange: this.handleChange }));
    },
    getInitialState: function getInitialState() {
        return {
            inputContent: ''
        };
    },
    handleChange: function handleChange(e) {
        alert('changed');
    }
});

ReactDOM.render(React.createElement("div", null, React.createElement(TestClickComponent, null), React.createElement("br", null), React.createElement("br", null), React.createElement("br", null), React.createElement(TestInputComponent, null)), document.getElementById('test'));

// module.exports = TestInputComponent;

// module.exports = TestClickComponent;