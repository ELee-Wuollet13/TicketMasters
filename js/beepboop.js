$(document).ready(function() {
  $("form#boopform").submit(function(event) {

    var name = $("#name").val();
    var num = $("#num").val();

    var beeps=['',' Beep! ',' Boop! '," I'm sorry, "+name+", I'm afraid I can't do that. "];

    var range = numRange(num, reverse.checked);
    console.log(range);

    for (var i=0;i<num;i++){
      var buup = beeps[boopQuery(range[i])];
      if(buup) {
        range[i]=buup;
      }
    }
    // Replaces numbers with roman numerals
    for (var i=0; i<range.length;i++){
      if (((range[i])/(range[i])) === 1) {
        range[i] = toRoman(range[i].toString());
      }
    }

    var output = range.join(' ');
    $("#maxbooped").text(output);
    event.preventDefault();
  });

});
function numRange(num, reverse){
  var range=[];
  for (var i=0; i<=num;i++){
    range.push(i);
  } // for
  if (reverse){
    range = range.reverse();
  }
  return range;
} // function numRange
function boopQuery(num){
  num = num.toString(10);
  var biip=0;
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
}

function toRoman(num) {

  num = num.replace( /[^0-9]/g, '' );

  if (!(parseInt(num)/parseInt(num)===1)) {
    return [''];
  }
  var chars = [['','I','II','III','IV','V','VI','VII','VIII','IX'],['','X','XX','XXX','XL','L','LX','LXX','LXXX','XC'],['','C','CC','CCC','CD','D','DC','DCC','DCCC','CM'],['','M','MM','MMM','MMMM','MMMMM','MMMMMM','MMMMMM','MMMMMMM','MMMMMMMM','MMMMMMMMM']]
  var output=[];
  var j = 0;
  for (var i=((num.length)-1); i>-1;i--){
    output.push(chars[i][num[j]]);
    j+=1;
  }
  output = output.join('');
  return output;
}
