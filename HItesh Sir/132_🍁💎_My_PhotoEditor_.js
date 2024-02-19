let uploadBtn = document.querySelector('#uploaD button')
let uploadInput = document.querySelector('#uploaD input')
let focusImage = document.querySelector('.image_div  img')



uploadBtn.addEventListener('click', () => uploadInput.click());

uploadInput.addEventListener('change', () => {
	let newUrl = URL.createObjectURL(uploadInput.files[0])
	focusImage.src = newUrl
	focusImage.classList.remove('mainIMG')
	focusImage.classList.add('NewImg')
})