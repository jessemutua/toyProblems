//Write a program that takes the speed of a car as input e.g 80. 
//If the speed is less than 70, it should print “Ok”.
// Otherwise, for every 5 km/s above the speed limit (70), it should give the driver one demerit point and print the total number of demerit points.

//declare speed.
let speed;
//a function to determine the demerits.
function getSpeed() {
    //declare points.
    let points;

    //get speed from inner html.
    speed = parseInt(Speed.txtnum.value)
        //aleerts ok if speed is <70.
    if (speed < 70) {
        alert("Ok")
            //check if speed is >70 and by how many points
    } else if (speed > 70) {
        //calculate total demerits
        points = (speed - 70) / 5;
        //round down the demerits 
        points = Math.floor(points)

        //condition to suspend licence 
        if (points > 12) {
            alert("Total demerits: " + points + "License suspended! ")
        } else {
            //alert of the demerits
            alert("Total demerits: " + points)
        }

    }



}