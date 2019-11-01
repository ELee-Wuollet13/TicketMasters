$(document).ready(function() {

  var beeps=['','Beep!','Boop!',"I'm sorry, Dave. I'm afraid I can't do that."];

  $("form#boopform").submit(function(event) {
    var num = parseInt($("input#num").val());
    var range = numRange(num);
    console.log(range);
    num = toString(num);
    for (var i=0;i<num;i++){
      var buup = beeps[boopQuery(num[i])];
      if(buup) {
        range[i]=buup;
      }
    }
    $("#maxbooped").text(num);
    event.preventDefault();
  })
});
function numRange(num){
  console.log(num);
  var range=[];
  for (var i=0; i<=num;i++){
    range.push(i);
  } // for
  console.log(range);
  return range;
} // function numRange
function boopQuery(num){
  console.log("Query ran!");
  num = num.toString(10);
  biip=0;
  for (var i=num.length; i>-1;i--){
    if (num[i] === '3') {
      biip=3;
    } else if ((biip < 2) && num[i] === '2') {
      biip=2;
    } else if ((biip < 1) && num[i] === '1') {
      biip=1;
    }
  } // for loop
  return biip;
} // function boopQuery
