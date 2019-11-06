
let janson = new Vue({
	el: '#janson',
	data: {
		selected: '',
		tabs: [
			{name: '老李', content: '9999'},
			{name: '小河', content: '9988'},
			{name: '二五', content: '8909'}
		]
	},
	template:`
		<div>
			<ol>
				<li v-for="tab in tabs"
						v-bind:class="{active: tab.name === selected}"
						v-on:click="selected = tab.name"
				>{{ tab.name }}</li>
			</ol>

			<ol>
				<li v-for="tab in tabs"
						v-show="selected === tab.name"
				>{{ tab.content }}</li>
			</ol>
		</div>
	`,
	methods: {
	
	}
})
