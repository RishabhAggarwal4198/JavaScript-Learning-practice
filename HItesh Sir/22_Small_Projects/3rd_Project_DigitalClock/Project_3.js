const clock = document.getElementById('clock')
// const clock = document.querySelector('#clock')       // [📍 Both this & the statement above gonna give the same result ]



setInterval(function(){
    let date = new Date();
    // console.log(date.toLocaleTimeString());
    clock.innerHTML = date.toLocaleTimeString()
}, 1000)