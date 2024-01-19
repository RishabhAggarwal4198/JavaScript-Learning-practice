document.querySelector('#Home').addEventListener('click', function () {
    document.querySelector('#doc').style.backgroundColor="Red"
})

document.querySelector('#File').addEventListener('click', function () {
    document.querySelector('#doc').style.backgroundColor="Green"
})


document.querySelector('#Insert').addEventListener('click', function(){
    document.querySelector('#doc').style.height="500px"
    document.querySelector('#doc').style.width="300px"
    document.querySelector('#doc').style.backgroundColor="Pink"
    document.querySelector('h1').innerHTML = "Hello Everyone This is my First SelfMade Project"

})






let myArr2 = ["Emily", "Sylvie", "Mindy", "Antonie", "Gabriel" ]

let newArr2 = myArr2.map((vall) => {
    let nm = vall + ` French`;
    return nm
})

console.log(newArr2);


