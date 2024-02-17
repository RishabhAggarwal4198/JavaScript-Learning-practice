let  choose_img_Btn = document.querySelector('.choose_img  button')
let choose_Input = document.querySelector('.choose_img input')
let imgSrc = document.querySelector('.view_img img');
let filter_buttons = document.querySelectorAll('.icons_room  button');
let slider = document.querySelector('.slider input')



choose_img_Btn.addEventListener('click', () => choose_Input.click());  
choose_Input.addEventListener('change', () => {

    //  console.log(choose_Input.files[0]); 
	let file = choose_Input.files[0];
	if(!file) return;           //✅✅If 'file' doesn't exist return nothing
	imgSrc.src = URL.createObjectURL(file);

	// document.querySelector('.container').classList.remove('disabled')
								// 🔽🔽
	imgSrc.addEventListener('load', () => {
		document.querySelector('.container').classList.remove('disabled')
	})
})


filter_buttons.forEach((ele) => {
	ele.addEventListener('click', () => {
		 document.querySelector(".active").classList.remove("active");
		 ele.classList.add("active");
		 if(ele.id === 'brightness'){
			console.log();
		 }
	});
});
