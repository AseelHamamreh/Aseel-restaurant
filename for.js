console.log("if you want to make changes contact me at this number 0324897394");

var Ans = prompt("Are you hungry?");

while (Ans != 'yes' && Ans != 'no') {
    Ans = prompt("Are you hungry?");
}

if (Ans == 'yes') {
    alert("Then you are in the righte place!");
    var Meal = prompt('How many meals you want to order?');
    var P = '<img src= "seafood.jpg" />';
    console.log(P);
    var Res = '';

    for (var i = 0; i < Meal; i++) {
        Res = Res + P;

    }
    console.log(Res);
    document.write(Res);



} else if (Ans == 'no') {
    alert("Then go and do something useful!!");
}


function offers (){
    document.write("CALL US NOW ");
    
} 
offers();
offers();
offers();

