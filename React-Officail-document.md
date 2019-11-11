1. components: It lets you compose complex UIs from small and isolated pieces of code called “components”.

2. We use components to tell React what we want to see on the screen. When our data changes, React will efficiently update and re-render our components.

3. A component takes in parameters, called props (short for “properties”), and returns a hierarchy of views to display via the render method.

4. The <div /> syntax is transformed at build time to React.createElement('div').The example above is equivalent to:
```
return React.createElement('div', {className: 'shopping-list'},
  React.createElement('h1', /* ... h1 children ... */),
	  React.createElement('ul', /* ... ul children ... */)
		);
```


