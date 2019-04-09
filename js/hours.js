var d = new Date();
var n = d.getDay();
var now = d.getHours() + "." + d.getMinutes();
var weekdays = [
  ["Sunday", 9.30, 12.00, 15.30, 22.00],
  ["Monday", 8.30, 12.00, 15.30, 19.00],
  ["Tuesday", 8.30, 12.00, 15.30, 19.00],
  ["Wednesday", 8.30, 12.00, 15.30, 19.00],
  ["Thursday", 8.30, 12.00, 15.30, 19.00],
  ["Friday", 8.30, 11.30],
  ["Saturday"] // we are closed, sorry!
];
var day = weekdays[n];


if (now > day[1] && now < day[2] || now > day[3] && now < day[4]) {
  console.log("We're open right now!");
} else {
  console.log("Sorry, we're closed!");
}
