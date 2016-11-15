var winningcount = 0;

var newUserChoice; //Final choice user will make.

var cardoor=0;



    //Initialize the three doors. Get rid or "door zero."
    var doorChoices = [0,1,2,3];
    doorChoices.shift();
    
    //The possible user choices. Uncomment one.
    //var firstUserChoice = 1;
    //var firstUserChoice = 2;
    //var firstUserChoice = 3;

    function Door1() {
        console.log("You picked door 1!");
    };

    function Door2() {
        console.log("You picked door 2!");
    };

    function Door3() {
        console.log("You picked door 3!");
    };
   
    /*
    console.log("The user chooses " + firstUserChoice);

    //Remove firstUserChoice from doorChoices
    doorChoices.splice( (firstUserChoice-1), 1 );

    console.log (doorChoices);
    
    var cardoor= Math.floor((Math.random() *3) + 1);
    console.log("The car is behind " + cardoor);


    //Newdoorpicker randomly selects door 2 or 3.
    var newDoorPicker = Math.floor((Math.random() *100) + 1);

    if (newDoorPicker % 2 == 0) {
        newUserChoice = 2;
    } else {
        newUserChoice = 3;
    };

    console.log("Final user choice is " + newUserChoice);
*/
    //User always changes his choice to either 2 or 3.
    if (cardoor == newUserChoice) {
        winningcount = (winningcount + 1);
        console.log(winningcount);
        console.log("You win the car!!!");
    }; 

    console.log(" ");


alert("You won the car " + winningcount + " times!")