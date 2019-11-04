$(document).ready(function() {
  var vacationList = new VacationList();
  $("form#Form").submit(function(event) {
    var country = $("#Country").val();
    var city = $("#City").val();
    var landmarks = $("#Landmarks").val().split(',');
    var season = $("#Season").val();
    var notes = $("#Notes").val();
    var vacation0 = new Vacation(country,city,landmarks,season,notes);

    vacationList.addVacation(vacation0);
    console.log(vacationList)
    $("#content").text('');
    for (i=0; i<vacationList.Vacations.length; i++) {
      var theVacation = vacationList.Vacations[i];
      $("#content").append("<li><ul><li>Country: "+theVacation.Country+"</li><li>City: "+theVacation.City+"</li><li>Landmarks: "+theVacation.Landmarks.join(' , ')+"</li><li>Season: "+theVacation.Season+"</li><li>Notes: "+theVacation.Notes+"</li></ul><br></li>");
    }
    event.preventDefault();
  })
})

function VacationList() {
  this.Vacations = [];
  this.currentId = 0;
}

VacationList.prototype.addVacation = function(Vacation) {
  Vacation.id = this.assignId();
  this.Vacations.push(Vacation);
}

VacationList.prototype.assignId = function() {
  this.currentId += 1;
  return this.currentId;
}

VacationList.prototype.findVacation = function(id) {
  for (var i=0; i< this.Vacations.length; i++) {
    if (this.Vacations[i]) {
      if (this.Vacations[i].id == id) {
        return this.Vacations[i];
      }
    }
  };
  return false;
}
VacationList.prototype.deleteContact = function(id) {
  for (var i=0; i< this.Vacations.length; i++) {
    if (this.Vacations[i]) {
      if (this.Vacations[i].id == id) {
        delete this.Vacations[i];
        return true;
      }
    }
  };
  return false;
}

// Business Logic for Vacation ---------
function Vacation(Country, City, Landmarks, Season, Notes) {
  this.Country = Country;
  this.City = City;
  this.Landmarks = Landmarks;
  this.Season = Season;
  this.Notes = Notes;
}
