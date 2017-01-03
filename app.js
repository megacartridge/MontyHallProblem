var firstUserChoice; //First choice user will make.

var newUserChoice; //Final choice user will make.

var carDoor = Math.floor((Math.random() *3) + 1); //The number the car is behind.

var revealedDoor; //The door with the donkey that will be opened after the user makes their first choice.



    //Initialize the three doors. Get rid or "door zero."
    var doorChoices = [0,1,2,3];
    doorChoices.shift();
    

    function Door1() {
        firstUserChoice = 1;

        //carDoor is random number between 1 and 3.
        console.log("Cardoor is " + carDoor);
        console.log(doorChoices);
        doorChoices.splice( (carDoor-1), 1 );
        
        
        console.log(doorChoices);
        console.log("The user chooses " + firstUserChoice);

        //Remove firstUserChoice from doorChoices.
        doorChoices.splice( (firstUserChoice-1), 1 );


        //revealedDoor is an incorrect choice given after firstUserChoice.

        revealedDoor = doorChoices;

        console.log (doorChoices);

        console.log("If you want to keep your choice, click on 1. otherwise click on the other possible choice.");

        console.log("To help you out, I'll let you know the car is NOT behind " + (revealedDoor) + " because carDoor is " + carDoor);


        //Below onclick function should allow user to change their choice to Door 2.

    document.getElementById("One").onclick = function() {staysWithDoorOne()};
    document.getElementById("Two").onclick = function() {changesToDoorTwo()};
    document.getElementById("Three").onclick = function() {changesToDoorThree()};

    function staysWithDoorOne() {
        newUserChoice = 1;
    };

    function changesToDoorTwo() {
        newUserChoice = 2;
    };

    function changesToDoorThree() {
        newUserChoice = 3;
    };

        
   console.log("The car is behind " + carDoor);

        if (carDoor === newUserChoice) {
            console.log("CONGRATULATIONS! THE CAR IS YOURS!");
        } else {
            console.log("Congratulations. You just won a nice donkey because the car is behind " + carDoor);
        };

    };

    function Door2() {
        console.log("You picked door 2!");


    };

    function Door3() {
        console.log("You picked door 3!");
    };
   
