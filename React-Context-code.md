React Context 换肤小应用，在 CodeSanbox 里写的

```
import React from 'react';
import ReactDOM from 'react-dom';
import "./styles.css";

const themeContext = React.createContext();

function Box(props){
	return <div class={`box ${props.theme}`}>{props.children}</div>
}

function Input(){
	return <input />
}

function Button(){
	return <button>button</button>
}

class App extends React.Component{
	change = ()=>{
		if(this.state.theme === 'green'){
			this.setState({theme: 'red'})
		}else{
			this.setState({theme: 'green'})
		}
	}

	constructor(){
		super();
		this.state = {
			theme: 'green'
		}
	}

	render(){
		return(
			<themeContext.Provider value={this.state.theme}>
				<div className="App">
					<button>changeSkin</button>
					<themeContext.Consumer>
						{
							theme=>(
								<Box theme={theme}><Input /></Box>
								<Box theme={theme}><Button /><Box>
							)
						}
					<themeContext.Consumer>
				</div>
			</themeContext.Provider>
		)
	}
}


ReactDOM.render(<App />, document.getElementById('root'))

```
