
let app = new Vue({
	el: '#app',
	data: {
		selected: 0	
	},
	template:`
	<div>
		<ul>
			<li v-bind:class="{active: selected === 0}"
					v-on:click="selected = 0">红色</li>
			<li v-bind:class="{active: selected === 1}"
					v-on:click="selected = 1">绿色</li>
			<li v-bind:class="{active: selected ===2}"
					v-on:click="selected = 2">蓝色</li>
		</ul>

		<ul>
			<li v-show="selected === 0">火焰山</li>
			<li v-show="selected === 1">森林女帝</li>
			<li v-show="selected === 2">填空之城</li>
		</ul>
	</div>
	`,
	methods: {
	}
})
