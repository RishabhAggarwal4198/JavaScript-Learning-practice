const form = document.querySelector('form')

form.addEventListener('submit', function(e) {
    e.preventDefault()

    const height = parseInt(document.querySelector('#height').value)     // [📍 by using "parseInt"  the value which we got in STRINGS got parsed into INTEGERS  ]
    const weight = parseInt(document.querySelector('#weight').value)
    const results= document.querySelector('#results')
    const Suggestion = document.querySelector('#Suggestion')
      

    if(height === '' || height < 0 || isNaN (height) ){                 // [📍 '' = it should not be empty, isNaN(height) = if the value received is convertible to number or if it's a numeric value. So it will display true otherwise false ]
        results.innerHTML = `Please give a valid height ${height}`;
    }else if (weight === '' || weight < 0 || isNaN (weight) ){                 
        results.innerHTML = `Please give a valid weight ${weight}`;
    }else {
        const bmi = (weight / ((height*height)/10000)).toFixed(2)
        // show the result 
        if ( bmi < 18.6 ){
            results.innerHTML = `Your weight is ${bmi}, Your are under Weight`
        }else if ( bmi >= 18.6 && bmi <= 24.9 ){
            results.innerHTML = `Your weight is ${bmi}, Your  Weight is fine`
        } else {
            results.innerHTML = `Your weight is ${bmi}, Your are Overweight`
        }
        
    }
    
});


