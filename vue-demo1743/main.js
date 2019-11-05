
let app = new Vue({
	el: '#app',
	data: {
		open: false
	},
	template:`
		<div>
			<button v-on:click="toggle">Click Me</button>
			<div v-if="open"> Hello </div>
		</div>
	`,
	methods:{
		toggle(){
			this.open = !this.open
		}
	}
})
