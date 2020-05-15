'use strict'
let cats = ['plusheenAdd.png','plusheenButt.png','plusheenCute.png',
'plusheenDepressed.png','plusheenDrool.png','plusheenKiss.png','plusheenMagnifineGlass.png',
'plusheenMeh.png','plusheenQuestion.png','plusheenScooter.png','plusheenSurprise.png',
'plusheenwink.png' ];

let catQuotes = ['“In ancient times cats were worshipped as gods; they have not forgotten this.” – Terry Pratchett',
    '“I had been told that the training procedure with cats was difficult. It’s not. Mine had me trained in two days.” – Bill Dana',
    '“Cats are inquisitive, but hate to admit it.” – Mason Cooley',
    '“As anyone who has ever been around a cat for any length of time well knows, \
    cats have enormous patience with the limitations of the humankind.” – Cleveland Amory',
    '“I have studied many philosophers and many cats. The wisdom of cats is infinitely superior.” – Hippolyte Taine',
    '\“There are two means of refuge from the miseries of life: music and cats.\” – Albert Schweitzer',
    '“Owners of dogs will have noticed that, if you provide them with food and water and shelter and affection,\
     they will think you are God. Whereas owners of cats are compelled to realize that, \
     if you provide them with food and water and affection,\
    they draw the conclusion that they are God.” – Christopher Hitchens',
    '“A happy arrangement: many people prefer cats to other people, and many cats prefer people to other cats.” – Mason Cooley',
    '“It is impossible for a lover of cats to banish these alert, gentle, and discriminating friends, \
       who give us just enough of their regard and complaisance to make us hunger for more.” – Agnes Repplier',
    '“How we behave toward cats here below determines our status in heaven.” – Robert A. Heinlein',
    '“I used to love dogs until I discovered cats.” – Nafisa Joseph',
]

/* cat quote generator */
function getRandomCatQuote (){
    let low = 0;
    let high = catQuotes.length;
    console.log(Math.floor(Math.random() * (1 - low + high))-low)
    return catQuotes[Math.floor(Math.random() * (1 - low + high))-low]
}
console.log(getRandomCatQuote());

function yeet(){
let screen = document.getElementsByClassName("returnScreen");
console.log('helllooooo')
console.log(screen.innerHTML)
screen[0].innerHTML ='blue'
}
function yeetTwo(){
    let screen = document.getElementsByClassName("returnScreen");
    console.log('helllooooo')
    console.log(screen.innerHTML)
    screen[0].innerHTML ='azul'
    }