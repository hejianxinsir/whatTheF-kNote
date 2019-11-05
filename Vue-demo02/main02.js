
let app = new Vue({
	el: '#app',
	data: {
		selected: 0
	},
	template:`
		<div>
			<ol>
				<li v-bind:class="{active: selected === 0}"
						v-on:click="selected = 0">第一</li>
				<li v-bind:class="{active: selected === 1}"
						v-on:click="selected = 1">第二</li>
				<li v-bind:class="{active: selected === 2}"
						v-on:click="selected = 2">第三</li>
			</ol>

			<ol>
				<li v-show="selected === 0">阿大</li>
				<li v-show="selected === 1">阿仲</li>
				<li v-show="selected === 2">阿季</li>
			</ol>
		</div>
	`
})
