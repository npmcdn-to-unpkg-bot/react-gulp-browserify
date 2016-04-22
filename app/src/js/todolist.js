"use strict";

var TodoList = React.createClass({ displayName: "TodoList",
	render: function render() {
		var _html = '';
		var createItem = function createItem(itemText) {
			html += React.createElement("li", null, itemText);
		};
		var list = [1, 2, 3, 4, 5, 6];
		var i = 0,
		    len = list.length;
		for (; i < len; i++) {
			var item = list[i];
			createItem(item);
		}
		return _html;
	}
});

ReactDOM.render(React.createElement(TodoList, null), document.getElementById('todolist'));