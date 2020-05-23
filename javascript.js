'use strict'

/*calculator class */
const numbers = document.querySelectorAll('[data-numbers-button]');
console.log(numbers);
const operations = document.querySelectorAll('[data-functions]')
class Calculator{

}


const catImages = ['gifs/plusheen.gif','plusheenAdd.png','plusheenButt.png','plusheenCute.png',
'plusheenDepressed.png','plusheenDrool.png','plusheenKiss.png','plusheenMagnifineGlass.png',
'plusheenMeh.png','plusheenQuestion.png','plusheenScooter.png','plusheenSurprise.png',
'plusheenwink.png' ];

const catQuotes = ['In ancient times cats were worshipped as gods; they have not forgotten this. - Terry Pratchett',
'I had been told that the training procedure with cats was difficult. It is not. Mine had me trained in two days. - Bill Dana',
'Cats are inquisitive, but hate to admit it. - Mason Cooley',
'As anyone who has ever been around a cat for any length of time well knows, \
cats have enormous patience with the limitations of the humankind. - Cleveland Amory',
'I have studied many philosophers and many cats. The wisdom of cats is infinitely superior. - Hippolyte Taine',
'There are two means of refuge from the miseries of life: music and cats. - Albert Schweitzer',
'Owners of dogs will have noticed that, if you provide them with food and water and shelter and affection,\
 they will think you are God. Whereas owners of cats are compelled to realize that, \
 if you provide them with food and water and affection,\
they draw the conclusion that they are God. - Christopher Hitchens',
'A happy arrangement: many people prefer cats to other people, and many cats prefer people to other cats. - Mason Cooley',
'It is impossible for a lover of cats to banish these alert, gentle, and discriminating friends, \
   who give us just enough of their regard and complaisance to make us hunger for more. - Agnes Repplier',
'How we behave toward cats here below determines our status in heaven. - Robert A. Heinlein',
'I used to love dogs until I discovered cats. - Nafisa Joseph',
];

let test =[1,2,3,4,5,6,7,8]

/* cat quote generator (=♡ ᆺ ♡=)
*/

function getRandomCatQuote (arr){
    
    let divToInsert = document.querySelector('[data-catQuoteBox]');
    let low = 0;
    let high = arr.length-1;
    let numberGen = (Math.random() * (high - low +1))+low;
    numberGen= Math.floor(numberGen);
    divToInsert.textContent = arr[numberGen];  
}

function numberGen (arr){

    let low = 0;
    let high = arr.length-1;
    let numberGen = (Math.random() * (high - low +1))+low;
    numberGen= Math.floor(numberGen);
    return numberGen
}

function noRepeatNumbers (func){
    let dublicateCheck = [];
    let ranNum = numberGen(arr);
    let ranNum2 =numberGen(arr);
    dublicateCheck.push(ranNum);

    
    
    if(firstNum == secondNum){secondNum=numberGen(arr)}
}

let catQuote = document.querySelector('[data-catQuoteButton]');
catQuote.addEventListener('click', function(){getRandomCatQuote(catQuotes)})


/* cat sounds for buttons */
var catSound = new Audio;
    catSound.src = 'Kitten01.wav';
    catSound.play();
function catSound (){
    var catSound = new Audio;
    catSound.src = 'cat.wav';
    catSound.play();
}
 // Step 1: Find the element we want the event on
 let numberOne = document.querySelector('[data-numbers-one]');
        // Step 2: Define the event listener function
        // Step 3: Attach event listener to element

/*test function*/
function yeet(){
let screen = document.getElementsByClassName("returnScreen");
screen[0].innerHTML +='blue'
}
function yeetTwo(){
    let screen = document.getElementsByClassName("returnScreen");
    screen[0].innerHTML ='azul'
    }

/* iterating through all the photos*/
let catImageSources = [];
function iterateImage (folderSrc,arrOfImages,arr){
    /* pass through images and make them = to document object */
    for(let i=0; i<arrOfImages.length;i++){
       arr.push(folderSrc+arrOfImages[i])
    }
    
}

iterateImage('pics/plusheen/',catImages,catImageSources);

function setArrOfValToImage () {
    let src = document.querySelectorAll('[data-numbers-button]');
    for(let i=0;i<src.length;i++){
        src[i].style.backgroundImage ='url(' + catImageSources[i] +')';
    }
}

setArrOfValToImage();