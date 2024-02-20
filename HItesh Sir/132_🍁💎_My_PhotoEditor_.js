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
Sa2Rate = 100,
GrayIsskale = 0,
Blurrr = 0;


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
		else if(ele.id === 'Saturate'){
			sliderInput.max = '200';
			sliderInput.value = Sa2Rate;
		} 
		else if(ele.id === 'Grayscale'){
			sliderInput.max = '400';
			sliderInput.value = GrayIsskale;
		}
		else if(ele.id === 'Blur'){
			sliderInput.max = '400';
			sliderInput.value = Blurrr;
		}
	})
})





function editImage ()  {
	filterMagnitude.innerHTML = `${sliderInput.value}%`
	let activeSlider = document.querySelector('.filters  .activeBtn')

	if(activeSlider.id === 'Brightness'){
		bright = sliderInput.value
	}
	else if(activeSlider.id === 'Contrast'){
		contrAAst = sliderInput.value
	}
	else if(activeSlider.id === 'Saturate'){
		Sa2Rate = sliderInput.value
	}
	else if(activeSlider.id === 'Grayscale'){
		GrayIsskale = sliderInput.value
	}
	else if(activeSlider.id === 'Blur' ){
		Blurrr = sliderInput.value
	}

	focusImage.style.filter = `brightness(${bright}%)
							   contrast(${contrAAst}%)
							   grayscale(${GrayIsskale}%)
							   saturate(${Sa2Rate}%))
							   blur(${Blurrr}px)
							   `;

}



sliderInput.addEventListener('input', editImage );




