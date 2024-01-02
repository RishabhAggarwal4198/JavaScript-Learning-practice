const buttons = document.querySelectorAll('.button');
// console.log(buttons);
const body = document.querySelector('body') 

buttons.forEach(function (button){                          //[📍📍We got an "NodeList" over here (not an HTML collection)  that's why we used "ForEach" loop overe here ] 
    // console.log(button); 
    button.addEventListener('click', function (e){
        console.log(e); 
        console.log(e.target);                              //💎💎✅💎💎 "e.target" gonna print the whole targeted button (DOM element) that was clicked   
        if(e.target.id === 'grey'){ 
            body.style.backgroundColor = e.target.id; 
        }   
        if(e.target.id === 'white'){
            body.style.backgroundColor = e.target.id;
        } 
        if(e.target.id === 'blue'){ 
            body.style.backgroundColor = e.target.id;
        }
        if(e.target.id === 'yellow'){
            body.style.backgroundColor = e.target.id;
        }
        if(e.target.id === 'Red'){
            body.style.backgroundColor = e.target.id;
        } 
    }) 
});








