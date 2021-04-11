# code201
<!DOCTYPE html>
<html>
<head>
    <title>Code 201</title>
    <style>
h1 {
    background-color: hsl(88, 44%, 78%);
    margin: auto;
  width: 60%;
  border: 3px solid #80c025;
  padding: 10px;
}
    </style>
</head>

<body>
    <header>
         
    </header>
    <main>
        <h1>Class 1 Lab</h1>
        <p style ="color: coral;background-color: rgb(175, 188, 211);">Hi, what is your name?</p>
        <p style ="color: rgb(160, 119, 119);background-color: rgb(218, 206, 206);">What is your favourite country to travel to?</p>
        <p style ="color: darkslategray;background-color: rgb(197, 186, 163);">What is your most favorite food?</p>
        <p style = "color: rgb(206, 184, 62);background-color: rgb(136, 117, 117);">What kind of movies would you prefer to see?</p>
        <img src="dina.png" alt="Simply Easy Learning" width="95%">
         
    </main>
    <footer></footer>
    <script>
       
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
    </script>
</body>
</html>