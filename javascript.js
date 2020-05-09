'use strict'

let catPics = ['plusheenAdd.png','plusheenButt.png','plusheenCute.png',
'plusheenDepressed.png','plusheenDrool.png','plusheenKiss.png','plusheenMagnifineGlass.png',
'plusheenMeh.png','plusheenQuestion.png','plusheenScooter.png','plusheenSurprise.png',
'plusheenwink.png' ];

allFunctions = Document.functions.querySelectorAll('div');
console.log(allFunctions);

console.log(catPics.length)

function passThruCats (divs){
    for(let i = 0; i< catPics.length; i++){
        return catPics[i];
    }
}