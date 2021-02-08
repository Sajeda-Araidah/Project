'use strict'


let YourName = prompt("What is Your Name ?");
alert("Welcom  " + YourName + ' ' + "Lets play with us ");

let YourAge = prompt("Are You Age Between 20 and 30")
YourAge = YourAge.toLowerCase();;
if (YourAge == 'yes' || YourAge == 'y') {
    alert("Welcom To you");
} else if (YourAge == 'no' || YourAge == 'n') {
    alert("You age not Age Between 20 and 30");
}
console.log(YourAge);

let YourBackground = prompt("Are you Backgroud IT");
YourBackground = YourBackground.toLowerCase();
if (YourBackground == 'yes' || YourBackground == 'y') {
    alert("DEVELOPER");
} else if (YourBackground == 'no' || YourBackground == 'n') {
    alert("NOT DEVELOPER");
}
console.log(YourBackground);


let knowe = prompt("Did You hear about ASAC ?");
knowe = knowe.toLowerCase();
if (knowe == 'yes' || knowe == 'y') {
    alert("Amazing");
} else if (knowe == 'no' || knowe == 'n') {
    alert("NOT YET ");
}
console.log(knowe);

let coures = prompt("Do you learn new coures?");
coures = coures.toLowerCase();
if (coures == 'yes' || coures == 'y') {
    alert("Teel Me About this courses");
} else if (coures == 'no' || coures == 'n') {
    alert("You Sould That ");
}
console.log(coures);