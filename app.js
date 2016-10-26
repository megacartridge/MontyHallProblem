//In the below code, user choice will always be door 1 and the user will stick with their choice.

/*var winningcount = 0;

for (i=0; i<10; i++) {
    var cardoor = Math.floor((Math.random() * 3) + 1);
    console.log(cardoor);
    if (cardoor === 1) {
        winningcount = (winningcount + 1);
    };
};

alert(winningcount); */

var winningcount = 0;

var doorChoices = [1,2,3,4];

var newUserChoice;

for (i=0; i<10000; i++) {
    var firstUserChoicePicker = Math.floor((Math.random() * 3) + 1);
    var firstUserChoice = doorChoices.indexOf((firstUserChoicePicker)+1);
    console.log(firstUserChoice);
    /*
    var cardoor= Math.floor((Math.random() *3) + 1);
    console.log(cardoor);

    //Newdoorpicker randomly selects door 2 or 3.
    var newDoorPicker = Math.floor((Math.random() *100) + 1);

    if (newDoorPicker % 2 == 0) {
        newUserChoice = 2;
    } else {
        newUserChoice = 3;
    };

    console.log("Final user choice is " + newUserChoice);

    if (cardoor == newUserChoice) {
        winningcount = (winningcount + 1);
        console.log("You win the car!!!");
    }; */
};

alert("You won the car " + winningcount + " times!")