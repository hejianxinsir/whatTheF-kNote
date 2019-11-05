
let janson = new Vue({
	el: '#janson',
	data:{
		selected: '',
		tabs: [
			{name:'a',content: '111'},
			{name:'b',content: '222'},
			{name:'c',content: '333'}
		]
	},
	template:`
		<div>
			<ol>
				<li v-for="tab in tabs"
						v-on:click="selected = tab.name"
						v-bind:class="{active: selected === tab.name}"
				>{{ tab.name }}</li>
			</ol>

			<ol>
				<li v-for="tab in tabs"
						v-show="selected === tab.name"
				>{{ tab.content }}</li>	
			</ol>
		</div>	
	`
})
