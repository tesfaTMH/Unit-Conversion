function temperature(){
    // formula to convert celcius to farenheit 
    // F = (C*9/5) + 32
    var c = document.getElementById("celsius").value;
    var f = (c*9/5) + 32;
    document.getElementById("fahrenheit").value = f;
}

function weight(){
    //formula to convert kgs to pounds
    // pounds = kg * 2.2
    var kg = document.getElementById("kilo").value;
    var p = kg * 2.2;
    document.getElementById("pounds").value = p;
}

function distance(){
    // formula to convert kms to miles 
    // miles = km * 0.62137
    var km = document.getElementById("km").value;
    var m = km * 0.62137;
    document.getElementById("miles").value = m;
}