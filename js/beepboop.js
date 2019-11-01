$(document).ready(function() {
  var beeps=['','Beep!','Boop!',"I'm sorry, Dave. I'm afraid I can't do that."];
  var num=105; // This is a pretend input. Make it an input later!!!!!
  var range = numRange(num);
  console.log(range);

  for (var i=0;i<num;i++){
    var buup = beeps[boopQuery(range[i])];
    if(buup) {
      range[i]=buup;
    }
  }

  console.log(range);
});
function numRange(num){
  var range=[];
  for (var i=0; i<num;i++){
    range.push(i);
  } // for
  return range;
} // function numRange
function boopQuery(num){
  num = num.toString(10);
  biip=0;
  for (var i=num.length; i>-1;i--){
    if (num[i] === '3') {
      biip=3;
    } else if ((biip < 2) && num[i] === '2') {
      biip=2;
    } else if ((biip < 1) && num[i] === '1') {
      biip=1;
    } else {
      biip=0;
    } // if-elif-elif-else
  } // for loop
  return biip;
} // function boopQuery
