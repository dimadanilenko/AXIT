const button = document.querySelectorAll('[data-tab]');
const text = document.querySelectorAll('[data-tab-content]');
button.forEach(function(item){
	item.addEventListener('click', function(item){


		text.forEach(function(item){
			item.classList.add('close')
		})
		const texts = document.querySelector('#' + this.dataset.tab);
		texts.classList.remove('close'); 
	});

});

button.forEach(function(item){
	item.addEventListener('click', function(item){

		button.forEach(function(team){
			team.classList.remove('colorBack')
		})



		this.classList.add('colorBack')
	})
})

//0985251215