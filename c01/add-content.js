var today = new Date ();
Var hourNow = today,getHours();
var greeting;

if (hourNow > 18) {
    greeting = 'Good evening!';
}
else if (hournow > 12) {
    greeting = 'Good afternoon!';
}
else if (hourNow > 0) {
    greeting = 'Good morning!';
}
else {
    greeting = 'Welcome!'
}

document.write('<h3>' + greeting + '</h3>');
