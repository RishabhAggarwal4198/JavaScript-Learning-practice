let uploadBtn = document.querySelector('#uploaD button')
let uploadInput = document.querySelector('#uploaD input')
let focusImage = document.querySelector('.image_div  img')
let outContainer = document.querySelector('.out_container')
let filterBtns = document.querySelectorAll('.filters button')
let sliderInput = document.querySelector('.slider input')
let filterType = document.querySelector('.filter_type')
let filterMagnitude = document.querySelector('.value')


let bright = 100,
contrAAst = 100,
saturation = 100,
Gray_iSSkale = 0,
Balarrr = 0;


uploadBtn.addEventListener('click', () => uploadInput.click());

uploadInput.addEventListener('change', () => {
	let newUrl = URL.createObjectURL(uploadInput.files[0])
	focusImage.src = newUrl
	focusImage.classList.remove('mainIMG')
	focusImage.classList.add('NewImg')
	outContainer.classList.remove('disabled')
})



filterBtns.forEach((ele) => {
	ele.addEventListener('click', () => {
		document.querySelector('.activeBtn').classList.remove('activeBtn')
		ele.classList.add('activeBtn')

		filterType.innerHTML = ele.id.toUpperCase()

		if(ele.id === 'Brightness'){
			sliderInput.max = '400';
			sliderInput.value = bright;
			// filterMagnitude.innerText = `${bright}`
		}
		else if(ele.id === 'Contrast'){
			sliderInput.max = '400';
			sliderInput.value = contrAAst;
		}
		// else if(ele.id === 'Saturate'){
		// 	sliderInput.max = '200';
		// 	sliderInput.value = saturation;
		// }
		else if(ele.id === 'Grayscale'){
			sliderInput.max = '200';
			sliderInput.value = Gray_iSSkale;
		}
	})
})



// function editImage () {
// }



sliderInput.addEventListener('input', () => {
	filterMagnitude.innerHTML = `${sliderInput.value}%`
	let activeSlider = document.querySelector('.filters  .activeBtn')

	if(activeSlider.id === 'Brightness'){
		bright = sliderInput.value
	}
	else if(activeSlider.id === 'Contrast'){
		contrAAst = sliderInput.value
	}
	// else if(activeSlider.id === 'Saturate'){
	// 	saturation = sliderInput.value
	// }
	else if(activeSlider.id === 'Gray_iSSkale'){
		Gray_iSSkale = sliderInput.value
	}

	focusImage.style.filter = `brightness(${bright}%)
							   contrast(${contrAAst}%)
							   grayscale(${Gray_iSSkale}%)`;
							//   saturate(${saturation}%))`;

});




