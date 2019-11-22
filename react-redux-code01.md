src/index.js

```
import {provider} from "react-redux"
import {createStore} from "redux"

const reducer = (state, action)=>{
	if(state === undefined){
		return {n: 0}
	}else{
		if(action.type === 'add'){
			var newState = {n: state.n + action.payload}
			return newState
		}else{
			return state
		}
	}
}

const store = createStore(reducer)

ReactDOM.render(
		<Provider store={store}>
			<App />
		</Provider>,
		document.getElementById('root')
);
```

App.js

```
import React, {Component} from 'react'
import {connect} from 'react-redux'

class App extends Component{
	render(){
		return(
				<div>
					你点击了 <span id="value">{this.props.n}</span>次
					<div>
						<button id="add1" onClick={()=>this.props.add1()}+1</button>
					</div>
				</div>
				)
	}
}

function mapStateToProps(state){
	return{
		n: state.n
	}
}

function mapDispatchToProps(dispatch){
	return{
		add1: ()=> dispatch({type: 'add', payload: 1})
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
```

