var btn= document.querySelector("button");


btn.onclick= function () {

    var userInput= prompt('Do you wanna keep being asked to quit? enter n for no.');
    while (userInput!=='n'){
        userInput= prompt('Do you wanna keep being asked to quit? enter n for no.');
    }

};
