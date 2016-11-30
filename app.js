var firstUserChoice; //First choice user will make.

var newUserChoice; //Final choice user will make.

var carDoor;//Math.floor((Math.random() *3) + 1); //The number the car is behind.

var revealedDoor; //The door with the donkey that will be opened after the user makes their first choice.



    //Initialize the three doors. Get rid or "door zero."
    var doorChoices = [0,1,2,3];
    doorChoices.shift();
    

    function Door1() {
        firstUserChoice = 1;

        //carDoor is random number between 1 and 3.
        carDoor = Math.floor((Math.random() *3) + 1);
        alert(carDoor);
        console.log("The user chooses " + firstUserChoice);

        //Remove firstUserChoice from doorChoices
        //Maybe don't need to do this.
        doorChoices.splice( (firstUserChoice-1), 1 );


        //revealedDoor is an incorrect choice given after firstUserChoice.
        //Can this be done with a switch statement???????????
        if (carDoor === 1) {
            revealedDoor = doorChoices[Math.floor(Math.random()*doorChoices.length)];
        } else {
            revealedDoor = "Didn't get it!"
        };

        console.log (doorChoices);

        console.log("To help you out, I'll let you know the car is NOT behind " + (revealedDoor));

        console.log("If you want to keep your choice, click on 1. otherwise click on the other possible choice.");

        //Add onclick event here.

        console.log("The car is behind " + carDoor);

        if (carDoor === newUserChoice) {
            console.log("CONGRATULATIONS! THE CAR IS YOURS!");
        } else {
            console.log("Congratulations. You just won a nice donkey");
        };


    };

    function Door2() {
        firstUserChoice = 2;
        carDoor = Math.floor((Math.random() *3) + 1);
        alert(carDoor);
        console.log("The user chooses " + firstUserChoice);

        //Remove firstUserChoice from doorChoices
        doorChoices.splice( (firstUserChoice-1), 1 );

        if (carDoor = 2) {
            revealedDoor = doorChoices[Math.floor(Math.random()*doorChoices.length)];
        } else {
            revealedDoor = "Didn't get it!"
        };

        console.log (doorChoices);

        console.log("To help you out, I'll let you know the car is NOT behind " + (revealedDoor));

        console.log("The car is behind " + carDoor);


    };

    function Door3() {
        console.log("You picked door 3!");
    };
   
    /*
    console.log("The user chooses " + firstUserChoice);

    //Remove firstUserChoice from doorChoices
    doorChoices.splice( (firstUserChoice-1), 1 );

    console.log (doorChoices);
    
    var carDoor= Math.floor((Math.random() *3) + 1);
    console.log("The car is behind " + carDoor);


    //Newdoorpicker randomly selects door 2 or 3.
    var newDoorPicker = Math.floor((Math.random() *100) + 1);

    if (newDoorPicker % 2 == 0) {
        newUserChoice = 2;
    } else {
        newUserChoice = 3;
    };

    console.log("Final user choice is " + newUserChoice);
*/