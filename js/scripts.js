$(document).ready(function() {
  var languages = ["Ruby","C#","Javascript","Go","Python"]; // This is for use with the function from line 9 to 26, regarding the form in survey.html.
  $("#calc").submit(function(event) {
    var input = $("input#string").val();
    console.log(input);
    write(resolve(input));
    event.preventDefault();
  });
  $("form#codeform").submit(function(event) { // Triggers when form is submitted.
    var id = parseInt($("input#id").val());
    var dob = $("input#dob").val();
    var num0 = parseInt($("input#num0").val()); // These lines gather data from the form and store them as variables
    var num1 = parseInt($("input#num1").val());
    var num2 = parseInt($("input#num2").val());
    var num3 = parseInt($("input#num3").val());

    var results = logic(id,dob,num0,num1,num2,num3); // creates a new variable based on the return of the logic function, given the variables generated from the form above as arguments.
    console.log(results); // This is for active debugging purposes.
    // The lines below regard to displaying the results generated in the variable above.
    $(".para").hide();
    $(".language").text(languages[results]); // It calls languages[results] because I have the array in line 2 to call from, I'm simply using the results value to determine the index of the element to place.
    $(".para#title").fadeIn();
    $(".para#"+languages[results]).fadeIn();

    event.preventDefault();
  });
});
function logic(id, dob, num0, num1, num2, num3) {
  var points = [0,0,0,0,0,0]; // point value toward each language
  points[0] = num2 + num3;
  points[1] = num2 + num1;
  points[2] = num1 + num3;
  points[3] = num0 + num1;
  points[4] = num0 + num2;
  points[5] = num0 + num3;

  return (Math.floor(points[(id%6)]%6));
  console.log(dob); // We don't use the date of birth because I'm bad at using Epoch times, so I put a line that does not run to say I'm going to console log it so it does not feel unwanted.
}
function resolve(num) { // Supports the calculator function in survey.html.
  var returnMe = eval(num);
  return returnMe;
}
function write(num) { // Supports the calculator function in survey.html.
  console.log(num);
  $("h3#s").text(num);
}
function dark() { // This is a basic dark mode-light mode toggle and can/will be used on all attached pages. Simply point a button to it through onClick and watch it do its work. Add any elements that are not affected as needed.
  console.log("success");
  $('.container').toggleClass("bg-dark");
  $('.navbar').toggleClass("navbar-light bg-light bg-secondary");
  $('.card.jumbotron').toggleClass('');
  $('#header').toggleClass("bg-secondary");
  $('.card-header').toggleClass('bg-info');
  $('.card-body').toggleClass('bg-secondary');
  $('.card').toggleClass('bg-secondary');
  $('.card-footer').toggleClass('bg-info');
  $('.input').toggleClass('bg-info');
  $('body').toggleClass('bg-dark text-light');
  $('button').toggleClass('bg-info');
  $('a').toggleClass('text-light');
  $('.list-group-item').toggleClass('bg-secondary');
}
// Code below is regarding to the button game in index.html.
var a = 0;
var b = 0;
var c = 0;
function changeClass(num) { // buttons call this function giving it an argument of a fixed integer for each button.
  if(num==1 && c==1){
    document.getElementById("buttonA").className = "btn btn-dark disabled";
    a=1;
  }
  else if (num==2 && c==1 && a==1){
    document.getElementById("buttonB").className = "btn btn-dark disabled";
    b=1;
  }
  else if (num==3){
    document.getElementById("buttonC").className = "btn btn-dark disabled";
    c = 1;
  }
  else { // If this somehow is called out of bounds it resets the game.
    resetGame();
  }
}
function iWon() {
  if (a==1 && b==1 && c==1) {
    alert("You won! Congratulations! You wasted your time pushing buttons! Have a prize for your efforts!");
    document.getElementById("trophy").className = "d-inline-block"; // I did not know .show when I wrote this so I changed the class from d-none to d-inline block to use bootstrap styling. This code works pretty well so I'm keeping it as-is.
    document.getElementById("youwon").className = "thisisaclass";
    document.getElementById("resetbutton").className = "btn btn-warning";
  }
  else {
    alert("You lose! Try to get all three buttons disabled first.");
    resetGame();
  }
}
function resetGame(){ // sets "pressed" values to 0 and enables any disabled buttons.
  a = 0;
  b = 0;
  c = 0;
  document.getElementById("buttonA").className = "btn btn-success";
  document.getElementById("buttonB").className = "btn btn-danger";
  document.getElementById("buttonC").className = "btn btn-primary";
}
