
var Mock = require('mockjs');

var wWidth,wHeight;
//生成随机数
var _random=function(min,max){
	return  min+Math.random()*(max-min+1);
}
wWidth=document.body.clientWidth;
wHeight=document.body.clientHeight;
//mock
var data = Mock.mock({
    'list|1-24': [{
        title: '@title',
        image: '@image(240x400,@color)'
    }]
});
for (var i = 0; i < data.list.length; i++) {
	let item=data.list[i];
	item.pos={
		top:_random(0,wHeight-400)+'px',
		left:_random(0,wWidth-240)+'px',
		transform:`rotateZ(${(Math.random()>0.5?1:-1)*_random(0,90)}deg)`
	}
}

var ImgViewer=React.createClass({
	getInitialState() {
	    return {
	        newStateClassName:'front',
	        z:{
	        	zIndex:10
	        }
	    };
	},
	render(){
		return (

			<li className={this.state.newStateClassName} 
				onMouseOver={this.handleMouseOver} onMouseOut={this.handleMouseOut}
				style={$.extend(this.props.info.pos,this.state.z)} onClick={this.handleClick}>
					<img src={this.props.info.image} alt={this.props.info.title} title={this.props.info.title}/>
					<div className="caption">	
						<h2>{this.props.info.title}</h2>
					</div>
				</li>

			)
	},
	handleMouseOver(e){
		this.setState({
			newStateClassName:'back',
			z:{
				zIndex:20
			},
			isCenter:false
		})
	},
	handleMouseOut(e){
		this.setState({
			newStateClassName:'front',
			z:{
				zIndex:10
			}
		})
	},
	handleClick(e){
		// this.setState({
		// 	newStateClassName:'front',
		// 	z:{
		// 		zIndex:20,
		// 		left:(wWidth-240)/2+'px',
		// 		top:(wHeight-400)/2+'px',
		// 		transform:'rotateZ(0)',
		// 		transition:'all .5s ease'
		// 	}
		// })
	}
})
var Gallery=React.createClass({
	render(){
		var imageArray=[];
		var createItem=function(item){
			imageArray.push(<ImgViewer info={item}/>)
		}
		this.props.list.forEach(createItem);
		return (
			<ul className="gallery">
				{imageArray}
			</ul>
		)
	}
})

ReactDOM.render(<Gallery list={data.list}/>,document.querySelector('#gallery'))
