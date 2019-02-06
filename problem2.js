


// this is the code that calls the classes to chnge when the button is pressed





var btn1= document.getElementById('button1');
var btn2= document.getElementById("button2");
var header= document.querySelector('header');

function btn1Clicked(){
    console.log('Clicked');
    header.classList.add('blueBackground');
    header.innerHTML= "1";


}

function btn2Clicked(){
    console.log('Clicked2');
    header.classList.add('redBackground');
    header.innerHTML= '2'
}

btn1.addEventListener('click', btn1Clicked);
btn2.addEventListener('click', btn2Clicked );

