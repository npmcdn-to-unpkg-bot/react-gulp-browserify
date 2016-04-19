var TodoList=React.createClass({
	render:function(){
		var createItem=function(itemText){
			return <li>itemText</li>
		}
		var list=[1,2,3,4,5,6];
		list.forEach(createItem);
	}
});

React.render(<TodoList></TodoList>,TodoList);