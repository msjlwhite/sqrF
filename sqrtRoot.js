function findSqrtRoot () {

   // option #1
   /* var theNumber = Number(prompt("Pick a number"));
    if (!Number.isNaN(theNumber)) {
      console.log("Your number is the square root of " +
                  theNumber * theNumber);
    } else {
      console.log("Hey. Why didn't you give me a number?");
    }*/


    //option #2
    var theNumber = Number(prompt("Pick a number"));
    var sqrRoot = theNumber * theNumber;
    //sqrRoot = document.getElementById("demo").innerHTML;

    document.getElementById("demo").innerHTML = sqrRoot;

    if(theNumber != 0 || null) 
    {
      console.log("Your number is the square root of " +
                  theNumber * theNumber);
    } else {
      console.log("Hey. Why didn't you give me a number?");
    }    

 


    //option #3
    //window.prompt will display message in a pop box
    /* var theNumber = Number(window.prompt("Pick a number"));
    if (!Number.isNaN(theNumber)) {
        window.alert("Your number is the square root of " +
                  theNumber * theNumber);
    } else {
        window.alert("Hey. Why didn't you give me a number?");
    }*/

}

