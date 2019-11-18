1. components: It lets you compose complex UIs from small and isolated pieces of code called “components”.

笔记源自: https://reactjs.org/tutorial/tutorial.html

2. We use components to tell React what we want to see on the screen. When our data changes, React will efficiently update and re-render our components.

3. A component takes in parameters, called props (short for “properties”), and returns a hierarchy of views to display via the render method.

4. The <div /> syntax is transformed at build time to React.createElement('div').The example above is equivalent to:
```
return React.createElement('div', {className: 'shopping-list'},
  React.createElement('h1', /* ... h1 children ... */),
	  React.createElement('ul', /* ... ul children ... */)
		);
```

5. To “remember” things, components use state. 这句很重要，state 是用来记住东西的。

React components can have state by setting this.state in their constructors. this.state should be considered as private to a React component that it’s defined in. Let’s store the current value of the Square in this.state, and change it when the Square is clicked.

this.state 在 constructors 里面设置。this.state 是 React component 私有的。this.state 可以存值，可以改变值。

6. First, we’ll add a constructor to the class to initialize the state.

constructor 是用来 initialize the state 的

7. In JavaScript classes, you need to always call super when defining the constructor of a subclass. All React component classes that have a constructor should start it with a super(props) call.

定义 constructor 的时候，总是要写 super(props); 所有有 constructor 的 React component classes 都应该有 super(props).

8. There are generally two approaches to changing data. The first approach is to mutate the data by directly changing the data’s values. The second approach is to replace the data with a new copy which has the desired changes.

9. In React, function components are a simpler way to write components that only contain a render method and don’t have their own state.

**function components** 是简易版的 conponent ，只有 render 方法且没有自己的 state。




