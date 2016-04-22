'use strict';

var React = require('react');
var React = require('react');

var NodeList = React.createClass({
    displayName: 'NodeList',
    getInitialState: function getInitialState() {
        alert('init');
        return {
            opacity: 1.0,
            fontSize: '20px'
        };
    },
    render: function render() {
        return React.createElement("div", { style: this.state }, "NodeList");
    },
    componentWillMount: function componentWillMount() {
        alert('will');
    },
    componentDidMount: function componentDidMount() {
        alert('did');
        // var _self=this;

        setTimeout(function () {
            this.setState({
                opacity: 0.8,
                color: 'blue',
                fontWeight: 'blod',
                fontSize: '80px'
            });
        }.bind(this), 1000);
    }
});

// module.exports = NodeList;
var List = React.createClass({
    displayName: 'List',
    render: function render() {
        return React.createElement("div", null, React.createElement("span", { className: "box" }, this.props.date), React.createElement(NodeList, null));
    }
});
ReactDOM.render(React.createElement(List, { date: "2016-04-22" }), document.getElementById('List'));
module.exports = List;