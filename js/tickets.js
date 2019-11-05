function movieDate(week, day){
  this.week = week,
  this.day = day
}

movieDate.prototype.isWeekend = function(){
  if ((this.day === 0) || (this.day === 6)) {
    return true;
  } else {
    return false;
  }
}

function movieList(){
  this.movies = [],
  this.currentId = 0
}

movieList.prototype.addMovie = function(movie) {
  movie.id = this.assignId();
  this.movies.push(movie);
}

movieList.prototype.assignId = function(){
  this.currentId += 1;
  return this.currentId;
}

function movie (title, times, costMultiplier, minAge) {
  this.title = title,
  this.times = times,
  this.costMultiplier = costMultiplier,
  this.minAge = minAge
}

function ticketList () {
  this.tickets = [],
  this.currentId = 0
}

ticketList.prototype.addTicket = function(ticket){
  if (ticket.validate()){
    ticket.id = this.assignId();
    ticket.setPrice();
    this.tickets.push(ticket);
  } else {
    console.log("Your ticket for "+ticket.movie+" at "+ticket.time+" is invalid!");
  }
}

ticketList.prototype.assignId = function(){
  this.currentId += 1;
  return this.currentId;
}

function ticket(time, date, age, movie, price, id, valid){
  this.time = time,
  this.date = date,
  this.age = age,
  this.movie = movie,
  this.price = price,
  this.id = id,
  this.valid = valid
}
ticket.prototype.setPrice = function() {
  var price = 5 * this.movie.costMultiplier;
  console.log("Calculating cost for ticket "+this.id+".");
  if ((this.age <= 10) || (this.age >= 55)) {
    price = price * 0.5;
    console.log("Applied the Honored Citizen Discount");
  }
  if (this.date.isWeekend()){
    price = price * .75;
    console.log("Applied the Weekend discount");
  }
  if (this.time < 9) {
    price = price * 0.75;
    console.log("Applied the Early Morning Discount");
  }
  this.price = price;
  console.log("Total: "+this.price);
}

ticket.prototype.validate = function(){
  if ((this.age >= this.movie.minAge)) {
     if (this.movie.times.includes(this.time)) {
        this.valid = true;
        return true;
    }
  }
  this.valid = false;
  return false;
}

var date0 = new movieDate(3,0);
var movie0 = new movie("Harry Potter 9, The journey for the Wrath of Jaffar", [2,3,23], 2, 21);
var ticket0 = new ticket(23, date0, 25, movie0, 0, 0, true);
var ticket1 = new ticket(2, date0, 56, movie0, 0, 0 , true);
var movies = new movieList();
var ticketBook = new ticketList();
movies.addMovie(movie0);
ticketBook.addTicket(ticket0);
ticketBook.addTicket(ticket1);
