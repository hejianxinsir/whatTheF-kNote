
let janson = new Vue({
	el:'#janson',
	data:{
		transformValue: ''		
	},
	template:`
		<div>
			<div class="window">
				<div class="slides" v-bind:style="{transform: transformValue}"></div>
			</div>
			<button v-on:click="go(0)">1</button>
			<button v-on:click="go(1)">2</button>
			<button v-on:click="go(2)">3</button>
		</div>
	`,
	methods: {
		go(index){
			console.log(index)
			this.transformValue = `translateX(${-100*index}px)` 
		}
	}
})
