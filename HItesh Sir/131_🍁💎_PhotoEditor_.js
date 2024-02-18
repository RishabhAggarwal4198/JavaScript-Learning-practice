let  choose_img_Btn = document.querySelector('.choose_img  button')
let choose_Input = document.querySelector('.choose_img input')
let imgSrc = document.querySelector('.view_img img');
let filter_buttons = document.querySelectorAll('.icons_room  button');
let slider = document.querySelector('.slider input')
let filter_name = document.querySelector(".filter_info  .name")
let slider_value = document.querySelector(".filter_info  .value")
let rotate_btns = document.querySelectorAll('.icons_room1  button')
let reset = document.querySelector('.reset');
let save = document.querySelector('.save');


let brightness = 100, 
contrast = 100,
saturate = 100,
invert = 0,
blur = 0,
grayscale = 0,
rotate = 0,
flip_x = 1,
flip_y = 1;


choose_img_Btn.addEventListener ('click', () => choose_Input.click());  
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



filter_buttons.forEach((element) => {
	element.addEventListener('click', () => {
		document.querySelector(".active").classList.remove("active");
		element.classList.add("active");

		 filter_name.innerText = element.id;

		 if(element.id === 'brightness'){
			slider.max = '200';
			slider.value = brightness;
			slider_value.innerText = `${brightness}`
		 } else if (element.id === 'contrast'){
			slider.max = '200';
			slider.value = contrast;
			slider_value.innerText = `${contrast}`
		 } else if (element.id === 'contrast'){
			slider.max = '200'; 
			slider.value = saturate;
			slider_value.innerText = `${saturate}`
		 } else if (element.id === 'invert'){
			slider.max = '100';
			slider.value = invert;
			slider_value.innerText = `${invert}`
		 } 
		 else if (element.id === 'blur'){
			slider.max = '100';
			slider.value = blur; 
			slider_value.innerText = `${blur}`
		 }
		
	});
});





slider.addEventListener('input', () => {
	slider_value.innerText = `${slider.value}%`;
	let sliderState = document.querySelector(".icons_room  .active");
	if(sliderState.id === "brightness" ){
		brightness = slider.value;
	} else if (sliderState.id === "contrast") {
		contrast = slider.value;
	} else if (sliderState.id === "saturate") {
		saturate = slider.value;
	} else if (sliderState.id === "invert") {
		invert = slider.value;
	}
	else if (sliderState.id === "blur") {
		blur = slider.value;
	}
	else if (sliderState.id === "grayscale") {
		grayscale = slider.value;
	}

	
	imgSrc.style.filter = `brightness(${brightness}%)
						   contrast(${contrast}%)  
	                	   saturate(${saturate}%)
						   invert(${invert}%)
						   grayscale(${grayscale}%)
						   blur(${blur}px)`;
});



rotate_btns.forEach((ele) => {
	ele.addEventListener('click', () => {
		if(ele.id === "rotate_left"){
			rotate -= 90;
		} else if (ele.id === "rotate_right"){
			rotate += 90;
		} else if (ele.id === 'flip_x') {
			flip_x = flip_x === 1 ? -1 : 1      // Watch [@ 1:32:50]
		}else if (ele.id === 'flip_y') {
			flip_y = flip_y === 1 ? -1 : 1      // Watch [@ 1:32:50]
		}


		imgSrc.style.transform = `rotate(${rotate}deg)  scale(${flip_x}, ${flip_y})`;
	})
})


reset.addEventListener('click', () => {
	brightness = '100';
	saturate = '100';
	contrast = '100';
	invert = '0';
	blur = '0';
	rotate = 0;
	flip_x = 1;
	flip_y = 1;


	imgSrc.style.transform = `rotate(${rotate}deg)  scale(${flip_x}, ${flip_y})`;

	imgSrc.style.filter = `brightness(${brightness}%)
						   contrast(${contrast}%)  
	                	   saturate(${saturate}%)
						   invert(${invert}%)
						   grayscale(${grayscale}%)
						   blur(${blur}px)`;
})


save.addEventListener('click', () => {
	let canvas = document.createElement('canvas')
	// console.log(canvas.getContext('2d'));
	let ctx = canvas.getContext('2d');
	canvas.width = imgSrc.naturalWidth
	canvas.height = imgSrc.naturalHeight;

	ctx.filter = `brightness(${brightness}%)
					contrast(${contrast}%)  
					saturate(${saturate}%)
					invert(${invert}%)
					grayscale(${grayscale}%)
					blur(${blur}px)`;

	ctx.scale(flip_x, flip_y);	
	ctx.translate(canvas.width / 2 , canvas.height / 2);		
	ctx.drawImage(
		imgSrc, 
		-canvas.width/2, 
		-canvas.height/2, 
		canvas.width, 
		canvas.height
		);


		
	let link = document.createElement('a')	
	link.download = 'img.jpg';
	link.href = canvas.toDataURL();
	link.click();

});