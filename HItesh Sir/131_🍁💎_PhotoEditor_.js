let  choose_img_Btn = document.querySelector('.choose_img  button')
let choose_Input = document.querySelector('.choose_img input')
let imgSrc = document.querySelector('.view_img img');
let filter_buttons = document.querySelectorAll('.icons_room  button');
let slider = document.querySelector('.slider input')
let filter_name = document.querySelector(".filter_info  .name")
let slider_value = document.querySelector(".filter_info  .value")

let brightness = 100;



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

		 filter_name.innerText = ele.id

		 if(ele.id === 'brightness'){
			slider.max = '200';
			slider.value = brightness;
			slider_value.innerText = `${brightness}`
		 }
	});
});

