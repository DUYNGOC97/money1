function ChangeMoney(){
    let Amount=document.getElementById("amount").value;
    let FromC=document.getElementById("fromC").value;
    let ToC=document.getElementById("toC").value;
    let Result;

    if(FromC=="USD"&&ToC=="VND"){
        Result=Amount*23000;
        document.getElementById("Result").innerHTML="Result: "+Result;

    }
    else if(FromC=="VND"&&ToC=="USD"){
        Result=Amount/23000;
        document.getElementById("Result").innerHTML="Result: "+Result;

    }
    else if(FromC=="VND" && ToC=="VND"){
        Result=Amount;
        document.getElementById("Result").innerHTML=="Result: "+Result;

    } else{
        Result=Amount;
        document.getElementById("Result").innerHTML=="Result: "+Result;

    }
    
}