let inputName = prompt("Hi, what is your name?") ;
function printInputName (inputName) {
alert("Hey!"+inputName+" nice too meet you!, i am Dina") ;
console.log("Hi, what is your name?", inputName)

};
printInputName (inputName) ;

let inputCountry = prompt("What is your favourite country to travel to?");
function printInputCountry (inputCountry) {
   alert('Wow , It is a beautiful Country' ) ;
   console.log("'What is your favourite country to travel to?", inputCountry)
};
printInputCountry (inputCountry) ;

let inputFood = prompt("What is your most favorite food?");
function printInputFood (inputFood) {
   alert("Me either , i like "+inputFood+"") ;
   console.log("What is your most favorite food?", inputFood)
};
printInputFood (inputFood) ;

let inputMovie = prompt("What kind of movies would you prefer to see?");
function printInputMovie (inputMovie) {
   alert(" "+inputName+" , imagine yourself eating "+inputFood+" and watching "+inputMovie+" movie with your friends in "+inputCountry+" ") ;
   console.log("What kind of movies would you prefer to see?" , inputMovie)
};
printInputMovie (inputMovie) ;