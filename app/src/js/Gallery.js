'use strict';

var Mock = require('mockjs');

var wWidth, wHeight;
//生成随机数
var _random = function _random(min, max) {
	return min + Math.random() * (max - min + 1);
};
wWidth = document.body.clientWidth;
wHeight = document.body.clientHeight;
//mock
var data = Mock.mock({
	'list|1-24': [{
		title: '@title',
		image: '@image(240x400,@color)'
	}]
});
for (var i = 0; i < data.list.length; i++) {
	var item = data.list[i];
	item.pos = {
		top: _random(0, wHeight - 400) + 'px',
		left: _random(0, wWidth - 240) + 'px',
		transform: 'rotateZ(' + _random(0, 90) + 'deg)'
	};
}

var ImgViewer = React.createClass({ displayName: "ImgViewer",
	getInitialState: function getInitialState() {
		return {
			newStateClassName: 'front',
			z: {
				zIndex: 10
			}
		};
	},
	render: function render() {
		return React.createElement("li", { className: this.state.newStateClassName,
			onMouseOver: this.handleMouseOver, onMouseOut: this.handleMouseOut, style: $.extend(this.props.info.pos, this.state.z) }, React.createElement("img", { src: this.props.info.image, alt: this.props.info.title, title: this.props.info.title }), React.createElement("div", { className: "caption" }, React.createElement("h2", null, this.props.info.title)));
	},
	handleMouseOver: function handleMouseOver(e) {
		this.setState({
			newStateClassName: 'back',
			z: {
				zIndex: 20
			}
		});
	},
	handleMouseOut: function handleMouseOut(e) {
		this.setState({
			newStateClassName: 'front',
			z: {
				zIndex: 10
			}
		});
	}
});
var Gallery = React.createClass({ displayName: "Gallery",
	render: function render() {
		var imageArray = [];
		var createItem = function createItem(item) {
			imageArray.push(React.createElement(ImgViewer, { info: item }));
		};
		this.props.list.forEach(createItem);
		return React.createElement("ul", { className: "gallery" }, imageArray);
	}
});

ReactDOM.render(React.createElement(Gallery, { list: data.list }), document.querySelector('#gallery'));