let myGrade = (81)

if(myGrade >= 90) {
    console.log("A!!!");
}
else if(myGrade < 89 && myGrade > 80) {
    console.log("B");
}
else if(myGrade < 79 && myGrade > 70) {
    console.log("C");
}
else if(myGrade < 69 && myGrade > 60) {
    console.log("D");
}
else if(myGrade <= 59) {
    console.log("B");
}   //The else statement should go down the order I want it to go down so it is orginized and easy to find 

switch ([myGrade]) {
    case myGrade >=90:
        console.log("A");
        break;
    case myGrade < 89 && myGrade > 80:
        console.log("B");
        break;
    case myGrade < 79 && myGrade > 70:
        console.log("C");
        break;
    case myGrade < 69 && myGrade > 60:
        console.log("D");
        break;
    case myGrade <= 59:
        console.log("F");
        break;
}

//I think that the switch method i the easiest for me to understand so I will be using it. Also it looks cleaner and more orinised to me
let loopingVariable = 0;
while (loopingVariable <= 100){
    console.log(loopingVariable);
    if (loopingVariable % 2 == 0){
        console.log(loopingVariable); 
    } else if (loopingVariable % 2 == 1){
        console.log("!");
    } else {
        console.log("Input number is 0 or invalid.");
    }
    loopingVariable += 1;
}
