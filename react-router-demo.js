import React from "react";
import ReactDOM from "react-dom";
import { useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

/* 一下代码可放入 codesanbox 直接运行，注意要先引入 react-router-dom */

import "./styles.css";

function App() {
	function Box1() {
		return <h2 className="change">登录</h2>;
	}
	function Box2() {
		return <h2 className="change">注册</h2>;
	}
	function Welcome(){
		return <h2 className="change">欢迎</h2>
	}

	let path = window.location.pathname;

	let pathFn = () => {
		if (path === "/login") {
			return "登录";
		} else if (path === "/signup") {
			return "注册";
		}else if(path === '/welcome'){
			return '欢迎'
		}
	};

	let initUi = pathFn();
	let [ui, setUi] = useState(initUi);

	// let onClickLogin = () => {
	//   setUi("登录");
	//   window.history.pushState(null, "", "/login");
	// };
	// let onClickSignup = () => {
	//   setUi("注册");
	//   window.history.pushState(null, "", "/signup");
	// };

	return (
			<Router>
			<div>
			{/* <button onClick={onClickLogin}>login</button>
					<button onClick={onClickSignup}>Signup</button> */}

			<ul>
			~ < Link to="/login">登录页</Link> 
			~ <Link to="/signup">注册页</Link>
			~ <Link to="/welcome">欢迎页</Link>
			</ul>

			<hr />

			<Switch>
			<Route exact path="/login">
			<Box1 />
			</Route>
			<Route exact path="/signup">
			<Box2 />
			</Route>
			<Route exact path="/welcome">
			<Welcome />
			</Route>
			</Switch>
			</div>
			</Router>
			);
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

