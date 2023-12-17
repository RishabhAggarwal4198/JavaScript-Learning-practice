const form = document.querySelector('form')

form.addEventListener('submit', function(e) {
    e.preventDefault()

    const height = parseInt(document.querySelector('#height').value)     // [📍 by using "parseInt"  the value which we got in STRINGS got parsed into INTEGERS  ]
    const weight = parseInt(document.querySelector('#weight').value)
    const results= document.querySelector('#results')
      

    if(height === '' || height < 0 || isNaN (height) ){                 // [📍 '' = it should not be empty, isNaN(height) = if the value received is convertible to number & not a non numeric value. So it will display true otherwise false ]
        results.innerHTML = `Please give a valid height ${height}`
    }
    results.innerHTML = `${height}`


});


